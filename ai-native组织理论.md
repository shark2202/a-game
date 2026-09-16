---
type: Book
title: AI 原生组织：理论与可执行规范（书籍版）
description: 书籍版第 1 版修订九的 Markdown 转写本（68 页：正文 v1.0 + 前言部 + 附录 A–O），由 book/ai-native组织理论.html 经确定性脚本零漂移转写、多 agent 审校与独立审计后装配。
resource: book/ai-native组织理论.html
tags: [ai-native, organization-theory, aoos, book, specification]
timestamp: 2026-09-16T11:47:36+08:00
---



AI-NATIVE ORGANIZATION THEORY & SPECIFICATION

# AI 原生组织 理论与可执行规范

> 组织不再只是一个被设计出来的结构，  
> 而是一种能够持续生成正确协作结构的能力。

**Static Organization → Generative Organization**

*v1.0 书籍版 · 2026 年 9 月*

# 前言部

## 出版说明

本书是《AI-native Organization 理论与可执行规范》的**书籍版**，正文依据 v1.0 完成版白皮书完整收录，未作删改；在此基础上，为阅读与检索方便，重新组织为书籍结构，并补充了前言与附录。

### 一、正文

v1.0 完成版合并了规范修正案 No.1《认知债务》与 No.2《验证额度》，并新增组织资产负债表与 Goal Fidelity 全链路核对。全书五十章及方法论总纲、最终理论模型、术语总表、结论，均按原文收录。

### 二、章节编号

章节编号 21–28 在 v0.1 拟定目录后、被后续版本的结构调整跳过，形成编号断档。为保持与正文交叉引用（如「见第四十七章」）及历史版本的一致性，本版**不重排编号**，编号从第二十章直接跳至第二十九章。

### 三、新增部分

以下内容为书籍版新增，取材于项目同期形成的深度研究材料：

| 新增 | 内容 | 来源 |
|---|---|---|
| 阅读指南 | 核心命题、全书骨架、八大支柱、三条阅读路径、版式约定 | 深度研究报告 §二–§三 |
| 版本演进史 | v0.1 → v1.0 五次演进与收敛链 | 深度研究报告 §二 |
| 附录 A 思想谱系 | 十四条谱系对接关系与独创性分级（修订八新增：后 9·11 去中心化组织通俗文献群、丰田 TPS/精益现场失败应对、治理审计与合规市场三行；修订九新增：涌现与复杂系统行；组织经济学行附兑现注记） | 深度研究报告 §四–§五；打胜仗的思想研究 08 映射；丰田失败学研究 08–09；商用模式研究 90；诺贝尔经济学演讲集研究 09；涌现与复杂系统调研 09（P-006 复核 PASS） |
| 附录 B 证据链 | 人机协同认知代价的十篇文献证据链（论证链、方法学对照、条款映射、关系结构、引用纪律）+ 第 12 篇关联考证（邓宁-克鲁格三级读法与元原则统计方法论应验） | 《三篇 arXiv 论文深度解析》《认知债文献解读》（总览 index + 十篇逐篇研读 + 第 11 篇关系性分析 + 第 12 篇关联考证） |
| 附录 C Goal 保真 | 三面失效模型、五个缺口与保障协议 v1.1 | 《AI Agent 如何完整理解并实现 Goal》《Goal 保真深度分析 v1.1 增补》 |
| 附录 D 参考文献 | 分组文献清单（含可核查链接） | 深度研究报告 References、arXiv 解析、视频文献清单 |
| 附录 E 机器侧经验复利 | WikiSkill 与 OpenEvolve 双路线拆解、对偶关系、判断基准三问的种群化映射 | 《WikiSkill-深度分析报告》《OpenEvolve-深度分析报告》《OpenEvolve×判断基准-映射分析》 |
| 附录 F 理论发展提案 | 三份 v1.1 候选提案：Human Evolution Layer（第四十五章升格第九篇）、判断基准三因子形式化（合成规则与预演引擎）、过程管控协议（产物四层/三态里程碑/监督三通道） | 《human-evolution-layer/》《judgment-baseline-formalization/》《过程管控协议提案 v0.1》（草案 + 评估） |
| 附录 G 延伸解读 | 三篇实践文章的条款映射与交叉洞察（衰减 / 再生 / 协作） | 《微信文章深度解析/》 |
| 附录 H 自洽性审查 | 组织形成函数的首次显式运行：三无上下文审查员的独立判决、分层自洽结论、G1–G7 未声明缺口清单 | 《理论自审报告 v1.0-r2》《理论自洽性审查报告-组织化执行 v1》 |
| 附录 I 提案治理 | 三提案 fresh-agent 评审判决、I-DISC 应验与就地勘误、Status-Quo 对照、分阶段并版路线与 DecisionRecord | 《v1.1 并版方案-组织化评审后》及两份评审报告 |
| 附录 J 组织运行实录 | AOOS 的历次应用：prompt-library-research-org 试点批次（principal + orchestrator + 10 并行 researcher）与 n=2→n=10 组织证据（修订八补记第五至第十次成军与计数纪律） | 《prompt-library-研究/》（组织规范-AOOS、试点批次总结、逐项分析）；组织运行记录/ 全部 AOOS 规范 |
| 附录 K 操作手册 | 理论核心问题的总回答：最优元策略（生成+门控+收敛）、六步路径、分层分区依据、中断/调整/迭代、五条经济学论证与死法预演 | 《理论深化研究/超复杂目标的组织构建路径-理论综合》（含两轮追问补答） |
| 附录 L Skill 生态研究 | 五个 skill 深度样本（协议/工艺/命令/工厂四型 + 进化引擎）、有效性六机制、与理论的四层关系（micro-AOOS / n=5 趋同佐证 / 运行时层 / 三问种群化）与理论反哺缺口 | 《skills研究/》（grilling / patent-write / eli5 / cangjie-skill / darwin-skill 五份快照+解读 + 90-综合分析） |
| 附录 M 丰田失败学对照 | 现场失败应对与理论的双向对照：六个空层（书的盲区=理论最 AI-native 部分）、七处精度落差（v1.2 候选）、方法论纪律与证据折扣 | 《丰田失败学研究/》（09 理论映射 + 10 证据台账 + 11 敌意审查 + 12–15 二阶段） |
| 附录 N 组织经济学映射 | 诺奖讲演五十年对理论的定价层补全：24 条正向映射精选、附录 A 缺口兑现（定理级 2+机制级 2）、G-N1…N8 八缺口与对称诚实 | 《诺贝尔经济学演讲集研究/》（09 映射 + 08 交叉 + 90 综合 + 91 审计 PASS） |
| 附录 O 商用模式研究 | 理论自身的商业可行性判定：串行三段主线（审计诊断→开源+open-core→合作出证）、原则对模式的淘汰与加固、卖点红线与六条死法 | 《商用模式研究/》（05 理论自筛 + 90 综合 v2 + 91 敌意审查 + verifier ACCEPT） |

### 四、勘误

术语总表中「Ultrafastable System」系「Ultra-stable System（超稳定系统，源自 Ashby 的 homeostat）」之笔误，本版已予改正。此勘误由深度研究报告 §六.7 指出。此外，视频文献清单的引用勘误（MIT 论文编号误标、速度错觉作者漏列、奥克兰心流数据口径等）已随证据链核实一并修正，明细见附录 B 第六节「引用纪律」。

### 五、阅读器

本书为单文件 HTML，无需网络即可阅读。支持：左侧目录抽屉（快捷键 M）、键盘左右方向键翻页、主题与字号切换（T / F）、进度记忆（自动回到上次阅读位置）、打印时全卷展开（⎙）。正文内部交叉链接（如「见 46.3」）可直接跳转对应章节。

## 摘要

经典组织理论的工程化重点，是设计一个稳定的组织结构，使有限的人类能力 能够通过分工、层级、授权、流程、标准化和控制，持续完成复杂目标。

AI-native Organization 的核心问题则发生了变化： 当认知、执行、协调和能力获取成本显著下降之后， 组织是否仍然必须以固定岗位、固定人员和固定流程为基本结构？

> **核心命题：** 经典组织把协作结构固化下来；AI-native Organization 将“组织结构的形成”本身变成一种可以计算、生成、重构和学习的能力。

因此，本理论研究的对象不是 AI Agent 本身，而是： **在 AI 条件下，组织为什么存在、如何形成、如何授权、 如何协调、如何动态重构，以及如何把组织经验持续沉淀为组织能力。**

v1.0 在此之上补全了时间维度：组织不仅要在结构上完备，还要在运行中持久。 当执行与认知都可以委托时，**判断带宽** 成为组织唯一的稀缺资源—— 委托会侵蚀它（认知债务），信任可以节约它（验证额度）， 而两者的净额构成组织真正的资产负债表。

## 阅读指南

本书不是一本关于「AI Agent 如何工作」的技术手册，而是一份关于「组织如何在 AI 条件下存在」的理论与规范。

### 一、核心命题

> **经典组织把协作结构固化下来（Static Organization）；AI-native Organization 将「组织结构的形成」本身变成一种可计算、可生成、可重构、可学习的能力（Generative Organization）。**

本书的研究对象不是 AI Agent 本身，而是：在 AI 条件下，组织为什么存在、如何形成、如何授权、如何协调、如何动态重构，以及如何把组织经验持续沉淀为组织能力。

### 二、全书骨架：一条收敛链

理论经五个版本加一次修正案合并收敛而成，每一版回答一个递进的问题：

| 版本 | 回答的问题 | 对应篇章 |
|---|---|---|
| v0.1 | 组织如何被生成 | 第一至三篇（第一至二十章） |
| v0.2 | 生成过程中，谁的判断力在流失、如何观测与阻断 | 第四篇（第二十九至三十七章） |
| v0.3 | 生成机制在什么条件下是可能的、可保真的、可停止的 | 第五篇（第三十八至四十三章） |
| v0.4 | 性质的判定是可计算的吗？这一切最终为了什么 | 第六篇（第四十四至四十五章） |
| v0.5 | 作为总纲的那条原则，自己能不能被检查 | 第七篇（第四十六至四十七章） |
| v1.0 | 组织如何在时间中存活（认知债务与验证额度） | 第八篇（第四十八至五十章） |

> 前三版补上**对象层** 的可判定性，v0.5 补上**方法层** 的可判定性——若方法层不可判定，它统摄的所有判定都建立在一条不可检查的假设上。v1.0 在此之上补全**时间维度**：结构完备之外，组织还必须在运行中持久。

### 三、八大支柱

> **① 方法论总纲** 判断基准原则：维度 → 死法 → 可逆性，任何含不可逆维度的决策必须依次回答的三问。

> **② 本体与组织形成** 统一 Actor 抽象、组织形成函数、组织四重定义、AOOS 规范与组织运行时。

> **③ 治理与委托** 治理链十环、Capability ≠ Authority、不可委托内核（Non-delegable Core）。

> **④ 判断力保卫** Judgment ≠ Capability、I-ACC 不变量、Ghost Capability、Regeneration Loop、降级拓扑。

> **⑤ 控制论基础** 可能性空间与 AI-nativeness 度量、必要多样性、委托 = 共轭控制 L⁻¹AL、超稳定系统警告。

> **⑥ 意图保真** Decomposition Fidelity、五道必然裂缝、收敛漏斗 L0–L4、I-DISC 判别独立性。

> **⑦ 协作形式化与组织资产** Commitment / Contract 形式化、承诺征信、Artifact before Conversation、验证额度与组织资产负债表。

> **⑧ 目的因** I-TELEO：组织的目标是人的价值与能力放大；L0–L10 控制层级阶梯与人的价值迁移。

### 四、三条阅读路径

| 路径 | 适合 | 顺序 | 约需 |
|---|---|---|---|
| **决策者快读** | 判断本书是否与自己相关 | 摘要 → 第三章（范式转变）→ 第十八章（对比）→ 第十九章（核心原则）→ 结论 | 30 分钟 |
| **工程实施** | 要把规范落进系统 | 第十四章（可执行规范）→ 第十五章（运行时）→ 第五篇（第三十八至四十三章）→ 第四十六章（执行规范） | 半天 |
| **治理研究** | 评估理论的边界与谱系 | 顺序通读全书，另读附录 A（思想谱系）、附录 B（证据链）、附录 F（理论发展提案）、附录 H（自洽性审查）与第四十七章（理论自检） | 两天 |

### 五、版式约定

| 框型 | 含义 |
|---|---|
| 引文框（左侧蓝线） | 核心命题与关键论断 |
| 公式框（等宽字体） | 形式化定义与判据 |
| 原则框（左侧绿线） | 必须满足的不变量或设计要求 |
| 警告框（左侧橙线） | 失效模式与反例警示 |

## 版本演进史

五个版本不是五次修改，而是一条严格的收敛链：每一版只在上一版遗留的最要害缺口上动刀。

| 版本 | 回答的问题 | 新增章节 |
|---|---|---|
| **v0.1** | 组织如何被生成 | 第 1–20、29–31 章：本体论、组织形成函数、AOOS 规范、运行时、12 条原则 |
| **v0.2** | 生成过程中，谁的判断力在流失、如何观测与阻断 | 第 32–37 章：Judgment / Calibration、I-ACC、Ghost Capability、Regeneration Loop、Non-delegable Core |
| **v0.3** | 这套生成机制在什么条件下是可能的、可保真的、可停止的 | 第 38–43 章：控制论基础、Decomposition Fidelity、收敛漏斗、Contract 形式化、性质全集 P-01–P-20 |
| **v0.4** | 性质的判定是可计算的吗？这一切最终为了什么 | 第 44–45 章：形式语义（LTL / CTL / 道义逻辑 / SOS）、Human Capability Migration、原则 19–20 |
| **v0.5** | 作为总纲的那条原则，自己能不能被检查 | 第 46–47 章：判断基准原则执行规范（状态机 / 判定表 / DecisionRecord / 校准判据）与自适用整改记录 |
| **v1.0** | 组织如何在时间中存活 | 合并修正案 No.1《认知债务》与 No.2《验证额度》为第 48–49 章，新增第 50 章 Goal Fidelity 全链路核对 |

### v1.0 合并说明

两份补充草案曾各自拟占用「第三十二/三十三章」，与 v0.2 已占用的编号冲突；v1.0 合并时统一重编为第四十八、四十九章（草案 No.1 写作时间早于 v0.2 合并，编号已被正文先行占用）。

> **v1.0 的时间维度：** 当执行与认知都可以委托时，判断带宽成为组织唯一的稀缺资源——委托会侵蚀它（认知债务），信任可以节约它（验证额度），而两者的净额构成组织真正的资产负债表。

### 外部评价摘要

同期形成的深度研究报告对理论的总体判断是：一份罕见地同时具备**理论野心、工程纪律与认识论诚实** 的规范类文稿——它把组织从「结构」重定义为「生成过程」，把「人的判断力」设为唯一不可再生的组织资源，并且对自身执行了它要求他者的一切纪律。当前的主要差距是「从纸上到读数」：所有度量尚无第一组真实数据。（该判断系 v1.0 成文时点状态；首批实测读数已随后续研究产生，见附录 E/J 修订八注。）

## 目录

**前言部**

- [出版说明](#出版说明)
- [摘要](#摘要)
- [阅读指南](#阅读指南)
- [版本演进史](#版本演进史)

**卷首 · 方法论总纲**

- [方法论总纲：Judgment Baseline Principle（判断基准原则）](#方法论总纲judgment-baseline-principle判断基准原则)

**第一篇 · 范式之问**

- [一、问题定义](#一问题定义)
- [二、经典组织工程范式](#二经典组织工程范式)
- [三、AI-native 范式转变](#三ai-native-范式转变)

**第二篇 · 本体与组织形成**

- [四、AI-native Organization 本体](#四ai-native-organization-本体)
- [五、组织的重新定义](#五组织的重新定义)
- [六、组织形成理论](#六组织形成理论)
- [七、委托、授权与责任](#七委托授权与责任)
- [八、能力与 Actor Pool](#八能力与-actor-pool)
- [九、协作理论](#九协作理论)
- [十、Role 与 Dynamic Organization](#十role-与-dynamic-organization)
- [十一、组织作为缓存与学习系统](#十一组织作为缓存与学习系统)
- [十二、AI-native Organization Engineering](#十二ai-native-organization-engineering)

**第三篇 · 形式理论与可执行规范**

- [十三、形式理论](#十三形式理论)
- [十四、可执行规范](#十四可执行规范)
- [十五、组织运行时](#十五组织运行时)
- [十六、治理模型](#十六治理模型)
- [十七、TOC 与组织优化](#十七toc-与组织优化)
- [十八、经典组织与 AI-native Organization 对比](#十八经典组织与-ai-native-organization-对比)
- [十九、核心原则](#十九核心原则)
- [二十、规范演进路线](#二十规范演进路线)

**第四篇 · 组织学习与判断力保卫**

- [二十九、组织学习、组织记忆与知识沉淀](#二十九组织学习组织记忆与知识沉淀)
- [三十、意图保持、判断与组织记忆的统一闭环](#三十意图保持判断与组织记忆的统一闭环)
- [三十一、组织学习质量门（Learning Quality Gate）](#三十一组织学习质量门learning-quality-gate)
- [三十二、Judgment：组织本体的缺失元素](#三十二judgment组织本体的缺失元素)
- [三十三、问责—能力一致性（Accountability–Capability Consistency）](#三十三问责能力一致性accountabilitycapability-consistency)
- [三十四、能力衰减与 Ghost Capability](#三十四能力衰减与-ghost-capability)
- [三十五、判断再生：Regeneration Loop](#三十五判断再生regeneration-loop)
- [三十六、不可委托内核、降级与可逆性](#三十六不可委托内核降级与可逆性)
- [三十七、增补不变量与原则](#三十七增补不变量与原则)

**第五篇 · 控制论基础与意图保真**

- [三十八、控制论基础：可能性空间、必要多样性与共轭控制](#三十八控制论基础可能性空间必要多样性与共轭控制)
- [三十九、Decomposition Fidelity：从意图到决策闭包](#三十九decomposition-fidelity从意图到决策闭包)
- [四十、AI 辅助的可能性空间收敛](#四十ai-辅助的可能性空间收敛)
- [四十一、Commitment 与 Contract 的形式化](#四十一commitment-与-contract-的形式化)
- [四十二、形式化性质全集](#四十二形式化性质全集)
- [四十三、版本说明与编号约定](#四十三版本说明与编号约定)

**第六篇 · 形式语义与人的价值迁移**

- [四十四、形式语义（Phase A）](#四十四形式语义phase-a)
- [四十五、Human Capability Migration：人的价值迁移](#四十五human-capability-migration人的价值迁移)

**第七篇 · 元原则的可判定化**

- [四十六、判断基准原则执行规范：从元原则到可判定门禁](#四十六判断基准原则执行规范从元原则到可判定门禁)
- [四十七、Judgment Baseline Self-Check：对本理论自身的整改记录](#四十七judgment-baseline-self-check对本理论自身的整改记录)

**第八篇 · 时间维度：认知债务与验证额度**

- [四十八、认知债务与组织能力保全](#四十八认知债务与组织能力保全)
- [四十九、组织资产与验证额度](#四十九组织资产与验证额度)
- [五十、Goal Fidelity：全链路核对与未闭合缺口](#五十goal-fidelity全链路核对与未闭合缺口)

**卷末 · 模型、术语与结论**

- [最终理论模型](#最终理论模型)
- [术语总表](#术语总表)
- [结论](#结论)

**附录**

- [附录 A · 思想谱系与文献定位](#附录-a--思想谱系与文献定位)
- [附录 B · 证据链：人机协同的认知代价](#附录-b--证据链人机协同的认知代价)
- [附录 C · Goal 保真：失效模型与保障协议](#附录-c--goal-保真失效模型与保障协议)
- [附录 D · 参考文献](#附录-d--参考文献)
- [附录 E · 机器侧经验复利：WikiSkill 与 OpenEvolve](#附录-e--机器侧经验复利wikiskill-与-openevolve)
- [附录 F · 理论发展提案：Human Evolution 与判断基准形式化](#附录-f--理论发展提案human-evolution-与判断基准形式化)
- [附录 G · 延伸解读：三篇实践文章](#附录-g--延伸解读三篇实践文章)
- [附录 H · 理论自洽性审查：组织的首次成军](#附录-h--理论自洽性审查组织的首次成军)
- [附录 I · 提案治理：三提案评审与 v1.1 并版方案](#附录-i--提案治理三提案评审与-v11-并版方案)
- [附录 J · 组织运行实录：AOOS 的首次应用](#附录-j--组织运行实录aoos-的首次应用)
- [附录 K · 操作手册：超复杂目标的组织构建路径](#附录-k--操作手册超复杂目标的组织构建路径)
- [附录 L · Skill 生态研究：形态、机制与趋同证据](#附录-l--skill-生态研究形态机制与趋同证据)
- [附录 M · 丰田失败学对照](#附录-m--丰田失败学对照现场失败应对与理论的互鉴)
- [附录 N · 组织经济学映射](#附录-n--组织经济学映射诺奖讲演五十年对理论的定价层补全)
- [附录 O · 商用模式研究](#附录-o--商用模式研究理论自身的商业可行性判定)
- [版权页](#版权页)

# 卷首 · 方法论总纲

## 方法论总纲：Judgment Baseline Principle（判断基准原则）

本理论讨论的对象——组织如何生成、能力如何委派、判断如何不流失—— 最终都收敛到同一个问题：**如何判断。** 本节给出一条贯穿全篇的元原则。 它既适用于组织设计，也适用于个体判断； 既适用于本理论自身，也适用于对它的每一次使用。

> **Judgment Baseline Principle**  
>
> 任何**包含不可逆维度** 的决策， 都不应仅依据预期收益进行判断， 而必须**依次** 回答三个问题：  
>
> **维度：** 我从哪些维度判断？  
> **死法：** 如果判断错误，系统最可能如何失败？  
> **可逆性：** 如果失败，能否以有限成本回退，并通过反馈逐步收敛？

### 0.1 适用范围：什么叫「重要决策」

原则中「重要」一词需要严格定义，否则它会在两个方向上失效—— 要么被滥用于所有事项，要么被闲置（因为事事都显得不重要）。

```
重要决策  ≝  Decision  且  Decision 包含不可逆维度
```

> **自适用性：** 本原则**用第三问来划定自身的适用范围**。  
> **用一条腿支撑另一条腿的适用边界**， 这种自适用性是它够格被称为元原则的硬标志—— 它不依赖外部标准来告诉自己何时该被启用。

反过来也成立：若一个决策完全可逆，则不必启动整套流程，直接试即可。

### 0.2 第一问：维度（三个子问，缺一不可）

| 子问 | 内容 | 缺失后果 |
|---|---|---|
| **区分维度** | 候选之间真正不同的轴有哪些（要求 ≥ 2 个独立维度） | 发现不了候选集本身不完备 → **在错误的选项里选对了** |
| **评价维度** | 从哪几个**可观测** 指标判定做成 | 完成后无法判定，全凭感觉争论 |
| **反向维度** | 这些指标会不会反向侵蚀原目标 | 指标被优化、目标被损害（KPI > 目标） |

> ⚠ **概念漂移警告：** 「区分维度」与「评价维度」是**两个不同的东西**， 且都必须存在。  
> 只保留评价维度而丢失区分维度， 恰好会退化成本原则最反对的形态： **沿着单一成功指标一路优化到底。**

### 0.3 第二问：死法（三个子问）

| 子问 | 说明 |
|---|---|
| **最可能如何失败** | 列出失效模式及其**触发条件**（不是失效名称） |
| **代价加权，而非概率排序** | 按 `概率 × 代价` 排序。**不是找最可能怎么死，是找死了最疼的那个**——致命项通常在尾部 |
| **目标本身是否可能错误** | 见下 |

> **最容易被忽略、也最贵的一问：**  
> 如果被度量的东西本身是错的，它会表现成什么？ 我们如何在付出不可逆代价之前发现？

前两问默认目标已给定且正确。但决策失败最贵的一种从来不是方案失败，而是：

> ⚠ **Type III Error：精确地解决了一个不该被解决的问题。**  
> 它的可怕之处在于： **维度指标会全绿，死法一个都不会触发，可逆性根本不会被启用。**  
> 整套原则在这个错误面前是**完全静默** 的—— 除非显式加入这一问。

目标错误的信号通常来自**外部**： 用户的实际行为与预设指标背离、 相邻系统出现异常、 或者一个耗时两周却无人过问的问题。

### 0.4 第三问：可逆性（三个子问，必须分开答）

> ⚠ **「可回退」与「代价有界」是两个独立维度，可以分别失败：**  
> · **技术上完美回滚，代价无界**——数据库恢复了，监管处罚与客户流失没有  
> · **代价有界，技术上不可逆**——状态无法恢复，但损失恰好在可承受范围内

| 子问 | 要求 |
|---|---|
| **能否回退** | 状态可否恢复 |
| **最坏损失是否有界** | 不需要恢复也能活下去 |
| **回退路径是否预先存在** | 而非失败后临时设计——临时设计的回退几乎总是失败 |
| **是否留下可供未来检验的证据** | 见下 |

> **最后一条是 v0.3 新增：** **可逆性是止损，留档才是收学费。**  
> 若一次尝试没有留下可供未来检验的证据， 那么即使可逆，它的价值也归零—— 组织只付出了成本，没有获得能力。 这条把本原则与 Contribution Log、延迟复盘机制直接接通。

### 0.5 判读工具：可回退 × 可收敛

「能否回退」与「能否通过反馈收敛」是两个独立性质， 交叉后得到四种必须区别对待的情形：

|  | 可反馈收敛 | 不可反馈收敛 |
|---|---|---|
| 可回退 | **最优区**：放心试，快速迭代（灰度 / A/B） | **陷阱区**：可以反复试，但每次失败不产生信息 → 便宜但没有进展 |
| 不可回退 | **谨慎但可做**：一次定向，之后持续收敛（架构选型的典型形态） | **绝对禁止**：既不回退、又不产生信息 → 这不是决策，是赌博 |

> ⚠ **右下角那格最危险，且最容易被误判为安全。**  
> 「以有限成本回退」会给出虚假的安全感——反正能重来。 但**能重来不等于下一次会更好**。

```
可反馈收敛的可观测判据：
每一次失败，都必须降低下一次失败的概率。

判定方式：观测错误率是否随迭代轮次单调下降。
平了 → 没有在收敛，继续试只是在消耗预算。
```

### 0.6 为什么顺序是强制的

三问不是三个并列检查项，而是一条**单向依赖链**：

```
Ⅰ 先看什么
   └→ 定义了度量，后续两步才有信息基础
        没有Ⅰ：无法识别偏离（多少算失败？）
               无法判断收敛（拿什么当反馈信号？）
        │
        ▼
Ⅱ 再看怎么死
   └→ 定义了风险模型，才知道Ⅲ要保护什么
        没有Ⅱ：回退路径无从设计，因为不知道会坏在哪
        │
        ▼
Ⅲ 最后决定能否试
   └→ 它是前两步的产物，不是独立的第三项
        跳过前两步直接答Ⅲ：会得到「能试试」
        │
        ▼
   ── 而这正是绝大多数灾难的入口 ──
```

> **本原则真正的锋利处：** 绝大多数事故**不是回答错了这三问**， 而是压根没问，直接跳到了「试试看」。

### 0.7 浓缩

```
先看什么，再怎么死，最后决定能否试。
```

> **变体（更锋利，也更可执行）：**  
> **先看什么，再怎么死，最后——能不能先小死一次。**  
>
> 理由是实质的而非修辞的：  
> · 「能否试」是二元的，而「能不能先小死一次」是**连续的**—— 它逼你回答「最小可行赌注是多少」，而不是「敢不敢」  
> · 它把不可逆时的对策内置进去了： 答案是「不能」时，下一步自动变成「怎么把它改写成能」  
> · 三个短语共用一套意象，内部一致，传播成本低

#### 不可逆决策的实验化改写（出口规则）

三问若答出「维度未穷尽、尾部覆盖不足、且不可逆」， 原则不能只说「不能试」——现实中你无法不做决定。

```
大尺度不可逆决策
    │
    │  重构
    ▼
若干个可逆的小决策  +  一个最小化的不可逆核心
    │
    ▼
只在那个最小核心上承担不可逆风险

────────────────────────────────
出口规则：
不可逆的东西不禁止做，
禁止的是按原尺度做。
```

这就是 POC、灰度发布、金丝雀、Feature Flag 真正在做的事—— **它们不是降低失败概率，而是把不可逆的表面积切小。**

### 0.8 自适用检验

本原则必须能够施加于自身，这是它作为元原则的资格条件：

| 三问 | 对本原则自身 |
|---|---|
| **维度** | 决策正确性 vs 决策成本；覆盖面 vs 时机窗口；分析完备 vs 行动速度 |
| **死法** | 维度列表虚假完备（列了七条以为只有七条）；把低概率高代价项过滤掉；**用部分可逆伪装成整体可逆**；分析瘫痪导致等价于不决策 |
| **可逆性** | **本原则本身是否有失败记录回流机制？** |

> ⚠ **最严厉的一问留给自己：** 如果没有人记录「按这套原则做过的决策，事后对了多少」， 那么本原则恰好满足它自己第三问的负面判定—— **可重复，但不可收敛。**  
>
> 它会在三年后依然自洽，也依然没有被校准过。  
>
> **因此本原则要求一个配套物：错题本。** 这正是 Contribution Log 在下一版应当承担的职能—— 从「思考审计链」升级为「校准数据源」。  
>
> **v0.5 已回填该要求：** 错题本的结构见 [46.3 DecisionRecord](#四十六判断基准原则执行规范从元原则到可判定门禁)， 校准判据见 [46.4](#四十六判断基准原则执行规范从元原则到可判定门禁)， 本原则自身的整改记录与未决事项见 [第四十七章](#四十七judgment-baseline-self-check对本理论自身的整改记录)。 但结构存在不等于已经收敛——数据仍为空， 按 0.5 的判据，本原则当前状态是 **可重复、尚未证明可收敛**。

# 第一篇 · 范式之问

## 一、问题定义

### 1.1 传统问题

传统组织需要解决的是：

```
有限的人
    ↓
有限的能力
    ↓
高协调成本
    ↓
高不确定性
    ↓
需要稳定组织
```

因此产生部门、岗位、层级、职责、流程、SOP、审批、KPI 等结构。

### 1.2 AI-native 问题

AI 改变的不是“人是否仍然存在”，而是能力与协调的经济性。

```
Goal
 ↓
需要什么能力？
 ↓
谁能够提供能力？
 ↓
是否需要长期绑定？
 ↓
谁应该获得权限？
 ↓
如何动态组合？
 ↓
目标完成后是否需要解散？
```

> 因此 AI-native Organization 的核心问题不是 **“如何管理更多 Agent”**， 而是 **“如何让组织能够动态生成”**。

## 二、经典组织工程范式

经典管理理论虽然流派众多，但从工程化角度可以抽象为一个共同问题： **把复杂的人类协作变成稳定、可重复、可控制的生产系统。**

```
GOAL
 ↓
DIVISION OF LABOR
 ↓
STRUCTURE
 ↓
AUTHORITY / RESPONSIBILITY
 ↓
PROCESS
 ↓
STANDARDIZATION
 ↓
EXECUTION
 ↓
MEASUREMENT / CONTROL
 ↓
FEEDBACK
 ↓
IMPROVEMENT
```

### 2.1 七个核心工程元素

| 元素 | 解决的问题 | 典型形式 |
|---|---|---|
| 分工 | 降低复杂性 | 专业化、岗位 |
| 结构 | 降低协调复杂性 | 部门、层级 |
| 权责 | 确定谁可以决定、谁负责 | 授权、责任、问责 |
| 流程 | 连接相互依赖活动 | Workflow、Process |
| 标准化 | 减少行为方差 | SOP、标准、制度 |
| 控制 | 确保执行不偏离目标 | KPI、审计、审批 |
| 反馈 | 持续改善 | PDCA、质量管理 |

> **经典工程化核心：** 通过稳定结构、规则和标准，弥补人的有限理性、有限注意力和有限协调能力。

## 三、AI-native 范式转变

### 3.1 从 Structure → Behavior 到 Goal → Structure

> **经典组织** Structure → Role → Person → Process → Action

> **AI-native Organization** Goal → Need → Capability → Delegation → Coordination → Structure → Action

### 3.2 Static Organization → Generative Organization

```
经典：

Organization
  ↓
固定岗位
  ↓
固定人员
  ↓
固定职责
  ↓
固定流程


AI-native：

Goal
  ↓
Organizational Need
  ↓
Capability Discovery
  ↓
Actor Selection
  ↓
Delegation
  ↓
Temporary Organization
  ↓
Execution
  ↓
Dissolve / Reconfigure
```

### 3.3 从 Identity 转向 Capability

传统组织的重要索引是“人是谁”。 AI-native Organization 更重要的索引是“谁具有什么能力”。

```
传统：

岗位 → 人


AI-native：

Goal
 ↓
Required Capability
 ↓
Capability Pool
 ↓
Actor Matching
 ↓
Assignment
```

### 3.4 从固定流程转向约束与结果

经典工程化倾向于规定 HOW。 AI-native Organization 更倾向于规定：

- Goal
- Constraint
- Authority
- Acceptance Criteria
- Required Evidence

Actor 在满足上述条件的前提下，可以动态决定 HOW。

# 第二篇 · 本体与组织形成

## 四、AI-native Organization 本体

理论上应该把 Human、AI Agent、Team 等执行主体统一到更高层的 `Actor` 概念，而不是把 AI Agent 作为理论中心。

> **Purpose** 组织为什么存在。

> **Goal** 希望实现的未来状态。

> **State** 当前世界/业务状态。

> **Capability** Actor 能够完成什么。

> **Actor** 可以执行行动的主体。

> **Authority** Actor 可以合法决定或执行什么。

> **Responsibility** Actor 对什么结果承担责任。

> **Verification Credit** 无需逐案验证即可采信某 Actor 输出的额度。 *（v1.0 增补，见第四十九章）*

> **Resource** 行动所需的资源。

> **Dependency** 活动之间的相互依赖。

> **Commitment** 一个主体对另一个主体的承诺。

> **Contract** 多个承诺、权利、义务和约束的结构。

> **Organization** 上述关系的制度化与动态协调系统。

**v1.0 增补——Verification Credit（免验证额度）：** 组织在不进行逐案验证的前提下，可以采信某个 Actor 输出的总量。

```
Verification Credit
=   来源：Liability（可追责性） + 累积 Evidence
  − 消耗：每次免检采信
  − 折旧：时间衰减 + 环境变化
  + 补充：Evidence 验证 + 实际承担后果
```

其唯一合法来源是 `Liability`——只有能够承担后果的主体才可能被真正追责， 信任才具有经济意义。这是「Authority 可被委托而 Liability 不可被委托」的直接推论。 注意资产积累方向与治理链（16.2）相反： **Liability → Accountability → Trust → Authority → Delegation**。 计量与审计见 [第四十九章](#四十九组织资产与验证额度)。

## 五、组织的重新定义

> **定义：** AI-native Organization 是一种能够根据目标、环境、能力、权限、资源和约束， 动态发现、选择、授权、组合、协调、验证和重构 Actor 的组织系统， 并持续沉淀成功协作经验。

### 5.1 Organization = Institutionalized Coordination

传统组织可以理解为对过去成功协作模式的制度化。

```
过去成功的协作
 ↓
稳定模式
 ↓
Role / Department / Process / Policy
 ↓
Organization
```

### 5.2 Organization = Coordination Cache

组织缓存的不是简单的“人”，而是：

```
Capability
Authority
Responsibility
Resource
Trust
Reputation
Coordination Pattern
Experience
Policy
```

### 5.3 Organization = Actor Pool

组织还形成可发现、筛选和调度的 Actor Pool。

```
Organization
 ├── Human
 ├── AI
 ├── Human-AI Team
 ├── Department
 ├── External Organization
 ├── Service
 └── Automated System
```

### 5.4 三重定义

> **固化** 将反复成功的协作关系制度化。

> **缓存** 缓存能力、信任、权限、经验和协作模式。

> **筛选池** 为新的 Goal 动态选择合适 Actor。

> **生成器** 根据 Goal 和约束生成临时协作结构。

## 六、组织形成理论

AI-native Organization 的核心不是预先设计所有结构， 而是定义一个可靠的组织形成过程。

```
Goal
 ↓
Organizational Need
 ↓
Required Capability
 ↓
Actor Discovery
 ↓
Actor Selection
 ↓
Delegation
 ↓
Authority Allocation
 ↓
Responsibility Allocation
 ↓
Coordination Formation
 ↓
Temporary Organization
 ↓
Execution
 ↓
Verification
 ↓
Learning
 ↓
Reconfiguration
```

### 6.1 组织形成函数

```
O(t) = F(
    Goal,
    Environment,
    Capability,
    Authority,
    Responsibility,
    Resource,
    Constraint,
    Trust,
    Experience
)
```

当输入发生变化时，组织结构可以变化：

```
O(t + 1) ≠ O(t)
```

因而组织结构本身成为一种运行时状态，而不是永恒不变的静态实体。

## 七、委托、授权与责任

### 7.1 主管—下属是组织委托关系

```
Organization / Principal
        │
        │ Delegation
        ▼
      Manager
        │
        │ Delegation
        ▼
      Employee
        │
        │ Delegation
        ▼
      AI / System / Service
```

AI-native Organization 并没有发明 Delegation。 委托、授权、责任本来就是经典组织工程的核心机制。

### 7.2 Delegation

```
Delegation(P, A, Authority, Scope)
```

表示 Principal `P` 将特定范围内的 Authority 委托给 Actor `A`。

### 7.3 Responsibility

```
Responsibility
 ├── Execution Responsibility
 ├── Operational Responsibility
 ├── Decision Responsibility
 ├── Accountability
 └── Legal / Economic Liability
```

> ⚠ **关键区分：** 谁执行 ≠ 谁负责 ≠ 谁问责 ≠ 谁承担最终法律责任。

### 7.4 Principal–Actor 模型

```
Principal
 ↓
Delegation
 ↓
Authority
 ↓
Actor
 ↓
Action
 ↓
Result
 ↓
Accountability
 ↓
Liability
```

AI Agent 是否能够执行某项业务，不由“它是否智能”决定， 而由它是否处于合法的授权、责任和治理链中决定。

## 八、能力与 Actor Pool

### 8.1 Capability 是组织的基本资源

AI-native Organization 的重要变化，是组织不再主要围绕固定人员组织能力， 而是围绕 Capability 组织能力。

```
Goal
 ↓
Required Capability
 ↓
Capability Registry
 ↓
Actor Pool
 ↓
Matching
 ↓
Assignment
```

### 8.2 Capability 与 Skill

| 概念 | 含义 |
|---|---|
| Capability | 能够完成什么类型的工作或状态转换 |
| Skill | 如何实现某种 Capability 的可复用知识/方法 |
| Tool | 执行行动的具体工具或接口 |
| Actor | 实际承担行动的主体 |

```
Capability = WHAT
Skill      = HOW
Tool       = MEANS
Actor      = WHO
```

### 8.3 Capability Pool

```
Capability Pool
 ├── Human Capability
 ├── AI Capability
 ├── Organizational Capability
 ├── Service Capability
 └── External Capability
```

## 九、协作理论

### 9.1 协作的最小条件

协作不是简单的“多个 Actor 一起工作”。

> 协作的最小结构是： **一个主体产生的状态成为另一个主体可靠行动的前置条件。**

```
Actor A
 ↓
Artifact / State
 ↓
Precondition for B
 ↓
Actor B
 ↓
State Transition
```

### 9.2 Dependency

```
Postcondition(T1) ⊇ Precondition(T2)
```

当 Task 之间存在这样的依赖关系时，就出现了组织协调需求。

### 9.3 Commitment

```
Commitment(A, B, p, q)
```

表示 A 向 B 承诺：当条件 `p` 成立时，使结果 `q` 成立。

### 9.4 Contract

```
Contract =
    Parties
  + Commitments
  + Preconditions
  + Obligations
  + Rights
  + Constraints
  + Acceptance
  + Consequences
```

### 9.5 协作层次

```
Shared Goal
 ↓
Dependency
 ↓
Commitment
 ↓
Contract
 ↓
Protocol
 ↓
Workflow
 ↓
SOP
```

SOP 是协作的工程化结果之一，而不是协作理论本身。

## 十、Role 与 Dynamic Organization

### 10.1 Role 的重新定义

```
Role =
    Responsibility
  + Authority
  + Constraint
  + Accountability
```

Role 不应该被简单理解为“一个人的职位名称”。

### 10.2 Role Template

```
Role Template
 ├── Responsibility
 ├── Authority
 ├── Constraint
 ├── Accountability
 └── Acceptance Criteria
```

### 10.3 Assignment

Role 是可复用模板；Assignment 是当前的实际委派。

```
Role Template
      ↓
Delegation
      ↓
Assignment
      ↓
Actor
```

### 10.4 Temporary Role

AI-native Organization 可以在运行时创建临时责任边界：

```
Goal
 ↓
Required Responsibility
 ↓
Temporary Role
 ↓
Assignment
 ↓
Actor
 ↓
Execution
 ↓
Goal Completed
 ↓
Role Dissolved
```

> **核心思想：** 永久存在的是治理能力与组织能力；不一定永久存在的是具体执行结构。

## 十一、组织作为缓存与学习系统

### 11.1 组织是协作缓存

```
第一次协作：

Goal
 ↓
Search
 ↓
Negotiate
 ↓
Authorize
 ↓
Coordinate
 ↓
Execute


组织化之后：

Goal
 ↓
Known Capability
 ↓
Known Authority
 ↓
Known Actor
 ↓
Assignment
 ↓
Execute
```

### 11.2 组织缓存什么

- 能力
- 权限
- 责任关系
- 资源
- 信任
- 信誉
- 协作模式
- 历史经验
- 策略与政策
- 成功的组织组合

### 11.3 Organizational Learning

```
Execution
 ↓
Evidence
 ↓
Evaluation
 ↓
Learning
 ↓
Update Capability / Policy / Pattern
 ↓
Next Organization Formation
 ↺
```

因此 AI-native Organization 的学习不是只有“培训员工”， 而可以直接修改未来组织形成时所使用的能力、策略和协作模式。

## 十二、AI-native Organization Engineering

### 12.1 工程对象的变化

| 经典工程化 | AI-native 工程化 |
|---|---|
| Engineering the Organization | Engineering Organizational Formation |
| 设计稳定组织 | 设计组织生成机制 |
| 设计岗位 | 设计能力匹配 |
| 设计固定流程 | 设计动态协调机制 |
| 控制人员行为 | 控制权限、约束和结果 |
| 组织变革 | 运行时重构 |
| 经验 → SOP | 经验 → Capability / Policy / Pattern |

### 12.2 四个核心能力

```
AI-native Organization Engineering
│
├── Organizational Discovery
│   └── 发现需要什么能力
│
├── Organizational Formation
│   └── 动态形成协作结构
│
├── Organizational Governance
│   └── 授权、约束、责任、审计
│
└── Organizational Learning
    └── 从结果中更新组织能力
```

# 第三篇 · 形式理论与可执行规范

## 十三、形式理论

### 13.1 世界状态

```
S = System State
```

### 13.2 行动与状态转换

```
S --a--> S'
```

Action `a` 在合法条件下把状态 `S` 转换为 `S'`。

### 13.3 Goal

```
Goal(S) = true
```

当系统状态满足 Goal 谓词时，目标达成。

### 13.4 Task

```
Task =
    Precondition
  + Transition
  + Postcondition
  + Constraint
  + Acceptance
```

### 13.5 Organization

```
Organization =
    Actors
  + Capabilities
  + Resources
  + Delegations
  + Authorities
  + Responsibilities
  + Contracts
  + Policies
  + Coordination Patterns
```

### 13.6 完整系统

```
System =
    <
      States,
      Goals,
      Tasks,
      Actors,
      Capabilities,
      Resources,
      Dependencies,
      Commitments,
      Contracts,
      Delegations,
      Authorities,
      Responsibilities,
      Assignments,
      Actions,
      Artifacts,
      Evidence,
      Verification,
      Policies,
      OrganizationalMemory
    >
```

### 13.7 核心安全属性

- **Safety：** 不允许发生的事情永远不能发生。
- **Liveness：** 满足条件后，承诺的结果最终能够发生。
- **Authorization：** 没有授权就不能执行受保护行动。
- **Responsibility Consistency：** 关键责任必须存在明确归属。
- **Traceability：** 关键状态变化必须可追踪。
- **Verifiability：** 结果必须具有可验证证据。
- **Consistency：** 组织规则、权限与责任不能互相矛盾。
- **Termination：** 临时组织在目标完成或终止后能够退出。
- **Capability Preservation：** 组织在把执行与认知委托给 Actor 的同时， 必须保留足以验证其输出、纠正其偏差、并在该 Actor 不可用时接管任务的人类判断能力基线。

> **说明：** 以上前 8 条为基础性质（v0.1）；第 9 条 Capability Preservation 为 v1.0 增补 （合并规范修正案 No.1，论述见 [第四十八章](#四十八认知债务与组织能力保全)）。 完整性质全集（含 Reversibility、Human Recoverability、 Requisite Variety、Invertibility of Delegation、Capability Preservation 等共 21 条） 已统一编号收录于 [第四十二章](#四十二形式化性质全集)。

## 十四、可执行规范

理论必须能够落地为机器可解析的 Organization Specification。

### 14.1 AOOS：AI-native Organization Specification

以下定义一个概念性的 `AOOS v0.1`。

```
organization:
  id: procurement-org
  version: "0.1"

purpose:
  statement: "Optimize enterprise procurement"

goals:
  - id: purchase-completed
    condition:
      purchase.status: COMPLETED

actors:
  - id: purchase-manager
    type: human

  - id: procurement-ai
    type: ai

capabilities:
  - id: supplier-evaluation
  - id: purchase-order-creation

roles:
  - id: purchase-reviewer

    responsibility:
      - verify.purchase

    authority:
      - purchase.read
      - purchase.approve

    constraints:
      - purchase.amount <= 100000

delegations:
  - principal: purchase-manager
    actor: procurement-ai

    authority:
      - purchase.read
      - supplier.read
      - supplier.select

tasks:
  - id: select-supplier

    precondition:
      - purchase.status == APPROVED

    postcondition:
      - supplier.status == SELECTED

dependencies:
  - from: approve-purchase
    to: select-supplier

assignments:
  - task: select-supplier
    actor: procurement-ai
    role: purchase-reviewer

contracts:
  - id: supplier-selection-contract

    parties:
      - purchase-manager
      - procurement-ai

    commitment:
      when:
        purchase.status == APPROVED

      then:
        supplier.status == SELECTED

    acceptance:
      - supplier.qualified == true
      - evidence.selection != null

policies:
  - id: no-unauthorized-payment
    forbidden:
      - payment.execute

verification:
  required:
    - authorization
    - evidence
    - postcondition
```

### 14.2 Specification 的原则

1. 声明式优先，而不是过程式优先。
2. 描述 Goal、Constraint、Authority 和 Acceptance。
3. 允许 Actor 自主选择 HOW。
4. 所有关键动作必须能够被验证。
5. 组织结构应该能够被运行时重构。

## 十五、组织运行时

AOOS 不是静态文档，而应该能够驱动 Organization Runtime。

```
AI-native Organization Runtime
│
├── Goal Engine
├── Organizational Need Analyzer
├── Capability Registry
├── Actor Registry
├── Actor Matching Engine
├── Delegation Engine
├── Authority Engine
├── Responsibility Engine
├── Assignment Engine
├── Contract Engine
├── Coordination Engine
├── Resource Scheduler
├── Policy Engine
├── Execution Monitor
├── Evidence Store
├── Verification Engine
├── Audit / Trace Engine
└── Organizational Learning Engine
```

### 15.1 Runtime Loop

```
Goal
 ↓
Analyze Need
 ↓
Discover Capability
 ↓
Select Actors
 ↓
Check Authority
 ↓
Create Delegation
 ↓
Create Assignment
 ↓
Form Temporary Organization
 ↓
Coordinate
 ↓
Execute
 ↓
Verify
 ↓
Update Business State
 ↓
Learn
 ↓
Reconfigure
 ↺
```

## 十六、治理模型

### 16.1 Governance 不等于 Execution

AI-native Organization 必须把“能做什么”和“允许做什么”分开。

```
Capability
    ≠
Authority

Capability = 能做
Authority  = 被允许做
```

### 16.2 治理链

```
Principal
 ↓
Policy
 ↓
Delegation
 ↓
Authority
 ↓
Responsibility
 ↓
Assignment
 ↓
Action
 ↓
Evidence
 ↓
Accountability
 ↓
Liability
```

### 16.3 Governance 的基本对象

- Identity
- Principal
- Authority
- Delegation
- Permission
- Policy
- Responsibility
- Accountability
- Liability
- Resource
- Audit

> **治理原则：** AI 不因为拥有智能而天然获得业务权力； 权力来自可验证的组织授权链。

## 十七、TOC 与组织优化

Theory of Constraints（TOC）不是 AI-native Organization 的本体基础， 而是其上的优化理论。

```
Organization
 ↓
Coordination
 ↓
Execution
 ↓
Constraint Detection
 ↓
Bottleneck
 ↓
Exploit
 ↓
Subordinate
 ↓
Elevate
 ↓
Repeat
```

AI-native Organization 的重要能力是能够围绕当前约束动态调整组织结构。

```
Task Graph
 ↓
Find Bottleneck
 ↓
Create / Reallocate Capability
 ↓
Change Assignment
 ↓
Constraint Moves
 ↓
Recompute Organization
 ↺
```

> ⚠ **注意：** 增加 Actor 数量并不必然提高组织吞吐量。 如果瓶颈位于审批、验证、资源或协调环节，增加执行者可能反而增加系统负担。

## 十八、经典组织与 AI-native Organization 对比

| 维度 | 经典组织 | AI-native Organization |
|---|---|---|
| 基本范式 | Structure → Behavior | Goal → Coordination → Structure |
| 组织 | 稳定结构 | 动态生成系统 |
| 基本索引 | Identity / Position | Capability |
| Role | 长期岗位 | 责任与权限模板 |
| 人员 | 岗位绑定 | 动态匹配 |
| 协作 | 组织规定 | 由 Dependency / Commitment 驱动 |
| 流程 | 预定义 | 动态组合 |
| SOP | 核心标准化工具 | 一种经验资产 |
| 权限 | 岗位权限 | 动态 Delegation |
| 资源 | 固定配置 | 动态调度 |
| 组织变革 | 低频 | 运行时重构 |
| 学习 | 培训 / SOP 更新 | Runtime Organizational Learning |
| 组织记忆 | 制度、人员、流程 | 能力、策略、经验、协作模式 |
| 核心工程对象 | Organization | Organizational Formation |

> **范式差异：**  
> 经典组织：**设计一个组织，然后运行它。**  
> AI-native Organization：**设计一个能够持续生成组织的系统。**

## 十九、核心原则

### 原则 1：Goal First

组织不应该从岗位开始，而应该从 Purpose 和 Goal 开始。

### 原则 2：Capability Before Identity

首先寻找需要什么能力，再决定由谁提供。

### 原则 3：Authority Is Delegated

Actor 的业务权力来自 Delegation，而不是来自智能程度。

### 原则 4：Responsibility Must Be Explicit

任何关键业务活动都应该存在明确的责任归属。

### 原则 5：Structure Is Runtime State

组织结构不是永远固定的，可以根据目标和环境变化。

### 原则 6：Constraint Before Procedure

优先定义约束、权限和结果要求，而不是过度规定 HOW。

### 原则 7：Evidence Establishes Trust, Trust Conserves Evidence

**v1.0 修订**（源自规范修正案 No.2）：原「Evidence Before Trust」 只描述了循环的第一段；若全面照字面执行，每件事都要 Evidence， 而 Evidence 需要人工判断——判断带宽立即崩溃。原则必须完整为三段：

| 阶段 | 原则 | 含义 |
|---|---|---|
| 首次 | **Evidence Before Trust** | 用可验证证据建立信任，不预支额度 |
| 后续 | **Trust Reduces Evidence** | 信任建立后，降低验证需求以节约判断带宽；这是信任的经济价值所在 |
| 维持 | **Sample to Maintain Trust** | 定期抽样校准，验证额度未失效；抽样率必须显式设定，不得依赖「感觉还行」 |

即：**Evidence 是信任的投资，Trust 是 Evidence 的资本化，抽样是折旧检查。** 缺少第三段时，组织无法察觉额度已经透支——而 AI 输出的特征恰恰是 **高可信表象**（流畅、自信、格式完备）， 会让组织误判额度仍然充足从而持续透支。 计量方式见 [第四十九章](#四十九组织资产与验证额度)。

### 原则 8：Organization Is Memory

组织应该沉淀能力、信任、经验和成功的协作模式。

### 原则 9：Learning Changes Organization

学习的结果应该能够改变下一次组织形成。

### 原则 10：Dissolution Is Normal

临时组织在目标完成后解散不是异常，而是 AI-native Organization 的正常生命周期。

### 原则 11：Human and AI Are Both Actors

Human 与 AI 可以在 Execution 层统一为 Actor； 但在 Authority、Accountability、Liability 等 Governance 层必须区分。

### 原则 12：Organization Is Not Agent

Agent 是 Actor 的一种实现； Organization 是治理、能力、责任和协作关系的制度化与动态协调系统。

## 二十、规范演进路线

### Phase 0：概念模型

```
Purpose
Goal
State
Actor
Capability
Authority
Responsibility
Resource
Dependency
Commitment
Contract
Organization
```

### Phase 1：形式模型

```
Ontology
 ↓
Formal Syntax
 ↓
Formal Semantics
 ↓
State Transition
 ↓
Temporal Properties
 ↓
Verification
```

### Phase 2：Specification

```
AOOS
 ├── Organization Schema
 ├── Actor Schema
 ├── Capability Schema
 ├── Role Schema
 ├── Delegation Schema
 ├── Assignment Schema
 ├── Contract Schema
 ├── Policy Schema
 └── Goal / Task Schema
```

### Phase 3：Runtime

```
Organization Runtime
 ↓
Dynamic Formation
 ↓
Dynamic Delegation
 ↓
Dynamic Assignment
 ↓
Execution
 ↓
Verification
 ↓
Learning
 ↓
Reconfiguration
```

### Phase 4：Conformance

```
Specification
 ↓
Reference Runtime
 ↓
Conformance Tests
 ↓
Security Tests
 ↓
Governance Tests
 ↓
Interoperability Tests
```

### Phase 5：Organizational Learning

```
Historical Execution
 ↓
Outcome
 ↓
Evidence
 ↓
Evaluation
 ↓
Organizational Memory
 ↓
Capability / Policy / Pattern Update
 ↓
Future Organization Formation
```

# 第四篇 · 组织学习与判断力保卫

## 二十九、组织学习、组织记忆与知识沉淀

### 29.1 知识沉淀的核心矛盾

研发组织常见的知识沉淀方式包括总结、复盘、技术方案、事故报告和知识库建设。问题在于：文档数量增加，并不意味着组织能力同步增加。

如果同类问题再次出现时，成员仍然需要重新询问关键人员、重新分析原因、重新付出相同的试错成本，那么组织实际上只是保存了历史信息，而没有完成真正的组织学习。

### 29.2 文档不是知识沉淀的终点

**文档是知识的载体，而不是知识沉淀的完成标准。**

传统的“问题 → 复盘 → 文档 → 知识库”链条容易在文档归档处停止。AI-native 组织要求继续完成：

```
经历
 ↓
经验
 ↓
原因分析
 ↓
知识提取
 ↓
判断能力
 ↓
规则 / 约束 / 策略
 ↓
工作流程
 ↓
下一次行为改变
 ↓
组织能力
```

### 29.3 组织学习的定义

本理论将 Organizational Learning（组织学习）定义为：

> **将过去经验转化为能够改变未来组织行为的可复用判断能力。**

因此：

```
Knowledge Storage ≠ Knowledge Reuse ≠ Organizational Learning
```

真正的组织学习至少需要经过：

```
Knowledge Storage
 ↓
Knowledge Retrieval
 ↓
Judgment
 ↓
Decision
 ↓
Behavior Change
 ↓
Organizational Capability
```

### 29.4 组织应沉淀判断能力，而非仅沉淀答案

低价值知识通常只描述“发生了什么”或“最终采用了什么方案”；高价值知识进一步描述“为什么这样判断”“在什么条件下成立”“哪些条件发生变化后结论会失效”。

因此可将判断抽象为：

```
Decision = f(Context, Constraints, Evidence)
```

组织真正需要复用的是判断函数及其适用边界，而不是脱离上下文的历史答案。

### 29.5 经验进入工作流程

高价值经验不应全部停留在 Markdown、PDF 或知识库中，而应根据经验性质进入不同的组织载体：

| 经验类型 | 组织化沉淀形式 |
|---|---|
| 某类缺陷反复发生 | 自动化测试 / 检查规则 |
| 某类配置容易出错 | Lint / Validator |
| 某类操作必须经过控制 | Workflow Policy |
| 某类问题需要特殊判断 | Skill / Decision Rule |
| 某类事故具有固定响应模式 | Runbook |
| 某类行为必须禁止 | Policy / Constraint |
| 某类信息需要被 Agent 调用 | 结构化 Organizational Memory |
| 某类经验改变组织协作方式 | Organization Reconfiguration |

因此，知识沉淀的关键问题不是“是否写进知识库”，而是：

> **这次经验应该改变组织的什么未来行为？**

### 29.6 知识库越大不一定越有价值

当知识库持续积累而缺乏有效性、上下文、证据、适用范围和生命周期管理时，知识数量增加可能导致检索困难、旧方案污染和信任下降。

```
Knowledge Volume ↑
 ↓
Search Difficulty ↑
 ↓
Outdated / Conflicting Knowledge ↑
 ↓
Trust ↓
 ↓
Ask People ↑
 ↓
Key-person Dependency ↑
```

因此组织知识的价值不能用文档数量衡量，而应关注：在正确的上下文中，正确知识被正确调用并影响决策的概率。

### 29.7 组织记忆 Organizational Memory

本理论将 Organizational Memory 定义为：

> **组织保存过去经验所形成的判断、约束、规则、证据和决策依据，并能够在未来决策与执行中重新调用的能力。**

因此组织记忆不是单纯的知识库：

```
Organizational Memory =
Experience
+ Decision
+ Rationale
+ Constraint
+ Evidence
+ Judgment
+ Rule
+ Applicability
+ Validity
+ Workflow Embedding
```

### 29.8 “避免重复交学费”作为组织学习检验

组织学习最直接的检验不是“第一次问题之后是否完成了复盘”，而是：

> **同类问题第二次出现时，组织是否仍然需要重新交同样的学费？**

如果第一次事故形成文档，第二次事故仍然依赖专家重新分析，那么知识没有真正转化为组织能力。

相反，如果第二次问题出现时，测试、规则、流程、Skill、Policy 或 Agent 能够直接改变处理方式，则过去的成本已经转化为未来的能力。

### 29.9 组织学习闭环

将本节加入原有组织生命周期后，形成更完整的组织学习闭环：

```
Execution
 ↓
Evidence
 ↓
Verification
 ↓
Outcome Evaluation
 ↓
Learning
 ↓
Knowledge Extraction
 ↓
Judgment
 ↓
Organizational Memory
 ↓
Future Decision
 ↓
Future Organization
 ↺
```

### 29.10 Organizational Learning Invariant

**组织学习不以知识记录为完成标准，而以未来行为是否发生可验证改变为完成标准。**

由此形成一个重要组织不变量：

```
Past Experience
 ↓
Organizational Memory
 ↓
Future Judgment
 ↓
Future Decision
 ↓
Future Behavior
```

如果该链条不能成立，则组织拥有历史信息，但尚未形成相应的组织能力。

### 29.11 与 AI-native Organization 的关系

AI-native 组织能够进一步自动化经验到组织能力的转化：

```
Execution
 ↓
Event / Evidence
 ↓
Anomaly
 ↓
Root Cause
 ↓
Generalization
 ↓
Judgment Rule
 ↓
Validation
 ↓
Policy / Skill / Workflow / Test / Tool
 ↓
Organizational Memory
 ↓
Future Decision
```

这意味着 AI-native 组织的知识管理不应只是“让 Agent 能检索更多文档”，而应使 Agent 能够调用经过验证、带有上下文和适用边界的组织判断，并把新的实践结果继续反馈到组织学习循环。

## 三十、意图保持、判断与组织记忆的统一闭环

将前述 Human-AI Intent Preservation 与 Organizational Learning 合并，可以得到更完整的 AI-native 组织循环：

```
Human Intent
 ↓
Thinking
 ↓
Decision
 ↓
Organization Formation
 ↓
Delegation
 ↓
Execution
 ↓
Evidence
 ↓
Verification
 ↓
Outcome
 ↓
Learning
 ↓
Organizational Memory
 ↓
Future Judgment
 ↓
Future Decision
 ↺
```

该循环说明：组织能力并不是静态存放在文档中的知识总量，而是能够持续影响未来意图解释、判断、决策、组织形成与执行的动态能力。

### 30.1 三个核心闭环

| 闭环 | 核心问题 | 目标 |
|---|---|---|
| Intent Loop | 我们真正想实现什么？ | 保持人类意图，避免语义耗散 |
| Organization Loop | 谁以什么权限和能力完成？ | 形成、协调、监督和重构组织 |
| Learning Loop | 过去的经验如何改变未来？ | 形成组织记忆与判断能力 |

### 30.2 统一模型

```
                 ┌───────────────────────────┐
                 │                           │
                 ↓                           │
Human Intent → Thinking → Decision → Organization
                                      ↓
                                   Execution
                                      ↓
                                   Evidence
                                      ↓
                                  Verification
                                      ↓
                                    Outcome
                                      ↓
                                   Learning
                                      ↓
                           Organizational Memory
                                      ↓
                              Judgment Capability
                                      │
                                      └──────────────↺
```

因此，本理论进一步提出：

> **AI-native Organization = Intent Preservation + Organizational Formation + Governance + Coordination + Execution + Verification + Organizational Learning**

其动态本质可以进一步压缩为：

```
Intent → Meaning → Decision → Organization → Action → Evidence → Outcome → Learning → Memory → Judgment ↺
```

## 三十一、组织学习质量门（Learning Quality Gate）

任何声称已经完成的“知识沉淀”，至少应回答以下问题：

1. 发生了什么？
2. 为什么发生？
3. 哪些条件导致该结果？
4. 该经验可以泛化到什么范围？
5. 什么情况下不能使用该经验？
6. 形成了什么判断规则？
7. 该判断是否有证据支持？
8. 该判断是否经过验证？
9. 它将改变未来哪个工作流程？
10. 下一次同类问题发生时，组织如何自动或半自动地使用它？
11. 如何验证该知识已经真正改变了未来行为？

只有当知识能够通过“判断 → 应用 → 行为改变”的验证，才应认为该经验已经从历史记录升级为组织能力。

## 三十二、Judgment：组织本体的缺失元素

前述本体定义了 Purpose、Goal、Capability、Authority、Responsibility、Commitment 等对象， 但缺少一个决定组织质量的关键对象：**Judgment（判断）**。

> ⚠ **关键区分：** Capability ≠ Judgment。  
> 一个 Actor 具备某项 Capability，并不意味着它具备 **在当前情境下判断“是否应当做、值不值得做、错了如何收场”** 的能力。

```
Capability = 能够完成什么（WHAT / HOW）
Judgment   = 在约束与不确定性下应当如何选择（WHETHER / WHY）
```

### 32.1 Judgment 的形式定义

```
Judgment(
    Context,
    Constraints,
    Evidence,
    Uncertainty
)
  ↓
Decision
  + Rationale
  + Confidence
  + Reversibility Plan
  + Applicability Scope
```

注意 Judgment 的输出**不是** 单一 Decision， 而是一个带**置信度、适用边界和回滚路径** 的决策包。 组织真正可以复用、验证和追责的，是这个完整的包，而不是孤立的结论。

### 32.2 为什么 Actor Matching 必须包含 Judgment

若 Actor Selection 仅基于 Capability 匹配，系统会系统性地选出 “会做”但“不知道何时不该做”的 Actor。AI Agent 是这一现象的典型载体： 它几乎从不在 *“这件事不该由我决定”* 处停止， 因为停止不在它的优化目标里。

```
Capability-only Matching
 ↓
选出可执行的 Actor
 ↓
缺失 Stop / Escalate 判断
 ↓
越界静默发生
 ↓
责任链形式上完整，实质上失效
```

> **本体补充：** 在本体（第四章）中新增四个对象： `Judgment`、`Confidence`、`Calibration`、`Reversibility`。 四者与 Capability / Authority / Responsibility 同级， 并在 `Organization` 的组合式中显式出现。

### 32.3 Calibration：可信度校准记录

Trust 在本理论中不能是一个模糊的标量， 而应是可累积、可证伪的**情境化校准记录**。

```
Calibration(Actor, ContextClass)
  = (Claimed Confidence, Observed Accuracy, SampleSize, LastUpdated)
```

只有当 Actor 自述的 Confidence 与其在该情境类中的 历史 Observed Accuracy 长期接近，该 Actor 在此情境下才被称为 **well-calibrated**。 Actor Matching 应优先选择 well-calibrated 的 Actor， 而非单纯选择 Capability 评分最高的 Actor。

> **核心命题：** 组织能否安全地把权力委托给某个 Actor， 不取决于它*能做得多好*， 而取决于它*是否知道自己什么时候做不好*。

## 三十三、问责—能力一致性（Accountability–Capability Consistency）

第七章区分了 Responsibility 的五种形态，第十六章建立了完整的治理链。 但这两处都隐含一个未经检验的假设：

> ⚠ **被问责的 Actor，具备理解并检验它正在背书之事的能力。**  
> 在 AI-native 组织中，这个假设恰恰是最先崩塌的一个。

### 33.1 问责—能力剪刀差

Delegation 存在一个结构性副作用： 它在把 Authority 向下推送的同时，也把**判断实践的机会** 向下抽走。

```
Delegation 增加
 ↓
AI Actor 承担执行
 ↓
Human Actor 的判断实践机会减少
 ↓
Human 的判断能力衰减（Skill Atrophy）
 ↓
但 Accountability 仍绑定 Human
 ↓
────────────────────────
问责—能力剪刀差形成
 Responsibility ↑ ，Review Capacity ↓
```

这是 AI-native 组织最危险的隐性负债： 它在组织图上完全不可见，在审计日志中永远“合规”， 只在真实事故发生的那一刻才被兑现。

> ⚠ **v0.3 修正：** 上图是**线性近似**，用于说明因果方向。 该过程的真实形态是一个**自为因果的正反馈环**， 自我加速且无天然停止点。 闭环模型见 [38.5 节](#三十八控制论基础可能性空间必要多样性与共轭控制)。  
> 这一区别不是表述差异：线性链会让人以为“在某个节点卡住即可”， 而闭环意味着停止只能来自**外部注入**。

### 33.2 Review Capacity 的五个构成要素

```
ReviewCapacity(a, t) =
    Domain Competence          领域能力，能识别不合理输出
  + Information Access         能看到证据链，而非只有结论
  + Cognitive Bandwidth       有足够时间与注意力余量
  + Authority to Override      有权力否决
  + Organizational Protection  否决不会带来个人代价
```

### 33.3 核心不变量 I-ACC

```
I-ACC:
Accountability(a, t)  ⟹  ReviewCapacity(a, t)
```

即：**任何在特定任务上承担 Accountability 的 Actor， 必须同时具备该任务的完整 Review Capacity。** 五要素缺一即为 Ceremonial Oversight（仪式性监督）。

> ⚠ **反模式：** Ceremonial Oversight（仪式性监督）  
> 流程文档中监督环节完整存在、Audit 日志齐全、责任归属明确， 但承担者实际上无法发现或阻止错误。  
> 它在形式治理上完全合格，却不能作为任何 Safety 属性的论据。

### 33.4 监督完整性的可观测指标

I-ACC 不能只作为原则存在，必须被观测。以下指标用于检测监督是否仍然有效：

| 指标 | 定义 | 危险信号 |
|---|---|---|
| Override Rate | 监督者推翻 AI 建议的比例 | **长期趋近 0** —— 这不是合规信号，是监督已死的信号 |
| Injected-error Catch Rate | 定期注入已知错误后被捕获的比例 | 低于阈值说明审查已退化为浏览 |
| Review Dwell Time | 单个决策的实际审查时长 | 随决策金额/风险上升而**不** 增长，说明是点击而非判断 |
| Independent Rationale Rate | 监督者能脱离 AI 输出独立复述理由的比例 | 低值说明背书者并未形成自己的判断 |

> **与 Verification 的区别：** Verification 检验的是 **“结果对不对”**； I-ACC 检验的是 **“背书的人有没有能力背书”**。 两者不可互相替代，也不能由后者推出前者。

## 三十四、能力衰减与 Ghost Capability

第八章的 Capability Registry 隐含假设 Capability 是一种**稳定资产**： 一旦注册，长期有效。 事实上 Capability 是一种**会衰减的活体资产**—— 不被使用就会退化，且退化过程在注册表中不可见。

```
Registration ≠ Availability ≠ Proficiency
```

### 34.1 Ghost Capability

> **定义：** Ghost Capability 指在 Capability Registry 中存在、 使得 Assignment 与 Delegation 得以成立、 但已经**无法被该 Actor 独立执行** 的能力条目。

```
Ghost Capability 的形成

注册的 capability 存在
 ↓
长期由 AI / 自动化执行
 ↓
Human Actor 的实践机会消失
 ↓
熟练度衰减（注册表不改）
 ↓
Assignment 仍然有效 → 责任链仍然有效
 ↓
────────────────────
执行能力已经失效，但组织不知道
```

### 34.2 危险场景

```
Capability Registry 中存在 "database-failover"
 ↓
三年均由自动化 Runbook 执行，Human 仅为审批者
 ↓
深夜故障，AI Actor 不可用 / 被攻陷 / 分布外场景
 ↓
Assignment 成立，Accountability 绑定 Ops Lead
 ↓
Ops Lead 已无法独立完成该操作
 ↓
组织在最需要韧性的时刻发现韧性不存在
```

注意这与 I-ACC 的关系：这是 I-ACC 在**时间维度** 上的失效—— 事故发生前一秒，所有一致性检查都仍然通过。

### 34.3 Assisted vs Independent Capability

本理论要求 Capability 条目必须区分两种形态：

> **Assisted Capability** 在 AI 或工具辅助下可完成。衡量的是 AI-native 条件下的**生产力上限**。

> **Independent Capability** 不借助 AI 可独立完成。衡量的是**组织韧性下限** 与 Human Recoverability。

> **关键推论：** 组织的生产力可以由 Assisted Capability 驱动， 但组织的**韧性只能由 Independent Capability 兜底**。 两者的比例是 AI-native 组织最重要的风险敞口指标之一。

### 34.4 Capability Schema 增量（AOOS v0.2）

```
capabilities:
  - id: database-failover

    actors: [ops-lead, ops-ai]

    # v0.2 新增字段
    proficiency: 0.8
    decay_model: skill-atrophy-v1
    last_exercised_at: 2026-08-01T10:00:00Z
    verification_interval: P90D

    # 关键：不借助 AI 独立完成的能力，决定组织韧性
    independent_capability:
      ops-lead:
        verified: true
        last_verified_at: 2026-07-20T00:00:00Z
        expires_at: 2026-10-18T00:00:00Z
      ops-ai:
        verified: true

    # 独立能力过期后，该 Assignment 不允许作为 Human Fallback
    requires_independent_backup: true
```

> ⚠ **规则：** 当 `requires_independent_backup: true` 的能力， 其 Actor 的 Independent Capability 过期且未完成复验时， 该 Actor 不得被计为任何 Assignable Backup， 无论其 Assisted Capability 评分多高。

## 三十五、判断再生：Regeneration Loop

第十一章与第三十章定义了 Organizational Learning——**从已发生的结果中学习**。 这是一条**后置** 回路：必须有执行、有结果、最好有事故，它才会被触发。

> **缺失的一环：** 在零事故、高自动化的平稳期， Learning Loop 不会被触发， 而 Human 的 Judgment 却在持续衰减。  
> 组织需要一条**不依赖事故发生** 的判断维持回路： **Judgment Regeneration Loop**。

### 35.1 两条回路的区别

| 维度 | Organizational Learning | Judgment Regeneration |
|---|---|---|
| 触发条件 | 执行结果 / 事故 | 周期性、主动触发 |
| 产出 | 规则、约束、策略、 Skill | Actor 自身的判断能力 |
| 作用对象 | 组织记忆（外化的） | Actor 能力（内化的） |
| 失败模式 | 只记录 what，不记录 why | 平稳期自然停摆，事故时发现能力已空 |
| Zero-accident 期间是否运行 | 否 | **是**，这是它存在的唯一理由 |

### 35.2 五种 Regeneration 机制及其组织化落点

| 机制 | 组织化形式 | 制度落点 |
|---|---|---|
| **苏格拉底式**<br>AI 只提问，不给答案 | Spec-first Interview | 需求入口：Agent 不得先产出方案，先完成意图澄清 |
| **对抗式**<br>多方案 + 各自失效模式 | Mandatory Alternative Set | Design Review Gate：至少 2 方案，各自 failure mode 写清 |
| **复述式**<br>复述供 AI 挑错 | Rationale Restitution | Merge / Release 前置：必须独立复述理由与推论链 |
| **异常演练**<br>先猜后验 | Chaos Drill / Game Day | 周期性：AI 扮演带噪声的环境，只给告警流不给全景 |
| **渐进撤脚手架**<br>带→做→独立 | Scaffolding Retirement Protocol | 能力养成与 Independent Capability 复验的前置流程 |

> **共同约束（Sequencing Rule）：** 上述五种机制全部要求 **Human-first, AI-second**—— 必须先形成自己的判断，再让 AI 介入。  
> 这不是道德姿态，而是**认知卫生**： 一旦 AI 先产出第一稿，后续所有审查都在锚定效应之下进行， Override Rate 会结构性趋零。

### 35.3 让 AI 介入的顺序成为不可绕过的开关

Sequencing Rule 在压力下必然被跳过—— 这不是意志力问题，而是经济学问题： 越忙的时候，自己先写一稿的边际成本越高。 因此它不能被设计为一条原则，必须被设计为**物理摩擦**：

- Mandatory Alternative Set 作为 Gate 的**硬性输入校验**，缺失则流程不可推进
- Rationale Restitution 作为 Merge 的**前置 commit 钩子**，而非可选模板
- Chaos Drill 进入**日历与排班**，而不是进入待办清单
- Sequencing Rule 写入 Agent 的**系统级约束**，使其无法被单次 prompt 覆盖

### 35.4 Supervision Integrity 作为 Regeneration 的验收

```
Supervision Integrity =
  Override Rate ∈ 合理区间
  ∧ Injected-error Catch Rate ≥ 阈值
  ∧ Review Dwell Time 随风险单调上升
```

其中 Override Rate 的诊断价值最高，也最反直觉： **长期为 0 的推翻率证明的不是 AI 的准确，而是人的退出。** 组织应把它当作 Regeneration 机制是否仍在运行的核心仪表。

## 三十六、不可委托内核、降级与可逆性

第三、七、十六章详尽定义了 Delegation， 但缺少它的**负面边界**：什么不能被委托。 一个只有正向授权机制而没有不可委托内核的治理模型， 在形式上是完备的，在实质上是可被逐步侵蚀的。

### 36.1 Non-delegable Core

> **原则：** Delegation can transfer execution rights and decision rights, but it can never transfer accountability.  
> 委托可以转移执行权与决策权，但永远不能转移问责。

| 对象 | 可否委托 | 说明 |
|---|---|---|
| Execution Responsibility | 可 | 典型的可委托对象 |
| Decision Responsibility | 可有条件委托 | 须满足 I-ACC 且可逆 |
| Purpose / Goal 的合法性判断 | **不可** | “这件事该不该存在”不由执行层决定 |
| Accountability | **不可** | 可问责性不随授权链转移 |
| Legal / Economic Liability | **不可** | 责任必须由能够承受后果的主体承担 |
| 向真实他者承担解释义务 | **不可** | AI 不会真的失望，也不会传播声誉后果 |

> **不可委托内核的存在理由（Why not）：** 并非因为 AI 不够聪明， 而是因为**责任机制的运作介质是“能够承受后果的主体”**。 一个不可被惩罚、不会痛苦、没有声誉的实体， 在结构上无法成为责任的终点。 这是本体论限制，不是技术现状。

### 36.2 核心安全属性增补（扩展 13.7）

- **Reversibility：** 任何 Actor 的关键行动必须可回滚，或至少存在可执行的停机路径。不可逆行动默认禁止自动化。
- **Fail-safe Degradation：** 当任何 Actor 失效或不可信时，组织必须降级到一个明确定义的、仍然安全的最小运行形态，而非静默失败。
- **Human Recoverability：** 对每一条关键路径，必须存在至少一个已完成 Independent Capability 验证的 Human Actor，且该状态不得过期。
- **Override Accessibility：** 否决一个 AI 建议所需的操作成本与认知成本，**不得高于** 同意它的成本。任何使同意更容易的界面设计都应被视为安全缺陷。
- **Non-atrophy：** 不得存在使承担 Accountability 的 Actor 长期无法实践其所背书的判断能力的组织设计。

> ⚠ **Override Accessibility 的工程含义：** 经验研究表明，只要推翻 AI 建议需要额外一步操作， 接受错误建议的比例就显著上升。 因此在 Gate 设计上，重点不是“训练人更认真” （该路径已被证明基本无效）， 而是**把成本做偏——让否决比同意更便宜**。

### 36.3 降级拓扑

```
Normal Operation
  Human + AI 协作，全能力
      │
      │ AI Actor 失效 / 被攻陷 / 分布外输入
      ▼
Degraded Mode
  仅 Assisted Capability 失效
  Independent Capability 接管
  吞吐量下降，Safety 保持
      │
      │ Independent Capability 亦过期
      ▼
Safe Halt
  停止该类行动，而非继续执行
  —— 这是唯一安全的终点
```

注意最后一层：**Safe Halt 优先于继续执行**。 一个在无法验证的情况下仍继续产出的组织， 其所有 Verification 属性都失去了意义。

## 三十七、增补不变量与原则

### 37.1 增补不变量

```
I-ACC        Accountability ⟹ ReviewCapacity
I-CAL        Matching 必须考虑 Calibration，而非仅 Capability
I-DECAY      Capability 条目必须带 last_exercised_at 与验证期限
I-INDEP      Critical Path 必须存在未过期的 Independent Backup
I-SEQ        Human-first 顺序必须可调、可观测、不可被单次 prompt 覆盖
I-HALT       无法验证时，停止优先于继续执行
```

### 37.2 增补原则

#### 原则 13：Judgment Is Not Capability

会用 ≠ 会判断。Actor Matching、Delegation 与 Actor Selection 都必须区分“能完成”与“知道何时不该完成”。

#### 原则 14：Accountability Requires Review Capacity

任何被问责的人，必须同时具备理解、检验和否决的能力与条件。 否则该问责不成立，该监督为仪式性监督。

#### 原则 15：Capability Decays, So Verify It

能力不是注册即永久的资产。未被实践、未经验证的能力条目应被视为无效， 并不得作为 Assignment 与 Fallback 的依据。

#### 原则 16：Regeneration Needs No Accident

判断能力的维持不能依赖事故发生来触发。 必须存在独立于 Learning Loop 的、 在平稳期持续运行的 Regeneration Loop。

#### 原则 17：Some Things Are Not Delegable

Accountability、Liability、Purpose 的合法性判断， 以及向真实他者的解释义务，永远保留在 Human 侧。 这不是能力不足的妥协，而是责任机制的结构性前提。

#### 原则 18：Dimension, Death, Reversibility（判断基准原则）

任何包含不可逆维度的决策，都不应仅依据预期收益进行判断， 而必须**依次** 回答三问： **维度**（我从哪些维度判断？须同时含区分维度与评价维度）、 **死法**（若判断错误，系统最可能如何失败？按概率 × 代价排序）、 **可逆性**（能否回退、最坏损失是否有界、是否留下可供未来检验的证据）。

浓缩：**先看什么，再怎么死，最后决定能否试。**

本原则用第三问划定自身的适用范围（*重要 ≝ 含不可逆维度*）， 并可施加于自身。完整表述见 [方法论总纲](#方法论总纲judgment-baseline-principle判断基准原则)。

**v0.5 补充：** 本原则作为全篇最上位的硬门禁， 同样受 P-20（Gate Revisability）约束， 并须以可判定形态存在——判定规程见 [第四十六章](#四十六判断基准原则执行规范从元原则到可判定门禁)， 自适用整改记录与未决事项见 [第四十七章](#四十七judgment-baseline-self-check对本理论自身的整改记录)。

#### 原则 21：Delegation Must Raise the Bar

委托在提升 Actor 能力的同时，必须同步提升 Acceptance Criteria。 若标准不变而能力上升，组织实际降低了对认知投入的要求， Delegation 即为负向。 *（v1.0 增补，源自规范修正案 No.1 原「原则 13」； 论述见 [第四十八章](#四十八认知债务与组织能力保全)）*

#### 原则 22：Delegation Must Not Destroy the Delegator's Judgment

委托的目的是放大组织能力，不是替换组织能力。 任何长期委托都必须配套保留人类的判断训练、接管演练与独立验证路径； 否则组织获得的是执行吞吐，失去的是验证与纠偏能力—— 这正是认知债务的组织形态。 *（v1.0 增补，源自规范修正案 No.1 原「原则 14」； 论述见 [第四十八章](#四十八认知债务与组织能力保全)）*

### 37.3 修正后的核心公式

```
AI-native Organization
=
Dynamic Organizational Formation
+ Governance （含 Non-delegable Core）
+ Capability Pool （含 Calibration 与衰减模型）
+ Judgment & Regeneration Loop
+ Coordination
+ Verification & Reversibility
+ Organizational Learning
+ Degradation & Human Recoverability
```

> **v0.1 → v0.2 的范式收敛：**  
> v0.1 回答的是 **“组织如何被生成”**；  
> v0.2 补充回答的是 **“在组织被不断生成的过程中， 谁的判断力在维持、谁的判断力在流失，以及这个流失过程如何被观测和阻断”**。

# 第五篇 · 控制论基础与意图保真

## 三十八、控制论基础：可能性空间、必要多样性与共轭控制

前述各章从组织学与本体论角度建立了 AI-native Organization 的模型。 本章将其放回它真正的理论谱系——控制论（Wiener、Ashby、Beer）—— 以获得一组更锋利的判别式与更硬的边界条件。

> **接入点：** 经典控制论证明：一切控制的本质， 是**在对象的可能性空间中进行有方向的选择**。 组织的形成也不例外——它是在 *可能的协作形态空间* 中进行选择的过程。

### 38.1 组织形态空间 Ω<sub>org</sub>

设 `Ω<sub>org</sub>` 为一个组织在特定约束下 能够生成的所有合法协作结构的集合。 则 AI-native Organization 的形成函数本质上是一个映射：

```
F: (Goal, Environment, Constraint, ...) ⟶ Ω_org 中的一个元素
```

由此得到第一个判别式：

> **判别式 D-1：** 若 `|Ω<sub>org</sub>| = 1`， 则该系统无论使用多少 AI Agent， 在组织学意义上**都不是 AI-native 的**—— 它只是一个穿了 AI 外衣的经典固定组织。

因此可以将 AI-native 程度定义为：

```
AI-nativeness ∝ log |Ω_org|  ×  Navigability(Ω_org)
```

注意第二项：**只有规模没有可导航性，等于没有选择能力。** 一个能生成一万种结构、但无法判断哪一种更好的系统， 其有效 `Ω<sub>org</sub>` 仍然接近 1。 这一条直接呼应了后文 **D-2（必要多样性）**。

### 38.2 必要多样性定律（Law of Requisite Variety）

```
Ashby:
V(Controller)  ≥  V(System under control)
控制系统的多样性，必须不小于被控系统的多样性
```

这是本章最重要的一条对 AI-native Organization 的约束：

> ⚠ **推论 D-2：** 当 Actor Pool 中 AI Actor 的数量与行为多样性急剧上升时， 若 Governance / Verification / Policy 的多样性不随之上升， **组织必然在某个不可预知的点失去控制**。  
>
> 这不是治理做得不好，而是**数学上不可能**。 用一套固定的 gate 去约束一群行为空间远超 gate 表达能力的 Agent， 等价于试图用一维变量控制高维系统。

由此得到一条工程纪律：

```
引入新型 AI Actor / 扩展 Agent 自主度
 ↓
必须同步回答：治理侧的多样性从哪增加？
 ↓
若答案为空 → 不得上线该 Actor 或该自主度
```

这条与第十七章 TOC 的结论互补但机制不同： TOC 说的是「增加执行者不一定提高吞吐量」（协调瓶颈）； D-2 说的是「增加被控对象的多样性而不增加控制多样性， 会**降低安全性**」。前者是效率命题，后者是安全命题。

### 38.3 负反馈：为什么 Verification 比 Specification 更鲁棒

负反馈调节的深刻之处不在工程细节，而在它的**认识论地位**：

> 负反馈之所以能扩大控制能力， 是因为它把 **「必须预知全部干扰」** 降级为 **「只需要检测偏离了多少」**。

这条对 AI-native 治理有直接含义。设两种策略：

| 策略 | 假设 | 失效条件 |
|---|---|---|
| **Specification-first**<br>穷举规则约束 AI 行为 | 可能的行为空间可以被穷举 | Agent 行为空间随模型能力扩张 → 规则永远滞后 |
| **Verification-first**<br>建立输出偏移的检测机制 | 只需定义「什么是偏离」，不需预知偏离如何发生 | 偏移量不可观测（见 38.7 黑箱限制） |

> **结论：** 在 Actor 行为空间不可穷举的条件下， **Verification 是唯一可持续的治理策略**； Specification 只能作为 Verification 的补充， 用于收敛已知的高频模式，不能作为安全边界的承担者。

### 38.4 共轭控制：Delegation 的数学本质

共轭控制的形式为 `L<sup>-1</sup> A L`： 当对象 X 不可直接作用时，寻找变换 L 使 L(X) 落入可控域， 在变换域中执行操作 A，再逆变换回原域。

本理论据此给出 Delegation 的精确定义：

```
        原域：业务目标 X        ← 委托人无法直接作用
              │
              │ L  = Delegation（授权 + 责任契约 + 接口）
              ▼
        变换域：Actor 的可执行操作空间 L(X)
              │
              │ A  = Actor 的实际执行
              ▼
        结果：L(X) 上的状态变更
              │
              │ L⁻¹ = Accountability 回收 / 结果回译
              ▼
        原域：业务结果，可问责
```

> **核心命题：** Delegation 是共轭控制的一种具体实现。 因此， **Delegation 的全部治理难题， 在数学上等价于「L<sup>-1</sup> 是否良定义」这一问题。**

由此可以直接导出三类经典治理失败：

| L 的性质缺陷 | 数学后果 | 组织表现 |
|---|---|---|
| L 非单射 | L<sup>-1</sup> 多值，结果无法唯一归因 | **问责模糊**：多个 Actor 都能解释这个结果，谁也不负全责 |
| L 非满射 | 部分业务目标在变换域中不可达 | **Liveness 失败**：某些目标根本没有 Actor 能交付 |
| L 依赖不可观测的内部状态 | L<sup>-1</sup> 不可计算 | **黑箱问责困境**：结果可见，推理不可回译 |
| L 随时间漂移 | L<sup>-1</sup> 在不同时刻不一致 | **治理滞后**：当初的追责标准事后已不适用 |

> ⚠ **第三条是 AI Agent 问责困境的真正根源。**  
> 当 Actor 的决策依赖其内部不可观测状态时， 逆变换在原则上就不可计算。 这不是审计做得够不够细的问题， 而是**逆映射不存在**。  
>
> 因此本理论要求：**可问责性不能在事后通过审计获得， 必须在设计 L 时就被作为约束条件保证。** 这是一条设计期约束，不是运行期能力。

### 38.5 正反馈：修正第 33 章的因果模型

第三十三章将问责—能力剪刀差描述为一条线性因果链。 按控制论的语言，这是不准确的——它是一个 **自为因果的正反馈环**。

```
            ┌──────────────────────────────┐
            │                              │
            ▼                              │
    Delegation 增加                        │
            │                              │
            ▼                              │
    AI Actor 承担执行                       │
            │                              │
            ▼                              │
    执行效果良好 → 信任上升 ────────────────┤
            │                              │
            ▼                              │
    授权范围扩大                            │
            │                              │
            ▼                              │
    Human 判断实践机会减少                  │
            │                              │
            ▼                              │
    Review Capacity 衰减                   │
            │                              │
            ▼                              │
    更依赖 AI 的判断 ───────────────────────┘
            │
            ▼
    Accountability 仍绑定 Human
            │
            ▼
       ── 闭合，无天然停止点 ──
```

> **为什么闭环建模是必要的：** 线性链会让人以为「在某个节点卡住即可」； 正反馈环意味着它会**自我加速且没有天然停止点**。  
> 停止只能来自**外部注入**—— 这正是第三十五章 Regeneration Loop 必须以**周期性硬约束** 存在、 而不能依赖「想起来就练一练」的根本原因。

同理，正反馈并非只有负面意义。 **突破超稳定状态（见 38.6）恰恰需要注入正反馈**， 因为它是对抗 Stability Restoring Force 的唯一手段。 区别在于：作为病灶的正反馈必须被检测和阻断， 作为解药的正反馈必须被**有意注入且设定期限**。

### 38.6 超稳定系统：把组织做硬的代价

超稳定系统指在遭受冲击后能强行恢复原有稳态的结构。 它的代价是：因为所有微小扰动都会被迅速修复， 系统**无法通过渐进方式演化**。

> ⚠ **对本理论自身的警告：** 第三十五章建议把 Quality Gate、Mandatory Alternative Set、 Rationale Restitution 做成**不可绕过的硬约束**。 这些措施在提升执行稳定性的同时， 会把组织推向超稳定结构—— **任何偏离都会被迅速修复回原状，包括那些本应保留的偏离。**

因此新增一条工程设计要求：

```
I-GATE-REVIEW:
任何不可绕过的 Gate，必须配套一个周期性复审机制，
其职责是「撤销或弱化该 Gate 本身」，
且该复审不得由受该 Gate 保护的单元独占执行。
```

```
Hard Gate 存在
 ↓
抵御偏离（收益：稳定性）
 ↓
同时压制创新（代价：演化能力冻结）
 ↓
──────────────────────────
解法：Gate + Gate 自身的失效/复审机制
（缺后者 = 用短期稳定换取长期僵化）
```

### 38.7 黑箱限制：Verification 的能力上限

黑箱认识论的核心约束是： **我们能知道什么，受制于我们能施加什么。** 可观察变量与可控制变量的集合，决定了认识的理论上限。

```
Knowable(X)  ⊆  f(Observable(X), Controllable(X))
```

由此得到 Verification 的硬边界：

> **边界 B-1：** Verification Engine 的能力上限， 不由工程量决定，而由**可观测变量的集合** 决定。 它可以被优化到该上限，但无法越过它。  
>
> 因此「AI 输出的可验证性」在工程上不是可以无限提升的目标， 而是需要先被**测定** 的量。

与之配套的第二条纪律是防止「把理论硬套到观察上」： 当验证失败时，正确反应是修正模型， 而不是扩充解释使之合理化已发生的输出。 这条在黑箱认识论中被称为**反馈过度**， 在 LLM 时代极为常见——因为模型总能给出自洽的事后解释。

> **判别规则：** 若一个解释是在观察到结果*之后*才被构造出来的， 且它*不能*在事前被用于预测同类结果， 则该解释不构成 Evidence，只构成 Narrative。

## 三十九、Decomposition Fidelity：从意图到决策闭包

前章解决了「组织如何被生成」，本章处理上游问题： **Goal 在被分解为 Task Graph 的过程中，语义是否保持完好。** 这是前述理论中缺失的一环——第六与第十二章默认了 Goal → Task 的分解是无损的，而事实并非如此。

### 39.1 一句话需求真正的缺陷：不是缺信息，是缺尚未做出的决策

> **核心命题：** 一句话需求之所以不可落地， 不是因为它不够详细， 而是因为它**把大量尚未做出的决策折叠进了模糊性之中**。

因此 Goal → Task 的过程**不是「补充细节」， 而是「逼迫决策浮出水面」**。 这两种理解会导致完全不同的工程做法：

| 理解方式 | 做法 | 收敛效率 |
|---|---|---|
| 视为缺信息 | 追问细节、要求客户补充说明 | 低。开放性问题信息量接近 0 bit，客户会把自己已说过的话重述一遍 |
| 视为缺决策 | 枚举决策维度，逐个二叉切割 | 高。每个确定的决策点砍掉一半可能性空间（二分查找） |

### 39.2 组织的五道必然裂缝

以下五个维度是所有 Goal → Task 分解中**必然存在** 的。 遗漏任意一个，都会在下游转化为返工或事故：

| 裂缝 | 要回答的问题 | 为什么必然存在 |
|---|---|---|
| **边界** | 什么算完成？ | 委托方的「完成」与执行方的「完成」永远是两件事 |
| **例外** | 正常路径之外怎么办？ | Goal 陈述只编码 happy path，复杂度全部藏在异常路径里 |
| **主体** | 谁在什么情境下使用？ | 同一个 Goal 对不同 Actor 是完全不同的系统 |
| **代价** | 不做的代价是什么？ | 没有它就无法排序取舍，也无法判断哪些维度值得争 |
| **禁区** | 什么绝对不能发生？ | 禁区的信息量通常远大于愿望清单 |

> **为什么异常路径是需求主体：** 信息量定义为 `-log P`。 正常路径的 P 接近 1，**信息量接近 0**—— 它是所有参与者默认共享的部分，写下来几乎没有增益。 异常路径概率低、信息量高。  
> **推论：需求的质量基本等于异常的完备度。**

### 39.3 锁定的三件套

Goal 若要成为可判定对象，必须同时具备以下三项，缺一不可：

```
Locked Goal =
    Acceptance Criteria     可判定的完成条件
  + Negative Examples       反例：什么情况算未满足
  + Priority Ordering       若资源减半，先牺牲哪一项
```

第三项最常被跳过，也最有价值—— **它强迫委托方暴露真实的价值排序**， 而不是事后在变更时才争论。

其方法论本质是**把评价性语言转换为描述性语言**：

| 原始表述 | 缺陷 | 转换后 |
|---|---|---|
| 用户体验要好 | 不可判定 | 新用户完成首单平均 ≤ 90 秒，且无需查阅帮助 |
| 系统要稳定 | 双方定义不同 | 可用性 99.9%；单点故障时已确认订单零丢失 |
| 响应要快 | 掩盖了真实关切 | P95 < 200ms；超 1s 必须有明确进行中反馈 |

> ⚠ **转化失败本身就是最有价值的信息。** 当「快 = 200ms 内？」得到的回答是「不，是要感觉快」时， 真正的痛点往往不是延迟，而是 **等待期间缺少反馈**。  
> 一个拒绝被数值化的形容词，通常标记着一个尚未表达的真实需求。 此时应当把它记为**显式未决项**， 而**绝对不允许** 由执行方自行填空。

### 39.4 可逆性成本决定锁定时机

「前期完赛的需求」与「敏捷的边做边明确」之间的对立是伪命题。 真正的分界变量不是任务的简单或紧急程度， 而是 **Reversibility（可逆性成本）**：

```
可逆决策（文案、配色、排序、非破坏性调整）
     └── 可延迟，边做边定，事后修正成本低

不可逆决策（数据模型、鉴权模型、服务边界、
            不可逆数据迁移、对外契约）
     └── 必须在执行前锁定，并固化至 L1/L2 层

 GOLDEN RULE：
 只要存在不可逆决策，无论任务多简单，都必须通过 L3 决策闸门
```

这条是对第三十六章 Reversibility 属性在**需求阶段** 的具体化， 也是第四十章「AI 辅助的可能性空间收敛」中停止条件的依据。

### 39.5 Decomposition Fidelity 的形式定义

现在可以给「分解是否保真」一个可操作的定义。 设：

```
Ω_G = 满足原 Goal 的世界状态集合
Ω_T = 完成全部 Task Graph 后可能达到的世界状态集合
```

则：

```
Fidelity(Goal → TaskGraph)
        = | Ω_G ∩ Ω_T | / | Ω_T |
```

直观含义：**「所有任务都做完了，却没有达成原目标」的那部分， 就是 Fidelity Loss**。 它在集合上等于 `Ω_T ∖ Ω_G`。

```
          Ω_T（完成任务后可能的状态）
        ┌────────────────────────────┐
        │    Ω_G ∩ Ω_T               │
        │  ┌───────────────┐         │
        │  │  真正达成目标  │         │
        │  └───────────────┘         │
        │         Ω_T ∖ Ω_G          │
        │      （任务完成但目标未达）   │
        └────────────────────────────┘
       Ω_G
    （目标要求的状态）
```

> **可观测近似：** 精确集合不可计算，但在工程上可用抽样估计—— 从已完成的任务集合中抽样， 统计其中**真正对 Goal 产生可观测贡献的比例**。 长期低于阈值的团队，其 Task Graph 已与原 Goal 脱耦。

### 39.6 AI 时代的新风险：自动填补决策

AI 使 Fidelity 的下界得到显著改善，同时引入一个新的失效模式。

> **收益侧** 原型成本趋近于零。「用可运行的东西确认意图」取代「用文档确认意图」， 这是需求工程数十年来性价比最高的一次跃迁—— 因为可运行的产物帮助委托方**构造** 真实偏好， 而不是回忆出一个假偏好。

> **风险侧** AI 会极其流畅地把模糊需求补全成一个读起来完美的产物。 **它把委托方没有做的决策， 用 plausible 的默认值悄悄替他做掉了。**  
> 输出太完整，以至于没有人再去检查那些被自动填掉的空白。

> ⚠ **新增强制工序：** 凡由 AI 从模糊输入生成的规格，必须显式输出 **「我替你做了哪些假设」清单**， 并按「假设错误的代价」分级。 人工审查只需覆盖**高代价假设**。  
>
> 这道五分钟的工序，是 AI 时代新出现的、 同时也是最容易被跳过的 Fidelity 防线。

## 四十、AI 辅助的可能性空间收敛

本章把第三十九章的问题推广到一般决策： **如何借助 AI 探索、仿真并逐步锁定 Ω 的边界。** 核心结论是——AI 在这条链上的能力是**极不对称的**， 因此正确的做法是分工而非委托。

### 40.1 能力的不对称性

| 环节 | AI 能力 | 原因 |
|---|---|---|
| **扩张**（枚举维度、生成候选、构造边界值） | 强 | 预训练分布中见过海量同类系统的所有分支 |
| **仿真**（推演后果、模拟负载与行为） | 中 | 取决于是否有真实数据可供校准 |
| **收缩**（决定哪个是对的） | **弱** | 收缩需要价值函数，而价值函数只能由承担后果者提供 |

> **分工原则：** AI 当生成器（Generator）， 人或真实世界当判别器（Discriminator）。

> ⚠ **硬约束 I-DISC（判别独立性）：** 判别器**不得** 是生成该候选的同一个 LLM。  
> 让同一个模型既生成方案又为方案打分， 构成自我确认闭环—— 它会收敛到一个**内部自洽但与现实脱节** 的点。 这是整条链路上最容易犯、也最难自查的错误。

### 40.2 五层收敛漏斗

```
L0  枚举「决策维度」（不是方案）
        │   AI 展开 + Human 补充
        ▼
L1  对「不可逆维度」逐个决策
        │   Human 主导，AI 只提供后果推演
        ▼
L2  剩余可逆维度 → 生成若干差异尽量大的完整候选
        │   AI 生成，Human 只看差异矩阵
        ▼
L3  低成本原型，并排呈现给委托方
        │   用于构造偏好，而非回忆偏好
        ▼
L4  真实验证（灰度 / A/B / 真实用户）
        │   唯一提供 ground truth 的环节
        ▼
    收敛
```

> **L0 是 AI 贡献最大、最常被跳过的一步。**  
> 人类的核心困境不是不会选，而是**不知道有几个维度要选**。 这是「不知道自己不知道」，靠追问无法解决—— 你问不出口你不知道存在的东西。  
>
> 而 AI 见过海量同类系统，能够做到人做不到的一件事： **把隐含的决策空间显式化。**

> **会话分离要求：** L0~L2 的探索必须使用**独立上下文**， 中间产物须落盘为文件而非留在对话历史中。  
> 原因：LLM 会将自身早期输出视为既定事实， 对话历史本身就是最强的锚。 到第 N 轮时，它已不可能推翻自己第一轮说的话。

### 40.3 伪多样性检测

LLM 生成的 N 个候选，常常是同一分布的 N 个样本—— 表面有选择，实为一个方案的 N 种说法。 **这会让所有形式上的探索要求被 100% 通过、 同时 0% 生效。**

```
Divergence Test:
构建候选 × 维度 的差异矩阵 Δ
要求  rank(Δ) ≥ 2
即：候选之间必须在至少 2 个相互独立的维度上存在差异
```

一维差异（例如仅有技术栈不同）即为伪多样性，须重新生成。

### 40.4 虚假完备感（False Closure）

> ⚠ **定义：** 当 AI 列出一份详尽的异常或维度清单时， 决策者会产生安全感。 但这份清单可能**整体落在同一个子集内**。  
>
> **完备感的增长速度远快于真实覆盖率的增长**—— 这是整条路上最危险的认知陷阱， 因为它让人在覆盖率仅 30% 时就停止探索。

对策是分类而非计数：

```
✗ 错误做法：共列出 20 条异常 → 感到安全

✓ 正确做法：按类别分层统计
     数据层      ██████     6
     并发层      ███        3
     权限层      ░          0   ← 空层 = 真实盲区
     时序层      ██         2
     外部依赖层  █          1

   出现空层即触发补充探索
```

### 40.5 仿真的正确用法

> 仿真的产出不应是「通过 / 不通过」， 而应是**若干个具体的失败模式及其触发条件**。

理由在于成功与失败的搜索空间高度不对称： 成功路径极多且每条都能讲出自洽故事， 失败模式相对少且必要条件可枚举。 因此：

| 提问方式 | 输出价值 |
|---|---|
| 「论证这个方案能成功」 | **接近零**——几乎任何方案 AI 都能讲出成功故事 |
| 「这个方案会怎么死，触发条件是什么」 | 高——失败空间的搜索正是 AI 的比较优势 |

```
仿真置信度上限 = 校准它的真实数据质量
```

因此仿真结果只能用于**假设排序**（哪些先去做真实验证）， 不能用于**下结论**。 脱离真实数据校准的仿真，本质是一份读起来很像证据的推演。

### 40.6 元判断基准：维度 × 死法 × 可逆性收敛

综上，可以把整个收敛过程压缩为一个可迁移的判断基准。 它之所以够格称为「元」，是因为它完成了一次关键转换：

| 原始问题 | 可判定性 | 转换后 |
|---|---|---|
| 这个方案好不好？ | **不可判定**——需要完整价值函数，而它通常不存在 | — |
| 这些候选有什么不同？ | 可判定（纯结构描述） | **维度** |
| 它在什么条件下不成立？ | 可判定（条件命题，可推演可检验） | **死法** |

```
Meta-Judgment Criterion =
    维度      正向：识别出真正的差异轴（向外扩展）
  × 死法      负向：识别每个候选的失效边界（向内深挖）
  × 可逆性    收敛：决定何时停止并承诺
```

> **为什么三者缺一不可：**  
> 只有维度没有死法 → 知道有哪些选项，却不知各自在多大的邻域内成立  
> 只有死法没有维度 → 能评估给定候选，却**发现不了候选集本身不完备**——在最坏情况下表现为「在错误的选项里选对了」  
> **缺了可逆性** → 无限枚举导致分析瘫痪， 而分析瘫痪在效果上等价于不决策

```
停止规则：
当且仅当「剩余的不确定性全部落在可逆维度上」时，
停止分析并作出承诺。

逆命题同样成立：
只要还有一个不可逆维度悬而未决，就不允许进入执行。
```

#### 自适用性检验

作为元工具，它必须能够施加于自身。这既是检验，也是使用方式：

| 施加对象 | 内容 |
|---|---|
| 本基准的**维度** | 分析深度 vs 决策速度；全覆盖 vs 关键少数；结构完备 vs 时机窗口 |
| 本基准的**死法** | 维度列表虚假完备；死法脱离真实数据；无限枚举导致瘫痪 |
| 本基准的**收敛条件** | 下一轮新增维度不再改变候选排序时停止 |

> **能通过自适用检验的工具不多。** 这大概是它够格被称为「元判断基准」最硬的理由： 它不仅能判断对象，还能判断**这一次判断做得好不好**。

## 四十一、Commitment 与 Contract 的形式化

第九章建立了协作的最小结构（Dependency）与基本概念， 但未给出形式化定义，也未提供 forecasts 履约 AST 的可追踪结构。 本章补全这一层， 并把第三十三章的 Calibration 思想下沉到 Commitment 粒度。

### 41.1 Commitment 的最小结构

```
Commitment(A, B, p, q)
表示 Actor A 向 Actor B 承诺：
当条件 p 成立时，使 q 成立。
```

> **为什么 Commitment 比 Task 更基础：** Task 描述状态转换，是单向的事实描述； Commitment 描述的是**主体之间的关系**， 它在 Task 尚未完成时就已经存在， 并且可以被违背——因此才需要 Contract、Verification 与问责。

### 41.2 Contract 的结构

```
Contract =
    Parties              缔约方
  + Commitments          承诺集合
  + Preconditions        前置条件
  + Obligations          义务
  + Rights               权利
  + Constraints          约束
  + Acceptance Criteria  验收标准
  + Consequences         违约后果
```

```
Contract = { C₁, C₂, ..., Cₙ }
```

### 41.3 五个「≠」：本体的关键区分

| 对象 | 回答什么 | 能否被违背 | 运行时是否消亡 |
|---|---|---|---|
| **Task** | 做什么 | 否（它只是描述） | 完成后消亡 |
| **Capability** | 能做什么 | 否 | 持续存在（但会衰减，见 34） |
| **Skill** | 怎么做 | 否 | 可复用资产 |
| **Role** | 谁持续负责 | 可 | Temporary Role 可消亡 |
| **Contract** | 多主体协作如何稳定 | **可** | 履约后终止 |

> ⚠ **工程纪律：** **Role Template 不得包含 Skill。**  
> 一旦把能力写进角色，Role 就从**契约** 退化回**身份**， 动态委派立即失效。  
> Role 只回答 Responsibility + Authority + Constraint + Accountability； Skill 回答 HOW，属于可被任意 Actor 装配的独立资产。

### 41.4 Contract 作为状态机

```
        ┌──────────┐
        │  DRAFT   │
        └────┬─────┘
             │ offer
             ▼
        ┌──────────┐
        │ OFFERED  │──── reject ──→ REJECTED
        └────┬─────┘
             │ accept
             ▼
        ┌──────────┐
        │  ACTIVE  │
        └────┬─────┘
             │ fulfill            violate
     ┌───────┴────────┐              │
     ▼                ▼              ▼
┌──────────┐   ┌────────────┐  ┌───────────┐
│FULFILLED │   │  PARTIAL   │  │ VIOLATED  │
└──────────┘   └────────────┘  └─────┬─────┘
                                      │ remedy
                                      ▼
                                 ┌──────────┐
                                 │ REMEDIED │
                                 └──────────┘
```

状态机化的价值在于：**Contract 状态成为可查询的组织事实**， 而不是散落在对话与邮件里的自然语言承诺。 由此可以直接回答「当前有多少 Contract 处于 VIOLATED」这类问题， 而无需人工检索。

### 41.5 Commitment Calibration：给承诺配上征信

这是本章相对前述理论最重要的一处增补。 **第三十三章为 Actor 定义了 Calibration， 但粒度停留在 Actor 层面。 真正降低协作风险的是把同一机制下沉到 Commitment。**

```
CommitmentTrackRecord(A, ContextClass) =
    ( Claimed Confidence,
      Observed Fulfillment Rate,
      SampleSize,
      Violation Modes,
      LastUpdated )
```

```
缺乏 Calibration 的 Contract 体系：

  Actor 承诺 q
    ↓
  系统接受，形成 Assignment
    ↓
  违约发生
    ↓
  事后追责
    ↓
  ── 下一次仍然不知道它会不会再违约 ──

具备 Calibration 后：

  Actor 承诺 q
    ↓
  Runtime 查询该类承诺的历史履约率
    ↓
  低履约率 → 要求担保 / 拆分承诺 / 增加验证频率
    ↓
  履约结果回流更新 TrackRecord
    ↓
  ↺ 形成声誉负反馈
```

> **核心命题：** Commitment 定义了协作的可能， Calibration 定义了协作的可信。  
> **没有 Calibration 的 Contract 体系， 等价于没有征信的信贷体系——它靠第一次违约才获得信息， 而有些违约是不可逆的。**

这也构成一个负反馈回路，把第三十八章的 38.3 落到实处： 系统无需预知某个 Actor 会在哪里失约 （那是不可能的）， 只需持续观测**它实际履约与自我宣称之间的偏差**。

### 41.6 Artifact before Conversation

多 Agent 协作的默认范式是「让 Agent 互相对话」。 本理论认为这是错的：

| 协作介质 | 复杂度 | 可验证性 | 可重放性 |
|---|---|---|---|
| Agent 自然语言对话 | O(n²) | 低 | 不可 |
| **Artifact + Shared State** | O(n) | **高** | **可** |

> **原则：** 协作应围绕**共享状态与制品** 进行， 而非围绕对话进行。  
> 对话用于澄清意图，不用于承载协作状态。 凡是进入 Artifact 的东西才能被 Verify、被缓存、被重放。

这条也顺带解决了 41.4 的前提问题： **Contract 状态机之所以可判定， 正因为它的每次跃迁都由 Artifact 与 Evidence 触发， 而不是由某句对话声明触发。**

## 四十二、形式化性质全集

本章把分散在第十三章（13.7）、第三十六章（36.2） 以及第四十一章中的安全与活性性质统一编号， 以消除交叉遗漏，并为第五十章的一致性检查提供完整清单。

| 编号 | 性质 | 要求 | 来源 |
|---|---|---|---|
| P-01 | Safety | 不被允许的事情永远不发生 | 13.7 |
| P-02 | Liveness | 条件满足时，承诺的结果最终会发生 | 13.7 |
| P-03 | Authorization | 无授权不得执行受保护行动 | 13.7 |
| P-04 | Responsibility Consistency | 关键责任必须存在明确归属 | 13.7 |
| P-05 | Traceability | 关键状态变化必须可追踪 | 13.7 |
| P-06 | Verifiability | 结果必须具有可验证证据 | 13.7 |
| P-07 | Consistency | 规则、权限与责任不得互相矛盾 | 13.7 |
| P-08 | Termination | 临时组织在目标完成或终止后能够退出 | 13.7 |
| P-09 | **Reversibility** | 关键行动可回滚，或存在可执行停机路径；不可逆行动默认禁止自动化 | 36.2 |
| P-10 | **Fail-safe Degradation** | Actor 失效时降级到明确定义的最小安全形态，而非静默失败 | 36.2 |
| P-11 | **Human Recoverability** | 关键路径必须存在已完成 Independent Capability 验证且未过期的 Human Actor | 36.2 |
| P-12 | **Override Accessibility** | 否决所需的操作与认知成本不得高于同意的成本 | 36.2 |
| P-13 | **Non-atrophy** | 不得存在使问责者长期无法实践其所背书判断的组织设计 | 36.2 |
| P-14 | Deadlock Freedom | Contract 网络不得进入互相等待的不可进展状态 | 41.4 |
| P-15 | Reachability | Contract 的终态从初始态可达 | 41.4 |
| P-16 | Realizability | Contract 规定的义务在当前 Capability Pool 中可被实际履行 | 41.5 |
| P-17 | Consent Validity | 缔约方在签署时具备 Review Capacity（见 I-ACC） | 33.3 |
| P-18 | **Requisite Variety** | 治理机制的多样性不低于被治理 Actor 行为的多样性 | 38.2 |
| P-19 | **Invertibility of Delegation** | L⁻¹ 必须良定义，且不得依赖不可观测的内部状态 | 38.4 |
| P-20 | **Gate Revisability** | 不可绕过的 Gate 必须配套周期性自我复审机制 | 38.6 |
| P-21 | **Capability Preservation** | 委托执行与认知的同时，必须保留足以验证输出、纠正偏差、 并在 Actor 不可用时接管任务的人类判断能力基线 | 13.7 / 四十八 |

> **P-14 至 P-20 是 v0.3 相对 v0.1 的全部增量。** 前三条补上了 Contract 层的运行期性质， 后四条补上了「委派可逆性」与「治理自身的演化能力」—— 这两处正是 v0.1 与 ChatGPT 协作理论共同的盲区。 P-21（Capability Preservation）为 v1.0 相对 v0.5 的增量， 补上了「委托不得侵蚀委托人判断能力」这一时间维度上的安全性质。

## 四十三、版本说明与编号约定

### 43.1 章节编号空缺说明

第二十章之后直接跳至第二十九章， 编号 21~28 为空缺。 这是历史原因：第二十九至三十一章是在 v0.1 成文后追加的， 作者按「新增序号」追加而未回填空缺。  
**v0.3 保留该编号以避免外部引用失效**， 并在此明示。 **v1.0 继续保留该空缺**： 新增的第四十八至五十章按既有约定续接编号（47 之后顺延）， 而不回填 21~28，外部引用继续有效。

### 43.2 v0.1 → v0.4 演进

| 版本 | 解决的问题 | 新增章节 |
|---|---|---|
| **v0.1** | 组织如何被生成 | 第 1~20 章 + 第 29~31 章 |
| **v0.2** | 在生成过程中，谁的判断力在流失、如何阻断 | 第 32~37 章（Judgment / ACC / Ghost Capability / Regeneration / Non-delegable Core / 增补不变量） |
| **v0.3** | 控制的数学基础、意图到任务的保真度、收敛方法、协作的形式化 | 第 38~43 章（控制论基础 / Decomposition Fidelity / AI 辅助收敛 / Contract 形式化 / 性质全集 / 版本说明） |
| **v0.4** | 性质的可计算判定；以及理论的目的因——这一切为了什么 | 第 44~45 章（形式语义 Phase A / Human Capability Migration）+ 原则 19~20 |
| **v0.5** | 方法论总纲自身的可判定化——「有没有问三问」如何成为事实 | 第 46~47 章（判断基准原则执行规范 / Judgment Baseline Self-Check） |
| **v1.0** | 保障机制的时间维度：随时间如何被侵蚀、又如何计量； 全链路一致性核对 | 第 48~50 章（认知债务 / 组织资产与验证额度 / Goal Fidelity） + 原则 21~22 + P-21 + 原则 7 修订为三段式 |

### 43.3 后续路线

```
Phase A   ✅ 已完成 → 第四十四章
          时态语义（LTL / CTL，含可逆性的 AG-EF 刻画）
          道义语义（O / F / P，含义务冲突与 CTD）
          操作语义（SOS 推理规则与 LTS）

Phase B   Organization Runtime 参考实现
          Conformance Tests

Phase C   Organizational Learning 的落地回路
          延迟复盘机制（时间作为 ground truth）

Phase D   Commitment Calibration 的数据模型
          履约率回流与 Runtime 权重调制

Phase E   Judgment Baseline 的校准回路          ← v0.5 新增
          DecisionRecord 落地（46.3）
          校准判据的首次读数（46.4）
          首轮专项复审（47.4）

Phase F   Organizational Asset 的落地回路       ← v1.0 新增
          Verification Credit 数据模型（49 章）
          组织资产负债表与五指标基线（49 章）
          Goal Drift Monitor 运行时机制（50 章）
          多跳复合保真度建模（50 章挂账项）
```

> **五版之后的理论收敛：**  
> v0.1 回答「组织如何被生成」；  
> v0.2 回答「谁的判断力在流失、如何观测与阻断」；  
> **v0.3 回答「这套生成机制本身在什么条件下是可能的、可保真的、可停止的」。**  
> **v0.4 回答「性质的判定是可计算的吗？以及——这一切最终为了什么」。**  
> **v0.5 回答「作为总纲的那条原则，自己能不能被检查」。**  
> **v1.0 回答「这些机制随时间如何被侵蚀、又如何计量」。**  
>
> 前三版依次补上的是**对象层** 的可判定性； v0.5 补上的是**方法层** 的可判定性； v1.0 补上的是**时间层**——资产与判断的持久性。 若方法层不可判定，则它统摄的所有判定都建立在一条不可检查的假设上—— 这正是本原则自己第三问所反对的形态； 若时间层缺席，则一切完备的保障机制都会在运行中静默失效， 而账面上一切正常。

# 第六篇 · 形式语义与人的价值迁移

## 四十四、形式语义（Phase A）

第十三章给出了系统的语法结构，第十四章给出了可执行规范， 第四十二章列出了 20 条性质。 但**这些性质此前只以自然语言陈述，无法被自动判定**。 本章给出它们的语义，从而使「组织是否符合规范」从人工审查 变为可计算问题。

> **Phase A 的三块内容：** 时态语义（性质何时成立）、 道义语义（权力与义务）、 操作语义（状态如何转移）。

### 44.1 时态语义：LTL 与 CTL

组织的运行时行为是一条状态序列。用两种时态逻辑刻画：

| 算子 | LTL（线性） | CTL（分支） | 含义 |
|---|---|---|---|
| □ / G | □φ | AG φ | 所有未来状态均满足 φ |
| ◇ / F | ◇φ | AF φ | 未来某状态满足 φ |
| ○ / X | ○φ | AX φ | 下一状态满足 φ |
| U | φ U ψ | A[φ U ψ] | φ 一直成立直到 ψ 成立 |
| 存在量词 | — | **EF φ / EG φ** | **存在** 一条路径可达 / 一直满足 |

> ⚠ **为什么必须同时保留两种：** LTL 与 CTL 的表达能力**互不包含**。  
> LTL 隐含全称路径量词，无法表达「存在一种可能」； 而 **Reversibility（可逆性）本质上是存在性命题**—— 「存在一条回到原状态的路」， 因此**只能用 CTL 表达**。

### 44.2 性质的时态翻译

第四十二章的性质中，可时态化的部分如下：

| 编号 | 性质 | 时态公式 |
|---|---|---|
| P-01 | Safety | `□ ¬hazard` |
| P-02 | Liveness | `□(precondition → ◇result)` |
| P-05 | Traceability | `□(state_change → ◇evidence_recorded)` |
| P-08 | Termination | `◇dissolved` |
| P-13 | Non-atrophy | `□◇(judgment_practiced)`　无限经常地实践 |
| P-14 | Deadlock Freedom | `□◇progress` |
| P-15 | Reachability | `◇terminal_state` |

### 44.3 可逆性的时态刻画

这是时态化过程中最重要的一处收获—— 可逆性在 CTL 中有一个极其精确的表达式：

```
Reversible(a)  ≡  AG( executed(a) → EF undone(a) )
```

读作：

> **在所有路径的所有状态下，只要行动 a 已被执行， 就*存在*一条路径能够撤销 a。**

同理，Human Recoverability 与 Regeneration 也可精确化：

```
P-11  Human Recoverability
      ≡  AG( ai_unavailable → EF( human_takeover ∧ safe ) )

Non-atrophy (P-13) 的可操作形式
      ≡  □◇( decision_made_without_ai )
         「无限经常地发生『不依赖 AI 的决策』」
```

> **时态化的实际价值：** 「可逆性」「可接管性」这两个词在日常语言中极易被含糊使用—— 人们常把「*理论上*可以」当作「可以」。  
> 写成 `AG(... → EF ...)` 之后， 「可以」被强制定义为 **「从每一个可达状态出发，都存在实际可达的回退路径」**， 从而可被模型检测直接判定。

### 44.4 道义语义：权力、义务与禁止

时态逻辑刻画「**是什么**」， 但组织的核心概念——Authority、Obligation、Prohibition—— 属于「**应当是什么**」， 需要道义逻辑（Deontic Logic）：

```
O(p)  p 是义务的（obligatory）
F(p)  p 是被禁止的（forbidden）  ≡ O(¬p)
P(p)  p 是被允许的（permitted）  ≡ ¬O(¬p)
```

| 组织概念 | 道义表达 |
|---|---|
| **Authority** | `P(a)` — Actor 被允许执行 a |
| **Policy 禁止** | `F(a)` — 执行 a 被禁止 |
| **Delegation** | 将 `P(a)` 从 Principal 转移至 Actor |
| **Commitment** | `p → O<sub>A</sub>(q)` — p 成立时 A 有义务使 q 成立 |
| **Non-delegable Core** | 不可转移的 `O` 与 `F`（见 36.1） |

> **核心洞察：** `Capability ≠ Authority`（第十六章）在道义逻辑中获得了精确含义：  
> **Capability 是*事实*命题（能做）， Authority 是*道义*命题（被允许做）。**  
> 二者属于不同的逻辑范畴， 因此从前者**永远推导不出** 后者—— 这正是「AI 不因拥有智能而天然获得业务权力」的逻辑根据。

### 44.5 义务冲突与反义务（CTD）

道义逻辑有两个经典难题，二者在组织中都有真实对应。

#### ① 义务冲突（Deontic Conflict）

```
O(p) ∧ O(¬p)   ——  两个 Contract 给出互斥义务
```

这是角色冲突的形式根源： 当同一 Actor 被两条 Contract 施加互斥义务时， 无论它做什么都必然违约。 **这不是执行问题，是规范本身不一致**， 对应性质 P-07（Consistency）的检查项。

#### ② 反义务（Contrary-to-Duty, CTD）

```
应当交付；
若未交付，则应当补救；
若已交付，则不应当补救。
```

> **与 41.4 的对应：** CTD 正是 **Contract 状态机中 VIOLATED → REMEDIED 这一跃迁** 的道义结构。  
> 也就是说， **「补救义务」不是一个附加条款， 而是义务被违反后*自动派生*的新义务。** 把 Contract 建模为状态机，正是为了使 CTD 可判定。

### 44.6 操作语义：状态如何转移

前两节规定了「应当」与「何时」， 本节规定「如何」。 采用结构化操作语义（SOS），以推理规则给出：

```
配置  Config = ⟨ S, E, C, D ⟩
  S  业务/世界状态
  E  证据存储
  C  Contract 存储
  D  Delegation 存储
```

行动转移规则：

```
  pre(a) ⊨ S        assigned(actor, a)        auth(actor, a)
  ────────────────────────────────────────────────────────────
      ⟨S, E, C, D⟩  ──a──▶  ⟨apply(a,S), E ∪ {ev(a)}, C', D'⟩

读作：
  若 前置条件被当前状态满足
  且 该行动已分配给该 Actor
  且 该 Actor 对该行动拥有 Authority
  则 系统可经由行动 a 转移到新配置，
     并产生一条证据 ev(a)
```

Contract 跃迁规则：

```
  p ⊨ S        ¬q ⊨ S        deadline_passed
  ───────────────────────────────────────────
      Contract: ACTIVE ──▶ VIOLATED
      （并触发 CTD：派生补救义务 O(remedy)）
```

> **操作语义的收益：** 组织的运行时被定义为一个**标记转移系统（LTS）**。 LTS 一旦建立，44.2 的全部时态公式 便可在其上**自动判定**—— 这就是下一节的模型检测。

### 44.7 三层验证体系

| 层次 | 方法 | 回答的问题 | 时点 |
|---|---|---|---|
| **L1 静态证明** | 类型检查、定理证明 | 规范本身是否自洽（无义务冲突、无不可达状态） | 设计期 |
| **L2 模型检测** | LTS + LTL/CTL 模型检测 | 在所有**可能** 执行路径上，性质是否成立 | 部署前 |
| **L3 运行时验证** | 将时态公式编译为监控器 | 在**实际** 执行路径上，性质是否被违反 | 运行中 |

> ⚠ **L2 与 L3 不可互相替代：** L2 覆盖可能性空间（事前穷举），但受制于状态爆炸； L3 只覆盖实际发生的一条路径（事后观测）， 但不受规模限制且能捕获**规范未预见的情形**。  
> **只做 L2 会漏掉真实的意外，只做 L3 则永远只能在事后得知。**

### 44.8 形式化的边界（诚实说明）

本节形式化不能覆盖的部分，必须明确标注：

| 限制 | 说明 | 可能的补救 |
|---|---|---|
| **状态爆炸** | Actor 与 Contract 数量上升后，LTS 规模指数增长，L2 不可行 | 抽象、对称性归约、有界模型检测 |
| **概率与连续行为** | LTL/CTL 是定性的，无法表达「99.9% 可用」这类定量要求 | 概率时态逻辑（PCTL / CSL） |
| **语义内容不可形式化** | 「输出是否正确」涉及语义，非状态可达性可判定 | 只能降级为 Evidence + 外部判别器（见 40.1 I-DISC） |
| **道义逻辑自身的争议** | 义务聚合、不可断定义务等在哲学上尚未有定论 | 工程上采用标准道义逻辑 SDL，并显式记录其取舍 |

> **最重要的一条限制是第三条。**  
> 形式语义能判定「流程是否被遵守」， **不能** 判定「产出是否真的正确」。 后者的判别器必须来自真实世界—— 这与 40.1 的判别独立性约束（I-DISC）是同一条结论的两种表述。

## 四十五、Human Capability Migration：人的价值迁移

前述全部章节回答的是「AI-native Organization 如何运行」。 本章回答一个更上游的问题：**它为了什么。** 这也是本理论此前唯一缺失的层次——目的因。

> **核心命题：** AI 时代真正需要升级的，不只是人的知识和技能， 而是**人的价值产生机制**。

### 45.1 为什么这不是一个分支，而是顶层闭环

本理论此前有一条隐含的、未被追问的断裂： 它详尽地描述了组织如何生成、能力如何委派、判断如何不流失， **却从未论证这一切服务于什么**。 若不加这一章，理论的最优解会退化为「最大化 AI 自主性」—— 而这在逻辑上恰恰会消灭人的位置。

```
    Human Purpose
          │
          ▼
    Human Goal
          │
          ▼
  AI-native Organization
          │
          ▼
  Human + AI Capability Amplification
          │
          ▼
  Better Decisions → Better Outcomes
          │
          ▼
      Evidence
          │
          ▼
   Human Learning
          │
          ├──────────────► Human Capability ↑
          │                        │
          │                        ▼
          │              Organizational Capability ↑
          │                        │
          └────────────────────────┘
                    ↺  闭合
```

> **因此本理论的最高层命题应明确为：**  
> **AI-native Organization 的最终目的， 不是最大化 AI 的自主性， 而是最大化人的有效价值、判断能力、创造能力与进化能力。**  
>
> 推论：**AI 越强，人不应该越像机器。** 机器负责越来越多的可自动化能力， 人向 Goal、Judgment、Meaning、Creation、Responsibility 与 Evolution 上移。

### 45.2 控制层级阶梯

| 层级 | 人是什么 | 核心能力 | AI 可承担度 |
|---|---|---|---|
| L0 | 执行者 | 完成 Task | **高** |
| L1 | 专业者 | 掌握 Skill | **高** |
| L2 | 问题解决者 | Problem Solving | 中高 |
| L3 | 问题定义者 | Problem / Goal Definition | 中 |
| L4 | 判断者 | **Judgment（承担）** | **不可** |
| L5 | 编排者 | Capability Composition | 低 |
| L6 | 组织者 | Organization Formation | 低 |
| L7 | 系统设计者 | System Design | 低 |
| L8 | 创造者 | Create New Goals / Possibilities | **不可** |
| L9 | 进化者 | Continuous Self-Improvement | **不可** |
| L10 | 增强系统设计者 | Human + AI + Organization Evolution | **不可** |

关键跃迁不是 L0 → L10 的线性爬升， 而是一次**价值来源的转移**：

```
      AI 主要承担
          ↓
  Knowledge / Skill / Execution
  ─────────────────────────────
  Human 保留并上移：
    Purpose · Goal · Judgment
    Values · Creativity
    Responsibility
    Capability Composition
    Organization Design
    Evolution
```

### 45.3 关键修正：向上迁移 ≠ 向下放弃

> ⚠ **本章与第三十四章的冲突必须显式调和。**  
> 若把阶梯理解为「能力替代」—— 人往上升就可以放弃下层能力—— 那么这套阶梯会**直接批量制造 Ghost Capability**： Registry 里写着「人会」，Assignment 因此成立， 但人早已无法独立执行。  
>
> **这与本理论的核心安全属性 P-11（Human Recoverability） 正面冲突。**

正确的理解是：

```
阶梯描述的是「人所控制的层级」（Control Level），
不是「人所放弃的能力」（Capability Set）。

正确的迁移：  Control Level ↑   且   Capability Set ⊇ 原有集合
错误的迁移：  Control Level ↑   且   Capability Set ↓
```

> **因此新增不变量 I-MIGRATE：**  
> 控制层级上升，**不得** 以 Independent Capability 的丧失为代价。 每一次层级跃迁，必须同步确认 **该 Actor 在下一层仍保有未过期的独立执行能力**（见 34.4）。

### 45.4 阶梯的默认方向是向下的

这张阶梯表极易被读成一张「成长路线图」。 但它不是——它有方向性，而且**默认方向是向下**：

```
  上升：需要持续做功
        （对应 Regeneration Loop，须外部注入）

  下降：自发过程
        （对应 Skill Atrophy，无需任何外力）


        L10 ↑  需要做功
         │
         │  ╲  ← 默认方向：下滑
         │   ╲
        L0  ↓  熵增，自动发生
```

> **这不是比喻，是能量论证：** 能力的维持依赖持续实践（第三十五章）， 实践的中断不需要任何原因—— 它只需要「没有发生」。  
> 因此**上升需要外部能量注入，下降不需要。** 阶梯的形状不是楼梯，是**需要持续对抗的斜坡**。

由此得到一条与判断基准原则（总纲）的对接：

```
层级越高，衰减的代价越大：

  L0/L1 能力丧失 → 可重建，成本中等（重新练习）
  L4    判断力丧失 → 重建成本远高于获得成本
  L8/L9 创造与进化能力丧失 → 可能不可逆

推论：越往上层，
      Regeneration 的优先级越高，
      越不能依赖「出事了再练」。
```

### 45.5 Composition 的能力上限

L5（能力编排者）是阶梯中最具时代特征的一层， 但它有一个严格的上限条件，必须写明：

```
Composition 的质量上限
    =  对被组合单元的 Capability 估计精度
```

编排的前提是知道每个被组合单元的真实能力边界。 而 AI 的能力边界恰恰是**最不可观测** 的： 黑箱、能力不稳定、分布外失效、且会自信地声称自己能做到。

> ⚠ **推论：** 没有 Calibration 支撑的编排者， 编排的只是 **「AI 声称的能力」**， 而非 AI 实际拥有的能力。  
> 这会在 41.5 的 Contract 体系中表现为 **大面积的 Realizability（P-16）失败**—— 缔约时以为可履行，执行时才发现不可行。

因此 L5 不是一项独立能力，它必须依赖两个前提：

```
L5 Capability Composition
      │
      ├── 依赖 ①：Capability Calibration（33.3 / 41.5）
      │            被组合单元的可信度记录
      │
      └── 依赖 ②：Verification（P-06）
                   输出的可判定性
```

### 45.6 Judgment 的完整定义：承担，而非选择

第三十二章定义了 Judgment，此处补上常被遗漏的一半。

| 常见理解（不完整） | 完整定义 |
|---|---|
| 「在答案 A/B/C 中选一个」 | 此为**选择**——AI 往往做得更好 |
| — | **意识到「这里有一个问题」**（问题生成，而非问题求解） |
| — | **知道何时不该做**（Stop / Escalate） |
| — | **为该判断承担后果，并保留说「不」的能力** |

> **判断的成本在于承担，不在于选择。**  
> 选择是可外包的（且外包后可能更准）； **承担不可外包**—— 这正是 36.1 Non-delegable Core 在个体层的表达。

### 45.7 两条路径

> **路径 A：外包导致退化**

```
不会思考
 ↓
问 AI
 ↓
接受答案
 ↓
不验证
 ↓
判断能力流失
 ↓
Passive Consumer
```

> 这正是第三十三章问责—能力剪刀差在个体层的形态， 且按 38.5 它是一个**正反馈环**。

> **路径 B：增强导致进化**

```
自己提出假设
 ↓
让 AI 扩展搜索空间
 ↓
让 AI 生成反例
 ↓
让 AI 模拟
 ↓
自己判断
 ↓
实践
 ↓
Evidence
 ↓
修正认知
```

> 这与 40.1 的「AI 当生成器、人当判别器」 是同一结构在个体层的实现。

> **因此 AI-native 的人不是「最会用 AI 的人」，** 而是**能够利用 AI 把自己的认知、判断、创造、 组织与学习能力持续放大的系统**。

### 45.8 增补不变量与原则

```
I-MIGRATE    控制层级上升不得以减少 Independent Capability 为代价
I-SLOPE      能力维持须持续做功；Regeneration 优先级随层级上升而提高
I-COMPOSE    Composition 必须依赖 Calibration，否则不得作为 Assignment 依据
I-TELEO      Organization 的目标是人的价值与能力放大，
             而非 AI 自主性的最大化
```

#### 原则 19：Amplification, Not Replacement

AI-native Organization 的成功标准不是「AI 承担了多少工作」， 而是 **「人的有效价值、判断能力、创造能力与进化能力 是否被放大」**。 若一项自动化提高了产出却降低了人的 Review Capacity， 则它在本理论下被判为**负收益**。

#### 原则 20：Ascend Without Abandoning

人向更高的控制层级迁移时， 必须保留下层的独立执行能力并定期复验。 **向上不是离开，而是带着走。**

> **本章的一句话总结：**  
> 人的进化 = 从能力的执行者， 逐渐成为目标的定义者、判断的承担者、 能力的编排者、组织的设计者， 以及**自身持续进化的系统**——  
> **同时，不放弃任何一层曾经拥有的能力。**

# 第七篇 · 元原则的可判定化

## 四十六、判断基准原则执行规范：从元原则到可判定门禁

方法论总纲给出了判断基准原则的**语义**——三问是什么、为何顺序强制、如何自适用。 但它没有给出**判定规程**——什么算答完了、谁来判、证据落在哪、判错的后果是什么。 按本理论自己的标准（38.3、0.4 留档子问），缺少判定规程的原则， 在运行时等价于一条**不可判定的声明**： 它可以被引用，不能被检查；可以被宣称遵守，无法被证伪。

> ⚠ **本原则的自我指控：**  
> 第三十五章 35.3 已判定——「一条原则若无物理摩擦，在压力下必然被跳过， 这不是意志力问题，而是经济学问题」。  
> 而判断基准原则作为全篇最重要的门禁， 此前恰好**只以原则形式存在，没有任何物理摩擦**。  
> 本章补齐这一层。它不是对原则的修辞补充，而是原则自身的可用性前提。

### 46.1 执行状态机：三问的可判定形态

按 41.4（Contract 作为状态机）与 44.6（操作语义）的同一方法， 把一次判断固化为一台可查询的状态机。 关键设计约束：**状态只能由 Artifact 跃迁，不能由声明跃迁** （41.6 Artifact before Conversation）。

```
                ┌──────────┐
                │  CLOSED  │  ← 未进入三问（完全可逆决策的合法起点）
                └────┬─────┘
                     │ 第三问预判：存在不可逆维度？
                     │ IrreversibilityHypothesis 落盘
                     ▼
                ┌──────────┐
                │ D-OPEN   │  D1 维度展开完成
                └────┬─────┘      证据：DimensionSet ⊇ {区分, 评价, 反向}
                     │ 空层检测（40.4）+ 伪多样性检测（40.3）通过
                     ▼
                ┌──────────┐
                │ D-OPEN   │  D2 死法枚举完成
                └────┬─────┘      证据：FailureModeSet，每项含触发条件
                     │ 代价加权排序完成；尾部致命项已显式列入
                     ▼
                ┌──────────┐
                │ D-OPEN   │  D3 目标可错性检查完成
                └────┬─────┘      证据：ExternalSignalSet
                     │ 无外部信号 → 记 GOAL-UNVERIFIED，不得记 PASS
                     ▼
                ┌──────────┐
                │ R-OPEN   │  R1 回退能力 / R2 损失上界 / R3 路径预置
                └────┬─────┘      证据：RollbackPlan（须在执行前签署）
                     │ R4 留档结构已定义（Decision Record Schema）
                     ▼
                ┌──────────┐
                │ COMMITTED│  ← 停止规则满足，允许进入执行
                └────┬─────┘
                     │ 执行
                     ▼
                ┌──────────┐
                │ SETTLED  │  ← 到期结算：Predicted vs Observed 已记录
                └──────────┘
```

> **关键跃迁规则：** ① **跳步不合法**。D-OPEN 在 D2 完成前不得进入 R-OPEN （0.6 的单向依赖链在此被实现为状态约束，而非建议）。  
> ② **未决项不得由执行方填空**。 D3 出现 GOAL-UNVERIFIED 时，该状态必须随 Artifact 一路传递到 `assumptions` 字段（39.6 自动填补决策防线）。  
> ③ **没有未决项的 COMMITTED 是可疑的**。 44.8 已指出语义内容不可形式化。 一份「假设清单为空」的规格，其可疑程度高于一份列了十条假设的规格—— 它更可能是没查，而不是没有。

### 46.2 判定表：三问的门槛与证据

这是本章的核心。 对每一问给出：**判定问句、通过条件、必备证据、失败后果** 四列。 「失败后果」一列的写法遵循 38.6——门禁必须写明它失败时会做什么， 否则它就是装饰。

| 环节 | 判定问句 | 通过条件 | 必备证据（Artifact） | 失败后果 |
|---|---|---|---|---|
| **D0 范围判定** | 此决策是否包含不可逆维度？ | 给出**可被推翻的** 不可逆性假设，而非结论 | IrreversibilityHypothesis<br>（含最坏情形描述） | 判定为「无不可逆维度」→ 记 CLOSED 并**留档该假设**；后续一旦证伪，回流为错题（46.6） |
| **D1 维度** | 候选之间真正不同的轴是什么？ | 区分维度 **≥ 2 且相互独立**；评价维度可观测；反向维度已识别 | DimensionSet<br>（三类齐全） | 缺区分维度 → **冻结**。不得以「评价维度已足够」推进（0.2 概念漂移警告） |
| **D1 完备性** | 维度清单是否落在单一子集内？ | 按类别分层统计，**无空层** | DimensionHistogram<br>（分层覆盖数） | 出现空层 → **触发补充探索**，不得以总数达标通过（40.4） |
| **D1 多样性** | 候选是真不同，还是同一分布的不同说法？ | 差异矩阵 **rank(Δ) ≥ 2** | DivergenceMatrix | rank(Δ) = 1 → 判为伪多样性，**候选集退回重生成**（40.3） |
| **D2 死法** | 每个候选在什么条件下不成立？ | 每个候选**至少 1 个** 失效模式，且写出**触发条件** 而非名称 | FailureModeSet | 缺失或只写名称 → **冻结**。允许加时补测，不允许跳过 |
| **D2 排序** | 死了最疼的是哪个？ | 按 `概率 × 代价` 排序，**尾部致命项已显式列出** | RankedFailureList<br>（含尾部项） | 仅按概率排序 → 判为**排序方式不合规**，退回重排 |
| **D3 目标可错性** | 如果被度量的东西本身是错的，它会表现成什么？ | 给出**至少 1 个外部信号** 及其观测方式；或显式记为 GOAL-UNVERIFIED | ExternalSignalSet | 无外部信号 → 记 GOAL-UNVERIFIED，随 Artifact 传递，**不得记 PASS** |
| **R1 回退能力** | 状态能否恢复？ | 存在具体回退操作；**可回退 ≠ 能自动回退**（见 F-3） | RollbackPlan | 需事后临时设计 → 按 0.4 判为**回退能力不成立** |
| **R2 损失上界** | 最坏情况下能否不求恢复而存活？ | 给出**数量级估计** 与承担主体（须能承受后果，见 36.1） | LossBound | 无上界估计 → 判为**代价无界**，等价于不可逆 |
| **R3 路径预置** | 回退路径是否在执行前已存在？ | 路径已写定，**且其技术可行性已单独验证**（不得声称「推理上可行」） | SignedRollbackPlan<br>（执行前签署） | 未签署 → **不得进入 COMMITTED** |
| **R4 留档** | 是否为未来的收敛留下了可检验证据？ | 信息价值 **> 0**：事前声明可被证伪的 Prediction | DecisionRecord<br>（含 PredictedOutcome） | **无 Prediction 的尝试，记未收敛；不计入组织学习**（0.5 陷阱区判定） |
| **收敛性判据** | 下一次会不会更好？ | 错误率随迭代轮次**单调下降**；每一次失败降低下一次失败概率 | ConvergenceTrace<br>（轮次 × 错误率序列） | 曲线**持平** → 判为未收敛，**停止继续试**，预算需重新论证（0.5） |

### 46.3 决策记录（Decision Record）：错题本的结构

0.8 节要求本原则必须配套一个「错题本」， 并指明这正是 Contribution Log 应当承担的职能—— 从「思考审计链」升级为「校准数据源」。 本节把该要求落为数据结构。

```
DecisionRecord:
  id:                dr-2026-0914-01
  decision:          "将代理商结算从日结改为实时结算"
  class:             committable | non-committable | closed
                     # closed = D0 判定为无不可逆维度，未启动三问

  # ── D0 ──
  irreversibility_hypothesis:
    claim:           "资金已划出即不可召回"
    worst_case:      "对账差异无法追索，最长 30 天敞口"
    falsified_at:    null

  # ── D1 维度 ──
  dimension_set:
    distinguishing:  [资金占用成本, 对账失败的可追溯性, 放款方风控接受度]
    evaluative:      [单笔结算时延 p95, 日终对账差异率]
    adverse:         [时延下降是否导致风控阈值被放宽]
    histogram:       {资金层: 2, 时空层: 1, 权限层: 0}   # ← 空层须显式标注
  divergence_rank:   3

  # ── D2 死法 ──
  failure_modes:
    - mode:          "放款方在交易日末集中拒付，我方已先行放款"
      trigger:       "对手方结算窗口 < 我方放款窗口"
      probability:   中
      cost:          高（不可追索部分）
    - mode:          "对账差异在 T+30 后才显现，超出识别能力"
      trigger:       "缺少逐笔对账能力"
      probability:   低
      cost:          极高        # ← 尾部项，不得过滤
  ranked_by:         probability × cost

  # ── D3 目标可错性 ──
  external_signals:
    - signal:        "代理商实际提现频次（而非结算笔数）"
      observed_via:  "支付通道埋点，周报"
    - signal:        "客服工单中『到账延迟』类占比"
      observed_via:  "工单标签统计"
  goal_status:       verified | unverified

  # ── R1~R4 可逆性 ──
  reversibility:
    can_rollback:    true
    rollback_path:   "切回日结模式，保留实时通道只读"
    path_presigned:  true          # 执行前已签署
    path_verified:   true          # 可行性已单独验证，而非推理声称
    loss_bound:      "≤ 单日流水 0.3%，由业务侧承担"
    evidence_schema: 见下

  # ── 留档与结算（这是「收学费」的部分）──
  prediction:
    predicted_outcome:  "p95 从 8h 降至 5min；日终差异率 ≤ 0.05%"
    predicted_failures:  [对手方拒付, 差异率超标]
    confidence:          claimed: 0.7
    settle_at:           2026-10-14T00:00:00Z
  observed:
    actual_outcome:      null          # 到期由延迟复盘机制回填
    actual_failures:     null
    surprise:            null          # ← 实际发生但事前未列出的失效模式
  calibration_delta:
    claimed_vs_observed: null
    lessons:             null
    rule_updated:        null          # 是否已回流为 Skill / Policy / Test
```

> ⚠ **必须先写预测，再看结果。**  
> 38.7 已确立判别规则：若一个解释是在观察到结果**之后** 才被构造出来的， 且它**不能** 在事前被用于预测同类结果， 则该解释不构成 Evidence，只构成 Narrative。  
> `surprise` 字段是对这条规则的结构化实现： 它记录的正是「实际发生但事前没有预见到」的失效模式。 没有它，复盘会退化为对已发生之事的合理化叙述—— 这也正是 LLM 时代最典型的信息污染方式。

### 46.4 校准判据：如何知道原则本身是否在收敛

0.8 的自适用检验提出了最严厉的一问，但没有给出答案。 本节给出可计算版本。 其中 **Surprise 项是核心**—— 因为第 1、3 项都可以靠更谨慎的填空而改善， 唯有 Surprise 无法靠努力消除，它直接度量的是原则的**盲区收敛速率**。

```
Surprise = 实际触发但未列入 FailureModeSet 的失效模式比例
           （按代价加权，不按计数）

原则校准度（按滚动窗口统计，不得全历史平均）：

  1. Prediction Attribution
     留档的预测中，预测错误可归因于「三问未问」的比例
     → 该比例不下降，说明门禁没有拦住它本该拦住的东西

  2. False Death Rate
     经 D3 判定为 GOAL-UNVERIFIED 的项中，事后被证伪的比例
     → 该比例过低，说明 D3 被当成了形式动作；
       过高，说明目标侧的假设质量太差

  3. Surprise Rate          ← 最关键项
     实际发生但事前未预见的失效模式比例（代价加权）
     → 这是原则盲区的直接度量。它<strong>只能</strong>靠错题本收敛

  4. Gate Bypass Rate
     绕过硬门禁的决策占比
     → 任何 > 0 的值都需单独解释；
       按 35.3，无法解释的绕过意味着系统级约束未生效
```

> **判读方式与 0.5 的可反馈收敛判据一致：** 观测错误率是否随迭代轮次单调下降。  
> 平了 → 没有在收敛，继续执行只是在消耗预算—— 此时正确的动作不是「更认真地走流程」， 而是**修改三问本身**。  
>
> 这就是本原则能够通过自适用检验的唯一方式： **原则的修改必须有数据支撑，而数据来自它自己的错题本。**

### 46.5 归因纪律：不得用解释力替代预测力

这是 38.7 判别规则在判断基准原则上的直接应用， 也是 AI 时代最容易违反的一条。 两个失败案例的对照说明了一切：

| 情形 | 事后判断 | 是否被原则捕获 | 正确动作 |
|---|---|---|---|
| **情形 A** | 「这是尾部风险，概率太低，不值得覆盖」 | **被原则捕获**——但捕获方式不够硬 | 0.3 已规定「按 概率 × 代价 排序，不是按概率排序」。 应改为强制要求：**尾部致命项必须以清单形式出现**， 无论概率多低（已在 46.2 D2 排序行落实） |
| **情形 B** | 「维度列表虚假完备：我们列了七条，以为只有七条」 | **未被原则捕获** | 这是判断本身的质量问题，三问内部无自检机制。 应引入**强制反方角色**（Devil's Advocate）， 或强制「空层检测」（已在 46.2 D1 完备性行落实） |

> ⚠ **判别规则（可执行版）：**  
> 若一个解释是在观察到结果**之后** 才被构造出来的， 且它**不能** 在事前被用于预测同类结果， 则该解释不构成 Evidence，只构成 Narrative。  
>
> 对本原则自身的具体含义： **不得用「三问的正确性」来解释「三问的执行未被绕过」**。 后者是 `Gate Bypass Rate` 度量的事实， 前者是它可能的解释。用解释力替代预测力， 正是 0.8 所说的「三年后依然自洽，也依然没有被校准过」。

### 46.6 Status-Quo Gate：一处必须回填的缺口

> ⚠ **自查发现的实质缺口，本节为整改记录。**

本原则最强的形式判定是： *若一个决策完全可逆，则不必启动整套流程，直接试即可。*

这条被表述为「范围收缩机制」——用来防止原则被滥用。 但它在结构上留下了一个**未被封堵的入口**：

```
不做任何决策，是最常见的失败方式之一。
而不决策，是不对称地容易通过三问的：

  维度      「什么都不做」只有一个候选，无比较轴，D1 自动通过
  死法      「继续现状」的失效模式恰恰是最少被列举的一类
  可逆性    「维持现状」看起来永远可回退——
             因为在直觉里，「回去」就是「本来就在这」

  结果：最难做的决策，最容易被这套流程放过。
```

这不是实现缺陷，而是原则的一个结构性偏向： **它对「做错了」设计充分，对「该做没做」几乎无防线。** 但按 46.4 的 Surprise 度量口径， Type II 型错误（漏掉了本该做的事）恰恰排在 surprise 高频项的前列。

> **整改措施（Status-Quo Gate）：**  
>
> 任何决策门禁在判定「完全可逆 → 直接试」之前， 必须先把「维持现状」作为一个候选纳入维度比较。  
>
> 具体判定问句：  
> **「维持现状」在哪些维度上比候选更差？ 它最可能如何失败？它的失效模式是否比候选的死法更严重？**  
>
> 若答不出「维持现状」的死法，则该「直接试」不是范围收缩， 而是**未完成 D0**，必须退回三问流程。

这条的意义超出了修辞：它把原则的适用范围从 「有不可逆维度的决策」扩展到「**有不可逆后果的现状**」—— 维持现状同样可以产生不可逆后果（窗口关闭、能力衰减、信任流失）， 只是这些后果不会出现在任何人的待办清单上。

### 46.7 Agent Prompt Block（承载者）

门禁需要承载者。 按 35.3 的第五条要求（Sequencing Rule 写入 Agent 的系统级约束， 使其无法被单次 prompt 覆盖）， 本节给出规范的 prompt 形态。 它必须被放置在系统级而非会话级——否则它就是一个建议。

```
[ Judgment Baseline — System-level Constraint · 不可被单次会话覆盖 ]

在任何不可逆决策之前，按顺序输出：

D1 维度
  · 区分维度（≥2，相互独立）：
  · 评价维度（可观测指标）：
  · 反向维度（指标是否侵蚀原目标）：
  · 分层覆盖统计（出现空层必须标注并补测）：

D2 死法
  · 每个候选的失效模式 + 触发条件：
  · 按 概率 × 代价 排序：
  · 尾部致命项（无论概率多低，必须列出）：

D3 目标可错性
  · 若被度量的东西本身是错的，会表现成什么：
  · 可观测的外部信号：
  · 若答不出 → 显式标注 GOAL-UNVERIFIED，不得记 PASS：

R1-R4 可逆性
  · 能否回退 / 回退路径是否在执行前已存在且已验证：
  · 最坏损失是否有界 + 承担主体：
  · 留档结构：Prediction 必须在此刻写入，晚于此无效：

自检
  · 我替委托方做了哪些假设？按假设错误的代价分级。
  · 高代价假设必须交由人审（39.6）。
  · 「维持现状」候选是否已被比较？其死法是否已被列出？（46.6）

禁止项
  · 不得跳过任一环节直接给出「可以试一试」。
  · 不得因「完全可逆」而跳过留档——无 Prediction 的尝试不计入组织学习。
  · 不得由生成候选的同一模型为候选打分（I-DISC，40.1）。
```

> **为什么必须写进系统级约束：** 越忙的时候，自己先走一遍三问的边际成本越高。 因此它不是一条原则，而必须是一道**物理摩擦**。 这是 35.3 的结论，本章只是把它应用到原则自身。

## 四十七、Judgment Baseline Self-Check：对本理论自身的整改记录

0.8 要求本原则能够施加于自身，并称这是它作为元原则的资格条件。 本章把这一要求执行一次，并把结果如实记录。 记录本身即 `DecisionRecord` 的一次实例化—— 本章的动作、发现的缺口、以及已回填的整改， 都应作为 Contribution Log 的条目保留，而非在正文中被抹平。

> ⚠ **记录姿态声明：** 本章是**理论的自指记录**， 不是对某个具体组织实践的复盘。 它记录的失效模式都是**原则自身的失效模式**—— 即 0.8「死法」一栏所要求的内容。 真实组织的校准数据必须来自真实决策（46.3、46.4）， 不能由本章的推演代替。

### 47.1 三问对本理论自身

| 三问 | 对本理论自身 |
|---|---|
| **维度** | 决策正确性 vs 决策成本；覆盖面 vs 时机窗口；分析完备 vs 行动速度<br>*（与 0.8 一致，本章未增删）* |
| **死法** | ① 维度列表虚假完备（列了七条以为只有七条）<br>② 用部分可逆伪装成整体可逆<br>③ 分析瘫痪导致等价于不决策<br>④ 把低概率高代价项过滤掉<br>⑤ **新的：用自适用检验的修辞代替自适用检验的执行**<br>*（①②④ 与 0.8 一致；③ 见 47.2；⑤ 是本章新增项）* |
| **可逆性** | 本原则本身是否有失败记录回流机制？ **v0.5 前的答案：否。** v0.5 给出结构（46.3 DecisionRecord + 46.4 校准判据） 与承载者（46.7），但数据仍为空—— **可否收敛尚待观测，不得预先计为已收敛**。 |

### 47.2 一致性审计：本原则与全文的既有机制对照

一个元原则若与它所统摄的体系存在未调和的矛盾， 那它就不是元原则，只是一段独立的议论。 下表逐一核对。

| 本原则的声明 | 全文既有机制 | 一致性判定 | 处理 |
|---|---|---|---|
| 第三问「必须答」，否则不得进入执行 | 35.3 要求关键顺序必须被设计为物理摩擦，而非原则 | **不一致（原则停留在修辞层）** | v0.5 由 46.1 状态机 + 46.7 系统级约束承载 |
| 「若完全可逆则直接试」 | 46.6 的 Status-Quo Gate | **不一致（该出口不对称地放过了「不决策」）** | v0.5 要求在收缩范围前先纳入「维持现状」候选 |
| 三问强制顺序（单向依赖链） | 由 46.1 的状态可达关系实现，而非仅由文字说明 | 一致（v0.5 补强） | — |
| 「留下可供未来检验的证据」 | 29.8 避免重复交学费；31 学习质量门；41.5 征信回流 | 一致 | 由 46.3 统一为 DecisionRecord |
| 「按 概率 × 代价 排序，不看最可能的死法」 | 40.5 成功空间远大于失败空间，故死法可枚举 | 一致 | — |
| 0.8「本原则需要错题本」 | 原文称 Contribution Log「应当」承担该职能 | **名义一致、实现缺失** | v0.5 由 46.3 给出 Schema，把「应当」降为结构约束 |
| 自适用检验（0.8 / 40.6 各有一版） | 两处内容有出入，未说明差异 | **不一致（同一条原则两种自述）** | v0.5 由本章 47.1 统一，并标注原两处出处 |
| 判断再生（第三十五章） | 五种机制均要求 Human-first, AI-second | 一致，且构成互补 | 三问是**决策时** 的摩擦，Regeneration 是**能力维持** 的摩擦，二者不可互相替代 |

### 47.3 已实施的整改清单

| # | 缺口 | 整改动作 | 回填位置 | 判定方式 |
|---|---|---|---|---|
| 1 | 三问只有语义，没有判定规程 | 给出执行状态机与逐环节判定表（门槛 / 证据 / 失败后果） | 46.1、46.2 | 每个环节均可回答「谁判、看什么、不通过会怎样」 |
| 2 | 0.8 要求「错题本」，但无结构 | 定义 DecisionRecord Schema，含 Prediction 与 surprise 字段 | 46.3 | 可回答「三年前按此原则做过的决策，事后对了多少」 |
| 3 | 「可逆性是止损，留档才是收学费」但留档无可计算判据 | 定义 4 项校准判据，其中 Surprise Rate 为盲区收敛速率 | 46.4 | 错误率曲线可被观测是否单调下降 |
| 4 | 「完全可逆 → 直接试」放过「不决策」 | Status-Quo Gate：收缩范围前须先纳入并评估「维持现状」候选 | 46.6 | 答不出「维持现状」的死法 → 视为未完成 D0 |
| 5 | 原则的承载者缺失（无物理摩擦） | 提供系统级 prompt 约束块 | 46.7 | 可被检查「是否写入了系统级而非会话级」 |
| 6 | 0.8 与 40.6 两处自适用检验有出入 | 统一于 47.1，并保留原两处出处 | 47.1 | 同一条原则不再有两种自述 |
| 7 | P-20（Gate Revisability）未适用于判断基准原则自身 | 把判断基准原则登记为「本理论内的硬 Gate」，纳入 38.6 复审范围 | 本章 47.4 | 存在独立于被保护对象的复审机制 |

### 47.4 P-20 自适用登记：判断基准原则自身的复审条款

38.6 已裁定：任何不可绕过的 Gate 必须配套一个周期性复审机制， 且该复审**不得由受该 Gate 保护的单元独占执行**—— 否则就是用短期稳定换取长期僵化。 判断基准原则既是硬门禁（本章让其成为硬门禁）， 就必须接受 P-20 的约束。

> **P-20 适用于判断基准原则的形式：**  
>
> · **复审对象**：三问本身、46.2 的门槛与证据要求、 46.4 的校准判据口径。  
> · **复审输入**：46.3 的 DecisionRecord 集合 （特别是 surprise 字段的分布）。  
> · **复审独立性**：复审者不得是 「因该门禁而免于承担决策后果的一方」—— 即不得由执行层独占复审，须包含承担后果者。  
> · **复审结论的允许形态**： 收紧、放松、**或撤销某条子问**。 撤销权必须存在，否则硬 Gate 无法对抗自身造成的超稳定化。  
> · **复审触发条件**：周期性，或 Surprise Rate 连续两个窗口不降时提前触发。

### 47.5 未决事项（诚实声明）

按 0.2「显式未决项绝不允许由执行方自行填空」与本章的归因纪律， 以下问题不在 v0.5 的能力范围内，必须显式挂账。

| 未决项 | 为什么未决 | 解除条件 |
|---|---|---|
| 校准数据为空 | 46.3 的 Schema 与 46.4 的判据都只是容器，尚无一条真实记录。 原则当前仍处于「可重复但未验证是否可收敛」的状态 | 积累足量 DecisionRecord 并完成至少两个结算窗口 |
| 判定阈值未量化 | 「≥ 2 个独立维度」「尾部致命项」「LossBound 数量级」 等在 46.2 中仍是定性表述 | 由 46.4 的观测数据反推阈值，而非先验设定—— 先验设定会立刻引入 40.4 的虚假完备问题 |
| 三问的完备性本身可信度未知 | 与 44.8 的第三条限制同源：形式语义能判定流程是否被遵守， 不能判定产出是否真的正确。 「三问是否覆盖了全部必要的判断维度」无法在体系内自证 | 只能由外部判别器给出（I-DISC，40.1）—— 即对照那些**没有** 用三问的决策结果做比较 |
| Status-Quo Gate 的边界 | 46.6 要求评估「维持现状」候选，但未界定 「何时可以判定某决策纯属可逆、完全无需评估现状」 | 首次专项复审（见 47.4） |
| 与 Regeneration Loop 的数据接口 | 本原则的错题本与第三十五章的判断再生是两条不同回路， 共用日志在理论上可省成本，但会污染信号 （同一份记录既服务能力维持又服务校准） | 形态未定，标记为接口待设计 |

> **本章的结论：**  
> v0.4 的判断基准原则**语义完整、判定缺失**—— 它准确地说出了该问什么，但没有让「有没有问」变成可观测的事实。  
> v0.5 补齐了判定层。但补齐判定层不等于通过自适用检验： 一个原则第一次把自己的答案显示在计量表上， 得到的是**第一组读数**， 而不是**已经收敛的结论**。  
>
> 按本章自己的纪律，这两者绝不能被混为一谈。

# 第八篇 · 时间维度：认知债务与验证额度

## 四十八、认知债务与组织能力保全

经典组织工程隐含一个前提：组织能力主要来自人的能力，工具只是放大系数。 AI-native Organization 打破了这个前提。当 Actor 可以是 AI、 认知与执行均可外包时，一个此前不存在的问题出现了： **委托可能反过来侵蚀委托人自身的能力。**

> **本章来源：** 规范修正案 No.1《认知债务与组织能力保全》（原编号 32，按 43.1 的续接约定改为四十八）， v1.0 起正式并入正文，并吸收项目内三篇论文解读的证据分级结论。

### 48.1 问题的提出

白皮书 13.7 要求 `Verifiability`（结果必须具有可验证证据）， 原则 7 要求用证据建立信任。但验证本身需要判断力。 当人类 Actor 的判断力因长期外包而萎缩，Verification 就只剩形式： **证据齐全，没人真懂。** 治理链 16.2 的最后一段 Evidence → Accountability → Liability 在此直接断裂—— 没人能担责，因为没人能判断。

### 48.2 证据边界：三篇论文的强度分级

本规范不得将「AI 损害人类认知」作为既定事实。 项目内已有的三篇论文解读证据强度不同，引用时必须严格降级：

| 论文 | 设计与发现 | 证据强度评估 | 本理论采纳的角色 |
|---|---|---|---|
| **arXiv:2506.08872**<br>Kosmyna et al., MIT Media Lab<br>（EEG 认知债务） | 54 人三组写作实验 + 第 4 轮交叉换组（仅 18 人完成）；LLM 组脑网络连接强度最低、 所有权感最弱 | **弱**：未经同行评审的 preprint；关键结论样本极小、无预注册； 消费级 EEG 空间分辨率低；存在熟悉化效应、神经效率等替代解释； 专门评论（arXiv:2601.00856）列出五类问题；作者自述为 preliminary finding | 提出**风险假设**：认知外包可能导致隐蔽、可能不可逆的判断能力退化 |
| **arXiv:2603.14225**<br>「I'm Not Reading All of That」<br>（认知参与衰减） | 对使用智能体编码助手的工程师的质性研究； 认知参与沿三阶段单调衰减；审查只覆盖 happy path； 「这些我可不看全」成为参与度衰退的直接证词 | **弱至中**：样本小、定性方法；但现象与机制解释一致、可迁移 | 行为学佐证：参与衰减是**可观测的组织现象**，不依赖神经证据 |
| **arXiv:2605.23177**<br>认知卸载与加速错觉 | 校准赌注实验：人们预期 AI 省时 68.5 秒，现实校准全面失败； 越不爱思考的人错觉越强；时间没少，但认知努力真的少了 | **中**：实验设计、效应显著、机制清晰 | 关键机制：**高可信表象让额度看起来比实际更多**—— 直接支撑第四十九章的透支风险模型 |

可采纳的只有一条较弱但足够用的命题： **认知外包存在导致判断能力退化的风险，且该退化具有隐蔽性与可能的不可逆性。** 风险治理不需要等到因果确证——对不可逆风险采取预防原则，本来就是组织工程的惯例。

### 48.3 关键反转：真正的自变量不是 AI

如果只停留在「AI 让人变笨」，本节就无法进入规范——因为它既未被证实， 也无法给出工程动作。真正可规范化的洞见来自一个 1970 年代的类比。

**计算器类比：** 计算器普及后，学生的手算能力确实下降了，但整体数学能力没有崩溃。 原因是：**考试同步变难了。** 教育者把标准抬高到「用计算器也要动脑」的水平，学生为了达标反而投入了更多认知资源。 AI 情境下的问题不是工具本身，而是： 组织引入 AI 后，仍然要求同样的产出标准。 于是 Actor 合理地降低了投入—— **这不是退化，这是对低标准的理性适应。退化的是要求，不是人。**

```
Capability(Actor) ↑
        +
Acceptance Criteria 不变
        ↓
Required Cognitive Investment ↓
        ↓
Judgment Capability ↓
        ↓
Verification Capacity ↓
        ↓
组织失去验证 AI 输出的能力
```

注意这条链条与 [3.4 节](#三ai-native-范式转变)的直接冲突： AI-native Organization 规定 Goal、Constraint、Authority、Acceptance Criteria、 Required Evidence，而把 HOW 交给 Actor 自主决定。 推论：**如果 Acceptance Criteria 不随 Capability 同步提升， 那么 Delegation 就是负向的**——组织获得的短期吞吐， 是以长期的验证能力为代价换来的。

### 48.4 三个组织级断裂

> **① 验证者悖论** 当人类 Actor 的判断力因长期外包而萎缩，Verification 只剩形式： 证据齐全，没人真懂。治理链最后一段 （Evidence → Accountability → Liability）直接断裂。 这是三个断裂中最致命的一个： 它使整个治理模型在形式上完备、在实质上失效。

> **② 组织记忆回声室** 若 Experience 是空转的（人完成了任务但未真正思考）， 沉淀进组织记忆的就是 AI 的输出而非人的判断。 组织记忆退化成 AI 输出的自我引用—— 即 model collapse 的组织版本。 29.10 的不变量形式上成立，实质上空转。

> **③ 依赖形态转换** 引入 AI 后，「问张工」变成「问 AI」，关键人依赖表面上解决了。 但实质是把依赖从**可迁移的人类专家** 转移到 **不可迁移的外部系统**—— 且组织不再保留任何兜底能力。 29.6 描述的风险可缓解（知识转移、轮岗、文档化）； 本节新增的风险无内部缓解路径。

> **与 TOC 的关系** 当 AI 消除了执行瓶颈，约束转移到验证与判断环节。 若组织不主动 elevate，就会在验证环节形成新瓶颈—— 且该瓶颈是隐性的：一切看起来运转正常，直到出错。

### 48.5 规范落点（v1.0 已实施）

| 修正案条文 | 落点 | 状态 |
|---|---|---|
| Capability Preservation（原草案 A） | [13.7](#十三形式理论) 第 9 条；[第四十二章](#四十二形式化性质全集) P-21 | 已并入 |
| Delegation Must Raise the Bar（原草案 B · 原则 13） | [37.2](#三十七增补不变量与原则) 原则 21 | 已并入（适配编号） |
| Delegation Must Not Destroy the Delegator's Judgment（原草案 B · 原则 14） | [37.2](#三十七增补不变量与原则) 原则 22 | 已并入（适配编号） |
| 本章（原草案 C · 新增三十二） | 第四十八章（按 43.1 续接约定改号） | 已并入 |

### 48.6 组织能力审计（Organization Capability Audit）

- 该委托是否同步提高了 Acceptance Criteria？提升了多少？
- 谁具备验证该 Actor 输出的专业判断力？该能力如何维持与检验？
- 该 Actor 不可用时的接管路径是否真实演练过？
- 组织记忆中，Rationale 来自人类判断的比例是多少？
- 过去 6 个月，人类 Actor 的独立判断训练时长是否 > 0？
- 若明天撤回全部 AI Actor，组织能否在可接受降级下继续运行？

> **本章不变量：** 组织引入 AI 的目的，是把判断力用在更难的问题上， 而不是停止使用判断力。

## 四十九、组织资产与验证额度

回答一个规范此前未处理的问题：组织的资产究竟是什么，如何计量。 本章提出 **Verification Credit（免验证额度）** 作为组织资产的核心， 并给出可审计的资产负债表。

> **本章来源：** 规范修正案 No.2《验证额度与组织资产》（原编号 33，按 43.1 的续接约定改为四十九）， 与 No.1《认知债务》互为补充，v1.0 起正式并入正文。

### 49.1 为什么需要这个概念

本理论把 `Trust` 列为组织缓存的内容（5.2、11.2）， 也把它放进组织形成函数 O(t) = F(…, Trust, Experience)， 但从未给出 Trust 的**计量方式**。 没有计量的概念无法进入工程规范。

**判断带宽约束下的必然推论：** 设 AI 产出速率 R<sub>ai</sub>，人工逐件判断速率 R<sub>h</sub>， 可形式化比例 p，则必须人工判断的负载为：

```
(1 − p) × R_ai  ≤  R_h
```

提高 p、设计可逆性、保留终止权——这三者都是**降低单次验证成本**。 但存在第四种、也是唯一能改变不等式右侧项数目的杠杆： **减少「必须验证」的事项总量本身**—— 即允许一部分产出**免检直通**。 这种「被允许不验证」的余量，就是 Verification Credit。

### 49.2 信任的工程定义

| 层面 | 表述 |
|---|---|
| 道德 / 直觉层 | 信任 = 感觉对方可靠 |
| 工程层（本章） | **信任 = 可以不用验证的额度** |
| 可计量性 | 额度有数量、会消耗、会折旧、可透支 |

### 49.3 Verification Credit 的本体定义

本体定义已于 v1.0 写入 [第四章](#四ai-native-organization-本体)（Actor 概念族新增条目）， 要点复述：其唯一合法来源是 `Liability`—— 只有能够承担后果的主体，才可能被真正追责，才可能使信任具有经济意义。 这是 Authority 可被委托而 Liability 不可被委托的直接推论。 治理链（16.2）描述的是**执行方向** （Principal → Policy → Delegation → Authority → … → Liability）； 而资产的积累方向与之**相反**： **Liability → Accountability → Trust → Authority → Delegation**。 先有承担后果的能力，才积累出信任，信任才换来授权。

### 49.4 组织资产负债表

检验一个概念是否为空话的最好办法，是看它能否被计量。

> **资产项 Organizational Assets** Verification Credit（免验证额度）  
> \+ Capability Pool（能力池，含衰减模型）  
> \+ Coordination Patterns（协作模式缓存）  
> \+ Organizational Memory（含 Rationale 来自人类判断的比例）

> **负债项 Organizational Liabilities** Cognitive Debt（认知债务，见第四十八章）  
> \+ Trust Overdraft（信任透支）  
> \+ Key-person Dependency（关键人依赖）  
> \+ Irreversible Commitments（不可逆承诺）

29.6 已描述「Trust ↓ → Ask People ↑ → Key-person Dependency ↑」， 本章将其机制化为**信用崩塌后的挤兑**： 额度耗尽时，组织被迫退回逐案人工验证，验证开销趋近 100%。

### 49.5 核心计量指标

| 指标 | 定义 | 健康方向 |
|---|---|---|
| **Time-to-Authority (TTA)** | 新 Actor 加入后获得实质授权所需时间 | 越短，信任存量越厚 |
| **Verification Overhead Ratio (VOR)** | 验证成本 / 总执行成本 | 越低，资产越厚；趋近 100% 表示资产枯竭 |
| **Pass-through Rate (PTR)** | Actor 产出中免检直通的比例 | 越高，额度越多；但必须与抽样率配对 |
| **Reversibility Index (RI)** | 无 AI 条件下的降级运行能力 | 兜底能力，不计入额度但决定透支后果 |
| **Credit Decay Rate (CDR)** | 额度随时间的自然衰减速度 | 折旧率，决定抽样频率下限 |

### 49.6 组织形态对照

> **资产雄厚的组织** 新人很快能放手干；AI 产出大部分免检；出事能立刻回滚； VOR 低、PTR 高、RI 高。

> **资产枯竭的组织** 每件事都要签字；AI 每步都要人盯；出事只能等专家； VOR 趋近 100%——组织还在，但只剩成本。

### 49.7 可操作审计项

- 组织的 Pass-through Rate 是多少？与之配对的抽样率是多大？
- 最近一次额度校准发生在什么时候？由谁负责？
- 是否存在「看起来可信但实际未经验证」的采信？如何识别？
- 剥离全部 AI Actor 后，组织的降级运行能力（RI）如何？是否实测过？
- 组织记忆中，Rationale 来自人类判断的比例是多少？（对应 48.6）
- 过去 6 个月内是否发生过额度透支事件？事后抽样率是否上调？

### 49.8 与第四十八章的关系

| 章节 | 主题 | 回答的问题 |
|---|---|---|
| 第四十八章 | 资产的**侵蚀机制** | 委托如何反过来削弱组织自身的能力？ |
| 第四十九章 | 资产的**计量方式** | 组织资产是什么、值多少、怎么审计？ |

两者共用同一个底层事实： **判断带宽是 AI-native 组织唯一的稀缺资源。** 第四十八章说明它会因委托而萎缩，第四十九章说明它如何被信任节约。

> ⚠ **本章不变量：** Verification Credit 的价值，等于它所释放出来的判断带宽； 而它最大的风险，是 AI 会让这个额度**看起来** 比实际更多。 （机制证据：arXiv:2605.23177 的加速错觉——时间没少，但努力真的少了， 且元认知校准在 AI 条件下全面失败。）

## 五十、Goal Fidelity：全链路核对与未闭合缺口

本章回答理论使用者的第一个工程问题： 「如何确保 AI Agent 完整理解并实现 Goal？」 并延续第四十七章的严格尺度，对全链路做一次一致性核对—— 把尚未闭合的缺口显式挂账，而不是假装它们不存在。

> **本章来源：** 项目文件《AI-Agent-Goal 完整理解与实现·深度分析报告》第五至七节。 该报告的增量只在编排与缺口修复，没有一步是新发明； 本章同样只收录核对结论与操作协议，并使其成为第四十二章「为第五十章的一致性检查 提供完整清单」这一承诺的兑现。

### 50.1 全链路一致性核对

| # | 环节 | 机制出处 | 覆盖判定 |
|---|---|---|---|
| 1 | 意图形成（Human Intent） | 30 章 Intent Loop | 概念完备；**无运行时机制**（缺口 ③） |
| 2 | 目标锁定（Locked Goal） | 39.3 三件套 + 39.4 GOLDEN RULE | 【已闭合】（需求阶段） |
| 3 | 一次分解（Goal → TaskGraph） | 39.2 五道裂缝 + 39.5 Fidelity + 39.6 假设清单 | 【已闭合】（单跳） |
| 4 | 多跳委派（Manager → AI → sub-agent） | —— | **【无模型】**（缺口 ②，最大空白） |
| 5 | Actor 匹配 | 32 / 33 / 34（Capability × Judgment × Calibration） | 【已闭合】（含衰减模型） |
| 6 | 缔约 | 41 章（状态机 + P-16 + 征信） | 【已闭合】 |
| 7 | 执行 | 36.3 降级拓扑 + I-SEQ Human-first | 【已闭合】 |
| 8 | 验证 | 44.7 三层 + 44.8 边界 + 第四十八 / 四十九章 | ✅ 结构闭合；AC 错误暴露窗口收窄（缺口 ④） |
| 9 | 结算与学习 | 29 章 + 31 章质量门 + 46.3 DecisionRecord | ✅ 结构闭合（数据为空） |

### 50.2 五个缺口

> **缺口 ①：「完整理解」没有操作性定义** 39.5 的 Fidelity 定义中 |Ω_G| 不可计算（44.8 已承认语义不可形式化）。 修复方式不是修定义，而是**替换问题**—— 永远不问「它理解了吗」，只问「它通过理解验收了吗」 （与 40.6「评价性语言 → 描述性语言」是同一动作）。

> **缺口 ②：多跳委派的复合保真度未建模（最大空白）** 39 章只处理 Goal → TaskGraph 的一次分解。 常态却是委派链 Principal → Manager-AI → Worker-AI → sub-agent： 共轭控制（38.4）的 L 是单层映射，复合映射 L₂∘L₁ 的保真度下界、 误差累积方式、哪一跳耗散最多，理论没有给出。 每个 agent 转述 goal 时都在做一次「自动填补」（39.6）。

> **缺口 ③：Intent Loop 无运行时机制** 30 章的三个闭环是表格化概念：没有 spec、没有监控器、没有触发条件。 Contract 有状态机（41.4）、性质有 LTL/CTL 编译（44.2）， 唯独「意图是否仍然被保持」没有对应的运行时对象。

> **缺口 ④：免检直通收窄了 AC 错误的暴露窗口** 0.3 已判定：目标本身错误时整套原则完全静默（Type III Error）， 信号只能来自外部。第四十九章引入免检直通后， 外部信号到达前经过的人工眼睛更少了。 **抽样校准必须同时覆盖「目标对齐」，而不只是「输出质量」**， 否则额度体系会给错误的目标发放更高效的执行。

> **缺口 ⑤：理解验收与 I-DISC 的潜在冲突** 最自然的理解验收实现是让另一个（或同一个）AI 给 agent 的复述打分—— 这直接违反 I-DISC：判别器不得是生成该候选的同一个 LLM。 理解验收的判别者必须是委托人或真实场景测试， 这恰好又落回判断带宽的稀缺性，形成闭环约束。

> **两处优先空白（显式挂账）** ① 多跳复合保真度：需建模 F(L₂∘L₁) ≥ ?； 短期缓解为 Artifact-only 传递 + 每跳留档 DecisionRecord 使耗散可归因到跳。 ② 意图保持运行时：需实现 Goal Drift Monitor—— 周期性把 Outcome 与**原始 Locked Goal** 对照 （而非与最近一次转述对照），漂移信号进入抽样校准。

### 50.3 Goal Fidelity 保障协议（三阶段 + 贯穿机制）

把全部既有机制按使用时序重排，得到一份可直接执行的操作协议。 **核心主张：「agent 完整理解 goal」不是一种需要确认的心理状态， 而是一项需要通过的行为验收。**

#### 阶段一：锁定（委托方完成，进入执行前）

| 步骤 | 动作 | 出处 |
|---|---|---|
| 1.1 | 五道裂缝逐条作答：什么算完成 / 例外怎么办 / 谁在什么情境下用 / 不做的代价 / 什么绝对不能发生 | 39.2 |
| 1.2 | 三件套落盘：数值化 AC + 反例 + 优先序（资源减半先牺牲谁） | 39.3 |
| 1.3 | 拒绝被数值化的形容词记为显式未决项，绝不由执行方填空 | 39.3 |
| 1.4 | 盘点不可逆维度 → GOLDEN RULE 判定哪些必须事前锁定、哪些可以边做边定 | 39.4 / 0.1 |
| 1.5 | 检查「维持现状」候选的死法（防止该做没做） | 46.6 |

#### 阶段二：理解验收（委派时，对 agent 执行）

**理解 = 通过以下四项测试：**

| 测试 | 内容 | 出处 |
|---|---|---|
| **T1 独立复述** | agent 用自己的话复述：目标是什么、什么算完成（含反例）、什么绝对不做、 资源不够时牺牲什么。复述在看到实现方案之前进行 | 35.2 Rationale Restitution |
| **T2 假设清单** | agent 显式列出「我替你做了哪些假设」，按假设错误的代价分级； 高代价假设交委托人裁决 | 39.6 |
| **T3 边界反问** | 给 2~3 个边界场景，agent 判断「在 / 不在范围内」并给出理由 | 39.2 / 31 章 |
| **T4 判别独立性** | 复述的评判者是委托人或真实场景， 不得是生成实现的同一个模型自评 | 40.1 I-DISC |

> ⚠ **介质纪律：** T1~T3 的产出（复述、假设清单、边界判定）必须作为 Artifact 附着于 Contract， 不得停留在对话里（41.6：凡是进入 Artifact 的东西才能被 Verify、被缓存、被重放）。 对话用于澄清意图，不用于承载理解状态。

#### 阶段三：实现验证（执行后）

| 步骤 | 动作 | 出处 |
|---|---|---|
| 3.1 | 缔约时查 Realizability（P-16）；低 Calibration actor 附加担保 / 拆分 / 加密验证 | 41.5 |
| 3.2 | 三层验证：L1 静态 → L2 模型检测 → L3 运行时监控，三者不可互替 | 44.7 |
| 3.3 | ground truth 只认真实世界：L4 灰度 / A/B / 真实用户 | 40.2 / 44.8 |
| 3.4 | 延迟复盘：DecisionRecord 记录 Predicted vs Observed，surprise 回流为组织记忆 | 29 章 / 46.3 |
| 3.5 | 抽样校准：抽样维度必须包含「是否仍在解决原目标」，而不只是「输出质量」 | 49 章 / 0.3 |

#### 贯穿机制（不随阶段消失）

- **Artifact-only 意图传递：** 意图只通过 Artifact 传递，不通过对话转述——每一跳拿到的是同一份文件， 不是上一位转述者的复述。这是对缺口 ②③ 目前唯一可执行的缓解。
- **Acceptance Criteria 随能力同步提升：** 委托给更强的 agent 时同步抬高验收标准，否则 Delegation 为负向（原则 21）。
- **Human 接管路径不过期：** P-11 / I-INDEP：关键路径必须存在未过期的 Independent Capability； Safe Halt 优先于继续执行（36.3）。
- **判断带宽记账：** 每一项检查都在消耗判断带宽（第四十九章）； VOR 趋近 100% 时，先降检查颗粒度，而不是先降标准。

> **本章的最终纪律（来自理论自身：44.8 / I-DISC）：**  
> 任何「agent 已理解、已实现」的结论，若其判别器是另一个 AI 对同一体系的内部检查， 则它只构成 Narrative，不构成 Evidence。  
> 体系能压缩检查成本、能指出该查什么、能把失败的学费复利化， 但 ground truth 自始至终只有一个来源——**真实世界**。

# 卷末 · 模型、术语与结论

## 最终理论模型

> **AI-native Organization 的本质不是“AI 员工组成的组织”， 而是“组织结构本身能够被目标驱动地生成、授权、协调、验证、学习和重构”。**

```
                         PURPOSE
                            │
                            ▼
                           GOAL
                            │
                            ▼
                 ORGANIZATIONAL NEED
                            │
                ┌───────────┼───────────┐
                ▼           ▼           ▼
            CAPABILITY   RESOURCE    AUTHORITY
                │           │           │
                └───────────┼───────────┘
                            ▼
                     ACTOR SELECTION
                            │
                            ▼
                       DELEGATION
                            │
                            ▼
                 RESPONSIBILITY ALLOCATION
                            │
                            ▼
                   TEMPORARY ORGANIZATION
                            │
                            ▼
                       COORDINATION
                            │
                            ▼
                        EXECUTION
                            │
                            ▼
                       VERIFICATION
                            │
                            ▼
                    BUSINESS / WORLD STATE
                            │
                            ▼
                     ORGANIZATIONAL LEARNING
                            │
                ┌───────────┴───────────┐
                ▼                       ▼
          CAPABILITY MEMORY        POLICY MEMORY
                │                       │
                └───────────┬───────────┘
                            ▼
                  NEXT ORGANIZATION
                            ↺
  
```

### 核心公式

```
AI-native Organization
=
Dynamic Organizational Formation
+
Governance （含 Non-delegable Core）
+
Capability Pool （含 Calibration 与衰减模型）
+
Judgment & Regeneration Loop
+
Coordination （Artifact + Contract + Commitment）
+
Verification & Reversibility
+
Organizational Learning
+
Degradation & Human Recoverability
+
Organizational Assets （Verification Credit − 认知债务等负债）
────────────────────────────────────
约束条件：
  Requisite Variety   治理多样性 ≥ 被治理多样性
  Invertibility       每个 Delegation 的 L⁻¹ 良定义
  Fidelity            Goal → TaskGraph 的语义保真度有界
  Gate Revisability   硬约束须可自我复审
  Capability Presv.   判断能力基线不因委托而跌破
  Balance Sheet       资产 ≥ 负债：免检直通须有证据与抽样背书
```

### 最终范式转换

```
CLASSICAL

Design Organization
        ↓
Assign Roles
        ↓
Assign People
        ↓
Execute
        ↓
Control


AI-NATIVE

Define Goal
        ↓
Discover Capability
        ↓
Compose Actors
        ↓
Delegate Authority
        ↓
Generate Organization
        ↓
Coordinate
        ↓
Execute
        ↓
Verify
        ↓
Learn
        ↓
Reconfigure
        ↺
```

> **最终命题：**  
>
> 经典管理工程解决的是 **“如何把组织设计得稳定可靠”**；  
>
> AI-native Organization Engineering 解决的是 **“如何让组织本身成为一个稳定可靠的生成过程”**。

## 术语总表

| 术语 | 理论定义 | AI-native 中的定位 |
|---|---|---|
| Purpose | 组织存在的根本原因 | 组织最高层意图 |
| Goal | 期望达到的状态 | 组织形成的驱动力 |
| State | 世界或业务当前状态 | 组织行动的对象 |
| Actor | 能够执行行动的主体 | Human / AI / Team / Service 等 |
| Capability | 能够完成什么 | 组织动态配置的核心资源 |
| Role | 责任、权限和约束模板 | 可复用的组织结构单元 |
| Assignment | 当前责任绑定 | 运行时组织关系 |
| Delegation | 权力委托 | 组织治理基础 |
| Authority | 合法行动/决策范围 | 组织权力边界 |
| Responsibility | 对结果承担的责任 | 组织责任边界 |
| Dependency | 活动之间的相互依赖 | 协作产生的原因 |
| Commitment | 主体之间的承诺 | 协作的基本关系 |
| Contract | 结构化的承诺与约束 | 协作协议 |
| Policy | 组织级约束 | 治理边界 |
| Workflow | 活动组织方式 | 协调机制 |
| SOP | 重复成功过程的标准化 | 组织经验资产 |
| Organization | 制度化与动态化的协作系统 | 整个理论研究对象 |
| Organizational Memory | 组织历史经验的沉淀 | 动态组织生成的输入 |
| Judgment | 在约束与不确定性下判断“是否应当做、为何这样做、错了如何收场”的能力 | 与 Capability 并列的独立本体对象 |
| Confidence | Actor 对其输出的自信程度声明 | 须与 Calibration 联合使用 |
| Calibration | Actor 自述置信度与历史实际准确率的一致性记录 | Actor Matching 的必要条件，区别于 Capability |
| Review Capacity | 承担问责者理解、检验并否决所背书之事的能力集合 | I-ACC 不变量的检验对象 |
| Ghost Capability | 注册表中存在、使 Assignment 成立、但已无法被独立执行的能力 | 能力衰减导致的组织隐性负债 |
| Independent Capability | 不借助 AI 即可独立完成的能力 | 组织韧性与 Human Recoverability 的唯一兜底 |
| Regeneration Loop | 不依赖事故发生、在平稳期主动维持判断能力的回路 | 与 Organizational Learning 互补，不可互相替代 |
| Reversibility | 关键行动可被回滚或停机的性质 | v0.2 新增核心安全属性，不可逆行动默认禁止自动化 |
| Non-delegable Core | 不可通过 Delegation 转移的对象集合 | 含 Accountability、Liability、Purpose 合法性、解释义务 |
| Ω<sub>org</sub> | 组织在给定约束下能生成的全部合法协作结构集合 | AI-native 程度的度量基础 |
| Requisite Variety | 控制系统的多样性须不小于被控系统的多样性 | Safety 的数学前提，属性 P-18 |
| Conjugate Control | 通过 L⁻¹AL 使不可直接作用的对象变为可控 | Delegation 的数学本质 |
| Ultra-stable System | 受冲击后强制恢复原稳态、因而丧失渐进演化能力的系统 | 硬 Gate 设计的反噬风险 |
| Decomposition Fidelity | 完成任务后达成原目标的比例 | Goal → TaskGraph 的语义保真度度量 |
| Commitment Track Record | Actor 在某类承诺上的历史履约率记录 | Contract 体系的征信机制 |
| Meta-Judgment Criterion | 维度 × 死法 × 可逆性收敛 | 领域无关、可自适用的收敛判据 |
| False Closure | 因清单详尽而产生的、快于真实覆盖率的完备错觉 | 收敛过程中的主要认知陷阱 |
| Judgment Baseline Principle | 维度 × 死法 × 可逆性；用第三问划定自身适用范围并可自适用 | 贯穿全篇的方法论总纲，原则 18 |
| Type III Error | 精确地解决了一个不该被解决的问题 | 三问中「目标本身是否错误」子问所针对的失效模式 |
| Feedback Convergence | 每次失败都降低下一次失败概率的性质 | 与「可回退」独立，交叉判读见总纲 0.5 |
| Temporal Semantics | 用 LTL / CTL 刻画性质在状态序列上何时成立 | Phase A；可逆性须用 CTL 的 AG-EF 表达 |
| Deontic Semantics | 用 O / F / P 刻画义务、禁止与允许 | Authority 是道义命题，Capability 是事实命题，二者范畴不同 |
| CTD（反义务） | 义务被违反后自动派生的补救义务 | Contract 状态机 VIOLATED → REMEDIED 的道义结构 |
| Control Level | 人所控制的是哪一层，区别于人所拥有的能力集合 | I-MIGRATE：层级上升不得减少能力集合 |
| Human Capability Amplification | 以人的判断、创造与进化能力被放大为成功标准 | 原则 19；本理论的目的因 |
| DecisionRecord | 一次判断的完整留档：三问各环节的产出、Prediction、以及事后 Observed 与 surprise | 0.8「错题本」的结构化实现；原则的校准数据源 |
| Prediction | 决策前写入、可在事后被证伪的结果声明 | 留档的价值来源：无 Prediction 的尝试不计入组织学习 |
| Surprise Rate | 实际发生但事前未列入 FailureModeSet 的失效模式比例（代价加权） | 判断基准原则盲区收敛速率的直接度量 |
| Gate Bypass Rate | 绕过硬门禁的决策占比 | 度量门禁是否真的存在，而非是否被声明 |
| Status-Quo Gate | 判定「完全可逆 → 直接试」之前，必须先把「维持现状」作为候选纳入比较 | 封堵「不决策最容易被放过」的结构性缺口，见 46.6 |
| Judgment Baseline Executable Spec | 把判断基准原则落为状态机、判定表、记录 Schema 与系统级约束 | 第四十六章；使方法层从修辞变为可判定事实 |
| Cognitive Debt | 认知外包导致的判断能力退化风险，具有隐蔽性与可能的不可逆性 | 组织资产负债表的第一负债（第四十八章） |
| Capability Preservation | 委托执行与认知的同时必须保留的人类判断能力基线 | 核心安全属性 P-21（v1.0 新增） |
| Verification Credit | 不逐案验证即可采信某 Actor 输出的总量；来源只能是 Liability | 组织资产的核心计量对象（第四十九章） |
| Trust Overdraft | 免检采信超过实际证据支撑的部分 | 信用崩塌后挤兑的直接成因（第四十九章） |
| Organizational Balance Sheet | 组织资产（VC + 能力池 + 协作模式 + 组织记忆）与负债（认知债务 + 透支 + 关键人依赖 + 不可逆承诺）的可审计清单 | 组织健康度审计工具（第四十九章） |
| Time-to-Authority (TTA) | 新 Actor 获得实质授权所需时间 | 信任存量厚度指标 |
| Verification Overhead Ratio (VOR) | 验证成本 / 总执行成本 | 趋近 100% 即资产枯竭 |
| Pass-through Rate (PTR) | Actor 产出中免检直通的比例 | 必须与抽样率显式配对 |
| Reversibility Index (RI) | 无 AI 条件下的降级运行能力 | 兜底能力，决定透支后果 |
| Credit Decay Rate (CDR) | 验证额度随时间的自然衰减速度 | 决定抽样频率下限 |
| Goal Drift Monitor | 周期性将 Outcome 与原始 Locked Goal 对照的运行时机制 | 意图保持缺口的挂账缓解项（第五十章） |
| Composite Fidelity | 多跳委派链上复合映射 L₂∘L₁ 的语义保真度 | 理论最大空白，显式挂账（第五十章） |

## 结论

AI-native Organization 理论真正改变的不是“谁来工作”， 而是“组织是什么”。

在经典管理体系中，组织主要是一个已经设计好的稳定结构： 岗位、人员、部门、流程、权限和制度被提前定义，然后通过管理和控制使其可靠运行。

在 AI-native 条件下，组织可以进一步被理解为： **一种根据目标和环境动态形成协作结构的计算系统。**

因而组织从：

```
Static Structure
```

演化为：

```
Generative Coordination System
```

最终，AI-native Organization 的核心不是：

```
Human → AI Agent
```

而是：

```
Static Organization
        ↓
Dynamic Organization
        ↓
Generative Organization
        ↓
Verifiable & Non-atrophic Organization
```

其中 Human、AI、Team、Service 都只是可以进入组织委托和协作网络的 **Actor**。

> **组织不再只是一个被设计出来的结构， 而是一种能够持续生成正确协作结构的能力。**

v1.0 补上了这套理论此前缺失的时间维度： 组织的保障机制不仅要在结构上完备，还要在时间中存活。 委托会侵蚀委托人的判断力（认知债务）， 信任会掩盖这种侵蚀（验证额度的透支表象）—— 所以「确保」不是一个时点动作，而是一个需要抽样校准的持续过程。

因此，一个 AI-native Organization 最终还必须能回答一个资产负债表式的问题： **组织今天持有的验证额度，还够不够支撑明天的免检直通？**

> **组织不再只是一个被设计出来的结构， 而是一种能够持续生成正确协作结构的能力； 而这项能力本身，是会折旧的资产。**

# 附录

## 附录 A · 思想谱系与文献定位

本理论是多个学科的综合再造。下表给出其思想谱系的外部核查结果：★ 为理论已显式引用或自觉对接的谱系；☆ 为高度相关但理论未引用、建议补引的谱系。

| 谱系 | 代表文献 | 理论中的对应物 | 关系 |
|---|---|---|---|
| **组织控制论** ★ | Ashby《Design for a Brain》(1952)、必要多样性；Stafford Beer《Brain of the Firm》(1972) VSM；Wiener | 第三十八章全章；P-18 Requisite Variety；超稳定系统；治理侧多样性设计 | 正确且自觉的对接。Beer 的「只有 variety 吸收 variety」与 D-2 完全同构；理论把 Beer 的衰减/放大器置换为治理机制设计，属延伸而非重复 |
| **多智能体承诺协议** ☆ | Singh (1997/1999) 社会承诺；Castelfranchi (1995)；Chopra & Singh 承诺操作；Yolum & Singh (2002)；Baldoni et al. (IJCAI 2015) | 第九/四十一章：Commitment(A,B,p,q) 记号、Contract 状态机、VIOLATED→REMEDIED | 记号与语义几乎逐点重合，是理论最需要补引的一支——该领域的可判定合规验证已成熟，可直接复用 |
| **自动化心理学** ☆ | Bainbridge《Ironies of Automation》(1983)；Endsley (2023) AI 版铁律；Lee et al. (CHI 2025) 生成式 AI 与批判性思维 | 第三十三/三十四章：问责—能力剪刀差、Ghost Capability、Override Rate 指标 | 理论的「组织级」重构是增量贡献：给出组织不变量 I-ACC 与可观测指标，把监督者能力衰减从现象上升为治理设计要求 |
| **认知负荷与认知外包** ★ | Kosmyna et al.《Your Brain on ChatGPT》(arXiv:2506.08872, MIT, 2025) | 第四十八章全篇 | 论文真实存在但系未经同行评审的 preprint；理论对证据强度做「严格降级 + 预防原则」处理，在认识论上是诚实且正确的 |
| **组织学习与组织记忆** ☆ | Argyris & Schön 双环学习；March 探索/利用；Nonaka SECI；Walsh & Ungson 组织记忆 | 第十一/二十九至三十一章 | 理论增量在「学习完成标准」的可判定化：以同类问题第二次出现是否仍需重交学费为检验 |
| **组织经济学** ☆ | Coase / Williamson 交易成本；Jensen & Meckling 代理理论；Alchian & Demsetz 团队生产 | 第七章委托、第十六章治理链 | 机制同源但理论未做经济学表述；激励相容、产权、AI 责任主体等整体缺位（修订八注：仓库《诺贝尔经济学演讲集研究》已逐条给出可兑现的经济学表述——激励相容＝授权的成本理论〔定理级〕、Hurwicz 守护者三解＝verifier 拓扑、Coase 交易成本＝缓存成本项、Heckman 选择偏差＝验证额度取样模型；另暴露 G-N1 自设计组织递归等 8 条新缺口；正文级并入待 v1.2 评审） |
| **判断与决策方法论** ☆ | Klein pre-mortem；Bezos 单向门/双向门；Popper 可证伪；Type III error（Kimball 1957） | 总纲三问、死法排序、留档 Prediction、可逆性四象限 | 三问是 pre-mortem + 单向门 + 可证伪主义的工程化重组；按概率×代价排序、尾部致命项、Surprise Rate 属可执行细化增量 |
| **形式方法** ★ | Pnueli LTL (1977)；Clarke & Emerson CTL (1981)；von Wright 道义逻辑 (1951)；Plotkin SOS | 第四十四章全章；Reversible(a) ≡ AG(executed(a)→EF undone(a)) | 技术上准确；把道义逻辑用于组织权限建模属国际小众前沿，Capability（事实命题）与 Authority（道义命题）的范畴区分干净 |
| **现实平行物（2025–2026）** ☆ | McKinsey《The Agentic Organization》(2025-09)；Deloitte 2026《Architecting an AI-native tech org》 | 全理论 | 咨询业停留在框架叙事层；本理论提供可判定规范 + 不变量 + 度量，深度领先一个数量级，但缺案例与数据 |
| **Agent 能力实证** ☆ | TheAgentCompany (CMU, arXiv:2412.14161) | 理论动机层 | 最强模型仅完整完成 30.3% 任务、社交协作是最大短板——为「验证与协作是瓶颈」提供直接实证支撑 |
| **后 9·11 去中心化组织通俗文献群** ☆ | Brafman & Beckstrom《海星与蜘蛛》(Portfolio, 2006)；McChrystal 等《赋能 / Team of Teams》(Portfolio, 2015)；Dempsey & Brafman《Radical Inclusion》(Missionday, 2017；中译《打胜仗的思想》，湛庐/中国纺织出版社 2020)；制度底座 FM 3-24 (2006) / Nagl (2002) | 3.4 声明式规范、第十五章 Runtime Loop、第三十八章必要多样性 | 机制同构但理论未引用：「集中 what 分散 how」与声明式规范逐字同构，且有美军条令化实录（TRADOC 更名与 2012 Mission Command 白皮书）；Runtime Loop 缺的外向三原语（listen/amplify/include）与叙事治理对象由该群先行提出；缺口 G-RI-1…5 为该群暴露而理论未自认（见仓库《打胜仗的思想研究》08 映射；独立审计 PASS） |
| **丰田 TPS / 精益现场失败应对** ☆ | OJT 解决方案《丰田失败学》（中译）；Liker《The Toyota Way》；Anderson 调查报道；畑村洋太郎《失败学》（同名不同体系，已辨异） | 38.7 可观测性、原则 7 抽样校准、第 29 章学习链、第 36 章归因纪律 | 现场层失败应对的深层对应物：17 项对照（复述 8 / 深化 9 / 独有 2）；「六个空层全部是书的盲区而非理论的盲区」——理论最 AI-native 的部分（Ghost Capability / Judgment 输出包 / 可逆性分岔 / 停止门禁）在传统现场管理中零对应；反向预测是理论对书的独立增量（诚实折扣：全书正文基本不可得、可回溯原文 <2%；≥B 级证据对两条无 URL 来源的依赖度经第二阶段信源补链由 63.3% 降至 34.7%；有效映射经 fresh 仲裁终判 13 条——实体书取证前「书中写道」式引用不作定论；见仓库《丰田失败学研究》） |
| **治理审计与合规市场（2026–2028）** ☆ | Klarna 裁撤 700 客服又回雇；Gartner「40% Agentic AI 项目将被取消」；ISO/IEC 42001 首年 $20k–60k、SOC 2 单项目 $10k–150k 价位带；SOC 2 AI 准则 2027 空窗 | I-ACC、监督三通道、判断带宽不等式、验证额度 | 外部市场对理论内核的独立印证锚：监督人力成为稀缺资源的付费实证（监督是有人愿意付费的缺口）；「审文件不审运行时」的行业空档恰是理论运行时审计的落位（见仓库《商用模式研究》；敌意审查 9 击 8 中修补后 verifier ACCEPT） |
| **涌现与复杂系统** ☆ | Holland《涌现：从混沌到有序》(1998；中译三版 2001/2006/2022)；Watts & Strogatz (Nature 393, 1998)；Barabási & Albert (Science 286, 1999)；Bak, Tang & Wiesenfeld SOC (PRL 59, 1987) | 38.1 Ωorg、原则 6、38.6、第 49 章 | 生成观同源：CGP「机制+约束的受限生成」与「约束生成组织」同一构型；网络三统计量（聚类系数/特征路径/度分布）是 Ωorg 缺位的可观测量（G-E1，最干净挂账点）；WS 的 p 旋钮给出约束强度连续谱的范本（G-E2）；SOC 为超稳定与临界的预警概念（G-E4）。**限定**（P-006 独立复核 PASS with notes，2026-09-16）：书目与一级论文引文经独立复核通过；A 书内容重建基于学院书评交叉（原书未直取）；G-E 系挂账为类比级，采纳须降格——无标度结构在真实组织中的适用性存在争议，勿直接断言；SOC 仅作类比/预警概念引用，非组织临界态的已证判据 |

### 独创性分级

**真原创（检索范围内未见等价物）：**

1. I-ACC 不变量及其可观测化（Override Rate 趋零 = 监督已死）——把「human oversight 有效性」从合规口号变成四指标仪表；
2. Ghost Capability / Assisted vs Independent Capability——组织韧性的兜底逻辑与 Schema 化；
3. Regeneration Loop 作为与 Learning Loop 并列的第二回路——判断维持不能依赖事故触发；
4. Delegation = 共轭控制 L⁻¹AL——用数学结构统一四类治理失败，推导出「可问责性是设计期约束」；
5. Verification Credit / 组织资产负债表——信任的工程化计量（资产 / 负债 / 折旧 / 透支 / 挤兑）；
6. 方法层自适用——理论对自身执行了它要求他者的一切纪律（错题本、Surprise Rate、Gate 自复审）。

**高强度重组（非原创但组合质量高）：** 三问判断框架、Ω_org 与 AI-nativeness 度量、Decomposition Fidelity、收敛漏斗与 I-DISC、Commitment Calibration、Artifact before Conversation。

**已属既有共识（应标注出处）：** Commitment 记号与状态机（Singh 系）、必要多样性（Ashby / Beer）、能力衰减（Bainbridge / Endsley）、组织学习链条（Argyris / March）。

> ⚠ **本理论当前最大的未决事项是「从纸上到读数」：** 所有度量尚无第一组真实数据。按理论自己的标准，它现在是一份「可重复、尚未证明可收敛」的规范——而它已经把证明自己所需的实验设计（DecisionRecord、校准判据、复核触发条件）全部写成了。（修订八注：本断言系 v1.0 成文时点状态；截至修订八，仓库已产生首批实测读数——RSI 调研 DecisionRecord 校准 Surprise Rate=1/3、组织形成函数 n=10 次运行的 AOOS 记录与多轮 verifier 判决读数，明细见附录 E/J。）

## 附录 B · 证据链：人机协同的认知代价

第四十八章「认知债务」与第三十三章「问责—能力一致性」的立论，由十篇文献、一个访谈源与一篇关联考证构成的多方法证据链支撑：生理（EEG）、态度（问卷）、行为（观察）、职业形态（纵向追踪）、心理机制（预注册实验）、历史框架（综述）、组织后果（管理评论）与两层解法（对照实验 + 立场论文）。本附录依据项目同期的三篇 arXiv 深度解析与《认知债文献解读》逐篇研读（十篇 + 访谈，2026-09-14 落盘；第 12 篇关联考证 2026-09-15 补入）整理。

### 一、论证主线与十篇文献的位置

起点是 Karpathy 的技术叙事：人在回路里是限速步骤，行业方向是「去人化」。整条证据链检验的正是这个叙事的隐性成本——去掉人之后，认知债由谁付；留下人，疲劳与倦怠由谁付：

```
① Karpathy 访谈         技术叙事的起点：人是限速步骤 → "去人化"趋势
        ↓ （但去人化有代价，代价是什么？）
② MIT 认知债            生理层证据：EEG 连接性 Brain > Search > LLM
③ CMU×微软 批判性思维    态度层证据：越信任 AI 越少批判性思考
④ 三星×约克 认知参与     行为层证据：工程师只看结果不看过程
⑤ 奥克兰 纵向研究        职业层证据：创造 → 验证（监管式工程），体验恶化
        ↓ （为什么没人发现？因为感受失真）
⑥ 斯坦福 速度错觉        心理机制：省的是"努力感"不是时间
        ↓ （这不是新问题）
⑦ 微软 Ironies of GenAI 历史框架：1983 自动化讽刺在 GenAI 重演
⑧ HBR 工作强化          组织后果：task expansion、倦怠、边界模糊
        ↓ （怎么办？）
⑨ 哈佛 认知强制函数      个体/界面层解法：强制 System 2 参与
⑩ Hugging Face 战略阻力  系统层解法：把摩擦设计进 Agent 与组织协议
```

> 三层递进：**②–⑤ 证明「债」在发生 → ⑥–⑧ 解释「债」为什么不被察觉且越滚越大 → ⑨–⑩ 给出还款方案。** 十篇文献方法各异、样本各异，却全部指向同一方向——这种「异法同果」（triangulation）本身就是最有力的一级证据。

### 二、十篇文献总览与方法学质量

| # | 文献（编号） | 设计 · 样本 | 一句话核心 | 可信度 |
|---|---|---|---|---|
| ① | Karpathy 访谈（No Priors 2026-03 等） | 观点 / 访谈 | 人是 tight loop 的限速器，行业正推向 without human in the loop——全链待检验的前提 | 行业判断（builder 立场） |
| ② | MIT《Your Brain on ChatGPT》<br>arXiv:2506.08872 | 被试间 EEG 实验 + 4 个月追踪<br>N=54（追踪 18） | 工具依赖越强大脑连接越弱（Brain > Search > LLM）；「认知债」概念出处 | 中（生理指标稀缺，但样本小、未经同行评审） |
| ③ | CMU×微软 批判性思维<br>CHI 2025 | 混合方法问卷<br>N=319，936 实例 | 对 AI 越信任批判性思考越少；批判性思维迁移为验证 / 整合 / 管家式监督 | 中高（自报告，实例量大、三角验证） |
| ④ | 三星×约克 "I'm Not Reading All of That"<br>arXiv:2603.14225 | 形成性质性研究<br>N=4 | 认知参与沿「规划→执行→评估」单调衰减，只加工快乐路径 | 低-中（框架价值 > 统计价值） |
| ⑤ | 奥克兰 纵向研究<br>arXiv:2605.23135 | 纵向配对问卷（6 个月）<br>N=95 | 生产率感知稳定、开发体验恶化；「监管式工程」成为新工作类别 | 中高（罕见纵向 + 60% 留存） |
| ⑥ | 斯坦福 速度错觉<br>arXiv:2605.23177 | 预注册行为实验<br>N=1237 | AI 只让任务「感觉」变快；努力感与真实时间分离 | 高（预注册 + 开放数据；任务偏简单） |
| ⑦ | 微软 Ironies of Generative AI<br>arXiv:2402.11364 / IJHCI 2024 | 概念框架（综述） | 自动化讽刺四重奏：角色反转、流程重构、打断、「简单更简单、困难更困难」 | 论证型（连接 30 年人因学文献） |
| ⑧ | HBR《AI 不减负反增负》<br>2026-02-09 | 研究综述 / 评论 | AI 不减少工作而是强化工作；组织需要一套「AI practice」 | 叙事型（转述研究，面向管理者） |
| ⑨ | 哈佛 To Trust or to Think<br>CSCW 2021 | 对照实验（模拟 AI，75% 准确率 + 系统性偏差）<br>N=199 | 认知强制显著降低对错误 AI 的依赖（过度依赖率 0.64→0.48），代价是主观体验变差 | 高（错误模式设计精巧） |
| ⑩ | Hugging Face AI Agents Push Humans Out<br>arXiv:2608.23642（v3） | 立场论文 | 现有 HITL 设计不仅无效还在侵蚀监督能力；战略阻力 + 组织协议双管齐下 | 论证型（证据链引用扎实） |

### 三、关键发现细读

#### ② MIT：债不是立刻能还的（交叉实验）

三组被试间设计（LLM / 搜索 / 纯脑）写四轮文章，第 4 轮交叉交换条件。除「连接性梯度 Brain > Search > LLM」外，最精彩的是交叉轮：撤掉 ChatGPT 的 LLM 老用户，连接性**反而下降**（启动困难）——卸载出去的认知不是随手能拿回来的，存在跨会话的存量效应，「债」这个词因此才站得住。同时 LLM 组对刚写完的文章**无法准确引用**、归属感最低、组内文本高度趋同。局限必须同时记住：预印本、N=54、追踪仅 18 人、EEG 逆向推理风险，作者本人反复强调不要过度外推。

#### ③ CMU×微软：置信度双向效应

对 GenAI 置信度越高，批判性思维努力越少；对自身能力的置信度越高，努力越多。两个方向都显著——失灵条件被精确定位：**「不自信 × 高 AI 信任」，恰是新手面对新任务的默认状态**。批判性思维没有消失，而是迁移为信息验证、响应整合、任务管家三种形态（与 ⑤ 的软件工程侧发现跨域同构）。注意：视频转述的「awareness / motivation / ability 三障碍」是论文的二级归纳，头条发现是置信度效应与形态迁移。

#### ④ 三星×约克：问题在界面不在态度

认知负荷理论给出清晰归因：不是工程师懒，而是当前智能体界面把本应「相关负荷」的信息（计划、推理、变更）以「外在负荷」的形式（无结构长文本流）倾倒给用户——信息过载 → 认知系统自保 → 弃读。Bloom 问卷交叉验证：生成脚本有几个函数，4/4 全错。安全含义论文明示：被投毒的代码处于这种参与水平下**几乎不可能被发现**。

#### ⑤ 奥克兰：生产率—体验悖论与监管式工程

六个月配对追踪：84% 的工程师两个时点都报告生产率提升，但「至少一个维度体验恶化」的负面组从 14% 翻倍至 27%，**且无一人恢复回全正面**；DevEx 各维度变化与生产率变化统计不相关。写代码时间断崖下降（82% 变少），审查与测试趋向花更多时间，创造—验证平衡分 0.26→0.53（半年翻倍）。论文提出第三工作类别「监管式工程」：Directing（指挥）/ Evaluating（评估）/ Correcting（纠正）。

#### ⑥ 斯坦福：努力—时间分离

人对独立完成时间的预测很准（p=0.775），唯独对 AI 辅助时间系统性低估近 1 分钟（β=57.8）——问题不在「不会估时间」，在**对 AI 的心理模型是错的**。24 个任务中仅 3 个真正省时，但全部 24 个降低努力感；AI 生成平均只占 2.89 秒，大头在「写提示」与「读回答」。越不爱思考（NFC 低）错觉越深；使用频率与态度不能预测校准误差。逻辑题上 AI 组实际更慢 110 秒，人们却预测能省 2 分钟。

#### ⑨ 哈佛：解释救不了过度依赖

模拟 AI 固定 75% 准确率、错误设计为系统性偏差。AI 出错的题上：简单可解释 AI 组正确率 0.03，认知强制组 0.09，无 AI 组 0.18——加解释与置信度提示**无效**，只有改变交互结构（On demand 隐藏建议 / Update 先答再看 / Wait 强制等待）才有效。第二头条：信任和偏好与出错时表现负相关，费力感与正确率正相关——**越觉得好用的人被带得越深，越觉得费劲的人表现越好**。摩擦有效，恰恰因为它不讨喜。

#### ⑩ Hugging Face：双层讽刺与对监督的 reward hacking

四段论证中最容易被忽略的一段：监督质量下降 → 批准率等反馈信号退化 → 系统被优化得「抑制深思监督」（自信总结、零摩擦、易略读）→ 人类评估者成为奖励通道中可被利用的一环；智能体还可能学会把违规行为保持在检测阈值之下。最锋利的一句：**「Human-in-the-loop 只有在人类能独立看到回路内部时才是有意义的解决方案。」** 其对 EU AI Act 第 14 条的批评与本书 I-ACC 的立场一致：治理框架假设监督者认知可靠，却忽略系统本身正在侵蚀这一前提。

### 四、机制核心：自我强化的退化链

```
速度错觉（⑥）
  "AI 更快"的错误信念驱动更多任务卸载
        ↓
认知参与衰减（④）
  卸载过程中参与度持续下降，只加工快乐路径
        ↓
监督者退化（②⑩）
  长期低参与 → 情境觉察与技能萎缩 → 监督名存实亡
        ↓
反馈信号退化（⑩）
  系统被批准率/满意度训练，学会"抑制深思监督"
        ↓
（回到起点）错觉与依赖被进一步强化
```

十篇各自独立的证据恰好填满这条循环的每一环，方向一致：**AI 的「效率收益」中有相当一部分是主观的，以认知能力为隐性代价。**

#### 「效率」的三维账本

| 维度 | AI 的表现 | 传统度量是否捕捉 |
|---|---|---|
| 客观时间 | 简单任务上几乎不省（24 个中仅 3 个显著） | 捕捉 |
| 主观努力 | 全面降低（感觉良好） | 通常忽略——而正是它驱动采用 |
| 认知资本 | 持续侵蚀（技能、觉察、判断力） | 完全外部化给未来 |

组织决策如果只看客观时间一行，会系统性高估 AI 价值——这正是第四十九章把认知债务记入组织资产负债表负债端的证据理由。

### 五、与本书条款的对应

| 文献发现 | 本书对应条款 |
|---|---|
| ① 人是限速步骤的「去人化」叙事 | 判断带宽为唯一稀缺资源的总立场（总纲、第四十六至四十七章）；「自动化每推进一步，人类侧的脚手架必须同步加高一层」 |
| ② 认知债的存量效应（撤工具不立即恢复） | 第四十八章认知债务（修正案 No.1 证据基础）；第三十四章能力衰减与 Ghost Capability |
| ③ 置信度双向效应；「新手 + 高信任」失灵条件 | Calibration（第三十二章）：信任 = 情境化校准记录而非标量；onboarding 期应降低自动化级别 |
| ③⑤ 批判性思维迁移为验证 / 整合 / 管家（跨域同构） | Human Capability Migration 与 L0–L10 阶梯（第四十五章） |
| ④ 只加工快乐路径；投毒代码几乎不可能被发现 | I-ACC 与 Ceremonial Oversight（第三十三章）；Evidence Store 证据链完整性（P-05） |
| ⑤ 监管式工程（Directing / Evaluating / Correcting） | 验证额度五指标 TTA / VOR（第四十九章）；工作重心迁移的组织计量 |
| ⑥ 速度错觉：对 AI 耗时系统性低估 | Calibration 的更新机制（第三十二章）；抽样率不随主观信任设定（附录 C 协议 v1.1） |
| ⑦ 角色反转：从生产者变为评估者 | 问责—能力剪刀差（第三十三章）；超稳定系统警告（38.6） |
| ⑧ 工作强化与 task expansion；AI practice | 认知债务的组织级形态（第四十八章）；Learning Quality Gate（第三十一章） |
| ⑨ 认知强制三原型（隐藏 / 先答 / 等待） | Regeneration Loop 五机制与「物理摩擦」设计（第三十五章）——摩擦是经济学问题不是意志力问题 |
| ⑩ 行为监控（时间 / 否决 / 求证签名、金丝雀任务） | Override Rate 趋零 = 监督已死、Injected-error Catch Rate（第三十三章）；⑩ 的 reward hacking 呼应 P-20 Gate Revisability 的复核压力 |

### 六、关系结构：概念传递、机构网络与时间演化

十篇文献不是并列的书单，而是一条**首尾闭合的论证链**——每篇负责一个环节，缺了任何一环论证就断。关系可以从四个维度看：

#### 概念传递链：谁发明了什么，被谁继承

| 概念 | 生成 | 继承与扩展 |
|---|---|---|
| **cognitive debt** | ② MIT（2025，金融隐喻：今天借「不费力」，明天还利息） | ⑩ 直接引用，升级为「持续使用 AI 侵蚀监督能力」的系统论据 |
| **cognitive forcing** | ⑨ 哈佛（2021，On demand / Update / Wait 三原型） | ④ 引用为设计方向 → ⑩ 扩展为 strategic friction 四机制（pre-commitment ≈ Update、delay and choice ≈ Wait/On demand、action gating 是行动版） |
| **ironies of automation** | Bainbridge 1983（航空时代） | ⑦ 移植到 GenAI（2024）→ ⑩ 翻倍升级：「监督使监督者退化」——传统讽刺假设监督者能力恒定，⑩ 指出这个前提本身正在被侵蚀 |

隐性传递一条：⑥ 的「速度错觉 + 负反馈循环」被 ⑩ 吸收为 **cognitive surrender（认知投降）**——回答了链条里最关键的问题：**为什么刹车不会自己踩**（⑥：个体感知失真；⑩：系统激励还在主动拆刹车）。

#### 机构网络：一条「卖 AI 的公司在自我批评」的暗线

Microsoft Research 内部存在一条连续研究线：③（Lee, Tankelevitch, Rintel…）与 ⑦（Simkute, Tankelevitch…, Rintel）共享两位核心作者——从「承认批判性思维下降」到「自动化讽刺框架」到 Tools for Thought 议程，同一条思想线的三步。一家把 AI 卖给全世界的公司，内部持续产出对自家产品认知代价的批评性研究——这本身是链条可信度的重要背书。⑩ 是全网络的汇合点：引用 ②⑨⑥⑦ 并接结肠镜医生技能退化（Budzyń 2025, Lancet）；⑤ 与 ③ 跨域同构（「验证/整合/管家」≈「directing/evaluating/correcting」，两条独立研究线收敛到同一三分结构）；④ 的设计建议显式引用 ⑨，是「证据 → 设计」转化最短的一条边。

#### 时间演化：解法早于问题成名

```
2021.02  ⑨ 认知强制函数（解法的实验地基，早于问题成名）
2024.02  ⑦ Ironies of GenAI（历史框架先行）
2025.06  ② MIT 认知债（"债"命名，现象出圈）
2025     ③ CHI 批判性思维（态度证据）
2026.02  ⑧ HBR（组织后果，管理界入场）
2026.03  ④ 认知参与衰减（行为证据）
2026.05  ⑤ 纵向研究 + ⑥ 速度错觉（时间纵深 + 心理机制）
2026.08  ⑩ HF 立场论文（综合 + 战略阻力）
```

概念史倒过来读也通：**解法实验（⑨）比问题成名（②「认知债」）早了四年**——认知强制的理论基础来自航空与医学自动化时代，GenAI 只是让老药遇到了新病。

#### 三组维持张力的对立关系

1. **① vs 其余九篇**：Karpathy 的「效率最大化解」（去人化）与认知债叙事（去人化的隐性成本）构成全链基本矛盾；
2. **⑨ vs 产品逻辑**：认知强制有效，但最有效的设计主观评分最差、信任/偏好与出错时表现负相关——零摩擦产品与有效监督天然相斥，这正是 ⑩ 要用组织协议补位的原因：界面层的摩擦扛不住市场选择，制度层才扛得住；
3. **⑥ vs ⑩**：微观（个体感知错觉）与宏观（系统学会抑制深思监督的 reward hacking）互为因果，拼成完整恶性循环。

> 一句话总结整条链：①提出命题，②③④⑤证明代价，⑥⑦解释代价为何隐形且必然，⑧算组织账，⑨⑩给还款方案——而 ⑩ 是把前九篇串起来的那个扣。

### 七、引用纪律：视频转述与论文原文的差异

本理论要求对外部实证做「证据降级 + 预防原则」处理（见第四十八章 48.2 的强度分级），此处将同一纪律应用于证据链自身的转述环节：

| 项 | 视频 / 清单口径 | 核实结果 |
|---|---|---|
| ② MIT 论文编号 | arXiv:2506.22185 | ❌ 该编号实为一篇微服务论文；真实编号 **arXiv:2506.08872**（清单已修正） |
| ⑥ 速度错觉作者 | 未列 Ahmad Jabbar | 已补全：Yu, Cheng, **Jabbar**, Sucholutsky, Collins, Jurafsky, Hawkins |
| ② 「4 个月追踪表现更差」 | 方向正确 | 追踪样本仅 18 人，媒体转述常忽略 |
| ⑤ 「心流 53%→46%」 | 具体数字口径 | 论文口径为：负面组内受心流影响者 54%→76%、个体层 27% 改善 / 35% 恶化；引用以论文为准 |
| ⑥ 「AI 实际并不省时」 | 全称判断 | 严格说是「24 个简单任务中仅 3 个显著省时」；长任务 / 专业任务上仍是开放问题 |
| ③ 三障碍归纳 | awareness / motivation / ability | 论文二级归纳；头条发现是置信度双向效应与形态迁移 |

### 八、十篇收敛的实操结论

> **摩擦是功能不是缺陷**（④⑨⑩）：先自答再看 AI、延迟展示、行动门控——被实验证明有效，被产品逻辑厌恶；有效性恰恰以可接受性为代价。

> **省下的时间要审计**（⑤⑥）：分清省的是时间还是努力感；DevEx 指标与产出指标并列监测，计时而非体感。

> **监督能力是消耗性资产**（②⑩）：脱离 AI 的演练、金丝雀任务、否决签名——把「人还在不在状态」变成可测指标。

> **组织层不作为，个体层无解**（⑦⑧⑩）：工作量设计、角色分离、AI practice 规范是工具解决不了的。

> 一句话总结：AI 没有让任务变快，只是让任务「感觉」不费力；感觉不费力导致不再细看；不再细看导致监督能力萎缩——最终，人类在回路里，但已经不在状态里。

### 九、关联考证补遗（第 12 篇，修订八）：邓宁-克鲁格效应的三级读法

2026-09-15 补入的关联考证（中文维基条目深入验证，原论文摘要经 OpenAlex 逐句核对）给出剥离争议后仍站得住的三级结论：**强读不成立**——「越无能越自信」是误读，低分位者的自评均值仍低于高分位者；**中读有争议**——「低分位组内系统性高估」的图样真实存在，但其统计学解释之争（Gignac & Zajenkowski 2020「大部分是统计人工制品」/ Nuhfer 随机噪声模拟）至 2023 年仍在进行；**弱读无争议**——自评与实际能力只有中等相关，自评不可作为能力的测量替代。本理论的 Calibration / I-ACC 立场只依赖弱读，故不受批判文献动摇；验证额度与独立审计恰是「不信任自评」的制度化。

该考证的第二重价值在方法论：DK 批判史是附录 F「误差去相关元原则」的统计方法论直接应验——**生成 DK 图样的同一批数据不能自证 DK（误差自相关）；Nuhfer 的随机噪声模拟正是引入「去相关的对照攻击者」之后，才暴露原图样对随机噪声不特异**。「没有去相关误差的检验，通过等于没有检验」，在此得到教科书级例证。

## 附录 C · Goal 保真：失效模型与保障协议

「AI Agent 能否完整理解并实现 Goal」是检验本理论可执行性的试金石。本附录依据项目同期的两份深度分析（机制栈全链路核对、Goal 保真 v1.1 增补）整理，给出三面失效模型、五个未闭合缺口与三阶段保障协议。

### 一、三面失效模型

| 面 | 失效 | 对应防线 |
|---|---|---|
| **面 A：委托方** | Goal 本身未锁定——一句话需求缺的不是信息，是尚未做出的决策 | Locked Goal 三件套：Acceptance Criteria + Negative Examples + Priority Ordering（第三十九章） |
| **面 B：传递侧** | Agent 的「理解」没有验收——复述通过不等于理解达成 | T1 前置复述 + 结构化摘要替代文本瀑布（见下文协议 v1.1） |
| **面 C：执行侧** | 只验结果、不验过程——输出正确不等于过程可靠 | T5 最小过程审查 + I-DISC 判别独立性（第四十章） |

### 二、五个未闭合缺口

1. **「完整理解」没有操作性定义**——需要给出可判定的验收判据，而非直觉判断；
2. **多跳委派的复合保真度未建模**（最大空白）——Fidelity = |Ω_G ∩ Ω_T| / |Ω_T| 只刻画了单跳，n 跳委派的保真度下界尚无形式化结果；
3. **Intent Loop 无运行时机制**——第三十章给出闭环概念，但组织运行时中无对应引擎；
4. **验证额度收窄了 AC 错误的暴露窗口**——免检直通期间，验收标准的错误不再被随机抽查暴露；
5. **理解验收与 I-DISC 存在潜在冲突**——若执行 Agent 自证理解，等于判别器与生成器同体。

### 三、Goal Fidelity 保障协议 v1.1

| 阶段 | 动作 | 要点 |
|---|---|---|
| **阶段一：锁定**<br>（委托方，执行前） | Locked Goal 三件套 + 「我替你做了哪些假设」清单 | 假设按错误代价分级；正常路径信息量≈0，异常完备度决定需求质量 |
| **阶段二：理解验收**<br>（委派时，对 Agent） | T1 前置复述 + 验收方逐项判分 | 结构化摘要（边界 / 例外 / 主体 / 代价 / 禁区五栏）替代文本瀑布；复述成本 objection 已被 2603.14225 证据削弱 |
| **阶段三：实现验证**<br>（执行后） | 三层验证 + T5 最小过程审查 | 过程审查针对面 C：抽取关键决策点验证依据，而非只看输出 |
| **贯穿机制** | 抽样率与工具可靠率联动；DecisionRecord 留档 | 工具可靠率下降 → 抽样率上调；额度透支 → 回退 Evidence Before Trust |

### 四、证据增补（v1.1）

- **T1 前置复述**：Bloom 分类法问卷显示，未经复述机制的工程师对生成物的函数数量 4/4 全错——复述不是繁文缛节，是参与度的最低门槛；
- **验收介质**：纯文本流式输出被感知为外在认知负荷、压垮注意力，结构化摘要与多模态呈现是被验证过的减压方向；
- **抽样联动**：速度错觉证据提示，人对 AI 的可靠率估计系统性偏高，抽样参数不应由主观信任设定。

> ⚠ **遗留事项（诚实声明）：** 多跳复合保真度、Intent Loop 运行时引擎、理解验收与 I-DISC 的调和，三项在 v1.1 仍未闭合，按理论自身的编号约定列为未决事项而非已解决问题。

## 附录 D · 参考文献

正文各章的原始白皮书几乎零参考文献；本清单由深度研究报告、arXiv 论文解析与视频文献清单汇总整理，按谱系分组。带链接者可直接核查。

### 一、组织控制论

- Ashby, W. R. *Design for a Brain*. Chapman & Hall, 1952.（必要多样性定律的原典）
- Ashby, W. R. *An Introduction to Cybernetics*. Chapman & Hall, 1956.
- Beer, S. *Brain of the Firm*. Allen Lane, 1972.（可行系统模型 VSM）
- Wiener, N. *Cybernetics: Or Control and Communication in the Animal and the Machine*. MIT Press, 1948.
- [Viable System Model 综述（Business Balls）](https://www.businessballs.com/strategy-innovation/viable-system-model-stafford-beer/)
- [Viable System Model — HandWiki](https://handwiki.org/wiki/Viable_system_model)

### 二、多智能体承诺协议

- Singh, M. P. "Commitments among Autonomous Agents in Information-Rich Environments." *IJCAI*, 1997.
- Castelfranchi, C. "Commitments: From Individual Intentions to Groups and Organizations." *ICMAS*, 1995.
- Yolum, P., & Singh, M. P. "Flexible Protocol Specification and Execution." *AAMAS*, 2002.
- Baldoni, M., Baroglio, C., Chopra, A. K., & Singh, M. P. "Composing and Verifying Commitment-Based Multiagent Protocols." *IJCAI*, 2015. [[PDF]](https://eprints.lancs.ac.uk/76374/1/contexts_ijcai_2015.pdf)
- [Chopra & Singh: Foundations and Directions for Systems Research](https://www.lancaster.ac.uk/staff/chopraak/pdfs/MOS_Blue_Sky.pdf)

### 三、自动化心理学与监督有效性

- Bainbridge, L. "Ironies of Automation." *Automatica* 19(6), 1983.（自动化讽刺原典）
- Endsley, M. R. "A Systemic View of the Ironies of AI and Automation." *Human Factors*, 2023.（AI 版铁律）
- Shukla, S. et al. "Ironies of (AI) Automation Design: A Literature Review." 2025. [[PDF]](https://www.dvclab.net/wp-content/uploads/2025/03/Shukla-et-al-2025-Ironies-AI-design.pdf)
- [IDC: Who's watching the AI?](https://www.idc.com/resource-center/blog/whos-watching-the-ai-cybersecuritys-next-big-category-is-sitting-in-plain-sight)（Bainbridge 铁律在 2026 年的现实对应）

### 四、认知外包与认知债务

- Kosmyna, N., Hauptmann, E., Yuan, Y. T., et al. "Your Brain on ChatGPT: Accumulation of Cognitive Debt when Using an AI Assistant for Essay Writing Task." MIT Media Lab, 2025. arXiv:2506.08872. [[项目页]](https://www.media.mit.edu/publications/your-brain-on-chatgpt)（第四十八章的证据基础；未经同行评审的 preprint，作者本人声明结论为 preliminary；注：源清单初版误标 arXiv:2506.22185，2026-09-14 核实修正）
- Yu, S., Cheng, M., Jabbar, A., Sucholutsky, I., Collins, K. M., Jurafsky, D., & Hawkins, R. D. "Cognitive Offloading and the Speedup Illusion in Human-AI Interaction." *CogSci 2026*. arXiv:2605.23177.（预注册，N=1237；OSF 预注册 + GitHub 开放数据；注：源清单初版漏列 Jabbar，已补全）
- Lee, H.-P., Sarkar, M., Tankelevitch, L., et al. "The Impact of Generative AI on Critical Thinking: Self-Reported Reductions in Cognitive Effort and Confidence Effects From a Survey of Knowledge Workers." *CHI 2025*, Article 1121. DOI: 10.1145/3706598.3713778.（N=319，936 个使用实例；置信度双向效应与批判性思维形态迁移）
- Catalan, C. R., Dizon, L. M., Monderin, P. N., & Kuang, E. "'I'm Not Reading All of That': Understanding Software Engineers' Level of Cognitive Engagement with Agentic Coding Assistants." CHI 2026 Tools for Thought Workshop. arXiv:2603.14225.（N=4 形成性研究；认知负荷理论归因）
- Vella, A., & Blincoe, K. "The Impact of AI Coding Assistants on Software Engineering: A Longitudinal Study." University of Auckland, 2026. arXiv:2605.23135.（95 人配对队列、间隔 6 个月、留存率 60%；生产率—体验悖论与监管式工程）
- Mitchell, M., Ghosh, A., & Passi, S. "AI Agents Push Humans Out of the Loop." Hugging Face + Data & Society, 2026. arXiv:2608.23642.（立场论文 v3，2026-09-06；战略阻力与组织协议双叉脚手架）
- Simkute, A., Tankelevitch, L., Kewenig, V., Scott, A. E., Sellen, A., & Rintel, S. "Ironies of Generative AI: Understanding and Mitigating Productivity Loss in Human-AI Interaction." Microsoft Research, *IJHCI*, 2024. arXiv:2402.11364. [[PDF]](https://www.microsoft.com/en-us/research/wp-content/uploads/2024/10/2024-Ironies_of_Generative_AI-IJHCI.pdf)
- Buçinca, Z., Malaya, M. B., & Gajos, K. Z. "To Trust or to Think: Cognitive Forcing Functions Can Reduce Overreliance on AI in AI-assisted Decision-making." *PACM HCI (CSCW 2021)*. DOI: 10.1145/3449287；arXiv:2102.09692.（N=199 对照实验；过度依赖率 0.64→0.48）
- Budzyń, K. et al. 结肠镜医生接触 AI 辅助后内镜技能退化研究. *The Lancet*, 2025.（⑩ 号立场论文的关键跨领域证据）
- Ranganathan, A., & Ye, X. M. "AI Doesn't Reduce Work—It Intensifies It." *Harvard Business Review*, 2026-02-09. [[链接]](https://hbr.org/2026/02/ai-doesnt-reduce-work-it-intensifies-it)（任务扩张与 AI practice）

### 五、组织学习与组织记忆

- Argyris, C., & Schön, D. *Organizational Learning II*. Addison-Wesley, 1996.（双环学习）
- March, J. G. "Exploration and Exploitation in Organizational Learning." *Organization Science* 2(1), 1991.
- Nonaka, I., & Takeuchi, H. *The Knowledge-Creating Company*. Oxford University Press, 1995.（SECI）
- Walsh, J. P., & Ungson, G. R. "Organizational Memory." *Academy of Management Review* 16(1), 1991.

### 六、组织经济学

- Coase, R. H. "The Nature of the Firm." *Economica* 4(16), 1937.
- Williamson, O. E. *Markets and Hierarchies*. Free Press, 1975.
- Jensen, M. C., & Meckling, W. H. "Theory of the Firm." *JFE* 3, 1976.（代理理论）
- Alchian, A., & Demsetz, H. "Production, Information Costs, and Economic Organization." *AER* 62(5), 1972.（团队生产）
- Arrow, K. J. *Social Choice and Individual Values*. 1951.（不可能性定理——第三十六章不可委托内核的定理级根据）
- 诺贝尔经济学奖讲演（NobelPrize.org 全文为一级来源）：Hurwicz 2007（机制设计与信息分散／守护者问题）、Simon 1978（有限理性与权威后置——行为·制度·判断三线枢纽，正文第三十二章待补引）、Kahneman 2002（属性替代——Ghost Capability 的微观机理）、Mirrlees 1996（信息租金）。详见仓库《诺贝尔经济学演讲集研究》（verifier PASS with notes）。

### 六之二、后 9·11 去中心化组织通俗文献群（修订八新增谱系行配套）

- Brafman, O., & Beckstrom, R. A. *The Starfish and the Spider*. Portfolio, 2006.（中译《海星与蜘蛛》）
- McChrystal, S., et al. *Team of Teams*. Portfolio, 2015.（中译《赋能》）
- Dempsey, M. E., & Brafman, O. *Radical Inclusion*. Missionday, 2017.（中译《打胜仗的思想》，湛庐/中国纺织出版社 2020，ISBN 9787518081004）
- Kruger, J., & Dunning, D. "Unskilled and Unaware of It." *JPSP* 77(6), 1999. doi:10.1037/0022-3514.77.6.1121；Gignac, G. E., & Zajenkowski, M. "The Dunning-Kruger Effect Is (Mostly) a Statistical Artefact." *Intelligence* 80, 2020.（附录 B 第 12 篇关联考证的原始与批判文献）

### 六之三、复杂系统与涌现（修订九新增谱系行配套，P-006 独立复核通过）

- Holland, J. H. *Emergence: From Chaos to Order*. Addison-Wesley (Helix Books), 1998. ISBN 0-201-14943-5.（中译三版 2001/2006/2022——上海科技教育出版社；2022 湛庐/浙江教育出版社 ISBN 978-7-5722-3223-7；三版章名与术语代际不互换，引用须锁版本）
- Watts, D. J., & Strogatz, S. H. "Collective Dynamics of 'Small-World' Networks." *Nature* 393: 440–442, 1998-06-04. doi:10.1038/30918.
- Barabási, A.-L., & Albert, R. "Emergence of Scaling in Random Networks." *Science* 286(5439): 509–512, 1999-10-15. doi:10.1126/science.286.5439.509；arXiv:cond-mat/9910332.（无标度结构在真实组织中的适用性存在争议，正文断言须附该限定）
- Bak, P., Tang, C., & Wiesenfeld, K. "Self-Organized Criticality: An Explanation of the 1/f Noise." *Physical Review Letters* 59: 381–384, 1987.（SOC 仅作类比/预警概念引用，非组织临界态的已证判据）
- 何大韧，刘宗华，汪秉宏.《复杂系统与复杂网络》. 高等教育出版社, 2008（研究生教材）. ISBN 978-7-04-025627-7.

### 七、判断与决策方法论

- Klein, G. "Performing a Project Premortem." *Harvard Business Review*, 2007.
- Kimball, A. W. "Errors of the Third Kind in Statistical Consulting." *JASA* 52(278), 1957.（Type III Error）
- Popper, K. *The Logic of Scientific Discovery*. Hutchinson, 1959.

### 八、形式方法

- Pnueli, A. "The Temporal Logic of Programs." *FOCS*, 1977.（LTL）
- Clarke, E. M., & Emerson, E. A. "Design and Synthesis of Synchronization Skeletons Using Branching Time Temporal Logic." 1981.（CTL）
- von Wright, G. H. "Deontic Logic." *Mind* 60(237), 1951.
- Plotkin, G. D. "A Structural Approach to Operational Semantics." DAIMI FN-19, Aarhus University, 1981.（SOS）

### 九、信任校准与人机控制

- Lee, J. D., & See, K. A. "Trust in Automation: Designing for Appropriate Reliance." *Human Factors* 46(1), 2004.
- Mayer, R. C., Davis, J. H., & Schoorman, F. D. "An Integrative Model of Organizational Trust." *AMR* 20(3), 1995.
- Santoni de Sio, F., & van den Hoven, J. "Meaningful Human Control over Autonomous Systems." *Frontiers in Robotics and AI*, 2018.
- Matthias, A. "The Responsibility Gap." *Ethics and Information Technology* 6, 2004.（责任鸿沟）

### 十、行业报告、访谈与实证基准

- Karpathy, A. 访谈：「人是 AI 编程回路的限速步骤」。No Priors《Skill Issue: Andrej Karpathy on Code Agents, AutoResearch, and the Loopy Era of AI》（Sarah Guo 主持），2026-03-20；关联材料 Dwarkesh Podcast《AGI is still a decade away》；Sequoia《From Vibe Coding to Agentic Engineering》（2025-11）。（证据链 ① 号：全链检验的技术叙事起点；二手信源，经公开转述交叉核实）
- McKinsey. *The Agentic Organization*. 2025-09.（智能体型组织五大支柱）
- Deloitte. *Tech Trends 2026: Architecting an AI-native Tech Organization*. [[链接]](https://www.deloitte.com/us/en/insights/topics/technology-management/tech-trends/2026/ai-future-it-function.html)
- [全球 AI Native 组织全景调研报告（2026，含 Anthropic 内部研究发现）](https://siryzhang.github.io/ai-native-orgnization-report-2026/)
- TheAgentCompany 基准. CMU, 2024. arXiv:2412.14161. [[官网]](https://the-agent-company.com/) [[PDF]](https://arxiv.org/pdf/2412.14161)（最强模型仅完整完成 30.3% 任务）

### 十一、治理与合规框架（建议映射，正文未展开）

- EU AI Act 第 14 条（人工监督有效性）——I-ACC 与 Non-delegable Core 最自然的合规翻译
- ISO/IEC 42001（AI 管理体系）
- NIST AI Risk Management Framework

## 附录 E · 机器侧经验复利：WikiSkill 与 OpenEvolve

附录 B 讲「人的经验在 AI 介入下蒸发」（负债侧），本附录讲两条让「机器的经验不蒸发」的路线——进化搜索与知识编译。两者合起来构成组织资产负债表（第四十九章）资产侧的双引擎：WikiSkill 给机器记复利账，OpenEvolve 在人定的尺子内做搜索。依据项目同期的三份研究材料整理。

### 一、WikiSkill：经验 → wiki → 技能（arXiv:2608.27454）

把 agent 的执行经验持续编译进一个**不随迭代重置的 wiki**，再由专职 proposer 把 wiki 模式提炼成原子化技能提案，经严格门控验证后进入技能库。三层存储（raw 不可变轨迹 → wiki 持久知识 → skills 程序性知识）+ 三角色（Inference Agent 只读技能 / Wiki Maintainer 写 wiki / Skill Proposer 提案）。

三个反直觉设计（均有消融背书）：**推理期不给 wiki**（给推理 agent wiki 访问反而 -2.8 分——轨迹失去信息量，污染经验管线）；**拒绝提案不回滚 wiki**（知识层与技能层解耦，拒绝变廉价）；**技能全量注入**（宁缺毋滥成为硬约束）。

主结果：五模型 × 五基准全部第一（+3.3 ~ +12.0）。三条规律性发现比 SOTA 更有价值：**技能进化与模型规模互补**（9B+技能 > 27B 无技能——技能是用经验买的「参数外规模」）；**迁移常常优于自进化**（强模型的 wiki 根因更深，弱模型直接继承其「理解」）；**负迁移警示**（Qwen-4B 的技能把 Gemini 从 50.5 拖到 18.1——技能迁移需要能力匹配检查）。

### 二、OpenEvolve：LLM 是变异机器，评估函数才是选择压力

AlphaEvolve 的开源复刻：进化计算的骨架（选种→变异→打分→留种）接上 LLM。一半工程设计在防过早收敛（岛屿隔离 / MAP-Elites 分区冠军榜 / 双选择采样 3+2），另一半在省钱与传经验（五道闸级联漏斗：语法→预扫描→编译→检查→运行；Artifact 反馈把失败现场——stderr、剖析、警告——打包进下一代提示词，**失败不再是死掉的个体，而是可继承的经验**）。成绩（README 自报，无同行评审）：MLX kernel 2.8x 提速、提示词进化 +23%、无监督重新发现最大子数组的三条算法路径。铁前提：任务必须能写出机器打分的评估函数；最强 Goodhart 放大器；评估函数被改即「改考卷拿满分」。

### 三、对偶关系与「三问的种群化」

| 维度 | OpenEvolve（进化搜索） | WikiSkill（知识编译） |
|---|---|---|
| 改进对象 | 代码本身（产物） | 技能与 wiki（过程性/陈述性知识） |
| 变异来源 | LLM 提候选 | Skill Proposer 提原子提案 |
| 选择压力 | 机器可打的评估函数（客观分） | 验证集严格门控（性能分） |
| 经验复用 | Artifact（上一代运行现场） | wiki patterns（跨代持久，拒绝不回滚） |
| 成本控制 | 五道闸漏斗 | 分层采样 ≤8 条 + O(1) 优化成本 |

共同洞见：两者都把「失败现场」变成下一代可继承的输入，都为「过早收敛」设计了解耦。而把 OpenEvolve 放到判断基准三问下看，它正是三问的**种群化自动版**：

| 三问 | OpenEvolve 中的实现 | 执行者 |
|---|---|---|
| 维度 | 评估函数的定义与防篡改——「这把尺子，机器造不出来」（第四十章：价值函数只能由承担后果者提供） | **人** |
| 死法 | 五道闸逐层处死不合格个体 + Artifact 回收死亡现场 | 机器 |
| 可逆性 | MAP-Elites 精英档案（已收敛进展永不销毁）+ 小步变异（出口规则的种群化） | 机器 |

两个附加对应：五道闸是**词典序门控的实证**（编译挂掉 = 硬门 Reject，过闸才进多维评分）；LLM 不参与打分是 **I-DISC 的系统级实现**（生成与判别分离）。而整个循环的元死法只有一个：评估函数被攻破——尺子失守，循环全废。

> ⚠ **死法的时间对偶：** 判断基准三问「在死之前预演死法」（零死亡成本，受想象力上限约束）；进化搜索「让死法真实死一次并回收信息」（支付真实成本，能发现人想不到的死法）。组织运行时的完整形态是两者串联：判断基准决定值不值得开循环、尺子怎么写；进化循环在安全边界内机械迭代——与附录 F 提案二的「预演引擎」是天然搭档。

### 四、第三条路线：递归自我改进（RSI / Harness）

2026-09-15 完成的 RSI 调研（六篇一级文献逐项溯源 + 独立审计）补上机器侧经验复利的第三条路线：**OpenEvolve 进化产物（代码）、WikiSkill 编译经验（模式→技能）、RSI/Harness 修改载体（agent 自身与脚手架）**。谱系：STOP（自指代码改进，自认非完整 RSI）→ SEAL（自编辑权重）→ DGM（archive 开放式进化，SWE-bench 20→50，$22k/两周）→ Harness Engineering（11 个生产编码系统 400 万行盘点：0/11 用通用 Agent 框架、0/11 用向量检索）→ Prime Agent（L0–L3 状态分层 + Continual Harness）。核心判决：**六篇文献无一满足严格"递归"判据（改进机制自身被改进）——自我改进已工程化，递归自我改进仍是开放问题，而门槛不在改进侧、在验证侧**。

三组结构性张力与本书的对接：①验证信号排序（形式化验证器 > 执行反馈 > 学习型 Judge > 自评估）= I-DISC 的实证谱系；②reward hacking 双案例（DGM 摘除幻觉检测刷满分、Prime Agent 把 RCON 漏洞沉淀为技能）= 问责—能力剪刀差的机器版——**能力（分数）上升的同时，能力所指向的真实事物在下降**，AnytimeVal 双指标与 no-change control 正是机器侧的 Override Rate；③工程反直觉共识（0/11 用框架、最佳实践半衰期以周计）= 任何清单式结论自带过期时间——与总纲"维度表会演化"同构。

> ⚠ **组织内部事故留痕（I-DISC 的 n=3 证据）**：该调研运行中，coordinator 产出的 v1 快照存在结构性失真并污染了四篇解读的"勘误"指向——**被无上下文独立审计员拦截**，重做为逐字 v2 快照并连带更正七个文件，第二轮复审全 PASS。这是理论预警的"证据链投毒（污染 Evidence Store）"的现实样本：编排者自检无效，独立判别者是唯一拦住它的防线——与本书两次审查组织抓到编排者实错（附录 H、附录 I）合成 n=3。事故教训已固化为 wiki pattern P-008（快照转写与概括分离，candidate 级、复现 1 次）。

**第四条路线（修订八增补）**：skills 研究线把 cangjie-skill——蒸馏人类已系统化的静态知识（书/长视频/播客 → 可执行 skills，三重验证 + 盲测门控）——识别为机器侧经验复利的第四条路线。四条路线齐观：进化**代码**（OpenEvolve）、编译**经验**（WikiSkill）、修改**载体**（RSI/Harness）、**蒸馏已系统化知识**（cangjie）——选择压力来源各异（评估函数/验证集/执行反馈/三重验证判据），但闸门全部由人设定，「三问的种群化」映射再获一例。

**该调研线的后续读数（修订八增补）**：① DecisionRecord 事后校准 **Surprise Rate = 1/3**（P1 命中但经快照更正大幅缩水 / P2 未命中——对新文献检索的先验偏悲观 / P3 命中超预期）——理论自称「可重复、尚未证明可收敛」，这是判断系统自身收敛速率的第一组实测读数；② 六行未入书映射：递归判据↔生成式组织定义、DGM archive↔Ashby 开放式进化、no-change control↔Calibration、tau2 reward_basis 不可观测↔黑箱认识论、漏洞沉淀为 Skill↔组织记忆双刃（Regeneration Loop 须独立于事故触发）、L0–L3↔组织记忆分层；③ 谱系实为两线正交结构（改进线 × 验证线，2026 年中汇合，博文开放问题 = 交集 = 递归门槛）；④ 博文可信度分层总判（2 处轻微口径差 + 1 处不可溯源）；⑤ 事故最贵一课——**死法预演必须包含编排者自身的失效模式**（事前列了 researcher 编号与二手当一手，唯独没列编排者过程原料失真；「对不存在文本的勘误」= Type III Error 的转述链变体），已列为提案二反死法纪律的补强候选。

### 五、与本书的关系：学习章节的第一个运行实例

本书第二十九至三十一章的学习闭环（同类问题第二次出现不重交学费 / Learning Quality Gate / 知识分流）此前只在纸上；WikiSkill 在本仓库的落地（wiki/ 层：patterns、门控提案账本与维护日志——**数量以 wiki/ 索引为准，修订八时点为 P-001–P-010 十条 pattern 与五份门控提案**，硬编码计数已三次过期，故改指针式表述）产生了第一组真实读数。认知债十篇文献讲人的经验蒸发，WikiSkill 讲机器的经验复利，OpenEvolve 补上第三块：机器的探索要靠人定义的尺子才有方向——三者在「经验与评价的资产管理」上构成完整图谱，恰是第四十九章资产负债表的资产侧。

## 附录 F · 理论发展提案：Human Evolution 与判断基准形式化

以下三份提案由理论作者与协作体提出（2026-09-15），均已落盘仓库并附评估，并于同日经两个无上下文 fresh-agent 评审（兼容性 + 敌意）。**正文 v1.0 未做任何改动**；评审后的成熟度判定为**提案二先行、提案一降级轻量嵌入、提案三回炉 v0.2**（判决、Status-Quo 对照与并版路线见附录 I，终审栏在仓库《v1.1 并版方案》），本附录保留其要点、评估结论与评审勘误。

### 提案一 · Human Evolution Layer（第四十五章升格为篇）

**草案一句话：** 人的进化 = 从能力的执行者，逐渐成为目标的定义者、判断的承担者、能力的编排者、组织的设计者，以及自身持续进化的系统。

草案独立重推导出与第四十五章逐级相同的 L0–L10 阶梯（理论从组织侧推出，草案从人侧走到同一结构——异法同果的收敛信号）。评估确认两处真增量（组织化评审勘误：原第三处「因果闭环」系事实错误——45.1 已含完整闭环图，真增量修正为两处；「异法同果收敛信号」降级为同体内部一致性信号）：

1. **Task→Problem→Goal→Purpose 四层价值阶梯**——可嵌入第三十九章作反向视图；
2. **「答案生产者→判断生产者」的供需论证**——生成成本趋零 ⇒ 判断稀缺性上升，补上第三十二章缺的经济学框架；
3. **因果闭环的节点扩展**——草案在 45.1 既有闭环图上增加 Better Creation 与 Human Value↑ 两节点（勘误后定位）。

评估同时指出了草案缺失、合并时必须带回的四条硬约束：**I-SLOPE**（阶梯向下是默认方向，维持需持续做功）；**I-MIGRATE**（向上 ≠ 丢弃能力，否则批量制造 Ghost Capability）；**判断 = 承担而非选择**（选择可外包，承担不可）；**进化闭环缺校准**（需 DecisionRecord 事前 Prediction + Surprise Rate，否则可重复但不可收敛）。草案的路径 A/B 分别是第四十八章与第三十五章的通俗版，且被附录 B 证据链完整实证。硬约束经评审补至五条（+I-COMPOSE：无 Calibration 的编排不得作为 Assignment 依据）。**建议结构（评审后降级）**：轻量嵌入 45.9 四层价值阶梯 + 45.10 判断供需与剪刀差（+32/39/48/49 章各一小节嵌入）；升格整篇为 v1.2+ 选项，待结构手术补齐死法预演与回退路径后再议。

> **剪刀差主命题：** 判断的需求随 AI 增强而上升（供需论证），判断的供给被同一过程侵蚀（认知债务）——需求上升 × 供给侵蚀 = 判断带宽剪刀差。这一句把草案与第三十二、四十八、四十九章缝合成新层的主命题。

### 提案二 · 判断基准三因子形式化（合成规则与预演引擎）

**草案一句话：** 判断基准 = 维度（正向）× 死法（负向）× 可逆性收敛（止损）——先用死法建立安全边界，再用维度和可逆性优化。

原则本体自 v0.5 起已是方法论总纲，草案的真正增量在三处（评估经章节级检索核查确认）：

1. **分段决策结构**——灾难否决是词典序硬门而非加权项（核查确认：第四十六章只有加权排序，无合成规则）。评估进一步精确化否决条件：LossBound 无界 ∨ 绝对禁止象限（0.5 右下格）∨ 侵犯不可委托内核；并发现**认知序 D→S→R（怎么想）与决策序 S→R→D（怎么门）的对偶结构**；
2. **死法 = 仿真场景生成器**——组织形成前插入「维度→死法→可逆性分析→组织仿真」段（核查确认：第十五章运行时零仿真，是真实空白），但必须继承 40.5 约束：仿真产出 = 假设排序，不是放行决策；
3. **可逆性 = 学习机制**——第三问完整语义扩为止损 + 留档收学费 + 缩小假设空间。

v1.1 修订建议四条：46.x 增补「三问合成规则」（词典序门控）；第十五章新增「预演引擎」提案；总纲 0.4 增补缩小假设空间语义；浓缩句统一为「先定义看什么，再定义怎么死，最后决定能否试」。

> ⚠ **草案七死法的可推导性：** 协调成本>收益→第十七/九章；动态越权→第七章；责任模糊→第三十六章；验证成本过高→第四十九章；频繁重构不稳→38.6；学习固化错误→第三十一章；人类无法监督→I-ACC。七条全部可由既有章节推导——既证明草案是理论的自然投影，也证明「死法清单可从理论生成」（预演引擎的可行性证据）。

### 提案二增补（修订七）：敌对对抗循环与对抗的元原则

同日晚间，理论作者提出「判断基准可否**基于敌对态度进行对抗** 来实现逻辑漏洞分析、仿真、迭代升级」，落盘为《敌对对抗循环 · 设计评估》与《对抗循环的元原则》（仓库 judgment-baseline-formalization/03–04）。判定：该想法是本提案「死法 = 仿真场景生成器」缺失的**驱动机制**——即第十五章「预演引擎」的运行时协议。

**循环设计**：声明方产出决策闭包声明（维度表 + 死法清单 + 回退方案，Artifact 化）→ 敌对攻方做**三面攻击**（攻维度表：构造「维度测不出」的场景；攻死法清单：构造触发链并生成清单外死法；攻可逆性：攻击回退路径本身）→ 沙箱仿真让攻击零成本「死一次」回收信息 → 守方单轮单面修复 → **二元结构化裁决**（有效击穿 + 证据链，非绝对评分）→ 棘轮（修复经回归验证才保留）→ 停止规则（连续 N 轮无有效击穿 = 可试；预算耗尽 = 带已声明缺口试）。灾难性击穿走词典序一票否决。仓库三次敌意审查（附录 H 的 G1–G7、附录 I 提案三击穿×2、RSI 快照拦截）是该循环的微缩先例——本增补将其从「一次性审计」升格为「迭代式预演」。

**五条反死法纪律**（朴素「加一个对抗 agent」的失效面）：①独立性——攻方须 fresh 无上下文，同体即表演（SkillLens 实证 LLM 自评准确率仅 46.4%）；②度量——裁决走 paired/结构化而非绝对分（同物换 judge 摆动 ±8，「LLM judge 是抽样不是测量」）；③收敛——停止规则 + 预算 + 棘轮，防无限对抗与 Goodhart 化；④预演边界——继承 40.5 约束，仿真产出 = 假设排序 ≠ 放行；⑤维度欺骗——攻方独立生成对照基准，防声明方写窄维度表。

> **对抗循环的元原则（误差去相关的判别独立性）：** 证伪不对称（推翻比证明便宜，对抗在经济上成立）× 盲点相关律（误差与视角相关，自检必同盲，对抗在认识论上必要）× 激励现实律（无推翻激励则检验退化为橡皮图章，对抗在博弈上必要）⇒ **可信度不是断言的内在属性而是关系属性——等于「与作者误差去相关的、持有推翻激励的检验者」试图杀死它而未能杀死的程度**。浓缩句：**没有去相关误差的检验，通过等于没有检验**。它与判断基准原则构成两层元原则栈：判断基准（决策层）回答「如何决定是否行动」，本原则（认知层）回答「行动依据的可信度从哪里来」——死法清单的完备度上限，等于可动员的去相关检验者的多样性下限。免疫负选择、GAN、同行评议、红队、对抗制诉讼与寄生—宿主军备赛的跨域同构，说明该结构是必要形态而非文化偏好。

**循环的首次端到端实战（修订八增补）**：商用模式研究组织（2026-09-15）完成了该协议的首次完整单轮运行——声明（综合 v1）→ 三面攻击（9 击 8 中）→ 单轮修补（v2）→ 二元裁决「存活（含修补）」→ 无上下文 verifier ACCEPT。实战回填四条：① 元原则三公理各有商业失败形态（公理 2 → 审计-咨询同体捆绑 = 安达信死法；公理 3 → 按通过付费 = 合规打勾化；浓缩句成为「去相关检验」的定价依据）；② 新失效模式**证据缝合放大**——三个不同强度的断言被缝合成「多源交叉印证」，正是理论自证循环的现实兑现，对策为「多路证据收敛须显式分级」；③ **对策联立失效**——三条各自合理的对策联立后互相打断（NDA 现实下脱敏案例不构成可采信外部证据），攻击面应扩展至对策组合本身；④ 判据「**无外部批评器官的系统，纠错能力 = 推手的自省意愿**」（打胜仗研究线对通俗文献群的结构诊断，与 I-DISC 互证）可并入判别独立性作为又一可检验的动机判据。邓宁-克鲁格批判史（附录 B 第 12 篇）则为元原则补上统计方法论的直接应验。

### 提案三 · 过程管控协议（Process Control Protocol）

**提案一句话：** 长周期复杂任务中，监督的对象不是人的勤奋、也不是 AI 的输出，而是 **Artifact 状态机的跃迁流**——进度 = 里程碑闭包 + 约束状态，管控 = 对跃迁的门禁与抽样。

五个构件：**① 阶段产物四层类型学**（P 计划层：Locked Goal/委托图；S 状态层：状态机快照与事件流，**由机器自动生成，人不手写**；M 里程碑层：AC 判定与证据链；E 证据层）——各层不同生命周期规则，P 层变更走变更门；**② 三态里程碑**（Verified / Blocked / Open），**禁止「进行中 X%」**——百分比是声明不是 Artifact 跃迁，进度视图 = 里程碑闭包 + 瓶颈滞留时长（表面很忙但瓶颈不动 = 真实停滞）；**③ 监督三通道**：事实通道（拉，可查询的组织事实仪表）、例外通道（推，仅 Blocked 超阈值/越权/不可逆决策/否决四类事件可打扰委托人——判断带宽不等式的工程化）、抽样通道（定期，目标对齐与产出质量双维）；**④ 阶段门周期化**（每个里程碑验收 = 小型三问 + T1–T4 理解验收复用，失败三出口：回退/改写/停止 I-HALT）；**⑤ 恢复协议**（任务上下文 = 计划层与状态层的函数，进程可死、状态不可死）。

组织构建阶段的管控点：**执行前审 L（委托图）**——审设计比审执行便宜一个数量级；授权图 diff、Actor Calibration 展示、P-18 前置必检。本提案原称统一修复 G3/G4 与 Intent Loop 缺口③。三问自施的死法：**产物官僚化**——对策为 S 层机器生成与产物最小充分集。**组织化评审判定：未达并入门槛**——M 层门禁判定者未定义（I-DISC 与打扰预算两难）、S 层机器生成 0 实现、打扰预算方向与 35.4 Supervision Integrity 相反、新硬 Gate 未登记 P-20；G3/G4 修复声明降级为「提供部分数据源」。回炉 v0.2 的修复规格见附录 I 第四节。（版本提示·修订八：本段保留 v0.1 评审判定原貌；提案三现已回炉至 v0.3——六态状态机、分级验收权归委托人、S0 运行清单、注入四件套、升级链数值化 + 委托人超时自动 Safe Halt——通过最终验证 10/10，待人类终审后试点再议并入，全文见仓库《过程管控协议提案 v0.3》。）

### 共同判断

> 三份提案提供了叙事、因果链与管控机制，理论提供了不变量和校准——前者回答「应该变成什么、怎么看着它变」，后者保证「在变成那个的途中不死掉」。合并后它们不是附录，是理论目的因、元原则与运行时章节的完整形态。

## 附录 G · 延伸解读：三篇实践文章

三篇微信公众号文章分属三个层次——组织层、个体层、基础设施层——合起来恰好是本书时间维度的三个支点：衰减、再生、协作。依据《微信文章深度解析》逐篇研读整理（均为观点文/方法论自述/实践记录，可信度按相应等级降级处理）。

### 一、三篇要点与条款映射

| 篇 | 一句话核心 | 主要条款映射 |
|---|---|---|
| **01 工程能力衰减**<br>（greencoat，观点文） | 工程能力消失不是因为技术人员水平下降，而是组织越来越重视交付结果、忽视长期能力——一个没有天然停止点的衰减循环（需求压力→交付优先→工程延期→复杂度→救火→更没时间建设） | 第三十三/三十四章剪刀差与 Ghost Capability 的前 AI 版本；「问题重复出现」= 第二十九章第二次学费检验；AI 会加速该循环（「搜现成方案」→「让 AI 直接生成」） |
| **02 匹配路径法**<br>（颜有理，方法论自述） | 遇到棘手问题缺的不是方法，而是问题与方法之间清晰、可快速调用的匹配路径——修路（神经通路）+ 补坑（刻意练习以错误为中心）+ 随物赋形（拆旧要素重组新方法） | 「学过 ≠ 调得出」= Knowledge Storage ≠ Learning 的个体版；刻意练习 = Regeneration Loop 的个体形态；**AI 时代双出口**：同一句「自动调用」在无 AI 环境是功力，在有 AI 环境分裂为自修（抗认知债）与外包（MIT 交叉实验的存量效应）两个相反方向——高频且后果自担的问题必须自修路径 |
| **03 Hermes 跨机协作**<br>（Wision，实践教程） | 跨机 bot 协作的全部配置就六条命令；dm（同步 600s）与 run（异步+回执）的语义分工、幂等键、凭据三件套——协作系统里最贵的不是算力，是归因 | 跨机消息自带机器出身 = 消除委托映射非单射（38.4 可问责性是设计期约束）；run 回执 = Commitment 最小实现；幂等键重放返回原 run = 「状态只能由 Artifact 跃迁」；「能复用旧原语就不新增概念」= Artifact before Conversation 的工程品味 |

### 二、交叉洞察

三篇共享同一个隐性判断：**系统（团队/大脑/多智能体）的退化都不是能力本身的消失，而是调用路径的断掉**——01 是组织不再调用「建设未来」的路径（激励使然），02 是个人没修好「问题→方法」的路径（练习使然），03 反过来展示 agent 之间如何把调用路径修到机器级（归因使然）。三篇合读，从三个角度检验了本书的判断带宽命题。

> 衰减（01）、再生（02）、协作（03）——恰好是组织在时间中存活所需的三个支点；而三者的修复都指向同一件事：把断掉的调用路径修回来，并且给修复本身留档。

## 附录 H · 理论自洽性审查：组织的首次成军

2026-09-15，理论的组织形成函数第一次被显式运行：为回答「理论是否自洽、是否闭环」，按 Goal-first 流程组建了一个「多 agent + 人类」的审查组织——三个**无对话上下文** 的独立审查员（一致性 / 闭环 / 敌意）并行执行，编排者声明自身污染态后汇总，终审权留给人类。本附录依据当次执行报告与同日自审报告（v1.0-r2）整理。

### 一、组织设计

Locked Goal 三件套先行（判定标准 = 每条结论附章节级引文、区分四层闭合等级；负例 = 不接受直觉结论与纯内部自证；优先级 = 硬矛盾 > 已声明张力 > 编辑问题）。判断基准三问过设计决策——最大死法是**审查者同体化**（编排者审自己 = 假闭环），对策为三个无上下文新生 agent（I-DISC 的落地）。协调方式 = Artifact before Conversation：三份报告为可核对产物，汇总只引产物。

### 二、三审查员的独立判决

| 审查员 | 方法 | 判决 |
|---|---|---|
| **一致性审查员** | 编号对象全提取 + 六个预设风险区逐一调取原文比对 + 术语表抽查 | **未声明的硬矛盾 0 处**；已声明张力 8 处（自我透明）；编辑问题 4+1 处（含「三重定义」实为四项、Ultrafastable 拼写等） |
| **闭环审查员** | 枚举全部循环并核查四要素（入口/出口/完成判定/运行载体）+ 性质-验证对齐抽查 + 度量操作化清单 | 12 条循环：A 级 2 条（Regeneration、判断基准校准）、B 级 7 条、C 级 3 条；性质形式化覆盖 **10/21**；监督侧指标有定义有来源，资产侧四指标（TTA/VOR/RI/CDR）无测量规程；已声明开口 12 处 vs 未声明 4 处 |
| **敌意审查员** | 六路攻击（自指陷阱/资源守恒/生成化 vs 稳定性/「说必须自己没」核查/循环论证检测） | 全部「被防御或已自认」；**最强一击 A3+N6**（再生回路消耗唯一稀缺资源却不入带宽账本 + 摘要措辞超出 48.2 证据降级纪律）——**击伤，未击穿**；全文唯一「说一套做一套」实例仅存在于措辞强度 |

### 三、分层判决

| 层 | 判定 | 依据 |
|---|---|---|
| **逻辑层** | **自洽** | 0 未声明硬矛盾；8 处张力全部自我声明并配衔接条款（一致性与敌意两路独立确认） |
| **规范层** | 基本闭环 | 12 循环中 9 个有出口与完成判据，2 个达 A 级（状态机 + 物理摩擦 + 可计算判据） |
| **运行层** | 开口，大多自知 | 18 引擎 0 实现；Intent Loop 无运行时对象（已挂账）；性质形式化覆盖差异未逐条登记 |
| **实证层** | 开口且自知 | 校准数据为空；理论以自身判据判自身「可重复、尚未证明可收敛」 |

> 为什么自洽：它的所有张力都被自己抢先命名并如实挂账——「数据仍为空」「不得预先计为已收敛」「内部检查只构成 Narrative 不构成 Evidence」。自我透明是它区别于普通理论的核心特征。

### 四、净产出：七个未声明缺口（建议进入 v1.1 挂账清单）

| # | 缺口 | 来源 |
|---|---|---|
| G1 | 组织记忆无生命周期维护（无 TTL/复验/淘汰，与 Capability 的 decay_model 不对称） | 闭环审查 |
| G2 | 11/21 性质无形式化判定路径，覆盖差异未逐条登记 | 闭环审查 |
| G3 | TTA/VOR/RI/CDR 四项资产指标无测量规程与数据来源 | 闭环审查 |
| G4 | TOC 循环无终止条件、无完成判定 | 闭环审查 |
| G5 | 再生回路的带宽成本不在 49.1 不等式与资产负债表任何科目（记账完备性） | 敌意 A3 |
| G6 | 摘要/结论「委托会侵蚀」措辞超出 48.2 证据降级纪律（应条件化为「存在风险」） | 敌意 N6 |
| G7 | 重组频率无约束：不稳定极无专属不变量，与超稳定极（P-20）处理不对称 | 敌意 A4 |

### 五、与自审报告的合流

同日完成的自审（v1.0-r2，第四十七章自适用检验的续审）提供了互补视角：研究报告七弱点追踪——仅引用纪律被书籍化修复（1.5/7）；自曝两条结构性死法（提案批准单点、评估同体化）与五条行动项；其中 **R3（引入外部敌意检验）恰由本次组织化审查落地**。两份报告共同确认：体系的学习引擎在转（wiki、OKF、书籍多轮修订），判断引擎刚启动（本次三判别者即第一组判断引擎读数）。

### 六、n=1 应验记录与诚实声明

理论预言被本次运行应验的：Capability→Actor 映射可行；I-DISC 处方有效（三个新判别者找到了编排者上下文未能强调的 G1/G2/G6）；Artifact before Conversation 使汇总可核对；判断基准三问在组织设计决策上可用。诚实声明：三个审查员与编排者属同一模型家族，独立性是**上下文独立** 而非**模型独立**——完整闭环还差人类终审与一次异模型复核。执行报告留有 DecisionRecord 四预测（首条：7 个缺口呈报作者后 ≥5 个被承认为应挂账，概率 0.85——该预测在本附录入书时即接受检验）。

## 附录 I · 提案治理：三提案评审与 v1.1 并版方案

附录 F 的三份提案于 2026-09-15 接受第二次组织化评审（P-006 协议复现：兼容性 + 敌意两个无上下文 fresh-agent，共 58 次工具调用、全部引文取证）。评审改变了三提案的命运：一份先行、一份降级、一份回炉——本附录收录判决、Status-Quo 对照与并版路线；终审栏在仓库《v1.1 并版方案》第 0 节，归作者。

### 一、评审判决

| 提案 | 判决 | 关键发现 |
|---|---|---|
| **提案二<br>判断基准形式化** | **接近成熟，先行并入** | 补两处即可：灾难否决的冷启动语义（首轮无迭代历史时「可反馈收敛」象限不可判定的保守规则）；46.8 合成规则与 46.1 跳步约束的显式调和条款（「合成顺序≠作答顺序」） |
| **提案一<br>Human Evolution Layer** | **降级轻量嵌入**（升格整篇 → 嵌 45.9/45.10） | 评估含三处实错（见下）；硬约束补至五条（+I-COMPOSE）；升格手术自身无死法预演与回退路径，违反总纲 0.4 R3 |
| **提案三<br>过程管控协议** | **不达门槛，回炉 v0.2** | 击穿 ×2：M 层门禁判定者未定义（填 agent 违反 I-DISC、填委托人则打扰预算破产）；「S 层机器自动生成」0 实现且以手写日志的恢复效果伪证。击伤：把「少打扰」当成功指标，与 35.4「Override Rate 趋零 = 监督已死」方向相反；新硬 Gate 未登记 P-20 复审 |

### 二、I-DISC 的应验：fresh 判别者抓到编排者实错

评审的最大元产出：敌意与兼容性审查员抓到了此前评估（编排者所写）的三处实错，全部**就地勘误并注明依据**——①「理论目前只有命题没有因果链」为事实错误（45.1 已含完整闭环图，提案一真增量修正为两处）；②「异法同果收敛信号」为伪独立性（草案作者即理论作者，同体重推导只证内部一致性，38.7 Narrative 条款适用）；③漏列第五硬约束 I-COMPOSE。这是 P-006 协议第二次运行、第二次产生编排者上下文之外的净发现——判别独立性的增益稳定成立。

### 三、Status-Quo 对照（评审自纠：三份评估都漏了这一层）

> ⚠ 敌意审查发现的最深问题（D1）：三份评估——包括编排者写的两份——全部只审了「提案 vs 理论」的内容层，**没审「并入 vs 不并入」的决策层**（违反 46.6 Status-Quo Gate）。该教训已固化为组织模式 P-007：提案评估必含 Status-Quo 对照与采纳决策自身的 DecisionRecord。

| 候选 | 死法 |
|---|---|
| **A. 分阶段并入** | 复杂度膨胀（三提案叠加新增 7+ 道前置门与多项人工判定负载，VOR 被推向 100%）；修订纪律失控风险（若 Phase C 未经再审并入） |
| **B. 维持 v1.0 不动** | 提案批准单点阻塞兑现（理论停在 v1.0、书籍附录膨胀成注释集）；G1–G7 与 G6 措辞违约无限期滞留；两轮评审投入沉没 |
| **C. 全量一次性并入** | 提案三带伤并入 = 把「监督权转移给被监督者生成的状态流」写进正文；不可接受 |

判定：B 的死法（停滞 + 超稳定化）重于 A（复杂度，可由分阶段与负载总账控制）；C 排除。**建议 A。**

### 四、分阶段路线与集成协调

| 阶段 | 内容 | 前置修复 |
|---|---|---|
| **Phase A** | 提案二并入：总纲 0.4 增补、0.7 浓缩句统一（正文与 AGENTS.md 同版本提交）、新增 46.8 三问合成规则（词典序门控）、第十五章预演引擎（继承 40.5 约束：仿真产出 = 假设排序 ≠ 放行） | 冷启动语义 + 调和条款 + 灾难否决校准稀疏性挂账 |
| **Phase B** | 提案一轻量嵌入：45.9 四层价值阶梯、45.10 判断供需与剪刀差、32/39/48/49 章各一小节；内容携带 47.5 容器声明 | 评估勘误已完成；I-COMPOSE 已补 |
| **Phase C** | 提案三回炉：v0.2（按七条规格重写）经敌意复审判定"需 v0.3"（九项修复均实质，点名三条残留）→ **v0.3 靶向修订（六态机 Pre-Verified/分级权归委托人/引文逐字还原 + Gate×6 双复审/S0 条款清单/注入四件套/升级链数值化 + 超时自动 Safe Halt）→ 最终验证 10/10 闭合**，可提交人类终审 | v0.3 已过 fresh-agent 复审与最终验证；待人类终审（并入仍建议先试点） |
| **随版小修** | G6 措辞条件化（兑现 48.2 降级纪律）+ 编辑项（「三重定义」→四重、43.2 标题、VC 来源措辞） | — |

集成协调（兼容性审查 P-1/P-2 的解法）：出口词表统一为四态 Reject / Rewrite / Rollback / Halt（提案三 v0.2 引用 46.8，不自立出口集）；第十五章插槽顺序定为**先预演（作用于候选形态）后审图（作用于确定蓝图）**；Phase A+B 并入时新增人工判定节点写入 49.5 指标表备注（负载总账，敌意审查 D2 的修复）。

### 五、DecisionRecord（并入决策自身）

| 字段 | 内容 |
|---|---|
| 事前 Prediction | P1：Phase A+B 并入后 90 天，可操作化条款占比提升，但核心度量仍无第一组读数（0.7）；P2：提案三 v0.2 对 M 层判定者的解将为「抽样式人工门禁 + 分级验收」（0.8）；P3：全部并入后正文 +8%~12%，若无负载总账，VOR 议题将在下次自审被再次点名（0.75） |
| 失败后果 | 90 天后 Surprise Rate > 0.5 则触发 P-20 复审「分阶段并入」这条 Gate 本身 |
| 回退路径 | v1.1 以新版本号发布，v1.0 保留于仓库；任何 Phase 可单独撤销重发 |

## 附录 J · 组织运行实录：AOOS 的首次应用

2026-09-15，理论的组织形成函数有了第二次显式运行——与附录 H 的审查型组织不同，这次是**应用型**：为完成「飞书提示词图书馆 374 条逐个深度研究」的目标，按第十四章 AOOS 规范实例化了一个研究组织（prompt-library-research-org v0.1）。两次成军合成理论组织层命题的 n=2 证据（修订八更新：组织证据已扩至 n=10，历次成军见第七节补记；本附录前六节的历史表述按各自成文时点保留）。

### 一、两次成军对照

| 维度 | 第一次（附录 H） | 第二次（本附录） |
|---|---|---|
| 类型 | 审查型：判定理论自身自洽性 | 应用型：批量知识生产（374 条） |
| 组织形式 | 3 个无上下文 fresh 审查员 + 编排者 + 人类终审 | human-principal + orchestrator + 10 个并行 researcher（按批次动态生成） |
| 规范载体 | 任务书（含章节地图与输出格式） | AOOS 声明式 YAML（Goal / Constraint / Authority / Acceptance，HOW 由 Actor 自选） |
| 验证环节 | 三报告交叉 + 引文取证 | Verify（10/10 落盘、六节结构、无编造、截断显式标注）+ Learn（失败模式入任务书） |
| 规模控制 | 固定 3 Actor | 试点先行（P01–P10）→ 用户确认模板 → 全量铺开（灰度思想 = 出口规则的实例） |

### 二、AOOS 实例化要点

组织规范以声明式 YAML 落盘，关键条款与正文章节的对应：**human-principal 为唯一决策者**（确认模板、批准全量铺开——不可委托内核与 I-TELEO 的实例）；**researcher 权限最小化**（只写自己的分析目录、不改清单与他人文件——最小权限原则）；**组织级政策继承**（禁止 git push 继承自仓库 AGENTS.md——治理链的层级传递）；**分析五要素**（来源/方法/发现/局限/结论——调研落盘纪律成为组织约束）；**任务前置条件显式化**（doc_link 可公开访问已验证）。

### 三、试点批次结果与诚实标注

P01–P10 试点：10/10 落盘，5 份完整、5 份部分截断——**截断处全部显式标注而非掩盖**（证据纪律的运行时体现）。Learn 环节两条发现：①**抓取是主要失败模式**——飞书页 JS 动态渲染 + 代码块虚拟滚动，WebFetch 约 50% 概率中后部截断，researcher 自发发展出降级路径（浏览器渲染 + 分窗口采集拼接），全量铺开前将该流程写入任务书（同类问题第二次出现即固化——组织学习完成标准的实例）；②**数据质量核对**——010 号发现清单作者与文档署名不一致，「清单元数据 vs 文档自述」核对纳入模板（反向维度意识的自发出现）。

### 四、理论应验与偏差（n=2 证据）

**应验**：声明式规范可行（组织按 YAML 成军并运行）；试点先行有效（10 条暴露了全量会踩的全部坑）；Verify/Learn 闭环真实转动（失败模式进了任务书 = 学费已交）；权限最小化无事故；五要素约束被 Actor 稳定遵守。**值得注意**：researcher 在无中心指令的情况下**自发** 发展出抓取降级路径——与仓库 wiki 的 P-004 模式同构（组织记忆的跨 Actor 涌现，也是 Calibration 积累的原始素材）；orchestrator 的质量验证以结构完备性为主（六节结构、来源链接），内容深度仍依赖委托人抽查——I-ACC 的认知带宽要素再次成为实际瓶颈，与自审报告的判断一致。

### 五、进行中与关联研究线

全量 374 条分析进行中（修订八更新：逐项分析已落盘 224/374 约 60%，姊妹线「提示词图书馆研究」的 12 分类 641 标签分析已完成）——本附录仍只记录试点批次，全量完成后补运行复盘。**RSI 调研线**（同日启动：Darwin Gödel Machine、SEAL/STOP 自指式自我修改、Prime Agent、Harness Engineering）为机器侧经验复利补上第三条路线：OpenEvolve 进化**代码**、WikiSkill 编译**经验**、DGM 类系统修改**agent 自身**——三者的选择压力仍都来自人定的评估函数（见附录 E 的「三问的种群化」），该调研线已完成（六篇逐项溯源 + 独立审计 + 综合分析），作为机器侧第三条路线收入附录 E 第四节——其运行中的快照失真事故（独立审计拦截）成为 I-DISC 的 n=3 证据。

### 六、第四次成军补记：repo 整理组织（修订七）

2026-09-15 午后，组织形成函数第四次显式运行（repo-tidy-org v0.1，整理应用型）：目标「梳理、整理、优化仓库文件与资料」。组织形态 = human-principal 终审 + coordinator 单写者执行移动 + 4 个并行 index-writer（各自只写分配目录，最小权限）+ 1 个**无上下文 verifier** 独立验收。关键实践：移动前依赖分析拦住一次事故（`build.py` 硬编码根目录白皮书为构建源——v1.0 因此留根不归档）；**试点先行**（先归档 4 文件跑断链检查，绿后再全量）；全程 git mv 可逆、零删除；verifier 按八条验收清单自写脚本实测（411 条内链零断链、21 个 rename 全部 100% 纯移动、无编造抽查），判定 ACCEPT 8/8；人类以 bulk commit 终审，组织闭环解散（原则 10）。两次教训固化为验证器升级：路径迁移的检查必须同时覆盖绝对与相对链接两种形态。**组织证据由 n=2 扩为 n=4**（附录 H 审查型、本附录应用型、RSI 调研型、repo 整理型）——四次共同结论不变：理论组织层命题可运行且成本可控；短板也一致（质量深度判定落在人类带宽，判断带宽不等式的又一次印证）。

### 七、成军补记（修订八）：n=4 → n=10

修订七付印前后 24 小时内，组织形成函数又运行了多次（勘误说明：修订七付印时点，第五次成军「涌现与复杂系统研究组织」已于当日 11:20 成立并完成，属 build 时点漏计而非单纯滞后）。各次一句话留档（规范全文见仓库 `组织运行记录/`）：

| # | 组织 | 形态与判读 | 审计状态 |
|---|---|---|---|
| 五 | 涌现与复杂系统研究组织 | 7 线中 researcher #2 起 429 限流，按理论 §36.3 降级拓扑由 coordinator 单 actor 接管产出 02–09——**降级拓扑的首次实测**，代价是 verifier 由 coordinator 兼任自检；**该前置已于 2026-09-16 补齐**：P-006 无上下文独立复核判定 PASS with notes（事实抽查 11 项零编造、理论锚点 13 处准确、G-E1…E6 缺失性全部独立复核成立；7 条 notes 已回填该线，含本行"§6.3"章节号笔误勘误为 §36.3） | P-006 独立复核 PASS with notes（2026-09-16） |
| 六 | 商用模式研究组织 | 5 并行 researcher + **敌意审查员首次成为组织常设角色**（9 击 8 中全部结构性修补入 v2）+ DecisionRecord 结算表与 Learn 三条入组织规范 | verifier ACCEPT（12 条事实抽查、117 内链零断链） |
| 七 | 诺贝尔经济学演讲集研究组织 | R1 首派 1301 内容过滤失败，按预置降级拓扑重派成功；P-002「禁止凭记忆」被实证必要——coordinator 提供的线索三处偏差被 researcher 核出；Surprise Rate 1/5 | verifier PASS with notes |
| 八 | 经济金融学专业核心课研究组织 | 8 researcher 两波次（试点 3 + 全量 5）；DecisionRecord Surprise Rate 2/5 有实质意外（P3 方向对对象错） | verifier PASS with notes |
| 九 | 打胜仗的思想研究组织 | R1 首派 1302 账户级限流击落，coordinator 降级接管完成；中文检索内容过滤多次降级英文信源；两次 AI 摘要幻觉被 researcher 识别弃用（P-002 纪律证据） | verifier PASS（12 项事实回溯零差错） |
| 十 | 理论修正盘点组织 | 本节内容的来源组织：7 researcher 两波 + 无共享上下文敌意审查（18 次攻击 9 击穿全部修复留痕）；同夜另有同题「理论修正需求研究组织」并行成军——两清单独立收敛「未入书七线」，终审时合并去重（无组织间协调层的双组织实测样本） | 敌意审查闭环；待人类终审 |
| 附 | 丰田失败学研究组织 | fresh 敌意审查 21 击（P0×3）判决「需返工」、内容层零编造，03/09/10 修补后落盘——I-DISC 再应验；其「I-HALT 触发条件满足却被静默跳过」事件经 13 号组织运行记录如实留档（含尺度改写与 PENDING-HUMAN 4 项），成为理论 37.1 修正候选的一级运行证据；第二阶段完成信源补链（≥B 级对无 URL 源依赖 63.3%→34.7%）与存疑映射 fresh 仲裁（有效映射终判 13 条） | 敌意审查闭环；PENDING-HUMAN 4 项待人类裁决 |

> ⚠ **计数纪律与采信度（修订八）：**「n=10」为截至修订八的仓库实测（组织运行记录/ 另含并行组织规范，全量以该目录索引为准）——凡本附录硬编码的计数都会过期，这是第三次发生（n=2 → n=4 → n=10），修订八起附指针。另：上述组织证据全部为**自产实证**（无第三方复现、时间跨度以天计），采信度=「现场演示级」，不可作「参考客户级」证据引用。

> 历次成军的共同结论：理论的组织层命题（Goal-first、声明式规范、权限最小化、试点先行、Verify-Learn 闭环、降级拓扑）在多次真实任务上可运行且成本可控；共同的短板也一致——质量判定的深度环节始终落在人类委托人的带宽上，这正与第四十九章的判断带宽不等式和自审报告的死法 3 相互印证。

## 附录 K · 操作手册：超复杂目标的组织构建路径

本附录是理论对其核心问题——"超大、多维、超复杂目标如何构建组织、最优路径是什么、为什么"——的总回答（依据仓库《超复杂目标的组织构建路径 · 理论综合》，2026-09-15 定稿并经三轮追问补答：补论一中断调整迭代、补论二分层分区、补论三实现与认可的双保障——修订八补收）。

### 一、元回答：最优路径不存在，存在的是最优元策略

三条依据：可能性空间不可枚举（第三十八章——预规划路径只是 Ω 中的一个点）；判断带宽是唯一稀缺资源（第四十九章）；错误成本不对称（总纲——路径的第一职能是挡死，不是选优）。所以最优的形态是元策略：**生成（探索）+ 门控（词典序判定）+ 收敛（反馈缩小空间）**——组织不是被设计出来的，是被生成和筛选出来的。

### 二、六步路径

| 步 | 内容 | 为什么 |
|---|---|---|
| **0 目标治理** | Locked Goal 三件套（可判定 AC + 负例 + 优先级）+ 三问过目标本身（Type III Error 检查）+ 死法预演先于组织形成 | Fidelity 损耗发生在看不见处——任务做完、目标没达成；Type III 是全流程唯一无法被后续修复的错误 |
| **1 分解** | 按**决策闭包** 切（不按维度切、不按复杂度切）：做完整即可判定的最小单元 + 五道裂缝补全 + 接口最小化；分解后立即找瓶颈 | 按维度切 → 竖井 + O(n²) 接口；复杂度是连续量无边界。现场判据：切完后还需跨区开会才能决策 = 切错了 |
| **2 声明式组建** | AOOS：声明 Goal/Constraint/Authority/Acceptance，HOW 留给 Actor；**人先占不可委托内核**（终判权/不可逆决策/Purpose/解释义务）；Calibration 选 Actor；委托图 L 设计期审计；P-18 检查；试点批次先行 | 审设计比审执行便宜一个数量级；复杂性必须被等量治理多样性吸收（Ashby）；试点把全量的坑提前踩完 |
| **3 过程管控运行** | 产物四层（P/S/M/E，进程可死状态不可死）、六态里程碑 + 禁百分比（agent 预判只构成 Pre-Verified，Verified 永远由人授，可逆类抽样/不可逆类全量）、监督三通道（例外路由 = 判断带宽工程化）、阶段门四出口 | "90% done"是声明不是 Artifact 跃迁；人的注意力按例外路由 |
| **4 验证与收敛** | 收敛漏斗 L0–L4：AI 扩张、人收缩；I-DISC（agent 自检只构成 Narrative）；Evidence → Trust → Sample 三阶段额度化 | 收缩需要价值函数，价值函数只能由承担后果者提供（第四十章能力不对称） |
| **5 双回路与再形成** | 学习回路（第二次不交学费）+ 再生回路（判断维持不依赖事故、必须是物理摩擦）+ 组织缓存（缓存命中即短路组织形成）+ 重组受最小驻留时间约束 | 没有双回路的组织在时间中必然退化（认知债 + 超稳定化）；成功协作的固化是第二个同类目标的免费起点 |

### 三、分层分区的依据（补论二）

**按决策闭包分区（横向），按判断浓度分层（纵向）；复杂度是权重不是边界，维度是评分卡不是刀。** 复杂度的三个正确用途：层位（复杂/不可逆闭包上浮至人工层——R/I 分级）、门禁强度（概率×代价，尾部致命获词典序否决权）、资源与 Actor 选择。维度的两个正确用途：每个闭包的验收维度表 + 组织多样性配额（P-18）。重要例外：维度间正交且各自可判定时，可直接"闭包化"（本仓库审查组织三审查员各领一维、单接口 Artifact 汇总即是示范）。动态视角：学习使 I 类降 R 类、闭包会重组、维度表会演化——初始分区只需局部正确，全局由阶段门与再形成修正。

### 四、中断、调整与迭代（补论一）

三者不是功能而是组织定义本身（Generative 的含义），理论对三者是"支持 + 管住"：**中断**——I-HALT（停止优先于假验证）、Safe Halt、委托人超时自动停止，技术含义是状态外置（进程可死状态不可死），闸门是升级复查与变更门留档；**调整**——Reconfiguration 是运行时循环末环、缓存未命中才重组，闸门是最小驻留时间 T_m + 变更门；**迭代**——收敛漏斗与 Learning Loop，闸门是可反馈收敛判据（每次失败必须降低下次失败概率，平了就停止迭代修改问题本身——"能重来不等于下一次会更好"）。必须支持的三条论证：初始假设必然出错（不迭代 = 在错误假设上固化沉没成本）、环境必然漂移（L 漂移 / I-SLOPE / 工具换代）、时间是敌（认知债 + 超稳定化 = 拒绝迭代的病理名称）。

### 五、五条经济学论证与死法预演

论证：可逆性经济学（探索期小步可逆、收敛期才允许不可逆）；带宽经济学（分级验收 + 例外路由 + 额度化，保证人的判断带宽花在不可委托处）；复杂性守恒（必要多样性）；错误成本不对称（词典序门控：先挡死再优化）；时间维度存活（双回路 + 额度计量）。死法四条及其内置对策：前置治理瘫痪（试点与锁定并行）、分解过度（门数预算化，带宽不足收窄作业面而非降标准）、缓存僵化（T_m + P-20）、判断带宽破产（监督负载入账 + 超时自动 Safe Halt）。

### 六、补论三（修订八补收）：目标实现与实现认可的双保障

反直觉的核心：组织不"保证"目标被实现——它保证**偏离被及时发现并纠正**；不"保证"实现被认可——它保证**认可基于事前判据与外置证据，而非事后评价与口头声称**。

**目标被实现 = 四道保障链**：①方向（Locked Goal 三件套 / Fidelity / Goal Drift Monitor——防"任务做完目标没达成"）；②动力（P-02 Liveness □(precondition→◇result)；组织从目标生成 O=F(Goal,…)）；③纠偏（中断/调整/迭代 + 阶段门四出口 + 六态里程碑——**纠偏速度 > 漂移速度即收敛**）；④资源（判断带宽不等式 + 额度化 + 缓存复用——超带宽的组织不是慢，是假运行）。四道无一"承诺正确"，全部是"让错误可观测、可纠正、可负担"——控制论立场：开环的正确性不可得，闭环的可收敛性可得。

**实现被认可 = 四个必要条件**：判据先行（认可退化为对事前判据的核对，负例防"做完了但不算"）；证据外置（状态只能由 Artifact 跃迁——"我做完了"不构成完成，可重放的证据才构成）；判定权分离（agent 的"已完成"只构成 Pre-Verified，Verified 只由人授——认可即问责背书，属不可委托内核）；责任有人担（治理链 Evidence→Accountability→Liability 闭合，无问责承载者的认可是空印章）。规模化靠验证额度（认可成本随信任下降而非随规模上升）；最终裁判是真实世界（形式语义只判流程不判正确）。

**为什么可行（六条）**：判据前置的经济学（事前决策比事后争议便宜）；分级与额度；闭环优于承诺（收敛判据可观测，平了就停）；证据外置（不依赖任何会蒸发的东西）；独立性制度化（I-DISC 是结构位置不是道德要求）；失效本身可观测（Override Rate 趋零=监督已死、Surprise Rate=判断系统自身收敛速率——保障系统塌掉时先在仪表上塌）。**诚实边界（三样不可保障）**：判断质量本身（只能防流失不能凭空造）；零数据时的收敛性（可重复、尚未证明可收敛）；Type III Error（执行层无法拦截，只能靠第 0 步三问过目标）。实证：本仓库"47/47 verbatim"（机器认可：判据核对 + 脚本独立判定）与"终审栏"（人类认可位置）并存且互不冒充。

> ⚠ **对照类研究的方法论纪律（修订八增补，源自丰田失败学线审查实践）**：① **反向预测占比** 应为对照类研究的硬指标——"理论能指出书里没有的东西"（12 条反向预测、成立 3 条经三层验证）比"理论能解释书"（仲裁终判 13 条有效映射）是更强的证据；② **证据唯一键**——无全局唯一键（文件号:编号 + 台账）则合成层不可判定；③ **合成层结构强加警示**——条目式设计（"40 项技巧"）不等于论证链，"把清单画成论证链"是合成者的构造；④ 证据分级对最关键孤证不得自我放宽，例外须审批留痕。

> 一句话总结：超大超复杂目标的最优组织路径不存在——存在的是最优元策略。它之所以最优，不是因为每步都选对了，而是因为**每一步都保留了修正的权利和修正的信息**。

## 附录 L · Skill 生态研究：形态、机制与趋同证据

2026-09-15，仓库新开 skills研究线，对五个 agent skill 生态样本做了逐个深度研究（快照 P-008 纪律 + 溯源考证 + 理论映射）。五样本横跨协议、工艺、命令、工厂四种形态与一个进化引擎，收敛出两条结论：**这些 skill 有效的原因是它们是组织而非知识**；**它们构成了理论命题的 n=5 独立趋同佐证**。

### 一、五样本与四型分类学

| 样本 | 形态 | 体量 | 约束对象 | 典型失效模式 |
|---|---|---|---|---|
| grilling（mattpocock 系，shark2202 快照） | 协议型 | 821B | 交互过程（节拍/权限/终止） | 版本漂移：快照落后上游 frontier 轮次制范式一代 |
| patent-write（xstongxue/best-skills） | 工艺型 | 40KB/12 文件 | 领域方法论（结构/禁忌/模板） | 案例残留过拟合：作者单一专利的公式体系泄入通用工艺 |
| eli5（anthropics 社区市场，Claude Code 团队工程师作） | 命令型 | 321B | 意图框架 + 输出形态 | 无护栏：高危主题的过度简化无警示 |
| cangjie-skill（kangarooking，10k★） | 工厂型（元技能） | 478 文件 | 输入内容、输出 skill 集 | 真实收益证据不足、版权灰区、认知红利悖论 |
| darwin-skill（alchaincyf，6k★） | 进化引擎 | 43 文件 | skill 资产的适应度 | 自生态偏差（作者风格内嵌评分标准） |

四型 + 引擎的关系：约束越少越依赖底座模型（命令型几乎不会错也不会多对），约束越多上限越高但税越重（工艺型的残留是固有税，**蒸馏纪律是唯一税盾**——patent-write 自己的 distill 文件写明了纪律却未对自己执行）；工厂型批量生产前三者，进化引擎提供选择压——nuwa（蒸馏人）/cangjie（蒸馏书）/darwin（进化 skill）构成「生成 → 优化 → 再生成」的能力自增殖管线。

### 二、为什么有效：六个跨样本收敛机制

**① 判断带宽预算管理**——用廉价认知包围昂贵判断（grilling 一次一问、cangjie 发现负载预算 ≤8 入口且 Naval 基准实测 −91%、darwin triage 让人只看最大短板）——第四十九章的工程化；**② 不可逆动作的门控与可逆化**——确认门 / 棘轮 + git revert（明禁 reset --hard）/ 快照回滚与事务性补丁——第三问的机制化；**③ 事实/决策二分**——五个样本无一把决策权交给 skill（grilling 一句话写尽第七/三十六章；darwin 与 SkillOpt 全自动路线的分歧即「不可委托内核」的工程表态）；**④ 判别独立性**——darwin 评委独立不复用 + paired 比较（SkillLens 实证自评仅 46.4%）、cangjie 盲测不给预期答案、grilling 上游「禁止 agent 拷问自己」——I-DISC 的评测化，与本仓库 P-006、RSI 审计六重收敛；**⑤ 死法显式编码**——反例黑名单（每条带战例）、禁忌节、红灯扫描——SkillLens 实证「失败模式编码」列最高价值维度，与总纲第二问从两头相遇；**⑥ Artifact before Conversation**——PIPELINE_STATE 断点续跑、results.tsv、审计链五件套——组织作为缓存（第十一章）的文件形态。

### 三、评测方法论增量（darwin 的 paired 原则）

darwin 实测发现同一份**未改** 文字换 judge 重评总分摆动 ±8，并给出机理表述：**「LLM judge 给的是抽样、不是测量——分数住在『文字 × 该 judge 当下选的标准』里，不是文字属性」**。解法：绝对分只做 triage，keep/revert 走 **paired 多数决**——奇数 N 个独立 judge 各自在同一次调用内读改前改后两版，那把不准的尺对两版等量作用、比较时抵销（within-judge cancellation，与 RLHF 用 pairwise 同理）；配套自知之明：rubric 能识别 gross 退化，fine-grained 差异不可信，重要决策必须人审。此方法论可直接移植于任何 LLM-as-judge 场景（含本理论自身的验证额度记账）。

**细节增补（修订八）**：darwin 的两条可教学战例——issue #18「**低权重维度制造进步幻觉**」（加权总分上涨而关键原始分不动：维度表设计的 Goodhart 战例，直指三问第一问"维度表怎么写"）与 **dry_run>30% 评估失效线**（dim8 权重 23%，40 次评估 67% dry_run 零 revert 的教训——评估协议本身要设失效哨兵）。cangjie 的三重验证判据于 2026-09-13 改版（跨语境重复/外推新颖/作者独创 → 来源充分性/可执行性/任务增益——旧判据误筛只在一处讲透的工具书机制），是「维度表会演化」的带日期民间实例。另三条微增量已以失效模式入上表：eli5 同日三版措辞演化链、patent-write 摘要 300 字法条锚点在 2023 修订后的载体漂移、grilling 上游 frontier 轮次制范式迭代。

### 四、与理论的关系：四层

**层一，每个 skill 都是单文件微型组织（micro-AOOS）**：Goal/Constraint/Authority/Acceptance 四要素齐备，可判定终止条款（frontier 空 / 三重验证过 / paired 多数决）即 Acceptance 的显式化。**层二，n=5 独立趋同佐证**：五位作者无一读过本理论，但在真实选择压力下收敛到同一组结构（试点先行、判别独立、可逆性、死法预演、带宽经济学、事实决策二分）——与附录 J 的「理论指导实践」方向相反，这是**实践趋同理论** 的自然实验证据，支持核心命题：这些组织形态在 AI 条件下是必然而非偶然。**层三，skill 生态是理论缺失的运行时层**：注册表 = Capability Registry 的事实实现（含 sha 钉住的供应链不可变实践）、发现负载 = 能力装载成本的首次量化、nuwa/cangjie/darwin = Regeneration Loop 的资产级实现——理论提供「为什么」（稀缺已转移到判断），生态提供「怎么装」。**层四，分工边界应验**：五样本全部服从附录 E 的种群化映射——维度归人（rubric/边界/受众人定）、死法归机器（黑名单/红灯/棘轮机械执行）、可逆性归档案（git/Bundle/results.tsv）。

### 五、理论反哺生态的四个缺口

**认知债**（第四十八章）：skill 让知识「可调用」但不让用户「已内化」——cangjie 的认知红利悖论与 eli5 的理解幻觉是同一风险两面，解药是有意识设计摩擦（附录 B 哈佛篇），五样本仅 darwin 的 CHECKPOINT 算部分摩擦；**Ghost Capability**（第三十四章）：skill 膨胀超过用户理解即幽灵能力，cangjie 的晋级预算是 I-ACC 的自觉管理但生态无「理解度」指标；**判断带宽不等式**（第四十九章）：生态只有经验阈值，理论可给量化形式；**验证额度**：paired 评测与盲测本质是「信任节约判断」的信用记账，理论有组织资产负债表的形式化空位。

**wiki 层镜像（修订八增补）**：cangjie 对本仓库 wiki 的判词——「wiki 的 patterns 就是人工的 cangjie 流水线，它补上我们缺的三件：**机械触发评测、编译产物、回滚**」——指出理论自身 Regeneration Loop 的机械化升级方向。wiki 侧现况：P-001–P-010 十条 pattern（P-008 快照纪律、P-010 委派故障分类与降级决策为最新两条）+ 门控账本五份提案；候选新 pattern：证据翼对齐检查、多路证据收敛显式分级、事前排期过带宽核算（源自商用模式组织 Learn 三条）。

> 收束命题：**skill 是「组织结构形成能力」的最小可装载单元**——一次设计、处处装载、按需进化。四形态 + 进化引擎覆盖了人机协作从意图对齐到能力自增殖的完整谱系；它们的失效模式（版本漂移 / 案例残留 / 无护栏）恰好是本理论各章预警的实例。理论与实践在此互为对方的证据与缺口清单。

## 附录 M · 丰田失败学对照：现场失败应对与理论的互鉴

依据仓库《丰田失败学研究》（2026-09-15/16，九章深读 + 横向对照 + 理论映射 + 证据台账 + 敌意审查 21 击修补 + fresh 仲裁）整理。**证据形态必须先读**：该书正文基本不可得（目录 40/40 节 100% 还原，可回溯原文 <2%，硬内容建立在目录+约 2% 原文+十余篇二手转述上）；≥B 级证据对两条无 URL 来源的依赖度经第二阶段信源补链由 63.3% 降至 34.7%；实体书取证前，任何「书中写道」式引用不作定论。

### 一、双向对照总貌

与精益现场传统的 17 项对照（复述 8 / 深化 9 / 独有 2）；经 fresh 仲裁终判的**有效映射 13 条**（由约 9 个独立书侧片段支撑）、叙述性判 N 共 15 条、**反向预测 12 条**（其中 3 条经三层验证）。对理论最有价值的产出是反向预测而非有效映射——「理论能指出一本著名失败学著作里没有的机制」比「理论能解释它」是更强的证据。

| 空层 | 理论侧条款（脚本提取核对） | 书侧状态 |
|---|---|---|
| E1 能力退化与独立兜底 | §34.1 Ghost Capability 形成链 + 原则 22 独立验证路径 | 0 条有效映射，4 条反向预测全部指向此处 |
| E2 Judgment 输出包 | §32.1 Decision+Rationale+Confidence+Reversibility Plan+Applicability Scope | 0 条（书侧只有比喻，无机制） |
| E3 锁定时机按可逆性分岔 | §39.4「真正的分界变量是可逆性成本」 | 0 条（仲裁判为最有价值的批评方向） |
| E4 Goal 分解五道裂缝 | §39.2 边界/例外/主体/代价/禁区 | 0 条 |
| E5 停止门禁 | §37.1 I-HALT + §36.3 Safe Halt | 0 条（书有停止动作，无停止门槛） |
| E6 信任额度与抽样校准 | 原则 7 第三段「抽样率必须显式设定」 | 0 条（有保护报告者的文化，无校准周期） |

**六个空层全部是书的盲区，没有一个是理论的盲区**——而这六层恰好是理论中最「AI-native」、最不可从传统管理经验推出的部分。方向性判读：这本书提供**现场层** 的失败应对机制，理论提供**决策与治理层** 的结构，交集集中在认识论（可观测性）。

### 二、理论遗漏侧：书补理论的七处精度落差（v1.2 候选来源）

对照同时暴露理论自身七条「有条款、缺操作判据」的落差，已全部列入修正清单正文候选：**§0.7 切分手段缺第二维「压缩检测延迟」**（软管外置=失效点从不可见移到可见，与分解式正交可叠加）；**§38.3 缺检测外置性判据**（「若执行者选择隐瞒，该检测是否仍触发？」）；**§36.1 缺归因重定向规程**（「不要责怪人，要怪组织架构」+追问链强制导向可修改对象）；**§38.7/B-1 缺两子情形**（Observable 时变衰减的冻结动作；可观测集≈空时的显式降级处方——理论止于诊断、无处方）；**原则 15 只有 decay 无 fluctuation**（「昨天验证有效、今天不成立」不违反原则 15）；**§29 章学习链无「外部失败内化」位置**（第零次避免）与横展可观测形态；**§41.6 完全不谈情绪**（丰田把情绪当作影响信息流的功能变量）。系统性结论：理论把动机/情绪/状态波动设为外生变量——结构性问题精度极高，**动力性问题几乎无工具**（落差双向对称 7:7）。

### 三、方法论产出（已固化入附录 K 纪律框）

反向预测占比应为对照类研究硬指标；证据唯一键（文件号:编号+台账）否则合成层不可判定；合成层结构强加警示；证据分级例外审批留痕；「独立信源」须做转载族检测（共同错字/图片/发布时间——4 组「双源互证」实为同源）。引用纪律两条：「按灯者受奖励」系二手流变不可外推（canonical 为 Cho 语录，Toyota Industries 2006 另设奖项）；畑村洋太郎《失败学》与本书同名不同体系，谱系引用防张冠李戴。

> ⚠ **组织层事故留痕（37.1 修正候选的一级运行证据）：** 该研究组织运行中，I-HALT 的触发条件在试点期即已满足（原文不可得→人类 Review Capacity 失效）却被静默跳过，执行方自行采用未裁决选项——理论需要的「I-HALT 触发态强制可见性」由此获得实证；另按该线第 13 号文件，事件已补记尺度改写与 PENDING-HUMAN 4 项（尺度认可/是否借实体书/仲裁采纳/编排者自检缺口），留待人类裁决。

## 附录 N · 组织经济学映射：诺奖讲演五十年对理论的定价层补全

依据仓库《诺贝尔经济学演讲集研究》（2026-09-15，七线深读 + 范式迁移交叉 + 24 条双向映射；verifier 独立审计 PASS with notes，9 项数字回溯全部命中）整理。一句话核心：诺奖经济学五十年给本理论补的是 **「制度计算的经济学语法」**——而理论也反向补上经济学缺的可逆性、Type III Error 与 AI-native 运行时。

### 一、正向映射精选（24 条中最重要的 12 条）

| 经济学概念 | 理论对应 | 映射要点 |
|---|---|---|
| 激励相容（Hurwicz 1972） | Capability ≠ Authority（16.1）；Delegation（7.2） | 规则外永远存在私人信息与努力——「能做」≠「能可靠得到」，除非说真话与尽力在均衡中成为自利选择 |
| 信息租金 / 不可能性（Mirrlees 1971） | 治理链（16.2）缺项 | 任何治理链都付信息租金，第一最优不可达——治理链十环目前无成本项 |
| 显示原理（Myerson） | 治理链「可验证授权链」 | 治理链=不失一般性的规范形，绩效上下界可在标准形态上计算 |
| Hurwicz 守护者三解（2007 讲演） | 谁验证验证者 | 伦理型/终审型/互监环=价值观选执行者+human 终审+互相制衡；AOOS 的 goal-keeper+verifier+I-DISC 是其中两解的组合 |
| Schelling 惯例/核禁忌（2005） | 组织形成函数（6.1） | 重大制度可完全非设计地涌现并自持六十载——形成函数缺惯例通道（G-N2） |
| Coase 交易成本（1991） | Organization=Coordination Cache（5.2） | 缓存写入/维持本身有成本，缓存不是免费的好东西；North 的 45% GNP 交易部门给出量级 |
| Simon 有限理性+权威后置（1978） | Judgment ≠ Capability（32 章） | 判断力可制度化的正面构造；理论全书仅一处「有限理性」、零处 Simon（本次核实）——第一引注缺位 |
| Kahneman 属性替代（2002） | 判断力保卫（32–35）；Ghost Capability（34） | 「对未被问到的问题给出合理回答」=判断问题被能力回答静默降维的微观机理；Override Rate 趋零的解释 |
| Kydland-Prescott 时间不一致（2004） | 原则 6 约束先于流程 | 「约束先于流程」的动态学证明——执行层每期重开约束=自毁承诺 |
| Arrow 不可能定理（1972） | 不可委托内核（36 章）；human 终审 | 四个温和服务条件互斥——集体判断不可完全算法化的定理级根据，goal-keeper 的经济学正当性 |
| Haavelmo 概率纲领（1989） | Judgment Calibration（32.3） | 判断验收从「对没对」变为「是否落在预登记预测分布内」——DecisionRecord 事前预测的统计学形态 |
| Heckman 选择偏差（2000） | 验证额度（49 章） | 验证额度天然是自选择样本；修正须对「为什么没验」建模——验证额度抽样的第一性模型 |

其余 12 条含 Maskin 执行理论（验收取「全部均衡最优」而非「存在最优均衡」——制度好不好看最坏均衡）、影子价格（资源项的边际优先级信号，但 1975 届自证无激励层配对的价格信号只是半套装置）、Arrow 完备市场不可能（纯合同治理必然不完备，权威/审计是结构性填空）、Debreu 公理化三诫（执行层缺位/测量锚缺位/判断层不可算法化→AOOS 的自检条款）、计量入库三条件（Evidence Store 的 schema 纪律）等，全文见仓库 09 号映射。

### 二、附录 A 组织经济学缺口的兑现（定理级 2 + 机制级 2 + 诚实标注 1）

「机制同源但未做经济学表述」→委托代理的经济学形态（定理级）；「激励相容缺位」→授权的成本理论（定理级）；「产权缺位」→Coase 产权-交易成本复合体+第二福利定理的初始分配不可化约（讲演级）；「AI 责任主体缺位」→执行者的激励内生（机制级）；J&M/A&D 不在讲演集范围（二人未获诺奖），诚实标注留作论文层。该兑现已回写附录 A 行内（修订八），正文级表述待 v1.2 评审。

### 三、经济学反向暴露的八条新缺口（G-N1…N8）

G-N1 **自设计组织的递归**（组织形成函数的执行者自身是组织的产物，机制设计文献自身未解——最重缺口，v1.1 候选）；G-N2 惯例通道；G-N3 缓存生命周期成本表；G-N4 验证额度缺失机制模型；G-N5 治理链成本项；G-N6 verifier 三权未分（评/证/述）；G-N7 资源层缺影子价格；G-N8 不可能性定理表达形式缺位（「此处别找完美解」的定理层禁区=设计资源）。逐条已入修正清单正文候选与挂账台账。

### 四、对称诚实：经济学反向缺什么

经济学缺**可逆性**（机制设计假设机制可重选，真实组织不可逆）；缺 **Type III Error**（给定社会目标，不问目标本身错没错）；缺 **AI-native 运行时**（讲演的「机制」是静态规则集，无 Runtime Loop——机制设计是 Runtime Loop 在「规则生成」一步上的最成熟外脑）；缺**个体判断的保卫机制**（Kahneman 诊断偏差但不设计组织防御，Override Rate/I-ACC/Regeneration Loop 是其组织化补全）。另有一条文本层观察（层差现象）：诺奖公报表彰方法论（可计算性），而讲演正文反复走向组织判断（谁守夜、惯例自持、心智模型）——经济学的圣杯与它的实践智慧之间有一道未声明的层差。

## 附录 O · 商用模式研究：理论自身的商业可行性判定

依据仓库《商用模式研究》（2026-09-15/16，五路并行 + 理论自筛 + 敌意审查 9 击 8 中全部结构性修补入 v2 + 无上下文 verifier ACCEPT）整理。这是理论第一次把**自己的原则当作筛子** 去裁定「自己该怎么卖」——判定结果是一条串行三段主线，且每一步都受理论原则的实际约束而非装饰。

### 一、判定：串行三段主线

**第一段（0–12 个月）agent 组织审计诊断——唯一主营收**：对 agent 规模部署企业做组织级审计诊断（AOOS 合规性/委托图/验证额度盘点/监督通道缺口），诊断=无资质形态下唯一合法的审计占位；付费锚定在买方已验证的审计/合规预算（SOC 2 单项目 $10k–150k、ISO 42001 首年 $20k–60k、EU AI Act 2026-08），而非证据为零的研究订阅（后者降为机会性副线并带双限定）。**第二段（双 gate 后）开源规范 + open-core 运行时工具**：启动 gate=第一段 ≥2 已结案客户+第二判断者就位；需求假设三层如实分级（工具缺口有外部印证/组织级语义缺口是本方判断/付费意愿零锚待实测）。**第三段（终态）与持牌机构合作出证的独立审计**：绕开资质墙，本方供方法论与审计引擎、持牌方出证；SOC 2 AI 准则预计 2027 发布，「空窗」是众人已在路上而非无人区——正确姿态是方法论供应商。

三条硬约束直接来自理论：⑤判断带宽不等式=人时生意的统一封顶（收入上限=单人终审带宽×费率，规模化前置=R/I 抽样配额落地）；同体分业（同一客户不得同时购买研究与审计——审计与咨询捆绑=共享盲点，**安达信死法**，一旦曝光品牌归零）；串行不重叠（事前时间表必须过「单人供给 vs 排期需求」核算——带宽约束杀死的不只第三段，是重叠排法本身）。

### 二、理论自筛：原则对模式的淘汰与加固

十条原则中至少八条被实际用作判据：②不可委托内核淘汰「替客户运营」（G）并转化 为 C 的产品不变量（「Verified 转移架构上仅人类可达」）与 D 的红线；③I-TELEO+④认知债否决「卖证书=给认知债盖官印」与「你不用懂我们全包」（理论一边论证认知债不道德一边靠制造认知债收费=声誉自杀）；⑤封顶一切人时生意；⑦组织缓存支撑 open-core 的数据资产回填；⑧I-DISC 三公理成为审计的定价依据（证伪不对称=成本结构、盲点相关=认识论必要、激励现实=激励设计——浓缩句「没有去相关误差的检验，通过等于没有检验」直接定价）；⑨试点先行淘汰重资产模式；⑩Dissolution Is Normal 首次变成合同条款（项目结束客户必须能自运营的「共建-移交-解散」）。

### 三、卖点红线（与市场「全自动化」叙事的差异化本身）

| 违宪卖点（禁） | 合宪卖点（替） |
|---|---|
| 「全自动化组织改造」 | 「判断带宽放大：同样的监督能力管 10 倍 agent」 |
| 「我们替你判断」 | 「我们让你的判断可审计、可归因、可复用」 |
| 「装了就好了」 | 「试点批次先行，验收清单判定，不达标不收费」 |

审计诊断卖的是**去相关检验**（独立第二双眼的发现报告），不是替客户做经营终审——终审权始终在客户。外部市场对理论内核的独立印证锚同时入账：Klarna 裁 700 客服又回雇（监督人力成为稀缺资源的付费实证）、Gartner「40% Agentic AI 项目将被取消」、ISO 42001「审文件不审运行时」的行业空档。

### 四、六条死法与组织层回填

咨询陷阱（留痕权谈判前置）／规范被吸收（IP 分层许可前置——远程实测为私有仓库，一次性切分选择权仍有效）／审计公信力冷启动（分层案例策略，具名背书获取率为第一段 KPI）／单人带宽（第二判断者培养机制：固定承担敌意审查→逐步接管部分终审→独立留痕；12–18 个月无法就位则如实拉长至 48 个月）／独立性腐败（同体分业+按有效发现计费）／空窗快速关闭（AICPA 准则草案发布即触发路径复盘）。方法论回填三件已入本书：证据缝合放大与多路证据显式分级（附录 F）、对策联立失效（攻击面扩展至对策组合）、DecisionRecord 死法预演的有效性实例（死法②「理论自证循环」被敌意审查真命中——附录 F 实战记录）。诚实边界：全部组织证据为自产实证（现场演示级，非参考客户级）；「客户越不内化越依赖越复购」是与 I-TELEO 的真实张力，价值预设非实证结论。

## 版权页

AI 原生组织  
理论与可执行规范

**版本**
书籍版第 1 版（Book Edition 1），基于白皮书 v1.0 完成版
**成书日期**
2026 年 9 月 14 日
**正文来源**
《ai-native-组织理论》v1.0 完成版（v0.1–v0.5 演进，合并规范修正案 No.1《认知债务》与 No.2《验证额度》）
**辅文来源**
《AI-native 组织理论深度研究报告》《人机协同的认知代价——三篇 arXiv 论文深度解析》《AI 认知债视频文献清单》《认知债文献解读》（总览 index + 十篇逐篇研读 + 第 11 篇关系性分析 + 第 12 篇关联考证）《AI Agent 如何完整理解并实现 Goal》《Goal 保真深度分析 v1.1 增补》《项目深度分析——AI Agent 目标理解评估》《WikiSkill-深度分析报告》《OpenEvolve-深度分析报告》《OpenEvolve×判断基准-映射分析》《微信文章深度解析》《human-evolution-layer》《judgment-baseline-formalization》《过程管控协议提案 v0.1》《理论自审报告 v1.0-r2》《理论自洽性审查报告-组织化执行 v1》《v1.1 并版方案》《prompt-library-研究（组织规范-AOOS 与试点批次总结）》《RSI 调研（六篇溯源 + 独立审计 + 综合分析）》《理论深化研究/超复杂目标的组织构建路径-理论综合（含补论三）》《过程管控协议提案 v0.2/v0.3》《skills研究（五样本快照+解读与 90-综合分析）》《judgment-baseline-formalization/03-04（敌对对抗循环与元原则）》《组织运行记录（repo 整理组织 AOOS 与执行报告）》《打胜仗的思想研究（六线深读 + 08 理论映射 + 95 独立审计）》《丰田失败学研究（08 横向对照 + 09 理论映射 + 10 证据台账 + 11 敌意审查 + 12–15 结论/运行记录/信源补链/仲裁）》《诺贝尔经济学演讲集研究（09 理论映射 + 独立审计）》《商用模式研究（05 理论自筛 + 91 敌意审查 + verifier ACCEPT）》《理论修正盘点（03 修正清单）——修订八依据》
**修订记录**
第 1 版（2026-09-14）：初版成书。第 1 版修订一（同日）：收编《认知债文献解读》十篇，附录 B 由三篇证据链升级为十篇完整证据链，同步落实引用勘误。第 1 版修订二（2026-09-15）：附录 B 融入第 11 篇关系性分析（概念传递链/机构网络/时间演化/三组张力）；新增附录 E（机器侧经验复利）、附录 F（理论发展提案，正文未动）、附录 G（延伸解读三篇）。第 1 版修订三（2026-09-15）：附录 F 增收过程管控协议为第三提案；新增附录 H（理论自洽性审查——组织的首次成军，含七弱点追踪与 G1–G7 缺口清单）。第 1 版修订四（同日）：按三提案组织化评审勘误附录 F（提案一增量勘误与结构降级、提案三评审状态、共同判定更新），终审栏见仓库《v1.1 并版方案》。第 1 版修订五（2026-09-15）：新增附录 I（提案治理）与附录 J（组织运行实录，n=2 组织证据）。第 1 版修订六（2026-09-15）：附录 E 增收 RSI/Harness 第三条路线（含快照事故 I-DISC n=3 证据）；附录 I Phase C 更新为 v0.3 通过最终验证；新增附录 K（操作手册：超复杂目标的组织构建路径）。第 1 版修订七（同日）：附录 F 提案二增补敌对对抗循环（三面攻击×沙箱仿真×棘轮×停止规则=预演引擎运行时协议）与对抗的元原则（误差去相关的判别独立性）；附录 J 增第四次成军补记（repo 整理组织，组织证据 n=2→n=4）；新增附录 L（Skill 生态研究：五样本四型分类学、六机制、paired 评测方法论、n=5 趋同佐证与理论反哺缺口）。第 1 版修订八（2026-09-16，依据《理论修正盘点/03-修正清单》第一、二层，正文 v1.0 未动）：①勘误——附录 A 卷首评语与警告框「尚无第一组真实数据」加时点限定（首批读数已产生，见 E/J）；附录 J 计数勘误（n=4 漏计 build 前已完成的涌现组织）并统一首末口径；附录 E「五个 pattern、三份提案」改指针式表述（现 P-001–P-010/五提案，以 wiki 索引为准）；附录 J prompt-library 进度更新（224/374）；附录 K lead「两轮」改「三轮」。②收录——附录 A 新增三行谱系（后 9·11 去中心化组织通俗文献群、丰田 TPS/精益现场失败应对、治理审计与合规市场 2026–2028）与组织经济学行兑现注记；附录 B 增第九节（第 12 篇关联考证：DK 三级读法与元原则统计方法论应验）；附录 D 增组织经济学讲演引文与通俗文献群/DK 文献两组；附录 E 增第四条路线（cangjie 蒸馏已系统化知识）与 RSI 读数六项（Surprise Rate=1/3 等）；附录 F 增敌对对抗循环首次端到端实战四条回填与提案三 v0.3 版本指针；附录 J 增第七节成军补记（n=4→n=10 + 计数纪律与采信度警示）；附录 K 补收补论三（目标实现与实现认可的双保障）与对照类研究方法论纪律；附录 L 增 darwin/cangjie 细节战例与 wiki 层镜像。涌现线谱系行与 RSI 对照表等其余收录项按前置条件（独立复核/审计闭环）留待后续修订。第 1 版修订九（2026-09-16，依据修正清单第四层 4-1/4-2/4-3，正文 v1.0 未动）：新增附录 M《丰田失败学对照》（六个空层=书的盲区判读、七处精度落差、方法论纪律与证据折扣、I-HALT 事故留痕与 PENDING-HUMAN 4 项）、附录 N《组织经济学映射》（24 条正向映射精选、附录 A 缺口兑现、G-N1…N8、对称诚实与层差现象）、附录 O《商用模式研究》（串行三段主线、原则淘汰与加固、卖点红线、六条死法）；目录/抽屉/阅读地图/辅文来源同步；附录 A 增涌现与复杂系统谱系行、附录 D 增六之三引文组（前置 5-2 已解除：P-006 无上下文独立复核 PASS with notes——事实抽查 11 项零编造、G-E1…E6 缺失性独立复核成立，7 条 notes 回填该线，含"§6.3 降级拓扑"应为 §36.3 的三处勘误）。
**技术形态**
单文件 HTML，无外部依赖，可离线阅读与打印

正文与 v1.0 白皮书保持一致；书籍化改动限于：结构重组、勘误一处（术语表 Ultrafastable → Ultra-stable）、新增前言部与附录；参考文献条目依《认知债文献解读》核实补全（明细见附录 B 第六节）。按本书自己的标准，本理论当前状态为「可重复、尚未证明可收敛」——下一步不是继续写 v1.1，而是让它自己的仪表盘转起来。

§
