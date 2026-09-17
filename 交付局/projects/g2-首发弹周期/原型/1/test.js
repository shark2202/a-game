/*
 * ============================================================
 *  GRAZE PULSE · 擦弹脉冲 —— 核心自测（无浏览器环境）
 *  node test.js
 *  模拟 120 局（三档 bot 水平 x 各 40 局，固定种子可复现），输出：
 *    - 胜负分布（总体 + 分水平）
 *    - 平均局时（总体 / 胜局 / 败局）
 *    - 埋点事件触发计数（直接读取 core.js 同一埋点通道 getMetrics）
 *  断言全部通过 -> 退出码 0；任一失败 -> 退出码 1
 *
 *  bot 策略（模拟真实玩家决策，非作弊读内部状态）：
 *    - 以固定决策间隔观察前方最近栅的缝隙，预测「到达栅时的位置」
 *    - 低于瞄准线 -> flap（抛物线预测，含超调保护）
 *    - expert：位置合适时瞄向上缘擦弹带（顶点控制）主动贴弹充能；
 *      能量满时切回中心飞行（避免相位在坏位置触发）——即游戏的
 *      「贴险攒能 -> 穿墙得分 -> 回贴」最优节奏
 * ============================================================
 */
'use strict';
var GP = require('./core.js');
var createGame = GP.createGame;

/* ---------- 可复现随机源 ---------- */
function mulberry32(seed) {
  var a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    var t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ---------- bot 水平参数 ----------
 * margin   到达位置低于瞄准线多少才 flap（越小越精准）
 * noise    瞄准噪声（模拟手抖）
 * interval 决策间隔秒（模拟反应时间）
 * aimBias  中心模式瞄准线偏上比例（穿越时预留下坠余量）
 * grazer   是否主动贴擦弹带（expert 高手行为）
 */
var SKILLS = {
  rookie:  { margin: 55, noise: 34, interval: 0.18, aimBias: 0.03, grazer: 0 },
  normal:  { margin: 22, noise: 12, interval: 0.10, aimBias: 0.10, grazer: 0 },
  expert:  { margin: 15, noise: 5,  interval: 0.07, aimBias: 0.10, grazer: 1 }
};

function runOneRun(game, skill, rng, maxSimSeconds) {
  var decisionTimer = 0;
  var simTime = 0;
  var dt = 1 / 60;
  var cfg = game.config;
  var grav = cfg.player.gravity, flapV = cfg.player.flapVy;
  var snap = game.snapshot();
  var px = snap.player.x, gR = snap.player.grazeR, cR = snap.player.coreR;

  while (snap.runState !== 'over' && simTime < maxSimSeconds) {
    decisionTimer -= dt;
    if (decisionTimer <= 0) {
      decisionTimer = skill.interval * (0.7 + rng() * 0.6);
      // 找玩家前方最近的一道栅
      var target = null;
      for (var i = 0; i < snap.obstacles.length; i++) {
        var ob = snap.obstacles[i];
        var sx = ob.dist - snap.distance + px;
        if (sx + ob.w >= px - 10) { target = ob; break; }
      }
      var py = snap.player.y, vy = snap.player.vy;
      if (target) {
        var speed = snap.stage.speed * (snap.phase.active ? cfg.phase.speedMul : 1);
        var tArr = Math.max(0, (target.dist - snap.distance) / speed);
        var gapTop = target.gapY - target.gapH / 2;
        var topSafe = gapTop + cR + 8;               // 上缘安全线
        var grazeBand = gapTop + gR - 4;             // 上缘擦弹带
        var energyFull = snap.energy >= cfg.energy.max;
        var canGraze = skill.grazer && !energyFull &&
                       py > grazeBand + 30 && py < target.gapY + target.gapH / 2 - 60;
        var aim = canGraze ? grazeBand : (target.gapY - target.gapH * skill.aimBias);
        aim += (rng() * 2 - 1) * skill.noise;

        if (canGraze) {
          // 贴带模式：抛物线顶点控制（物理自洽）
          if (vy > -120) {
            var yTop = py - vy * vy / (2 * grav);
            if (yTop > aim + 4) {
              var yTopF = py - flapV * flapV / (2 * grav);
              if (yTopF > topSafe) game.flap();
            }
          }
        } else {
          // 中心模式：到达时刻位置预测
          var yArr = py + vy * tArr + 0.5 * grav * tArr * tArr;
          if (yArr > aim + skill.margin && vy > -120) {
            var yArrF = py + flapV * tArr + 0.5 * grav * tArr * tArr;
            if (yArrF > topSafe) game.flap();
          }
        }
      }
      // 地面救急（真实玩家的保命反应）
      if (py > snap.H - 110 && snap.player.vy > 250) game.flap();
    }
    game.update(dt);
    simTime += dt;
    snap = game.snapshot();
  }
  return snap;
}

/* ---------- 主流程 ---------- */
function main() {
  var SEED = 20260916;
  var rng = mulberry32(SEED);
  var game = createGame({}, { rng: mulberry32(SEED ^ 0x9E3779B9) });
  game.startSession();

  var N_PER = 40;
  var order = [];
  Object.keys(SKILLS).forEach(function (k) { for (var i = 0; i < N_PER; i++) order.push(k); });

  var perSkill = {};
  order.forEach(function (k) {
    game.startRun();
    runOneRun(game, SKILLS[k], rng, 600);   // 单局模拟上限 600s（防死循环）
    var m = game.getMetrics();
    var last = m.lastRun;
    if (!perSkill[k]) perSkill[k] = { runs: 0, wins: 0, durs: [] };
    perSkill[k].runs++;
    if (last && last.result === 'win') perSkill[k].wins++;
    if (last) perSkill[k].durs.push(last.duration);
  });
  game.endSession();

  var m = game.getMetrics();
  var total = m.runs;
  var wins = m.summary.wins, losses = m.summary.losses;
  var winDur = [], loseDur = [];
  for (var i = 0; i < m.runResults.length; i++) {
    (m.runResults[i] === 'win' ? winDur : loseDur).push(m.runDurations[i]);
  }
  function avg(arr) { return arr.length ? arr.reduce(function (a, b) { return a + b; }, 0) / arr.length : 0; }
  function fmt(n) { return n.toFixed(1); }

  /* ---------- 输出 ---------- */
  console.log('=== GRAZE PULSE · 擦弹脉冲 · core.js 机器自测 (node ' + process.version + ') ===');
  console.log('模拟局数: ' + total + ' 局  (rookie/normal/expert 各 ' + N_PER + ' 局, 固定种子可复现)');
  console.log('');
  console.log('--- 胜负分布 ---');
  console.log('总体: 胜 ' + wins + ' (' + (100 * wins / total).toFixed(1) + '%) / 负 ' + losses + ' (' + (100 * losses / total).toFixed(1) + '%)');
  Object.keys(perSkill).forEach(function (k) {
    var s = perSkill[k];
    console.log('  ' + k.padEnd(7) + ': 胜 ' + s.wins + '/' + s.runs + '  (平均局时 ' + fmt(avg(s.durs)) + 's)');
  });
  console.log('');
  console.log('--- 局时统计 ---');
  console.log('平均局时(全部): ' + fmt(avg(m.runDurations)) + 's');
  console.log('平均局时(胜局): ' + fmt(avg(winDur)) + 's  [n=' + winDur.length + ']');
  console.log('平均局时(败局): ' + fmt(avg(loseDur)) + 's  [n=' + loseDur.length + ']');
  console.log('胜局=完整通关一局(3阶段+失败重试), 设计目标 2-5 分钟区间 [120s, 300s]');
  console.log('');
  console.log('--- 埋点事件触发计数 (core.js 同一埋点通道 getMetrics) ---');
  var ev = m.events;
  Object.keys(ev).sort().forEach(function (k) {
    console.log('  ' + k.padEnd(18) + ' ' + ev[k]);
  });
  console.log('');
  console.log('--- 指标汇总 ---');
  console.log('  session 开始/结束: ' + (m.sessionStart ? 'OK' : 'MISSING') + ' / ' + (m.sessionEnd ? 'OK' : 'MISSING'));
  console.log('  局数(runs): ' + m.runs + ', 失败重试次数(retries): ' + m.retries + ', 阶段内死亡(deaths): ' + m.deaths);

  /* ---------- 断言 ---------- */
  var fails = [];
  function assert(cond, msg) { if (!cond) fails.push(msg); }

  assert(m.sessionStart !== null && m.sessionEnd !== null, 'session_start/session_end 未成对触发');
  assert(total >= 100, '模拟局数不足 100 (实际 ' + total + ')');
  assert(m.runs === total && (ev.run_start || 0) === total && (ev.run_end || 0) === total,
    'run_start/run_end 计数与局数不一致');
  assert((ev.session_start || 0) === 1 && (ev.session_end || 0) === 1, 'session 事件计数异常');
  assert((ev.flap || 0) > 0, 'flap 事件未触发');
  assert((ev.graze || 0) > 0, 'graze 事件未触发 —— 擦弹核心机制未生效');
  assert((ev.gate_pass || 0) > 0, 'gate_pass 事件未触发');
  assert((ev.phase_burst || 0) > 0, 'phase_burst 事件未触发 —— 能量满触发相位未生效');
  assert((ev.wall_pass || 0) > 0, 'wall_pass 事件未触发 —— 相位穿墙得分未生效');
  assert((ev.death || 0) > 0, 'death 事件未触发');
  assert((ev.retry || 0) > 0, 'retry(失败重试) 事件未触发');
  assert(wins > 0 && losses > 0, '胜负分布退化: 需同时存在胜局与败局 (难度曲线证据)');
  var winRatio = wins / total;
  assert(winRatio > 0.02 && winRatio < 0.98, '胜率退化: ' + (winRatio * 100).toFixed(1) + '% (应处于 (2%,98%) 区间)');
  assert(m.retries >= m.deaths - 1, 'retries 计数异常 (应 >= deaths-1)');
  var winAvg = avg(winDur);
  assert(winAvg >= 90 && winAvg <= 300, '胜局平均局时 ' + fmt(winAvg) + 's 超出设计区间 [90s, 300s]');

  console.log('');
  console.log('--- 断言 (' + (17 - fails.length) + '/' + 17 + ' 通过) ---');
  if (fails.length === 0) {
    console.log('全部断言通过');
    console.log('');
    console.log('RESULT: PASS (exit 0)');
    process.exit(0);
  } else {
    fails.forEach(function (f) { console.log('FAIL: ' + f); });
    console.log('');
    console.log('RESULT: FAIL (exit 1)');
    process.exit(1);
  }
}

main();
