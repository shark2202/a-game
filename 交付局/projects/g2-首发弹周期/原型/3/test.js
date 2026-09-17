#!/usr/bin/env node
/* =========================================================================
 * 红限反应堆 Redline Reactor — test.js
 * --------------------------------------------------------------------------
 * 无浏览器环境自测：用带种子的确定性 RNG 驱动 4 档水平的 bot 玩家，
 * 模拟 120 局（≥100 局要求），输出：
 *   1) 胜负分布（总体 + 分水平 + 失败原因 meltdown/timeout）
 *   2) 平均局时（总体 / 胜局 / 败局，min/max）
 *   3) 埋点事件触发计数（直接来自 core.getMetrics()，与 window.__metrics
 *      同一通道），并与本地独立统计交叉校验
 *   4) 种子回放确定性校验
 * 退出码：0 = 全部通过；1 = 任一校验失败。
 * 运行：node test.js
 * ========================================================================= */
'use strict';

var core = require('./core.js');

/* ---------- 确定性 RNG（mulberry32） ---------- */
function mulberry32(seed) {
  var a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    var t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ---------- bot 玩家（4 档水平；模拟人类决策节奏/失误/阈值偏好） ----------
 * interval  决策间隔（秒，含随机抖动）
 * err       失误率（该决策点完全走神，什么都不做）
 * ventAt    热量达到该值就排热（胆量）
 * bankAt    热量达到该值就入库（红限骑多高）
 * bankPower 入库的最小电力门槛
 * stokeCap  热量高于此值不买升级（过热不安装）
 * horizon   愿意为下一级升级攒多少秒的当前产出（>此值即转入「收割模式」）
 */
var SKILLS = {
  novice: { interval: 0.80, err: 0.20, ventAt: 60, bankAt: 40, bankPower: 45, stokeCap: 62, horizon: 30 },
  decent: { interval: 0.50, err: 0.10, ventAt: 74, bankAt: 70, bankPower: 45, stokeCap: 72, horizon: 30 },
  expert: { interval: 0.33, err: 0.04, ventAt: 88, bankAt: 78, bankPower: 45, stokeCap: 84, horizon: 41 },
  maniac: { interval: 0.30, err: 0.08, ventAt: 95, bankAt: 90, bankPower: 40, stokeCap: 94, horizon: 46 }
};
var PLAN = [['novice', 35], ['decent', 45], ['expert', 30], ['maniac', 10]];
var TOTAL = PLAN.reduce(function (a, p) { return a + p[1]; }, 0); // 120 局

/* ---------- 决策逻辑 ---------- */
function decide(run, p) {
  var goal = run.cfg.VAULT_GOAL;
  // 终局一击：这一库直接达标就收
  if (run.banked + run.power * run.bankMult >= goal) { run.actBank(); return; }
  // 收割模式判定：下一级升级贵到不值得再等
  var endgame = run.stokeCost > run.rate * p.horizon;
  if (!endgame && run.power >= run.stokeCost && run.heat < p.stokeCap) {
    run.actStoke(); // 投资期：能买就买（过热不装）
    return;
  }
  if (run.heat >= p.ventAt) { // 过热：先入库再排热（排热浪费 25% 电力）
    if (endgame && run.power >= p.bankPower) run.actBank();
    if (run.ventCd <= 0) run.actVent();
    return;
  }
  if (endgame && run.heat >= p.bankAt && run.power >= p.bankPower) run.actBank();
}

/* ---------- 单局模拟：dt=0.1s 步进，人类节奏的决策点 ---------- */
function simulate(run, skill, rng) {
  var j = 0.9 + 0.2 * rng(); // 每局阈值整体抖动 ±10%
  var p = {
    ventAt: skill.ventAt * j,
    bankAt: Math.min(skill.bankAt * j, skill.ventAt * j - 6),
    bankPower: skill.bankPower * j,
    stokeCap: Math.min(skill.stokeCap * j, skill.ventAt * j + 8),
    horizon: skill.horizon
  };
  var next = 0.3 + 0.5 * rng();
  var guard = 0;
  while (run.state === 'running' && guard++ < 6000) {
    run.update(0.1);
    if (run.state !== 'running') break;
    if (run.time >= next) {
      next = run.time + skill.interval * (0.7 + 0.6 * rng());
      if (rng() >= skill.err) decide(run, p);
    }
  }
}

/* ---------- 校验 A：同种子回放确定性 ---------- */
function replayDeterminism() {
  var sig = [];
  for (var i = 0; i < 2; i++) {
    core.resetMetrics();
    var rng = mulberry32(0x5EEDBA);
    var run = core.createRun({ difficulty: 'normal' });
    simulate(run, SKILLS.decent, rng);
    sig.push(run.state + '|' + run.endReason + '|' + run.banked.toFixed(4) + '|' +
      run.time.toFixed(4) + '|' + run.stokes + '|' + run.vents + '|' + run.banks);
  }
  return sig[0] === sig[1];
}
var replayOK = replayDeterminism();

/* ---------- 主模拟：120 局 ---------- */
core.resetMetrics();
core.beginSession();
var rng = mulberry32(0xC0FFEE);

var local = {
  runs: 0, wins: 0, losses: 0, meltdown: 0, timeout: 0,
  retries: 0, totalDur: 0, bySkill: {}
};
var prevLost = false; // 与 core 的 retry 判定同口径：失败后的下一局 = 重试

PLAN.forEach(function (pl) {
  var name = pl[0], n = pl[1];
  local.bySkill[name] = { runs: 0, wins: 0, losses: 0, meltdown: 0, timeout: 0, durs: [] };
  for (var i = 0; i < n; i++) {
    if (prevLost) local.retries++;
    var run = core.createRun({ difficulty: 'normal' });
    local.runs++;
    local.bySkill[name].runs++;
    simulate(run, SKILLS[name], rng);
    // 与 core 的记录口径一致：时长以班次时限封顶（步进浮点可能多出一拍）
    var dur = Math.min(run.time, core.TUNING.TIME_LIMIT);
    local.totalDur += dur;
    local.bySkill[name].durs.push(dur);
    if (run.state === 'won') {
      local.wins++; local.bySkill[name].wins++; prevLost = false;
    } else {
      local.losses++; local.bySkill[name].losses++;
      if (run.endReason === 'meltdown') { local.meltdown++; local.bySkill[name].meltdown++; }
      else { local.timeout++; local.bySkill[name].timeout++; }
      prevLost = true;
    }
  }
});
core.endSession();
var m = core.getMetrics();

/* ---------- 交叉校验（core 埋点 vs 本地独立统计 vs 硬约束） ---------- */
var checks = [];
function ck(name, ok, info) { checks.push({ name: name, ok: !!ok, info: info || '' }); }

ck('局数 = ' + TOTAL + '（run_start 计数一致）',
  m.counters.run_start === TOTAL && local.runs === TOTAL,
  'core=' + m.counters.run_start + ' local=' + local.runs);
ck('run_end = ' + TOTAL,
  m.counters.run_end === TOTAL, 'core=' + m.counters.run_end);
ck('胜负计数与本地一致',
  m.counters.win === local.wins && m.counters.loss === local.losses,
  'core win=' + m.counters.win + '/loss=' + m.counters.loss +
  ' | local win=' + local.wins + '/loss=' + local.losses);
ck('失败原因计数与本地一致',
  m.counters.meltdown === local.meltdown && m.counters.timeout === local.timeout,
  'core melt=' + m.counters.meltdown + '/timeout=' + m.counters.timeout +
  ' | local melt=' + local.meltdown + '/timeout=' + local.timeout);
ck('win + loss = run_end（埋点自洽）',
  m.counters.win + m.counters.loss === m.counters.run_end,
  m.counters.win + '+' + m.counters.loss + '=' + m.counters.run_end);
ck('失败重试计数一致（上一局失败后的重开）',
  m.counters.retry === local.retries,
  'core=' + m.counters.retry + ' local=' + local.retries);
ck('单局时长数组口径一致',
  m.durations.all.n === TOTAL && m.durations.win.n === local.wins && m.durations.loss.n === local.losses,
  'all=' + m.durations.all.n + ' win=' + m.durations.win.n + ' loss=' + m.durations.loss.n);
ck('时长总量与本地求和一致',
  Math.abs(m.durations.all.total - local.totalDur) < 1e-6,
  'core=' + m.durations.all.total + ' local=' + local.totalDur.toFixed(3));
ck('session 开始/结束各恰好 1 次',
  m.counters.session_start === 1 && m.counters.session_end === 1,
  'start=' + m.counters.session_start + ' end=' + m.counters.session_end);
ck('所有局时长 ∈ (0, TIME_LIMIT]',
  m.durations.all.min > 0 && m.durations.all.max <= core.TUNING.TIME_LIMIT + 1e-6,
  'min=' + m.durations.all.min.toFixed(3) + ' max=' + m.durations.all.max.toFixed(3));
ck('胜负分布非退化（win≥25 且 loss≥25）',
  local.wins >= 25 && local.losses >= 25,
  'win=' + local.wins + ' loss=' + local.losses);
ck('两种失败原因均出现（meltdown≥2 且 timeout≥2）',
  local.meltdown >= 2 && local.timeout >= 2,
  'meltdown=' + local.meltdown + ' timeout=' + local.timeout);
ck('节奏：胜局平均时长 ∈ [110, 240] 秒（一局 2–5 分钟）',
  m.durations.win.n > 0 && m.durations.win.avg >= 110 && m.durations.win.avg <= 240,
  'avg=' + (m.durations.win.n ? m.durations.win.avg.toFixed(1) : 'n/a') + 's');
ck('节奏：全体局平均时长 ∈ [90, 252] 秒',
  m.durations.all.avg >= 90 && m.durations.all.avg <= 252,
  'avg=' + m.durations.all.avg.toFixed(1) + 's');
ck('动作埋点非零（stoke/vent/bank 均有触发）',
  m.counters.stoke > 0 && m.counters.vent > 0 && m.counters.bank > 0,
  'stoke=' + m.counters.stoke + ' vent=' + m.counters.vent + ' bank=' + m.counters.bank);
ck('同种子回放确定性（两遍模拟结果完全一致）', replayOK, replayOK ? 'identical' : 'DIVERGED');

/* ---------- 输出报告 ---------- */
function fmt(n, d) { return (n === undefined ? 0 : n).toFixed(d === undefined ? 1 : d); }
function pct(a, b) { return b ? (100 * a / b).toFixed(1) + '%' : 'n/a'; }
function pad(s, w) { s = String(s); while (s.length < w) s += ' '; return s; }

console.log('================================================================');
console.log(' 红限反应堆 Redline Reactor — headless self-test (node, no browser)');
console.log(' ' + TOTAL + ' 局模拟 · 种子 RNG（结果确定性） · 难度 = normal');
console.log('================================================================');
console.log('');
console.log('[胜负分布]  胜 ' + local.wins + ' (' + pct(local.wins, TOTAL) + ')  |  负 ' +
  local.losses + ' (' + pct(local.losses, TOTAL) + ')    [熔毁 ' + local.meltdown +
  ' / 超时 ' + local.timeout + ']');
console.log('');
console.log('[分水平]');
Object.keys(local.bySkill).forEach(function (k) {
  var s = local.bySkill[k];
  var avg = s.durs.length ? s.durs.reduce(function (a, b) { return a + b; }, 0) / s.durs.length : 0;
  console.log('  ' + pad(k, 8) + ' 局 ' + pad(s.runs, 3) + ' | 胜 ' + pad(s.wins, 3) +
    ' (' + pct(s.wins, s.runs) + ') | 熔毁 ' + pad(s.meltdown, 2) + ' | 超时 ' +
    pad(s.timeout, 3) + ' | 平均局时 ' + fmt(avg) + 's');
});
console.log('');
console.log('[局时统计]  全体 平均 ' + fmt(m.durations.all.avg) + 's (min ' + fmt(m.durations.all.min) +
  ' / max ' + fmt(m.durations.all.max) + ')');
console.log('            胜局 平均 ' + fmt(m.durations.win.avg) + 's (n=' + m.durations.win.n +
  ', min ' + fmt(m.durations.win.min) + ' / max ' + fmt(m.durations.win.max) + ')');
console.log('            败局 平均 ' + fmt(m.durations.loss.avg) + 's (n=' + m.durations.loss.n + ')');
console.log('');
console.log('[埋点事件触发计数] (core.getMetrics()，与 window.__metrics 同一通道)');
console.log('  ' + Object.keys(m.counters).map(function (k) {
  return k + '=' + m.counters[k];
}).join('  '));
console.log('[session]  started=' + m.session.started + '  ended=' + m.session.ended +
  '  wallMs=' + m.session.wallMs);
console.log('');
console.log('[交叉校验]');
checks.forEach(function (c) {
  console.log('  ' + (c.ok ? 'PASS' : 'FAIL') + '  ' + c.name + (c.info ? '   (' + c.info + ')' : ''));
});
var failed = checks.filter(function (c) { return !c.ok; });
console.log('');
if (failed.length === 0) {
  console.log('RESULT: PASS  (' + checks.length + '/' + checks.length + ' checks passed)');
  process.exit(0);
} else {
  console.log('RESULT: FAIL  (' + failed.length + '/' + checks.length + ' checks failed)');
  failed.forEach(function (c) { console.log('  FAILED: ' + c.name + ' (' + c.info + ')'); });
  process.exit(1);
}
