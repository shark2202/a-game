/* =========================================================================
 * core.js —— 《引信合成 Fuse Merge》游戏核心（规则 / 状态机 / 数值 / 埋点）
 *
 * 纯 JS，不依赖 DOM，可在 node 下直接 require 运行（机器自测用）。
 *   浏览器: <script src="core.js"></script>  → window.FuseCore / window.__metrics
 *   Node:    const Core = require('./core.js')
 *
 * 玩法一句话：滑动全场合并相同数字；每步掉一个新块，它带着点燃的短引信
 *   （不受续命波保护，烧完炸成灰烬堵路），只有合并进金字塔才安全续满；
 *   合并会发出续命波全场止燃（落点十字额外回复，一步双合并=连锁止燃全场 +1）；
 *   合并落点旁的灰烬会被震碎。在总引信（全局步数）烧完前合成目标数字即胜。
 *
 * 难度曲线参数全部集中在 DEFAULTS（fuseMax / stoneHP / targetLevel 等）。
 *
 * 接口补充（v1.1，机器自测支持）：
 *   createGame(params, opts)  opts.rng —— 注入随机数函数（默认 Math.random，自测可传种子随机）
 *   Core.setClock(fn)         —— 注入时钟（默认 Date.now；test.js 注入虚拟时钟
 *                                以便在 node 下测出真实的“单局时长”分布）
 *   move(dir) / applyMove 的 dir —— 'up'/'right'/'down'/'left' 或 0/1/2/3 均可
 * ========================================================================= */
(function (root, factory) {
  var api = factory(root);
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.FuseCore = api;
})(typeof window !== 'undefined' ? window : globalThis, function (root) {
  'use strict';

  /* ---------------- 默认参数（难度曲线在此调节） ---------------- */
  var DEFAULTS = {
    cols: 5,
    rows: 5,
    fuseMax: 14,               // 引信长度：每步 -1，合并续满。调小=更难（烧得快）
    spawnFuse: 7,              // 新块短引信：不受续命波保护，烧完即炸成灰烬。调小=更难
    stoneHP: 2,                // 灰烬耐久：相邻合并每次震碎 1 点。调小=更易清障
    targetLevel: 8,            // 合成到该数字获胜。调小=单局更快
    maxSteps: 180,             // 总引信：全局步数预算，烧完判负。调小=更难
    spawnLevel2Chance: 0.15,   // 每步新块出生为 2 的概率（否则为 1）
    startTiles: 2              // 开局出生块数
  };

  /* ================= 埋点（session 级，跨局累计，内存计数） =================
   * 事件: session_start / session_end / game_start / game_end /
   *        move / merge / stone_formed / stone_cleared / retry
   * 导出: root.__metrics（浏览器=window.__metrics，node=globalThis.__metrics）
   *       与 Core.getMetrics() 读同一份内存数据（同一通道）。
   * ======================================================================== */
  var metrics = {
    sessionStartTs: null,
    sessionEndTs: null,
    counts: {
      session_start: 0, session_end: 0,
      game_start: 0, game_end: 0,
      move: 0, merge: 0,
      stone_formed: 0, stone_cleared: 0,
      retry: 0
    },
    games: [] // 每局结束时追加：{index,result,moves,score,durationMs,maxLevel,merges,burnouts,stoneClears,endTs}
  };
  var sessionBegun = false;
  var lastGameResult = null; // 上一局结束结果 'win'|'lose'；再来一局时据此计“失败重试”
  var clock = Date.now;      // 时钟可注入（test.js 虚拟时间），默认真实时间

  function setClock(fn) { if (typeof fn === 'function') clock = fn; }

  function fire(name) { metrics.counts[name] = (metrics.counts[name] || 0) + 1; }

  function ensureSession() {
    if (!sessionBegun) {
      sessionBegun = true;
      metrics.sessionStartTs = clock();
      fire('session_start');
    }
  }

  function endSession() {
    if (metrics.sessionEndTs === null) {
      metrics.sessionEndTs = clock();
      fire('session_end');
    }
  }

  function getMetrics() { return JSON.parse(JSON.stringify(metrics)); }

  root.__metrics = { getMetrics: getMetrics, endSession: endSession };

  /* ========================= 纯引擎（无副作用依赖） ========================= */

  var uid = 1;
  var DIRS = ['up', 'right', 'down', 'left'];

  /* 方向归一化：'up'/'right'/'down'/'left' 或 0/1/2/3 → 统一为 0..3，非法返回 -1 */
  function normDir(dir) {
    if (typeof dir === 'number') { var n = dir | 0; return (n >= 0 && n <= 3) ? n : -1; }
    var s = String(dir).toLowerCase();
    var idx = DIRS.indexOf(s);
    return idx;
  }

  function neighbors(cell, cols, rows) {
    var out = [], c = cell % cols, r = (cell - c) / cols;
    if (r > 0) out.push(cell - cols);
    if (r < rows - 1) out.push(cell + cols);
    if (c > 0) out.push(cell - 1);
    if (c < cols - 1) out.push(cell + 1);
    return out;
  }

  /* 返回按移动方向排列的“行/列线索数组”（数组首 = 移动目标边缘） */
  function buildLines(cols, rows, dir) {
    var lines = [], i, line;
    if (dir === 1 || dir === 3) { // 左右 → 每行
      for (i = 0; i < rows; i++) {
        line = [];
        for (var c = 0; c < cols; c++) line.push(i * cols + c);
        if (dir === 1) line.reverse();
        lines.push(line);
      }
    } else { // 上下 → 每列
      for (i = 0; i < cols; i++) {
        line = [];
        for (var r = 0; r < rows; r++) line.push(r * cols + i);
        if (dir === 2) line.reverse();
        lines.push(line);
      }
    }
    return lines;
  }

  /* 核心：压缩+合并。直接改写传入的 cells 数组（会原地变更）。
   * 灰烬(stone)不动、不可穿、不可合并；每条线索被灰烬切成若干段，段内独立压缩。
   * out 收集: movements[{from,to}] / merges[{cell,sources,level}]
   * moveNo = 当前步编号，标记到本步新合并块上（applyMove 据此给它续满引信）。
   * 返回: 本方向是否产生任何变化（移动或合并）。 */
  function processCells(cells, cols, rows, dir, out, moveNo) {
    var changed = false;
    var lines = buildLines(cols, rows, dir);
    for (var li = 0; li < lines.length; li++) {
      var line = lines[li];
      var i = 0, n = line.length;
      while (i < n) {
        var head = cells[line[i]];
        if (head && head.kind === 'stone') { i++; continue; } // 灰烬原地不动
        // 收集一段 [i, j)：不含灰烬的连续格
        var segTiles = []; // {cell, tile}
        var j = i;
        while (j < n) {
          var cc = cells[line[j]];
          if (cc && cc.kind === 'stone') break;
          if (cc) segTiles.push({ cell: line[j], tile: cc });
          j++;
        }
        // 段内压缩 + 合并（每块每步至多合并一次）
        var placed = []; // {tile, level, merged, sources}
        for (var t = 0; t < segTiles.length; t++) {
          var cur = segTiles[t];
          var last = placed[placed.length - 1];
          if (last && !last.merged && last.level === cur.tile.level) {
            last.merged = true;
            last.sources.push(cur.cell);
            last.level = cur.tile.level + 1;
          } else {
            placed.push({ tile: cur.tile, level: cur.tile.level, merged: false, sources: [cur.cell] });
          }
        }
        // 写回：先清空段内所有格，再依序落位
        for (var k = i; k < j; k++) cells[line[k]] = null;
        for (var p = 0; p < placed.length; p++) {
          var target = line[i + p];
          var pl = placed[p];
          if (pl.merged) {
            cells[target] = { kind: 'tile', level: pl.level, fuse: -1, id: uid++, mergedAt: moveNo };
            out.merges.push({ cell: target, sources: pl.sources.slice(), level: pl.level });
            changed = true;
          } else {
            cells[target] = pl.tile; // 保留原对象（引信随之带走）
            if (pl.sources[0] !== target) {
              out.movements.push({ from: pl.sources[0], to: target });
              changed = true;
            }
          }
        }
        i = j;
      }
    }
    return changed;
  }

  function hasValidMoveCells(cells, cols, rows) {
    var dummy = { movements: [], merges: [] };
    for (var d = 0; d < 4; d++) {
      var copy = cells.slice();
      if (processCells(copy, cols, rows, d, dummy, -1)) return true;
    }
    return false;
  }

  function spawnTile(state, rng) {
    var empties = [];
    for (var i = 0; i < state.cells.length; i++) if (!state.cells[i]) empties.push(i);
    if (!empties.length) return null;
    var cell = empties[Math.floor(rng() * empties.length)];
    var level = rng() < state.spawnLevel2Chance ? 2 : 1;
    state.cells[cell] = { kind: 'tile', level: level, fuse: state.spawnFuse, id: uid++, fresh: true };
    return { cell: cell, level: level };
  }

  function initState(params, rng) {
    var p = {};
    var key;
    for (key in DEFAULTS) p[key] = DEFAULTS[key];
    if (params) for (key in params) if (params[key] !== undefined) p[key] = params[key];
    var state = {
      cols: p.cols, rows: p.rows,
      fuseMax: p.fuseMax, spawnFuse: p.spawnFuse, stoneHP: p.stoneHP,
      targetLevel: p.targetLevel, maxSteps: p.maxSteps,
      spawnLevel2Chance: p.spawnLevel2Chance,
      cells: new Array(p.cols * p.rows).fill(null),
      score: 0, moves: 0, status: 'playing',
      merges: 0, burnouts: 0, stoneClears: 0
    };
    for (var i = 0; i < p.startTiles; i++) spawnTile(state, rng);
    return state;
  }

  function cloneState(state) {
    var cells = new Array(state.cells.length);
    for (var i = 0; i < state.cells.length; i++) {
      var c = state.cells[i];
      cells[i] = c ? { kind: c.kind, level: c.level, fuse: c.fuse, hp: c.hp, id: c.id, mergedAt: c.mergedAt, fresh: !!c.fresh } : null;
    }
    return {
      cols: state.cols, rows: state.rows,
      fuseMax: state.fuseMax, spawnFuse: state.spawnFuse, stoneHP: state.stoneHP,
      targetLevel: state.targetLevel, maxSteps: state.maxSteps,
      spawnLevel2Chance: state.spawnLevel2Chance,
      cells: cells, score: state.score, moves: state.moves, status: state.status,
      merges: state.merges, burnouts: state.burnouts, stoneClears: state.stoneClears
    };
  }

  function maxTileLevel(state) {
    var m = 0;
    for (var i = 0; i < state.cells.length; i++) {
      var c = state.cells[i];
      if (c && c.kind === 'tile' && c.level > m) m = c.level;
    }
    return m;
  }

  /* 走一步（会原地变更 state）。返回本步完整结果（渲染动画 / 测试断言均用它）。 */
  function applyMove(state, dir, rng) {
    var out = {
      dir: dir, valid: false, moved: false,
      movements: [], merges: [],
      stonesDamaged: [], stonesCleared: [], burnouts: [],
      spawned: null, wave: 0, scoreGained: 0
    };
    if (state.status !== 'playing') { out.reason = 'not-playing'; return out; }
    dir = normDir(dir);
    if (dir < 0) { out.reason = 'bad-dir'; return out; }
    var cells = state.cells;
    var moveNo = state.moves;

    // 1) 压缩 + 合并（灰烬分段）
    var changed = processCells(cells, state.cols, state.rows, dir, out, moveNo);
    if (!changed) { out.reason = 'no-change'; return out; }
    out.valid = true; out.moved = true;

    // 2) 合并震荡：对“合并落点”正交相邻的既有灰烬造成 1 点震碎伤害
    for (var m = 0; m < out.merges.length; m++) {
      var mg = out.merges[m];
      state.merges++;
      out.scoreGained += Math.pow(2, mg.level);
      var nbs = neighbors(mg.cell, state.cols, state.rows);
      for (var q = 0; q < nbs.length; q++) {
        var s = cells[nbs[q]];
        if (s && s.kind === 'stone') {
          s.hp--;
          if (s.hp <= 0) {
            cells[nbs[q]] = null;
            state.stoneClears++;
            out.stonesCleared.push({ cell: nbs[q] });
            out.scoreGained += 20;
          } else {
            out.stonesDamaged.push({ cell: nbs[q], hp: s.hp });
          }
        }
      }
    }

    // 3) 引燃结算（续命波 / 十字止燃 / 连锁止燃 / 新块短引信）：
    //    每走一步，所有未合并块引信 -1（燃烧）；
    //    本步有 ≥1 次合并 → 续命波：已成型块全场止燃（该步净 0）；
    //    合并落点所在行/列（十字）上的成型块额外 +1 回复；
    //    本步 ≥2 次合并 → 连锁止燃：十字外的成型块也 +1（全场净 +1）；
    //    本步刚合并产出的新块引信续满（封顶 fuseMax，脱离“新块”状态）；
    //    新掉落的块（fresh）不受任何波保护——每步固定 -1，烧完即炸，
    //    只有把它合并进金字塔才安全（这是持续的运营压力来源）。
    var mergeCount = out.merges.length;
    var renewedRows = {}, renewedCols = {};
    for (var m2 = 0; m2 < mergeCount; m2++) {
      var mc = out.merges[m2].cell;
      renewedRows[Math.floor(mc / state.cols)] = true;
      renewedCols[mc % state.cols] = true;
    }
    out.renewedRows = Object.keys(renewedRows).map(Number);
    out.renewedCols = Object.keys(renewedCols).map(Number);
    for (var i = 0; i < cells.length; i++) {
      var t = cells[i];
      if (t && t.kind === 'tile') {
        if (t.mergedAt === moveNo) { t.fuse = state.fuseMax; t.fresh = false; continue; }
        if (t.fresh) { t.fuse = t.fuse - 1; continue; }
        var rr = Math.floor(i / state.cols), cc = i % state.cols;
        var delta = -1;                       // 基础燃烧
        if (mergeCount >= 1) delta += 1;      // 续命波：全场止燃
        if (mergeCount >= 2 || renewedRows[rr] || renewedCols[cc]) delta += 1; // 十字回复 / 连锁止燃
        t.fuse = Math.min(state.fuseMax, t.fuse + delta);
      }
    }

    // 4) 燃尽 → 灰烬（fuse < 0）
    for (var b = 0; b < cells.length; b++) {
      var tt = cells[b];
      if (tt && tt.kind === 'tile' && tt.fuse < 0) {
        cells[b] = { kind: 'stone', hp: state.stoneHP };
        state.burnouts++;
        out.burnouts.push({ cell: b, level: tt.level });
      }
    }

    state.score += out.scoreGained;

    // 5) 胜利判定（先于新块生成）
    if (maxTileLevel(state) >= state.targetLevel) state.status = 'won';

    // 6) 生成新块
    if (state.status === 'playing') {
      out.spawned = spawnTile(state, rng);
    }

    state.moves++;

    // 7) 失败判定：无法再走（含被灰烬堵死）／总引信烧完
    if (state.status === 'playing' && !hasValidMoveCells(cells, state.cols, state.rows)) {
      state.status = 'lost';
      out.reason = 'stuck';
    } else if (state.status === 'playing' && state.moves >= state.maxSteps) {
      state.status = 'lost';
      out.reason = 'timeup';
    }

    return out;
  }

  /* ==================== 会话包装层（带埋点的对局对象） ==================== */

  function createGame(params, opts) {
    opts = opts || {};
    var rng = typeof opts.rng === 'function' ? opts.rng : Math.random;
    ensureSession();
    var game = {};
    var state = initState(params, rng);
    game.params = {};
    var key;
    for (key in DEFAULTS) game.params[key] = DEFAULTS[key];
    if (params) for (key in params) if (params[key] !== undefined) game.params[key] = params[key];

    game.index = metrics.counts.game_start + 1;
    if (lastGameResult === 'lose') fire('retry'); // 失败重试：上一局输了又开一局
    fire('game_start');
    var startTs = clock();

    game.getStatus = function () { return state.status; };
    game.get = function () { return cloneState(state); };
    game.getScore = function () { return state.score; };
    game.getMoves = function () { return state.moves; };

    game.move = function (dir) {
      if (state.status !== 'playing') return { valid: false, reason: 'not-playing' };
      var r = applyMove(state, dir, rng);
      if (r.valid) {
        fire('move');
        for (var i = 0; i < r.merges.length; i++) fire('merge');
        for (var j = 0; j < r.burnouts.length; j++) fire('stone_formed');
        for (var k = 0; k < r.stonesCleared.length; k++) fire('stone_cleared');
        if (state.status !== 'playing') {
          var rec = {
            index: game.index,
            result: state.status === 'won' ? 'win' : 'lose',
            reason: state.status === 'won' ? 'win' : (r.reason === 'timeup' ? 'timeup' : 'stuck'),
            moves: state.moves,
            score: state.score,
            durationMs: clock() - startTs,
            maxLevel: maxTileLevel(state),
            merges: state.merges,
            burnouts: state.burnouts,
            stoneClears: state.stoneClears,
            endTs: clock()
          };
          metrics.games.push(rec);
          lastGameResult = rec.result;
          fire('game_end');
        }
      }
      return r;
    };

    return game;
  }

  /* ------------------------------ 导出 ------------------------------ */
  return {
    DEFAULTS: DEFAULTS,
    createGame: createGame,
    getMetrics: getMetrics,
    endSession: endSession,
    setClock: setClock,
    DIRS: DIRS,
    engine: {
      initState: initState,
      applyMove: applyMove,
      clone: cloneState,
      processCells: processCells,
      hasValidMoveCells: hasValidMoveCells,
      maxTileLevel: maxTileLevel
    }
  };
});
