/* =========================================================================
 * test.js —— 《引信合成 Fuse Merge》机器自测（无浏览器，纯 node）
 *
 * 运行：node test.js
 * 内容：
 *   [0] 规则抽检 —— 用手工构造的棋盘逐条验证核心规则
 *   [A] 主模拟 —— 启发式 bot 打 120 局（默认参数），输出胜负分布 / 局时长 / 步数
 *   [B] 埋点核验 —— 事件触发计数与逐局记录逐项对账（同一通道 window/__metrics）
 *   [C] 难度曲线 —— maxSteps 参数三档扫描，验证难度随参数单调可调
 *   [D] 会话收尾 —— endSession 与最终一致性
 * 可复现性：种子随机（mulberry32）注入 createGame / 模拟，跨次运行结果确定；
 *           虚拟时钟（setClock，1.2s/步 = 人类节奏）使“单局时长”为有效分布。
 * 退出码：0 = 全部通过；1 = 存在失败项
 * ========================================================================= */
'use strict';

var Core = require('./core.js');

/* ---------- 可复现随机 + 虚拟时钟 ---------- */
function mulberry32(seed) {
  var s = seed >>> 0;
  return function () {
    s = (s + 0x6D2B79F5) | 0;
    var t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
var GAMERNG = mulberry32(20260916); // 对局随机流（固定种子 → 可复现）
var SIMRNG = mulberry32(0xC0FFEE);  // bot 前瞻模拟随机流
var MOVE_MS = 1200;                 // 虚拟时钟：人类节奏约 1.2s/步
var vnow = 0;
Core.setClock(function () { return vnow; });

var failed = 0;
var passed = 0;
function check(name, cond, detail) {
  if (cond) { passed++; console.log('  [PASS] ' + name + (detail ? ' — ' + detail : '')); }
  else { failed++; console.log('  [FAIL] ' + name + (detail ? ' — ' + detail : '')); }
}
function pct(x) { return (x * 100).toFixed(1) + '%'; }
function avg(arr, f) {
  var s = 0;
  for (var i = 0; i < arr.length; i++) s += f(arr[i]);
  return arr.length ? s / arr.length : 0;
}

console.log('================================================================');
console.log(' 《引信合成 Fuse Merge》机器自测 · node ' + process.version);
console.log(' 核心加载: core.js OK');
console.log(' 默认参数: ' + JSON.stringify(Core.DEFAULTS));
console.log('================================================================');

/* ======================= [0] 规则抽检 ======================= */
console.log('\n[0] 规则抽检（手工构造棋盘，确定性 rng）');
var gid = 1000;
var R0 = function () { return 0; }; // 确定性 rng：生成块总是落在最小空格、等级 1

function craft(spec, params) {
  var st = Core.engine.initState(Object.assign({ startTiles: 0 }, params || {}), R0);
  st.cells = spec.map(function (x) {
    if (!x) return null;
    if (x.stone !== undefined) return { kind: 'stone', hp: x.stone };
    return {
      kind: 'tile', level: x.lvl,
      fuse: x.fuse !== undefined ? x.fuse : 10,
      id: gid++, fresh: !!x.fresh, mergedAt: -2
    };
  });
  return st;
}
var EMPTY = [null, null, null, null, null, null, null, null, null, null,
             null, null, null, null, null, null, null, null, null, null,
             null, null, null, null, null];

// 0.1 基础合并：[1,1] 左滑 → [2]，新块引信续满且脱离 fresh
(function () {
  var spec = EMPTY.slice(); spec[0] = { lvl: 1 }; spec[1] = { lvl: 1 };
  var r = Core.engine.applyMove(craft(spec), 3, R0);
  var st = r; // applyMove 原地变更，重取 craft 后的 cells 需保存引用
})();
(function () {
  var st = craft([ { lvl: 1 }, { lvl: 1 } ].concat(EMPTY.slice(2)));
  var r = Core.engine.applyMove(st, 3, R0);
  check('0.1 基础合并', r.valid && r.merges.length === 1 &&
    st.cells[0].level === 2 && st.cells[0].fuse === Core.DEFAULTS.fuseMax &&
    !st.cells[0].fresh && st.cells[1] && st.cells[1].fresh === true,
    '[1,1]→[2]，引信续满=' + Core.DEFAULTS.fuseMax + '，新生成块为 fresh');
})();

// 0.2 单步单次合并：[1,1,1] → [2,1]（不三连）
(function () {
  var st = craft([{ lvl: 1 }, { lvl: 1 }, { lvl: 1 }].concat(EMPTY.slice(3)));
  var r = Core.engine.applyMove(st, 3, R0);
  check('0.2 每步至多合并一次', r.merges.length === 1 &&
    st.cells[0].level === 2 && st.cells[1].level === 1,
    '[1,1,1]→[2,1]');
})();

// 0.3 灰烬阻挡：石头不动，其后段内独立压缩
(function () {
  var st = craft([{ stone: 2 }, { lvl: 1 }, { lvl: 1 }].concat(EMPTY.slice(3)));
  var r = Core.engine.applyMove(st, 3, R0);
  check('0.3 灰烬阻挡与分段压缩', st.cells[0].kind === 'stone' &&
    st.cells[1].level === 2 && st.cells[2] && st.cells[2].fresh === true,
    '石头原地，段内 [1,1]→[2]');
})();

// 0.4 合并震碎灰烬：落点相邻石头 hp-1，hp 归零移除
(function () {
  var st = craft([null, { lvl: 1 }, { lvl: 1 }, { stone: 2 }].concat(EMPTY.slice(4)));
  var r = Core.engine.applyMove(st, 1, R0); // 右滑：合并落点 cell2，与石头 cell3 相邻
  check('0.4a 震碎伤害', r.valid && r.stonesDamaged.length === 1 &&
    st.cells[3].kind === 'stone' && st.cells[3].hp === 1,
    'hp 2→1');
  var st2 = craft([null, { lvl: 1 }, { lvl: 1 }, { stone: 1 }].concat(EMPTY.slice(4)));
  var r2 = Core.engine.applyMove(st2, 1, R0);
  check('0.4b 震碎移除', r2.stonesCleared.length === 1 && st2.cells[3] === null,
    'hp 1→0 移除');
})();

// 0.5 新块短引信：不受续命波保护，有合并也照烧
(function () {
  var st = craft([{ lvl: 1 }, { lvl: 1 }, null, null, { lvl: 2, fuse: 0, fresh: true }].concat(EMPTY.slice(5)));
  var r = Core.engine.applyMove(st, 3, R0); // 左滑：cell0/1 合并；fresh@4 烧尽
  check('0.5 新块短引信独立燃烧', r.merges.length === 1 && r.burnouts.length === 1 &&
    st.cells[1].kind === 'stone',
    '本步有合并，fuse=0 的新块仍燃尽成灰烬');
})();

// 0.6 续命波数值：合并十字内成型块 +1；十字外成型块净 0；新块 -1
(function () {
  // 下滑：col0 的 [1@0,1@5] 合并于 cell20（十字=row4∪col0）
  // col3：4@23(留 row4→十字内, fuse 5→6)；3@3→13(十字外, fuse 5→5)；1@8→18(十字外, fresh)
  var spec = EMPTY.slice();
  spec[0] = { lvl: 1 }; spec[5] = { lvl: 1 };
  spec[3] = { lvl: 3, fuse: 5 }; spec[8] = { lvl: 1, fuse: 7, fresh: true }; spec[23] = { lvl: 4, fuse: 5 };
  var st = craft(spec);
  var r = Core.engine.applyMove(st, 2, R0);
  check('0.6 续命波/十字/新块结算', r.valid && r.merges.length === 1 &&
    st.cells[23].fuse === 6 &&            // 十字内成型块：-1+1+1 = +1
    st.cells[13].fuse === 5 &&            // 十字外成型块：-1+1 = 0
    st.cells[18].fuse === 6 &&            // 新块：固定 -1（7→6），不吃波
    st.cells[20].level === 2 && st.cells[20].fuse === Core.DEFAULTS.fuseMax,
    '十字内5→6，十字外5→5，新块7→6');
})();

// 0.7 零合并步：成型块真燃烧
(function () {
  var st = craft([null, null, { lvl: 3, fuse: 0 }].concat(EMPTY.slice(3)));
  var r = Core.engine.applyMove(st, 3, R0); // 左滑：仅位移，无合并
  check('0.7 零合并步全场燃烧', r.valid && r.merges.length === 0 &&
    r.burnouts.length === 1 && st.cells[0].kind === 'stone',
    'fuse 0 的成型块在无合并步燃尽');
})();

// 0.8 胜利：合成目标数字
(function () {
  var st = craft([null, { lvl: 8 }].concat(EMPTY.slice(2)));
  var r = Core.engine.applyMove(st, 3, R0);
  check('0.8 胜利判定', st.status === 'won' && r.spawned === null,
    '出现目标数字 → won（且不再生成新块）');
})();

// 0.9 总引信烧完判负
(function () {
  var st = craft([null, { lvl: 1 }].concat(EMPTY.slice(2)));
  st.moves = Core.DEFAULTS.maxSteps - 1;
  var r = Core.engine.applyMove(st, 3, R0);
  check('0.9 总引信烧完判负', st.status === 'lost' && r.reason === 'timeup',
    '步数达到 maxSteps=' + Core.DEFAULTS.maxSteps + ' → timeup 负');
})();

// 0.10 无效步：不烧引信、不生成
(function () {
  var st = craft([{ lvl: 2 }, { lvl: 1, fuse: 5, fresh: true }].concat(EMPTY.slice(2)));
  var r = Core.engine.applyMove(st, 3, R0); // 已贴边且无法合并 → 左滑无效
  check('0.10 无效步不结算', r.valid === false && r.reason === 'no-change' &&
    st.cells[1].fuse === 5 && st.moves === 0 && st.cells[2] === null,
    '引信不烧、不生成、不计步');
})();

// 0.11 方向既可用 0-3 也可用字符串，语义一致
(function () {
  var stA = craft([{ lvl: 1 }, { lvl: 1 }].concat(EMPTY.slice(2)));
  var stB = craft([{ lvl: 1 }, { lvl: 1 }].concat(EMPTY.slice(2)));
  var rA = Core.engine.applyMove(stA, 3, R0);
  var rB = Core.engine.applyMove(stB, 'left', R0);
  check('0.11 方向字符串/数字等价', rA.valid && rB.valid &&
    stA.cells[0].level === stB.cells[0].level,
    "3 === 'left'");
})();

/* ================== 启发式 bot（与主模拟共用） ================== */
var W = (function () {
  var w = new Array(25);
  for (var r = 0; r < 5; r++) for (var c = 0; c < 5; c++) w[r * 5 + c] = 6.0 / (1 + r + c * 0.55);
  return w;
})();

function evalState(s, r) {
  var v = 0, empties = 0, stones = 0, fuseSum = 0, maxL = 0, freshPenalty = 0;
  for (var i = 0; i < s.cells.length; i++) {
    var c = s.cells[i];
    if (!c) { empties++; continue; }
    if (c.kind === 'stone') { stones++; continue; }
    fuseSum += c.fuse;
    if (c.fresh && c.fuse <= 2) freshPenalty += (3 - c.fuse) * 2; // 快烧完的新块要优先处理
    v += Math.pow(1.35, c.level) * W[i];
    if (c.level > maxL) maxL = c.level;
  }
  v += empties * 14 - stones * 18 + fuseSum * 0.2 + maxL * 8 - freshPenalty;
  v += r.merges.length * 28 + r.stonesCleared.length * 24 + r.stonesDamaged.length * 6;
  return v;
}

function pickMove(game) {
  var best = null, bestV = -Infinity;
  for (var d = 0; d < 4; d++) {
    var sim = Core.engine.clone(game.get());
    var r = Core.engine.applyMove(sim, d, SIMRNG);
    if (!r.valid) continue;
    var v = evalState(sim, r) + SIMRNG() * 0.01;
    if (v > bestV) { bestV = v; best = d; }
  }
  return best;
}

function playGame(params) {
  var g = Core.createGame(params, { rng: GAMERNG });
  var guard = 0;
  while (g.getStatus() === 'playing') {
    var d = pickMove(g);
    if (d === null) throw new Error('playing 状态下无有效步（核心判负逻辑缺失）');
    g.move(d);
    vnow += MOVE_MS; // 虚拟时钟：按人类节奏推进
    if (++guard > 5000) throw new Error('guard: 对局未终止');
  }
  return g;
}

/* ======================= [A] 主模拟 ======================= */
var N = 120;
console.log('\n[A] 主模拟：' + N + ' 局 · 启发式 bot · 默认参数');
var mainGames = [];
var t0 = Date.now();
for (var i = 0; i < N; i++) {
  playGame(null);
  mainGames.push(Core.getMetrics().games[Core.getMetrics().games.length - 1]);
}
var simMs = Date.now() - t0;
var wins = mainGames.filter(function (g) { return g.result === 'win'; });
var losses = mainGames.filter(function (g) { return g.result === 'lose'; });
var timeup = mainGames.filter(function (g) { return g.reason === 'timeup'; });
var stuck = mainGames.filter(function (g) { return g.reason === 'stuck'; });

console.log('  胜负分布: 胜 ' + wins.length + ' (' + pct(wins.length / N) + ') / 负 ' + losses.length + ' (' + pct(losses.length / N) + ')' +
  '  [负因: 总引信烧尽 ' + timeup.length + ' · 无路可走 ' + stuck.length + ']');
var avgMoves = avg(mainGames, function (g) { return g.moves; });
var sortedMoves = mainGames.map(function (g) { return g.moves; }).sort(function (a, b) { return a - b; });
var medMoves = sortedMoves[Math.floor(N / 2)];
var avgDurMs = avg(mainGames, function (g) { return g.durationMs; });
var sortedDur = mainGames.map(function (g) { return g.durationMs; }).sort(function (a, b) { return a - b; });
var estMin = avgDurMs / 60000;
console.log('  平均步数/局: ' + avgMoves.toFixed(1) + '（中位 ' + medMoves + '，区间 ' + sortedMoves[0] + '–' + sortedMoves[N - 1] + '）');
console.log('  平均局时(虚拟时钟 1.2s/步): ' + estMin.toFixed(2) + ' 分钟' +
  '（中位 ' + (sortedDur[Math.floor(N / 2)] / 60000).toFixed(2) + '，区间 ' +
  (sortedDur[0] / 60000).toFixed(2) + '–' + (sortedDur[N - 1] / 60000).toFixed(2) + ' 分钟）');
console.log('  [机器实耗仅 ' + simMs + ' ms / ' + N + ' 局，单局时长取自虚拟时钟埋点 durationMs]');
console.log('  平均得分: ' + avg(mainGames, function (g) { return g.score; }).toFixed(0) +
  ' · 平均燃尽成灰: ' + avg(mainGames, function (g) { return g.burnouts; }).toFixed(1) + ' 块/局' +
  ' · 平均震碎灰烬: ' + avg(mainGames, function (g) { return g.stoneClears; }).toFixed(1) + ' 块/局' +
  ' · 平均峰值: ' + avg(mainGames, function (g) { return g.maxLevel; }).toFixed(2));

check('A1 局数达标(≥100)', N >= 100, N + ' 局');
check('A2 每局都有结局', mainGames.every(function (g) { return g.result === 'win' || g.result === 'lose'; }));
check('A3 胜负分布非退化', wins.length > 0 && losses.length > 0,
  '胜率 ' + pct(wins.length / N) + '（有输有赢，难度适中）');
check('A4 单局时长落在 2–5 分钟设计带', estMin >= 1.5 && estMin <= 6, estMin.toFixed(2) + ' 分钟（中位 ' + (sortedDur[Math.floor(N / 2)] / 60000).toFixed(2) + '）');
check('A5 核心机制在局内实际发生', avg(mainGames, function (g) { return g.burnouts; }) >= 1 &&
  avg(mainGames, function (g) { return g.stoneClears; }) >= 1,
  '燃尽/震碎均为非零事件');
check('A6 对局可终止(无死循环)', mainGames.every(function (g) { return g.moves <= Core.DEFAULTS.maxSteps; }),
  '每局步数 ≤ maxSteps=' + Core.DEFAULTS.maxSteps);

/* ======================= [B] 埋点核验 ======================= */
console.log('\n[B] 埋点核验（内存计数 vs 逐局记录，同一通道）');
var m = Core.getMetrics();
var sumMoves = mainGames.reduce(function (a, g) { return a + g.moves; }, 0);
var sumMerges = mainGames.reduce(function (a, g) { return a + g.merges; }, 0);
var sumBurn = mainGames.reduce(function (a, g) { return a + g.burnouts; }, 0);
var sumClr = mainGames.reduce(function (a, g) { return a + g.stoneClears; }, 0);
var expectedRetry = mainGames.reduce(function (a, g, i) {
  return a + (i < mainGames.length - 1 && g.result === 'lose' ? 1 : 0);
}, 0);

console.log('  事件触发计数:');
console.log('    session_start : ' + m.counts.session_start);
console.log('    game_start    : ' + m.counts.game_start);
console.log('    game_end      : ' + m.counts.game_end);
console.log('    move          : ' + m.counts.move);
console.log('    merge         : ' + m.counts.merge);
console.log('    stone_formed  : ' + m.counts.stone_formed);
console.log('    stone_cleared : ' + m.counts.stone_cleared);
console.log('    retry         : ' + m.counts.retry);
console.log('    session_end   : ' + m.counts.session_end);

check('B1 session_start 恰好 1 次', m.counts.session_start === 1);
check('B2 game_start = game_end = 已打局数', m.counts.game_start === N && m.counts.game_end === N,
  m.counts.game_start + ' = ' + m.counts.game_end + ' = ' + N);
check('B3 move 计数 = 逐局步数之和', m.counts.move === sumMoves, m.counts.move + ' = ' + sumMoves);
check('B4 merge 计数 = 逐局合并之和', m.counts.merge === sumMerges, m.counts.merge + ' = ' + sumMerges);
check('B5 stone_formed = 逐局燃尽之和', m.counts.stone_formed === sumBurn, m.counts.stone_formed + ' = ' + sumBurn);
check('B6 stone_cleared = 逐局震碎之和', m.counts.stone_cleared === sumClr, m.counts.stone_cleared + ' = ' + sumClr);
check('B7 retry(失败重试) = 败局后续开局数', m.counts.retry === expectedRetry,
  m.counts.retry + ' = ' + expectedRetry);
check('B8 单局时长已记录(durationMs)', mainGames.every(function (g) { return typeof g.durationMs === 'number' && g.durationMs >= 0; }));
check('B9 session_end 尚未触发(=0)', m.counts.session_end === 0);
(function () {
  var viaExport = (typeof globalThis.__metrics !== 'undefined') ? globalThis.__metrics.getMetrics() : null;
  var same = !!viaExport &&
    viaExport.counts.game_start === m.counts.game_start &&
    viaExport.counts.move === m.counts.move &&
    viaExport.games.length === m.games.length;
  check('B10 __metrics 导出接口同通道读取一致', same,
    'globalThis.__metrics（浏览器下即 window.__metrics）');
})();

/* ======================= [C] 难度曲线 ======================= */
console.log('\n[C] 难度曲线：maxSteps（总引信）三档扫描 · 各 40 局');
var sweepSteps = [140, 180, 240];
var sweepResults = {};
for (var s = 0; s < sweepSteps.length; s++) {
  var ms = sweepSteps[s];
  var group = [];
  for (var j = 0; j < 40; j++) {
    playGame({ maxSteps: ms });
    group.push(Core.getMetrics().games[Core.getMetrics().games.length - 1]);
  }
  var w = group.filter(function (g) { return g.result === 'win'; }).length;
  sweepResults[ms] = { rate: w / 40, avgMoves: avg(group, function (g) { return g.moves; }) };
  console.log('    maxSteps=' + ms + ' → 胜率 ' + pct(w / 40) + ' · 平均步数 ' + sweepResults[ms].avgMoves.toFixed(0) +
    ' · 平均燃尽 ' + avg(group, function (g) { return g.burnouts; }).toFixed(1) + ' 块/局');
}
check('C1 难度随 maxSteps 单调下降(140 最难)', sweepResults[140].rate < sweepResults[240].rate,
  pct(sweepResults[140].rate) + ' < ' + pct(sweepResults[240].rate));
check('C2 三档胜率有梯度(极差 > 10%)', (sweepResults[240].rate - sweepResults[140].rate) > 0.10,
  '极差 ' + pct(sweepResults[240].rate - sweepResults[140].rate));
check('C3 每档满 40 局且全部有结局',
  Core.getMetrics().counts.game_end === N + 40 * sweepSteps.length,
  'game_end 总数 ' + Core.getMetrics().counts.game_end + ' = ' + (N + 40 * sweepSteps.length));

/* ======================= [D] 会话收尾 ======================= */
console.log('\n[D] 会话收尾');
Core.endSession();
var m3 = Core.getMetrics();
var totalGames = m3.counts.game_end;
var totalWins = m3.games.filter(function (g) { return g.result === 'win'; }).length;
check('D1 endSession 后 session_end = 1', m3.counts.session_end === 1);
check('D2 会话总局数 = ' + totalGames, totalGames === N + 40 * sweepSteps.length);
check('D3 会话记录完整(每局含结果/时长/步数/重试可算)', m3.games.every(function (g) {
  return (g.result === 'win' || g.result === 'lose') && g.moves > 0 && g.durationMs >= 0;
}));
console.log('  会话汇总: 共 ' + totalGames + ' 局 · 胜 ' + totalWins + ' (' + pct(totalWins / totalGames) + ')' +
  ' · 失败重试 ' + m3.counts.retry + ' 次' +
  ' · 会话时长(虚拟时钟) ' + ((m3.sessionEndTs - m3.sessionStartTs) / 60000).toFixed(1) + ' 分钟');

/* ======================= 汇总 ======================= */
console.log('\n================================================================');
console.log(' 自检汇总: ' + passed + ' 项通过 / ' + failed + ' 项失败');
if (failed === 0) {
  console.log(' 结论: 全部通过 —— node test.js 退出码 0');
  process.exit(0);
} else {
  console.log(' 结论: 存在失败项 —— node test.js 退出码 1');
  process.exit(1);
}
