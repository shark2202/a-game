# 擦弹脉冲 GRAZE PULSE

> G2-首个游戏发弹军 · 波1 · 槽 1（反应/时机型，Flappy 族差异化变体）· builder-B1

## 钩子（一句话）

**Flappy 只能「躲」，本作的核心是「贴」**：碰撞判定拆成「致命核 + 擦弹圈」两层——贴着能量栅飞过、让障碍擦进外圈就充能连击；能量攒满后下一次点按释放「相位脉冲」，直接穿墙而过反得高分。障碍不是用来躲的，是用来蹭的。

## 与最近似玩法的差异（微创新点）

最近似知名玩法：**Flappy Bird**（同类单指点按避障）。差异一句话：

> Flappy Bird 的柱子只有「碰到即死」一种判定、玩法是单命无尽跑分；本作把每个障碍拆成「致命核（碰=死）+ 擦弹圈（碰=充能连击）」双层判定，主动贴险换取资源——擦弹充能满后可触发穿墙相位（穿柱得分+回能，形成风险循环）、被撞时满能自动紧急相位免死、擦弹瞬间获得 0.15s 缓冲豁免；局制结构为「3 阶段 checkpoint + 5 颗重试珠」，一局 2-5 分钟有胜负终点，而非无尽跑分。

即：把避障游戏反转为「贴险换资源」的循环（graze → energy → phase → wall-pass → graze）。

## 玩法与运行说明

- **浏览器直玩**：双击 `index.html`（零外部资产、零网络依赖、无构建链；美术 Canvas 程序绘制，音效 WebAudio 程序合成）。
- **一句话教程**：点按飞行；贴近能量栅飞过（外圈虚线圆碰栅）= 擦弹充能；能量满后下一次点按 = 穿墙相位。
- **规则**：撞核即死（擦弹圈不算）；撞地即死；一局 5 颗重试珠，死后回到当前阶段起点；飞完 3 阶段（13500 距离）= 通关。难度随阶段递进（速度↑ 缝隙↓ 栅距↓）。
- **核心自测**：`node test.js`（无浏览器环境模拟 120 局，输出胜负分布/局时/埋点计数，退出码 0/1）。

## 工程结构（核心与渲染分离）

| 文件 | 职责 |
|---|---|
| `core.js` | 纯 JS 游戏核心（规则/状态机/数值/埋点），不依赖 DOM；浏览器挂 `window.GrazePulse`，Node 下 `require('./core.js')` |
| `test.js` | 机器自测：三档 bot（rookie/normal/expert）× 40 局，含主动贴弹策略的 expert bot |
| `index.html` | 渲染层：只做输入/绘制/音效/特效，所有规则在 core.js |

## 难度曲线（core 参数全部可调）

数值集中在 `core.js` 顶部 `DEFAULT_CONFIG`，`GrazePulse.createGame(configOverride)` 可覆盖任意项：

| 阶段 | 速度 | 缝隙宽 | 栅距 |
|---|---|---|---|
| 第 1 境 · 青野 | 90 u/s | 195 | 520 |
| 第 2 境 · 金峡 | 110 u/s | 175 | 470 |
| 第 3 境 · 赤渊 | 130 u/s | 158 | 435 |

其余可调关键参数：重力/脉冲冲量、致命核与擦弹圈半径、擦弹缓冲时长、相位时长与加速、能量收益、重试珠数量、各分值等。

## 埋点通道

内存计数 + 导出接口，Node 与浏览器同一通道（`game.getMetrics()`）：

- 浏览器：`window.__metrics`（每秒刷新）与 `window.__getMetrics()`（实时取）
- test.js：直接读 `game.getMetrics()`（同一实现）
- 覆盖：`session_start/end`、`run_start/end`（局数）、`runDurations`（单局时长）、`retry`（失败重试次数：阶段内重生 + 败局再开）、`death`、`flap`、`graze`、`gate_pass`、`phase_burst`、`emergency_phase`、`wall_pass`、`stage_up`、`win/lose`

## 自检记录（本机实跑输出，node v24.16.0 / Windows）

① `node --check core.js` → **通过**（无输出即通过）

② `node test.js` → **PASS，退出码 0**，真实输出如下：

```
=== GRAZE PULSE · 擦弹脉冲 · core.js 机器自测 (node v24.16.0) ===
模拟局数: 120 局  (rookie/normal/expert 各 40 局, 固定种子可复现)

--- 胜负分布 ---
总体: 胜 80 (66.7%) / 负 40 (33.3%)
  rookie : 胜 7/40  (平均局时 155.0s)
  normal : 胜 36/40  (平均局时 147.0s)
  expert : 胜 37/40  (平均局时 132.4s)

--- 局时统计 ---
平均局时(全部): 144.8s
平均局时(胜局): 135.4s  [n=80]
平均局时(败局): 163.7s  [n=40]
胜局=完整通关一局(3阶段+失败重试), 设计目标 2-5 分钟区间 [120s, 300s]

--- 埋点事件触发计数 (core.js 同一埋点通道 getMetrics) ---
  death              305
  emergency_phase    26
  flap               78612
  gate_pass          3688
  graze              5052
  lose               40
  phase_burst        642
  retry              305
  run_end            120
  run_start          120
  session_end        1
  session_start      1
  stage_up           228
  wall_pass          86
  win                80

--- 指标汇总 ---
  session 开始/结束: OK / OK
  局数(runs): 120, 失败重试次数(retries): 305, 阶段内死亡(deaths): 305

--- 断言 (17/17 通过) ---
全部断言通过

RESULT: PASS (exit 0)
```

**读数说明**：三档 bot 胜率 17.5% / 90% / 92.5%，梯度清晰（上手有门槛、可习得、高手偶有翻车——贴弹是风险行为）；平均局时 144.8s，胜局 135.4s、败局 163.7s（败局更久是因为用完 5 颗重试珠的苦战局），全部落在 2-5 分钟设计区间；擦弹机制全链路触发（graze 5052 → phase_burst 642 → wall_pass 86 → emergency_phase 26）。

## 硬约束对照

- [x] 零现金成本：Canvas 程序绘制 + WebAudio 合成，零外部资产
- [x] 浏览器直玩：双击 index.html
- [x] 核心与渲染分离：core.js 无 DOM 依赖，node 下可跑
- [x] 机器可测：node test.js，120 局，17 项断言
- [x] 埋点：session/局数/局时/重试，内存计数 + window.__metrics + test.js 同通道
- [x] 一局 2-5 分钟：通关设计时长 ≈ 2 分钟（3 阶段），含失败重试的完整一局 135-164s
- [x] 30 秒可上手：单指操作 + 标题页一句话教程（3 行说明）
- [x] 难度曲线存在且可调：三阶段参数递进，全部集中在 DEFAULT_CONFIG
- [x] 玩法差异化：双层碰撞 + 擦弹充能 + 相位穿墙（见上），非克隆
