/*
 * ============================================================
 *  GRAZE PULSE · 擦弹脉冲
 *  槽 1（反应/时机型）—— Flappy 族差异化变体
 *  微创新：双层碰撞判定（致命核 + 擦弹圈）。
 *    - 障碍擦过外圈 -> 充能 + 连击（主动贴险）
 *    - 能量满 -> 下一次点按触发「相位脉冲」：短时穿墙无敌，穿柱反得高分
 *    - 能量满时被撞 -> 自动紧急相位免死一次
 *    把 Flappy 的「只能躲」反转为「贴险换资源」的循环。
 *
 *  core.js —— 纯 JS 游戏核心（规则/状态机/数值），不依赖 DOM。
 *  浏览器: <script src="core.js"> -> window.GrazePulse
 *  Node:    const { createGame } = require('./core.js')
 * ============================================================
 */
(function (root, factory) {
  var api = factory();
  root.GrazePulse = api;
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';

  /* ---------------------------------------------------------
   * CONFIG —— 全部数值集中于此，外部可覆盖（难度曲线可调）
   * stages 数组即难度曲线：每段速度/缝隙/栅距递进
   * --------------------------------------------------------- */
  var DEFAULT_CONFIG = {
    world: { W: 480, H: 720 },          // 逻辑画布尺寸
    player: {
      x: 130,                            // 玩家固定横坐标（世界向左滚动）
      coreR: 10,                         // 致命核半径（撞到即死）
      grazeR: 34,                        // 擦弹圈半径（擦到充能，微创新核心）
      gravity: 1500,                     // 重力加速度 u/s^2
      flapVy: -430,                      // 单次点按脉冲速度
      maxFall: 640, maxRise: -520        // 垂直速度限幅
    },
    gate: {                              // 能量栅（障碍）
      w: 34,                             // 栅宽
      margin: 62                         // 缝隙中心距上下边界的最小余量
    },
    phase: {                             // 相位脉冲（穿墙状态）
      duration: 1.0,                     // 持续秒数
      speedMul: 1.15                     // 相位期间水平加速
    },
    graze: {
      shield: 0.15                       // 擦弹缓冲：每次擦弹获得 0.15s 核心碰撞豁免
    },                                   // （缓冲贴弹判定边缘的瞬时失误，非无敌外挂）
    energy: {                            // 能量槽（0-100）
      grazeGain: 16,                     // 每次擦弹充能（主导路径）
      gateGain: 3,                       // 每过一道栅充能（慢速积累）
      wallGain: 14,                      // 相位穿墙充能（连刷相位循环的燃料）
      max: 100
    },
    score: {
      gate: 10,                          // 通过一道栅
      grazeBase: 6,                      // 擦弹基础分 x 连击
      wall: 40,                          // 相位穿墙
      stageClear: 150,                   // 阶段完成
      win: 500                           // 通关
    },
    combo: { window: 2.5 },              // 擦弹连击窗口（秒）
    run: {
      lives: 5,                          // 重试珠：一局内阶段死亡重生次数上限
      respawnInvuln: 1.2,                // 重生无敌秒数（仅对栅生效）
      deathDelay: 0.55,                  // 死亡动画时长
      startInvuln: 0.8                   // 开局/重生后的安全起飞
    },
    stages: [                            // 难度曲线：3 阶段（速度+ / 缝隙- / 栅距-）
      { name: '青野', speed: 90,  gap: 195, spacing: 520, distEnd: 3600 },
      { name: '金峡', speed: 110, gap: 175, spacing: 470, distEnd: 8100 },
      { name: '赤渊', speed: 130, gap: 158, spacing: 435, distEnd: 13500 }
    ],
    gateFirstDist: 420                   // 开局第一道栅的距离（起飞缓冲）
  };

  /* ---------- 小工具 ---------- */
  function clamp(v, lo, hi) { return v < lo ? lo : (v > hi ? hi : v); }

  // 确定性哈希伪随机（每道栅的缝隙位置由 runSeed+index 唯一决定）
  function seededUnit(seed, index) {
    var t = (seed ^ (index * 2654435761)) >>> 0;
    t = (t + 0x6D2B79F5) >>> 0;
    var r = t;
    r = Math.imul(r ^ (r >>> 15), r | 1) >>> 0;
    r = (r ^ (r + Math.imul(r ^ (r >>> 7), r | 61))) >>> 0;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  }

  // 圆 vs 轴对齐矩形 相交测试
  function circleRectHit(px, py, r, rx, ry, rw, rh) {
    var cx = clamp(px, rx, rx + rw);
    var cy = clamp(py, ry, ry + rh);
    var dx = px - cx, dy = py - cy;
    return dx * dx + dy * dy < r * r;
  }

  function deepMerge(base, override) {
    if (!override) return base;
    var out = Array.isArray(base) ? base.slice() : {};
    Object.keys(base).forEach(function (k) {
      out[k] = (base[k] && typeof base[k] === 'object' && !Array.isArray(base[k]))
        ? deepMerge(base[k], override[k]) : (override[k] !== undefined ? override[k] : base[k]);
    });
    return out;
  }

  /* ---------------------------------------------------------
   * createGame(configOverride?, opts?) -> game
   *  opts.rng     — () => [0,1)，默认 Math.random（test.js 注入以复现）
   *  opts.onEvent — (name, payload) 回调，渲染层特效/音效钩子
   * --------------------------------------------------------- */
  function createGame(configOverride, opts) {
    var opts = opts || {};
    var rng = opts.rng || Math.random;
    var onEvent = typeof opts.onEvent === 'function' ? opts.onEvent : null;
    var cfg = deepMerge(DEFAULT_CONFIG, configOverride || {});
    var W = cfg.world.W, H = cfg.world.H;
    var P = cfg.player, STAGES = cfg.stages;
    var TOTAL_DIST = STAGES[STAGES.length - 1].distEnd;

    /* ---------- 埋点（内存计数，Node/浏览器同一通道） ---------- */
    var metrics = {
      sessionStart: null, sessionEnd: null,   // 时间戳（ms epoch；无 Date 语义差异）
      runs: 0,                                  // 局数（run_start 次数）
      runDurations: [],                         // 每局时长（秒）
      runResults: [],                           // 每局结果 'win' | 'lose'
      retries: 0,                               // 失败重试次数（阶段重生 + 败局再开）
      deaths: 0,                                // 阶段内死亡次数
      events: {},                               // 事件名 -> 计数
      lastRun: null                             // 最近一局摘要
    };
    function track(name, payload) {
      metrics.events[name] = (metrics.events[name] || 0) + 1;
      if (onEvent) {
        try { onEvent(name, payload || null); } catch (e) { /* 渲染层异常不影响核心 */ }
      }
    }

    /* ---------- 运行时状态 ---------- */
    var sessionState = 'idle';        // idle | active | ended
    var runState = 'idle';            // idle | flying | dying | over
    var runResult = null;             // 'win' | 'lose'
    var runClock = 0;                 // 本局累计时长（秒）
    var runScore = 0, bestScore = 0;
    var distance = 0;                 // 世界推进距离
    var py = H / 2, vy = 0;           // 玩家垂直位置/速度
    var energy = 0, combo = 0, comboTimer = 0;
    var phaseTimer = 0, phaseSerial = 0;   // 相位剩余时间 / 相位序号（wall_pass 去重）
    var invuln = 0;                        // 无敌剩余（开局/重生）
    var shieldTimer = 0;                   // 擦弹缓冲剩余（每次擦弹刷新）
    var stageIdx = 0;                      // 当前阶段下标
    var retriesUsed = 0;                   // 本局已用重试珠
    var lastRunResult = null;
    var deathTimer = 0;                    // 死亡动画计时
    var runSeed = 0;                       // 本局种子（决定栅布局，重生不变）
    var obstacles = [];                    // 活动栅列表（含屏幕外缓冲）
    var trail = [];                        // 相位拖尾（渲染层读取）

    /* ---------- 阶段/栅布局（确定性：dist 的纯函数） ---------- */
    function stageAt(dist) {
      for (var i = 0; i < STAGES.length; i++) if (dist < STAGES[i].distEnd) return i;
      return STAGES.length - 1;
    }
    function stageStart(idx) { return idx === 0 ? 0 : STAGES[idx - 1].distEnd; }

    // 栅距离链：distChain[i] = 上一栅距离 + 该处阶段栅距（确定性）
    var distChain = [];
    function gateDist(i) {
      if (distChain[i] !== undefined) return distChain[i];
      var d = 0;
      for (var k = 0; k <= i; k++) {
        if (distChain[k] !== undefined) { d = distChain[k]; continue; }
        d = k === 0 ? cfg.gateFirstDist : d + STAGES[stageAt(d)].spacing;
        distChain[k] = d;
      }
      return distChain[i];
    }
    function makeGate(i) {
      var d = gateDist(i);
      var st = STAGES[stageAt(d)];
      var gap = st.gap;
      var lo = gap / 2 + cfg.gate.margin, hi = H - gap / 2 - cfg.gate.margin;
      var gy = lo + seededUnit(runSeed, i) * (hi - lo);
      return {
        idx: i, dist: d, gapY: gy, gapH: gap, w: cfg.gate.w,
        passed: false,          // 已计 gate_pass
        grazed: false,          // 当前处于擦弹接触（进带计一次，离带重置）
        phaseMark: -1           // 最后一次 wall_pass 的相位序号
      };
    }
    // 依据当前 distance 重建活动栅窗口（重生回到阶段起点时布局一致）
    function rebuildGates() {
      obstacles = [];
      var i = 0;
      // 跳到当前进度之前
      while (gateDist(i) < distance - 80 && gateDist(i + 1) !== undefined) i++;
      while (gateDist(i) < distance - 80) i++;          // 链式预热
      var guard = 0;
      while (gateDist(i) < distance + W + 200 && guard++ < 5000) {
        var g = makeGate(i);
        if (g.dist >= distance - 80) obstacles.push(g);
        i++;
      }
    }
    function extendGates() {
      var last = obstacles.length ? obstacles[obstacles.length - 1].dist : distance - 200;
      var guard = 0;
      while (last < distance + W + 200 && guard++ < 5000) {
        var i = obstacles.length ? obstacles[obstacles.length - 1].idx + 1 : 0;
        var g = makeGate(i);
        obstacles.push(g);
        last = g.dist;
      }
      // 剔除远落后出屏的
      while (obstacles.length && obstacles[0].dist + obstacles[0].w < distance - 120) obstacles.shift();
    }

    /* ---------- 栅几何 ---------- */
    function gateRects(g) {
      var sx = g.dist - distance + P.x;      // 栅左缘屏幕 x
      var topH = g.gapY - g.gapH / 2;
      return {
        top: [sx, 0, g.w, topH],
        bottom: [sx, g.gapY + g.gapH / 2, g.w, H - (g.gapY + g.gapH / 2)]
      };
    }

    /* ---------- 一局生命周期 ---------- */
    function startRun() {
      metrics.runs++;
      track('run_start', { run: metrics.runs });
      // 败局后再开视为一次失败重试（阶段重生已在 respawn 计数）
      if (lastRunResult === 'lose') { metrics.retries++; track('retry', { kind: 'new_run' }); }
      runState = 'flying';
      runResult = null;
      runClock = 0; runScore = 0;
      distance = 0; stageIdx = 0;
      py = H / 2; vy = 0;
      energy = 0; combo = 0; comboTimer = 0;
      phaseTimer = 0; invuln = cfg.run.startInvuln; shieldTimer = 0;
      retriesUsed = 0; deathTimer = 0;
      trail = [];
      runSeed = Math.floor(rng() * 2147483647) >>> 0;
      distChain = [];
      rebuildGates();
    }

    function endRun(result) {
      runState = 'over';
      runResult = result;
      lastRunResult = result;
      metrics.runDurations.push(runClock);
      metrics.runResults.push(result);
      metrics.lastRun = {
        result: result, duration: runClock, score: runScore,
        stage: stageIdx + 1, retriesUsed: retriesUsed
      };
      if (runScore > bestScore) bestScore = runScore;
      track(result === 'win' ? 'win' : 'lose', { score: runScore, duration: runClock });
      track('run_end', { result: result, duration: runClock, score: runScore, stage: stageIdx + 1 });
    }

    function die() {
      metrics.deaths++;
      track('death', { stage: stageIdx + 1, distance: distance });
      runState = 'dying';
      deathTimer = cfg.run.deathDelay;
      vy = -180; // 死亡小弹跳（视觉反馈）
    }

    function respawn() {
      metrics.retries++;
      track('retry', { kind: 'stage_respawn', stage: stageIdx + 1 });
      distance = stageStart(stageIdx);        // 回当前阶段起点（checkpoint）
      runScore = Math.max(0, runScore - 0);   // 分数保留（鼓励擦弹积累）——仅能量/连击清零
      py = H / 2; vy = 0;
      energy = 0; combo = 0; comboTimer = 0;
      phaseTimer = 0;
      invuln = cfg.run.respawnInvuln;
      shieldTimer = 0;
      trail = [];
      // 重建栅：保证阶段起点前方有安全距离
      var safe = 0;
      while (gateDist(safe) < distance + 360) safe++;
      distChain.length = 0;
      // 直接从安全索引重建（同 seed 布局一致）
      obstacles = [];
      var i = safe, guard = 0;
      while (gateDist(i) < distance + W + 200 && guard++ < 5000) {
        obstacles.push(makeGate(i));
        i++;
      }
      runState = 'flying';
    }

    function activatePhase(emergency) {
      phaseSerial++;
      phaseTimer = cfg.phase.duration;
      energy = 0;
      track(emergency ? 'emergency_phase' : 'phase_burst', { stage: stageIdx + 1 });
    }

    /* ---------- 输入 ---------- */
    // 单一输入：点按。能量满时点按 -> 相位脉冲（先消耗能量）；否则普通上升脉冲。
    function flap() {
      if (sessionState !== 'active') return;
      if (runState !== 'flying') return;
      track('flap');
      if (energy >= cfg.energy.max && phaseTimer <= 0) {
        activatePhase(false);
      }
      vy = P.flapVy;
    }

    /* ---------- 主推进 ---------- */
    function update(dt) {
      if (sessionState !== 'active') return;
      dt = clamp(dt, 0, 1 / 30);
      if (runState === 'flying') {
        runClock += dt;
        stepFlight(dt);
      } else if (runState === 'dying') {
        runClock += dt;
        deathTimer -= dt;
        vy += P.gravity * dt;
        py = Math.min(py + vy * dt, H - P.coreR);
        if (deathTimer <= 0) {
          if (retriesUsed < cfg.run.lives) { retriesUsed++; respawn(); }
          else endRun('lose');
        }
      }
    }

    function stepFlight(dt) {
      var st = STAGES[stageIdx];
      var speed = st.speed * (phaseTimer > 0 ? cfg.phase.speedMul : 1);
      distance += speed * dt;

      // 垂直物理
      vy += P.gravity * dt;
      vy = clamp(vy, P.maxRise, P.maxFall);
      py += vy * dt;
      if (py < P.coreR) { py = P.coreR; vy = Math.max(vy, 0); }        // 顶部贴住（不死）
      if (py > H - P.coreR) { py = H - P.coreR; die(); return; }        // 触地即死（相位也救不了）

      // 计时器
      if (phaseTimer > 0) phaseTimer -= dt;
      if (invuln > 0) invuln -= dt;
      if (shieldTimer > 0) shieldTimer -= dt;
      if (comboTimer > 0) { comboTimer -= dt; if (comboTimer <= 0) combo = 0; }

      // 相位拖尾
      if (phaseTimer > 0) {
        trail.push({ x: P.x, y: py, t: 0.5 });
        if (trail.length > 40) trail.shift();
      }
      for (var ti = trail.length - 1; ti >= 0; ti--) {
        trail[ti].t -= dt;
        if (trail[ti].t <= 0) trail.splice(ti, 1);
      }

      // 阶段推进 / 通关
      if (distance >= TOTAL_DIST) {
        runScore += cfg.score.win;
        endRun('win');
        return;
      }
      if (stageIdx < STAGES.length - 1 && distance >= STAGES[stageIdx].distEnd) {
        stageIdx++;
        runScore += cfg.score.stageClear;
        track('stage_up', { stage: stageIdx + 1 });
      }

      // 栅交互
      extendGates();
      for (var i = 0; i < obstacles.length; i++) {
        var g = obstacles[i];
        var rects = gateRects(g);
        var hitCore = circleRectHit(P.x, py, P.coreR, rects.top[0], rects.top[1], rects.top[2], rects.top[3]) ||
                      circleRectHit(P.x, py, P.coreR, rects.bottom[0], rects.bottom[1], rects.bottom[2], rects.bottom[3]);
        var hitGraze = circleRectHit(P.x, py, P.grazeR, rects.top[0], rects.top[1], rects.top[2], rects.top[3]) ||
                       circleRectHit(P.x, py, P.grazeR, rects.bottom[0], rects.bottom[1], rects.bottom[2], rects.bottom[3]);

        if (hitCore) {
          if (phaseTimer > 0) {
            // 相位穿墙：核心入柱体 -> 高分 + 回能（风险循环的燃料）
            if (g.phaseMark !== phaseSerial) {
              g.phaseMark = phaseSerial;
              runScore += cfg.score.wall;
              energy = Math.min(cfg.energy.max, energy + cfg.energy.wallGain);
              track('wall_pass', { stage: stageIdx + 1 });
            }
          } else if (invuln <= 0 && shieldTimer <= 0) {
            if (energy >= cfg.energy.max) {
              activatePhase(true);   // 紧急相位：满能被撞免死一次
            } else {
              die();
            }
            return;
          }
        } else if (hitGraze && runState === 'flying') {
          if (!g.grazed) {
            g.grazed = true;
            combo++;
            comboTimer = cfg.combo.window;
            shieldTimer = cfg.graze.shield;   // 擦弹缓冲：短暂核心豁免
            energy = Math.min(cfg.energy.max, energy + cfg.energy.grazeGain);
            runScore += cfg.score.grazeBase * combo;
            track('graze', { combo: combo, stage: stageIdx + 1 });
          }
        } else if (g.grazed && !hitGraze && !hitCore) {
          g.grazed = false;          // 离带重置，可再次擦弹计分
        }

        // 过栅计分（核心越过栅右缘）
        var sx = g.dist - distance + P.x;
        if (!g.passed && sx + g.w < P.x - P.coreR) {
          g.passed = true;
          runScore += cfg.score.gate;
          energy = Math.min(cfg.energy.max, energy + cfg.energy.gateGain);
          track('gate_pass', { stage: stageIdx + 1 });
        }
      }
    }

    /* ---------- 会话 ---------- */
    function startSession() {
      if (sessionState === 'active') return;
      sessionState = 'active';
      metrics.sessionStart = Date.now();
      track('session_start', { ts: metrics.sessionStart });
    }
    function endSession() {
      if (sessionState !== 'active') return;
      if (runState !== 'over' && runState !== 'idle') endRun('lose');  // 中途退出按败局结算
      sessionState = 'ended';
      metrics.sessionEnd = Date.now();
      track('session_end', { ts: metrics.sessionEnd, runs: metrics.runs });
    }

    /* ---------- 快照（渲染层唯一数据源） ---------- */
    function snapshot() {
      var st = STAGES[stageIdx];
      return {
        sessionState: sessionState, runState: runState, runResult: runResult,
        W: W, H: H,
        player: { x: P.x, y: py, vy: vy, coreR: P.coreR, grazeR: P.grazeR },
        phase: { active: phaseTimer > 0, timer: Math.max(0, phaseTimer), serial: phaseSerial },
        invuln: invuln > 0,
        energy: energy, combo: combo,
        score: runScore, bestScore: bestScore,
        distance: distance, totalDist: TOTAL_DIST,
        stage: { idx: stageIdx, name: st.name, speed: st.speed, gap: st.gap, count: STAGES.length },
        retriesLeft: cfg.run.lives - retriesUsed,
        obstacles: obstacles.map(function (g) {
          return { dist: g.dist, gapY: g.gapY, gapH: g.gapH, w: g.w, grazed: g.grazed };
        }),
        trail: trail.slice(),
        worldX: distance                            // 渲染层做视差用
      };
    }

    /* ---------- 指标导出（window.__metrics / test.js 同一通道） ---------- */
    function getMetrics() {
      return {
        sessionStart: metrics.sessionStart,
        sessionEnd: metrics.sessionEnd,
        runs: metrics.runs,
        runDurations: metrics.runDurations.slice(),
        runResults: metrics.runResults.slice(),
        retries: metrics.retries,
        deaths: metrics.deaths,
        events: JSON.parse(JSON.stringify(metrics.events)),
        lastRun: metrics.lastRun ? JSON.parse(JSON.stringify(metrics.lastRun)) : null,
        summary: {
          wins: metrics.runResults.filter(function (r) { return r === 'win'; }).length,
          losses: metrics.runResults.filter(function (r) { return r === 'lose'; }).length,
          avgDuration: metrics.runDurations.length
            ? metrics.runDurations.reduce(function (a, b) { return a + b; }, 0) / metrics.runDurations.length
            : 0
        }
      };
    }

    return {
      startSession: startSession,
      endSession: endSession,
      startRun: startRun,
      flap: flap,
      update: update,
      snapshot: snapshot,
      getMetrics: getMetrics,
      exportMetrics: getMetrics,                     // window.__metrics 挂载别名
      config: cfg
    };
  }

  return { createGame: createGame, DEFAULT_CONFIG: DEFAULT_CONFIG };
});
