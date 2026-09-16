// 交付局七件套一致性检查（设计军终局验证用确定性仪器）
// 用法：node 验证脚本-设计军.js   （输出写入同目录 验证实测输出-设计军.md，可复跑可比对）
const fs = require('fs');
const path = require('path');
const ROOT = 'D:/bytecoder_ai';
const B = ROOT + '/交付局';
const REC = B + '/组织运行记录';

const read = p => fs.readFileSync(p, 'utf8');
const meta = read(ROOT + '/ai-native组织理论-元组织.md');
const F = {};
for (const n of ['00-交付局规范','01-注册表','02-缓存库','03-项目AOOS模板','04-角色构件库','05-路由决策表','06-判断带宽总账'])
  F[n] = read(`${B}/${n}.md`);
const aoos = read(`${REC}/交付局设计军-AOOS.md`);
const all = Object.values(F).join('\n');

const checks = [];
const ck = (name, ok, detail) => checks.push({ name, ok: !!ok, detail: detail || '' });

// 1. 政策 id：元层 12 条 + 软件 6 条，在 00 定义、在 02 登记、元层原文存在（前 12）
const metaPolicies = ['dedup-before-formation','classification-confirmed','pilot-before-scale','no-memory-citation','degraded-topology-default','halt-not-silent','existence-claims-timestamped','orchestrator-failure-drill','cache-solidify-double-gate','cache-conflict-check','sampling-rate-explicit','registry-auto-sync'];
const softPolicies = ['single-writer-per-module','self-contained-taskbook','verify-by-running','no-irreversible-ops','goal-change-relock','all-state-on-disk'];
for (const id of metaPolicies) {
  ck(`元层政策 ${id} 存在于元层原文`, meta.includes(id));
  ck(`元层政策 ${id} 内嵌于 00 §5.1`, F['00-交付局规范'].includes(id));
  ck(`元层政策 ${id} 登记于 02`, F['02-缓存库'].includes(id));
}
for (const id of softPolicies) {
  ck(`软件政策 ${id} 定义于 00 §5.2`, F['00-交付局规范'].includes(`- id: ${id}`));
  ck(`软件政策 ${id} 登记于 02`, F['02-缓存库'].includes(id));
}

// 2. 02 条目 id 连续性与格式
for (let i = 1; i <= 7; i++) ck(`02 含 PAT-00${i}`, new RegExp(`PAT-00${i}\\b`).test(F['02-缓存库']));
for (let i = 1; i <= 5; i++) ck(`02 含 CMP-00${i}`, new RegExp(`CMP-00${i}\\b`).test(F['02-缓存库']));
ck('02 无 PAT-008 残留', !/PAT-008/.test(F['02-缓存库']));
ck('02 无 CMP-006 残留', !/CMP-006/.test(F['02-缓存库']));

// 3. 状态七态在 00 与 01 一致出现
for (const s of ['PENDING','ACTIVE','VERIFYING','ACCEPTED','DONE','REWORK','HALTED']) {
  ck(`状态 ${s} 在 00`, F['00-交付局规范'].includes(s));
  ck(`状态 ${s} 在 01`, F['01-注册表'].includes(s));
}

// 4. T3a/T3b 计费科目四处互洽（00 / 05 / 06 / 03）
ck('00 含 T3a 与 T3b 拆分', F['00-交付局规范'].includes('T3a') && F['00-交付局规范'].includes('T3b'));
ck('05 不可逆门走 T3b 队列', F['05-路由决策表'].includes('T3b') && !F['05-路由决策表'].includes('第 5 触点'));
ck('06 含 T3a 与 T3b 分列', F['06-判断带宽总账'].includes('T3a') && F['06-判断带宽总账'].includes('T3b'));
ck('03 触点栏含 T3a/T3b', F['03-项目AOOS模板'].includes('T3a') && F['03-项目AOOS模板'].includes('T3b'));
ck('七文件均无「第 5 触点」残留', !all.includes('第 5 触点'));

// 5. 当量表逐项一致（00 §4.1 vs 06 §一）
const feePairs = [['T1 分类确认','1/轮'],['T2 批准成军','2/轮'],['T3a 停机类例外','3/次'],['T3b 不可逆审批','2/轮'],['T4 终审授 Verified','3/轮']];
for (const [label, fee] of feePairs) {
  ck(`00 当量表 ${label}=${fee}`, F['00-交付局规范'].includes(fee));
  ck(`06 当量表 ${label}=${fee}`, F['06-判断带宽总账'].includes(fee));
}
ck('00 T4 抽查粒度=每项目', /每项目每轮必做|每项目每轮|每项目\s*每轮/.test(F['00-交付局规范']));
ck('06 T4 抽查粒度=每项目', F['06-判断带宽总账'].includes('每项目'));

// 6. 在航上限口径三处一致（ACTIVE+REWORK+VERIFYING ≤3）
for (const fn of ['00-交付局规范','01-注册表','06-判断带宽总账'])
  ck(`${fn} 上限口径=ACTIVE+REWORK+VERIFYING`, F[fn].includes('ACTIVE+REWORK+VERIFYING'));

// 7. 交叉引用完整性：各文件提到的本区 .md 文件名均存在
const refName = /(\d{2}-[^\s*|`]+\.md|组织运行记录\/[^*|`\s]+\.md|projects\/[^*|`\s]+\.md|ai-native组织理论-元组织\.md)/g;
const names = new Set();
for (const src of [...Object.values(F), aoos]) {
  for (const m of src.match(refName) || []) names.add(m);
}
for (const n of names) {
  if (/[<>]/.test(n)) { ck(`模板占位路径（豁免存在性）: ${n}`, true); continue; }
  const p1 = path.join(B, n.replace(/^组织运行记录\//, '组织运行记录/'));
  const p2 = path.join(ROOT, n);
  const p3 = path.join(B, n); // projects/... 与 0x-*.md 直接落在 B 下
  const exists = fs.existsSync(p1) || fs.existsSync(p2) || fs.existsSync(p3);
  if (n.includes('/')) {
    const full = path.join(B, n);
    ck(`引用存在: ${n}`, fs.existsSync(full), fs.existsSync(full) ? '' : `缺 ${full}`);
  } else {
    ck(`引用存在: ${n}`, exists, exists ? '' : `在交付局根/字节根均未找到`);
  }
}

// 8. AOOS 结构：AC 五条 + 终审栏 + 校准栏 + 事故记录
ck('AOOS 含 Goal(Locked) AC', aoos.includes('AC（每条缺一不算完成）'));
ck('AOOS 含人类终审栏', aoos.includes('人类终审栏'));
ck('AOOS 含事后校准', aoos.includes('事后校准'));
ck('AOOS 含协调者失效预演', aoos.includes('协调者自身失效'));
ck('AOOS 含事故与降级记录', aoos.includes('事故与降级记录'));

// 9. 00 必备章节
for (const sec of ['四职能打穿映射','项目全生命周期','多项目并行治理','政策继承块','变更账本','自举协议','盘上布局规范','死法预演','诚实边界'])
  ck(`00 含章节: ${sec}`, F['00-交付局规范'].includes(sec));
for (const d of ['D8','D9','D10','D11','D12','D13'])
  ck(`00 死法表含 ${d}`, new RegExp(`\\| ${d} `).test(F['00-交付局规范']));

// 10. 基础纪律直引号（丁分片击穿项的回归检查）
const basicLine = F['00-交付局规范'].match(/\*\*基础纪律\*\*（任何环境通用）：[^\n]+/);
ck('基础纪律含直引号 "做 X"（字符级逐字）', basicLine && basicLine[0].includes('"做 X"') && basicLine[0].includes('"做完 X 后验证 Y"'));

const pass = checks.filter(c => c.ok).length;
const fail = checks.filter(c => !c.ok);
let md = `# 一致性实测输出 · 设计军终局验证\n\n- 运行时间：${new Date().toISOString()}\n- 仪器：验证脚本-设计军.js（node，确定性，可复跑）\n- 结果：**PASS ${pass} / FAIL ${fail.length}**（共 ${checks.length} 项）\n`;
if (fail.length) {
  md += `\n## FAIL 项\n\n| 检查 | 说明 |\n|---|---|\n`;
  for (const c of fail) md += `| ${c.name} | ${c.detail || '未通过'} |\n`;
}
md += `\n## 全部检查项\n\n| # | 检查 | 结果 |\n|---|---|---|\n`;
checks.forEach((c, i) => { md += `| ${i + 1} | ${c.name} | ${c.ok ? 'PASS' : 'FAIL'} |\n`; });
fs.writeFileSync(`${REC}/验证实测输出-设计军.md`, md, 'utf8');
console.log(`PASS ${pass} / FAIL ${fail.length} (total ${checks.length})`);
if (fail.length) { console.log('FAIL items:'); for (const c of fail) console.log(' - ' + c.name + (c.detail ? ' :: ' + c.detail : '')); }