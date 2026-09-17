/* =========================================================================
 * 红限反应堆 Redline Reactor — core.js
 * --------------------------------------------------------------------------
 * 游戏核心：规则 / 状态机 / 数值。纯 JS，零 DOM 依赖，node 与浏览器均可运行。
 *
 * 玩法（一句话）：电力每秒自动上涨 ——
 *   STOKE 加购升级（产出 ×1.5，产热同步变快）
 *   VENT  排热（泄掉大量热量，但浪费当前电力 25%）
 *   BANK  入库（把当前电力按倍率转入金库；热量越高倍率越高，红热入库 ×2.1）
 * 在核心熔毁（热量 ≥100）或班次时限耗尽之前，入库达标即胜。
 *
 * 一局闭环：单局 2–5 分钟内完成「爬升 → 骑红限 → 入库 → 排热」循环直到终局。
 * 难度曲线（局内）：t > INSTABILITY_START 后产热系数持续上升，越拖越危险；
 * 参数可调：TUNING 全量导出 + easy/normal/hard 预设。
 *
 * 埋点（内存计数 + window.__metrics 同一通道，node 侧 getMetrics() 读取）：
 *   session_start / session_end / run_start / run_end / win / loss /
 *   meltdown / timeout / retry / stoke / vent / bank
 * ========================================================================= */
(function (global) {
  'use strict';

  /* ------------------------------------------------------------------ *
   * 可调参数（难度曲线与数值全在这里）
   * ------------------------------------------------------------------ */
  var TUNING = {
    VAULT_GOAL: 4800,          // 胜利目标：入库总量
    TIME_LIMIT: 250,           // 班次时限（秒）——超时判负
    BASE_RATE: 2.2,            // 初始产电力/秒
    PROD_MULT: 1.5,            // 每次 STOKE 的产出乘数
    STOKE_COST_BASE: 18,       // 第 1 个升级的价格
    STOKE_COST_GROWTH: 1.9,    // 升级价格曲线
    HEAT_PER_RATE: 0.25,       // 产热 = HEAT_PER_RATE × rate × 不稳定系数
    COOLING: 3,                // 常驻散热/秒
    MELTDOWN_HEAT: 100,        // 熔毁热量阈值
    VENT_HEAT_BASE: 40,        // VENT 泄热量基础值
    VENT_HEAT_PER_STOKE: 7,    // VENT 泄热量随升级成长（炉子越大排热阀越大）
    VENT_CD: 5,                // VENT 冷却（秒）
    VENT_POWER_LOSS: 0.25,     // VENT 浪费的当前电力比例
    BANK_MULT_MIN: 0.40,       // 冷库入库倍率（冷存重罚——红限骑线的对照）
    BANK_MULT_MAX: 2.1,        // 红热入库倍率（骑红限的奖励）
    INSTABILITY_START: 100,    // 局内难度曲线起点（秒）：此后产热开始爬升
    INSTABILITY_RATE: 0.45     // 每 60 秒产热系数 +45%
  };

  var PRESETS = {
    easy:   { VAULT_GOAL: 3400, TIME_LIMIT: 280, INSTABILITY_RATE: 0.30 },
    normal: {},
    hard:   { VAULT_GOAL: 5300, TIME_LIMIT: 235, INSTABILITY_RATE: 0.60, HEAT_PER_RATE: 0.27 }
  };

  function createTuning(difficulty) {
    var cfg = {};
    var k;
    for (k in TUNING) cfg[k] = TUNING[k];
    var p = PRESETS[difficulty] || PRESETS.normal;
    for (k in p) cfg[k] = p[k];
    cfg.difficulty = PRESETS[difficulty] ? difficulty : 'normal';
    return cfg;
  }

  /* ------------------------------------------------------------------ *
   * 埋点（metrics）——内存计数；同一对象同时服务 window.__metrics
   * 与 node 侧 getMetrics()，保证「同一通道」。
   * ------------------------------------------------------------------ */
  var metrics = null;
  var runSeq = 0;
  var LOG_CAP = 20000;

  function freshMetrics() {
    return {
      counters: {
        session_start: 0, session_end: 0,
        run_start: 0, run_end: 0,
        win: 0, loss: 0, meltdown: 0, timeout: 0,
        retry: 0, stoke: 0, vent: 0, bank: 0
      },
      sessionStartTime: null,
      sessionEndTime: null,
      runDurations: [],   // 每局时长（秒）——按局序 push
      winDurations: [],
      lossDurations: [],
      lastResult: null,  // 'won' | 'lost'（用于 retry 判定）
      log: []            // 事件流水（封顶，防内存膨胀）
    };
  }
  metrics = freshMetrics();

  function emit(name, data) {
    if (!Object.prototype.hasOwnProperty.call(metrics.counters, name)) {
      metrics.counters[name] = 0;
    }
    metrics.counters[name] += 1;
    if (metrics.log.length < LOG_CAP) {
      metrics.log.push({ name: name, data: data || null, at: Date.now() });
    }
  }

  function beginSession() {
    if (metrics.sessionStartTime !== null) return false;
    metrics.sessionStartTime = Date.now();
    emit('session_start', { runsSoFar: runSeq });
    return true;
  }

  function endSession() {
    if (metrics.sessionStartTime === null || metrics.sessionEndTime !== null) return false;
    metrics.sessionEndTime = Date.now();
    emit('session_end', {
      runs: runSeq,
      wins: metrics.counters.win,
      losses: metrics.counters.loss,
      retries: metrics.counters.retry
    });
    return true;
  }

  /* ------------------------------------------------------------------ *
   * 单局运行体（状态机）
   * 状态：'running' → 'won' | 'lost'（endReason: 'goal'|'meltdown'|'timeout'）
   * ------------------------------------------------------------------ */
  class ReactorRun {
    constructor(cfg) {
      this.cfg = cfg;
      this.onEvent = null;   // 由 createRun 挂载，接埋点
      this.reset();
    }

    reset() {
      this.time = 0;        // 局内模拟时间（秒）
      this.power = 0;       // 当前电力（未入库）
      this.heat = 0;        // 热量 0..100
      this.banked = 0;      // 已入库（胜利进度）
      this.stokes = 0;      // 升级次数
      this.vents = 0;
      this.banks = 0;
      this.ventCd = 0;      // VENT 冷却剩余
      this.lastGain = 0;    // 上次入库数值（渲染用）
      this.lastGainAt = -9;
      this.state = 'running';
      this.endReason = null;
    }

    // ---- 派生量 ----
    get rate() {          // 电力/秒
      return this.cfg.BASE_RATE * Math.pow(this.cfg.PROD_MULT, this.stokes);
    }
    get instability() {   // 局内难度曲线：t 过 INSTABILITY_START 后持续上升
      var over = this.time - this.cfg.INSTABILITY_START;
      return over > 0 ? 1 + (over / 60) * this.cfg.INSTABILITY_RATE : 1;
    }
    get heatGen() {       // 产热/秒
      return this.cfg.HEAT_PER_RATE * this.rate * this.instability;
    }
    get stokeCost() {
      return this.cfg.STOKE_COST_BASE * Math.pow(this.cfg.STOKE_COST_GROWTH, this.stokes);
    }
    get ventHeat() {      // VENT 泄热量随升级成长
      return this.cfg.VENT_HEAT_BASE + this.cfg.VENT_HEAT_PER_STOKE * this.stokes;
    }
    get bankMult() {      // 入库倍率：冷 0.55 → 红热 2.1
      var h = Math.min(this.heat, this.cfg.MELTDOWN_HEAT) / this.cfg.MELTDOWN_HEAT;
      return this.cfg.BANK_MULT_MIN +
        (this.cfg.BANK_MULT_MAX - this.cfg.BANK_MULT_MIN) * h;
    }
    get ventReady() { return this.ventCd <= 0; }
    get timeLeft() { return Math.max(0, this.cfg.TIME_LIMIT - this.time); }

    // ---- 推进（确定性；dt 上限 0.25s 防跳帧） ----
    update(dt) {
      if (this.state !== 'running') return this.state;
      if (dt > 0.25) dt = 0.25;
      if (dt < 0) dt = 0;
      this.time += dt;
      this.power += this.rate * dt;
      this.heat = Math.max(0, this.heat + (this.heatGen - this.cfg.COOLING) * dt);
      if (this.ventCd > 0) this.ventCd = Math.max(0, this.ventCd - dt);
      if (this.heat >= this.cfg.MELTDOWN_HEAT) {
        this.heat = this.cfg.MELTDOWN_HEAT;
        return this._end('lost', 'meltdown');
      }
      if (this.banked >= this.cfg.VAULT_GOAL) return this._end('won', 'goal');
      if (this.time >= this.cfg.TIME_LIMIT) return this._end('lost', 'timeout');
      return this.state;
    }

    // ---- 三个动作 ----
    actStoke() {
      if (this.state !== 'running') return false;
      var c = this.stokeCost;
      if (this.power < c) return false;
      this.power -= c;
      this.stokes += 1;
      this._fire('stoke', { stokes: this.stokes, cost: +c.toFixed(2), rate: +this.rate.toFixed(2) });
      return true;
    }

    actVent() {
      if (this.state !== 'running' || this.ventCd > 0) return false;
      var lost = this.power * this.cfg.VENT_POWER_LOSS;
      this.heat = Math.max(0, this.heat - this.ventHeat);
      this.power -= lost;
      this.vents += 1;
      this.ventCd = this.cfg.VENT_CD;
      this._fire('vent', { heatAfter: +this.heat.toFixed(2), powerLost: +lost.toFixed(2) });
      return true;
    }

    actBank() {
      if (this.state !== 'running' || this.power <= 0) return false;
      var gain = this.power * this.bankMult;
      this.banked += gain;
      this.lastGain = gain;
      this.lastGainAt = this.time;
      this.banks += 1;
      this.power = 0;
      this._fire('bank', {
        gain: +gain.toFixed(2), banked: +this.banked.toFixed(2),
        mult: +this.bankMult.toFixed(3), heat: +this.heat.toFixed(2)
      });
      if (this.banked >= this.cfg.VAULT_GOAL) this._end('won', 'goal');
      return true;
    }

    _end(result, reason) {
      if (this.state !== 'running') return this.state;
      this.state = result;
      this.endReason = reason;
      this._fire('run_end', {
        result: result, reason: reason,
        // 时长以班次时限封顶（步进浮点可能多出一拍）
        duration: +Math.min(this.time, this.cfg.TIME_LIMIT).toFixed(3),
        banked: +this.banked.toFixed(2),
        power: +this.power.toFixed(2), heat: +this.heat.toFixed(2),
        stokes: this.stokes, vents: this.vents, banks: this.banks
      });
      return this.state;
    }

    _fire(name, data) {
      if (typeof this.onEvent === 'function') this.onEvent(name, data);
    }
  }

  /* ------------------------------------------------------------------ *
   * createRun：创建一局并接上埋点（session/run/retry/胜负/时长/动作）
   * ------------------------------------------------------------------ */
  function createRun(opts) {
    opts = opts || {};
    var difficulty = opts.difficulty || 'normal';
    var cfg = opts.cfg || createTuning(difficulty);
    if (metrics.sessionStartTime === null) beginSession(); // 首局自动开 session
    runSeq += 1;
    if (metrics.lastResult === 'lost') {
      emit('retry', { run: runSeq }); // 上一局失败后的重开即「失败重试」
    }
    emit('run_start', { run: runSeq, difficulty: cfg.difficulty || difficulty });

    var run = new ReactorRun(cfg);
    run.onEvent = function (name, data) {
      emit(name, data);
      if (name === 'run_end') {
        metrics.runDurations.push(data.duration);
        (data.result === 'won' ? metrics.winDurations : metrics.lossDurations).push(data.duration);
        metrics.lastResult = data.result === 'won' ? 'won' : 'lost';
        emit(data.result === 'won' ? 'win' : 'loss', data);
        if (data.reason === 'meltdown') emit('meltdown', data);
        if (data.reason === 'timeout') emit('timeout', data);
      }
    };
    return run;
  }

  /* ------------------------------------------------------------------ *
   * metrics 读取/重置（node 侧 test.js 与浏览器 window.__metrics 同源）
   * ------------------------------------------------------------------ */
  function durStats(arr) {
    if (!arr.length) return { n: 0, total: 0, avg: 0, min: 0, max: 0 };
    var total = 0, min = arr[0], max = arr[0], i;
    for (i = 0; i < arr.length; i++) {
      total += arr[i];
      if (arr[i] < min) min = arr[i];
      if (arr[i] > max) max = arr[i];
    }
    return {
      n: arr.length,
      total: +total.toFixed(3),
      avg: +(total / arr.length).toFixed(3),
      min: +min.toFixed(3),
      max: +max.toFixed(3)
    };
  }

  function getMetrics() {
    var c = {}, k;
    for (k in metrics.counters) c[k] = metrics.counters[k];
    var wallMs = 0;
    if (metrics.sessionStartTime !== null) {
      wallMs = (metrics.sessionEndTime || Date.now()) - metrics.sessionStartTime;
    }
    return {
      counters: c,
      runs: metrics.counters.run_start,
      retries: metrics.counters.retry,
      durations: {
        all: durStats(metrics.runDurations),
        win: durStats(metrics.winDurations),
        loss: durStats(metrics.lossDurations)
      },
      session: {
        started: metrics.sessionStartTime !== null,
        ended: metrics.sessionEndTime !== null,
        startTime: metrics.sessionStartTime,
        endTime: metrics.sessionEndTime,
        wallMs: wallMs
      },
      lastResult: metrics.lastResult
    };
  }

  function resetMetrics() {
    metrics = freshMetrics();
    runSeq = 0;
  }

  /* ------------------------------------------------------------------ *
   * 导出：CommonJS(node) + 全局 RedlineReactor(浏览器) +
   *      window.__metrics（埋点导出接口；node 下挂到 globalThis 亦无害）
   * ------------------------------------------------------------------ */
  var RedlineReactor = {
    VERSION: '1.0.0',
    TUNING: TUNING,
    PRESETS: PRESETS,
    createTuning: createTuning,
    ReactorRun: ReactorRun,   // 裸状态机（不带埋点；自测/实验用）
    createRun: createRun,    // 正式入口：一局 + 埋点
    beginSession: beginSession,
    endSession: endSession,
    getMetrics: getMetrics,
    resetMetrics: resetMetrics
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = RedlineReactor;
  }
  global.RedlineReactor = RedlineReactor;

  var metricsApi = {
    describe: 'Redline Reactor telemetry channel (in-memory)',
    getMetrics: getMetrics,
    resetMetrics: resetMetrics,
    beginSession: beginSession,
    endSession: endSession
  };
  // counters 用 getter 动态引用，resetMetrics 后不会读到陈旧对象
  Object.defineProperty(metricsApi, 'counters', {
    get: function () { return metrics.counters; },
    enumerable: true
  });
  try { global.__metrics = metricsApi; } catch (e) { /* 某些环境全局只读 */ }

})(typeof window !== 'undefined' ? window : globalThis);
