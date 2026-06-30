---
name: add-component
description: >-
  问答式创建 lyrixi-mobile 组件：通过多轮对话确定形态、参考模板、Props/API 与设计，
  再按 .ai/docs 与 .ai/rules 生成实现与 AI 文档。在用户要新建组件、
  扩展组件库、说 add-component 或「创建一个 xxx 组件」时使用。
---

# add-component

通过**多轮问答**收集需求，**仅**从 [reference/catalog.json](reference/catalog.json) 与 `.ai/docs` 读取参考，按 `.ai/rules` 生成新组件包并同步 `.ai/docs`。

**约束：** 遵守 `.ai/rules/`（`develop-component-structure.md`、`develop-types-structure.md` 等）。查阅已有组件/工具 API 时配合 [docs](../docs/SKILL.md) 技能。**禁止 Read `src/` 下任何组件、工具或资源实现**（业务安装后库在 `node_modules`，与本仓库 `src/` 无关）。本技能迭代时可改 `.ai/skills/add-component/`。

## 何时启用

- 用户说「新建组件」「创建 xxx 组件」「add-component」
- 用户要在 lyrixi-mobile 库中增加新的 UI 组件或子组件族
- 用户提供设计稿/描述并要求按库规范实现组件

## 准备

1. Read [reference/catalog.json](reference/catalog.json) — 参考模板清单（`morphology`、`reference`、`docs`）。
2. Read [reference/generation.md](reference/generation.md) — 按参考文档改写与同步规则。
3. Read [`.ai/rules/develop-component-structure.md`](../../rules/develop-component-structure.md) — 形态 A/B/C 与组件包目录。

## 选定参考后（Q1b 之后必读）

根据 catalog 该项的 `docs` 路径，**只读 `.ai/docs`**：

1. **`{Name}-props.ts`** — 参考 API 形态（新组件 Props 应对齐此风格）。
2. **`{Name}-rules.md`** — 子组件挂载、何时使用、目录形态说明。
3. **`{Name}-example.md`** — Demo 索引；需要示例写法时再 Read `.ai/docs/components/{reference}/demos/*.tsx`。

用 `node .ai/skills/docs/scripts/resolve-docs.mjs {reference}` 定位依赖组件文档；依赖项同样**只读 `.ai/docs`**。

## 问答原则（必读）

- **一次只问一件事**：每一轮只收集一个字段；拿到用户回复后再问下一项。
- **选择题**用 `AskQuestion`（形态、参考模板、是否有设计稿、是否需要 Ref/国际化等）。
- **自由填写**（组件名、Props 说明、子组件列表、designNotes）**禁止**合并成「请补充 1、2、3…」；应单独发一条消息、只问一个字段。
- 表述不清时**只追问当前字段**，不要猜测 API 或交互细节。
- 未完成全部问答前**不要**开始写组件代码。

## 问答流程（必须按序）

### Q1 — 组件形态（AskQuestion）

**问题：** 新组件属于哪种包形态？（见 `develop-component-structure`）

| 选项         | 形态 | 说明                                        |
| ------------ | ---- | ------------------------------------------- |
| 单一组件     | C    | 无 `Xxx.Sub` 挂载，如 Amount、Badge         |
| 父 + 子组件  | B    | 有主实现 + 对外子组件，如 Button、Accordion |
| 纯子组件合集 | A    | 仅子目录挂载，无主实现，如 Input            |

记录 `morphology`。

### Q1b — 参考模板（AskQuestion）

**问题：** 选择最接近的参考组件？

- 从 `catalog.json` 筛 `morphology === Q1` 的项；展示 `title · reference（hint）`，值为 `id`。
- 记录 `templateId`、`reference` 及 catalog 中的 `docs` 路径 → **立即 Read 参考的三件套（props + rules + example）**；需要目录树时从 `rules` 与 `example` 索引推断，**不要**打开 `src/`。

### Q2 — 是否有高保真（AskQuestion）

**问题：** 组件有没有高保真设计稿？

| 选项 | 下一步                                                            |
| ---- | ----------------------------------------------------------------- |
| 有   | **单独一轮**：请用户上传图片；分析后写入 `designNotes`，再进入 Q3 |
| 没有 | 进入 Q2b                                                          |

### Q2b — 组件描述（仅当 Q2 选「没有」；单独一轮文字问）

**只问：** 请用文字描述组件用途、视觉样式、交互行为（点击、展开、禁用态等）。记入 `design.designNotes`。

### Q3 — 组件名（单独一轮文字问）

**只问：** 组件包名（ComponentName）是什么？须 **PascalCase**，与 `lyrixi-mobile` 导出名一致，例如 `StatusTag`。

记录：`output.componentName`。

**检查：** 查 [`.ai/docs/mapping.json`](../../docs/mapping.json) 的 `components[].name` 是否已存在；若已存在，告知用户并询问是否改名或扩展现有组件。

### Q4 — 子组件（仅形态 A 或 B）

**先 AskQuestion：** 是否需要对外挂载子组件？

- **否**（形态 B 退化为仅主组件）：`subComponents = []`，进入 Q5。
- **是**：进入 Q4a。

#### Q4a — 子组件列表（单独一轮文字问）

**只问：** 请列出子组件挂载名（如 `Text`、`Group`、`Item`），将导出为 `{ComponentName}.Text` 等。

记录 `subComponents: string[]`。形态 A 至少 1 个；形态 B 可为 0（仅主组件）或多个。

#### Q4b — 各子组件职责（每个子组件单独一轮）

对每个子组件 **单独问**：`{ComponentName}.{Sub}` 的职责与 Props 要点是什么？

记入 `subComponentsDetail[]`（或合并进后续 Q5 的 API 说明）。

### Q5 — 主组件 Props（单独一轮文字问）

**只问：** 主组件（或形态 A 的核心子组件）需要哪些 Props？请按 Value / Status / Style / Elements / Events 分组描述类型与默认值。

记录 `api.props`。

### Q6 — Ref 与命令式 API（AskQuestion）

**问题：** 是否需要 `forwardRef` 暴露 DOM 或命令式方法？

| 选项   | 记录                      |
| ------ | ------------------------- |
| 需要   | 进入 Q6b                  |
| 不需要 | `api.ref = null`，进入 Q7 |

#### Q6b — Ref 说明（单独一轮文字问）

**只问：** Ref 需要暴露哪些属性和方法？（如 `element`、`getElement`、`focus`、`open`）

记录 `api.ref`。

### Q7 — 是否需要国际化（AskQuestion）

**问题：** 组件内是否有需要翻译的固定文案？

| 选项   | 下一步                         |
| ------ | ------------------------------ |
| 需要   | Q7b 单独问文案列表             |
| 不需要 | `i18n.needed = false`，进入 Q8 |

#### Q7b — 文案列表（单独一轮文字问）

**只问：** 请列出需要国际化的中文文案（将用 `LocaleUtil.locale`）。

记录 `i18n.keys`。

### Q8 — 依赖的库内组件/工具（单独一轮文字问）

**只问：** 实现时会用到哪些**已有** lyrixi-mobile 组件或工具？（如 Icon、Flex、DOMUtil、LocaleUtil）

记录 `dependencies`。生成前用 **docs** 技能核对 Props，禁止自造。

### Q9 — 确认（可选）

用简短摘要列出：形态、参考组件、`ComponentName`、`subComponents`、Props/Ref 要点、`designNotes`、依赖。用户确认后再生成。

## 生成步骤

1. **读参考（仅 `.ai/docs`）** — Read catalog 指向的 props + rules + example；按需 Read `.ai/docs/components/{reference}/demos/` 下示例源码。
2. **读规则** — 按形态重读 `develop-component-structure.md`、`develop-types-structure.md`、`develop-doc-structure.md`。
3. **写 `component-spec.json`** — 写入组件包根目录，结构见 [reference/component-spec.schema.json](reference/component-spec.schema.json)。
4. **生成组件包** — 按 [reference/generation.md](reference/generation.md) 与 `develop-component-structure`：
   - 以参考文档描述的目录形态为蓝本；
   - 替换组件名、类型、样式、Props 与交互；
   - 按 `design.designNotes` 调整 DOM 与样式；
   - 按 `subComponents` 增删挂载与 `types/*.modules.types.ts`；
   - 在库导出入口注册新组件（字母序，Modal 保持最先导出）。
5. **写 AI 文档** — 创建 `.ai/docs/components/{ComponentName}/` 三件套；demo 写在 `.ai/docs/components/{ComponentName}/demos/`；更新 `mapping.json` 的 `keywords`。
6. **刷新 example 索引** — `node .ai/skills/sync-ai-docs/scripts/generate-example-index.mjs {ComponentName}`（详见 [sync-ai-docs](../sync-ai-docs/SKILL.md)）。
7. **校验** — `npx tsc --noEmit`；修复新增文件中的类型错误。

## 产出清单

- 组件包（结构见 `develop-component-structure`）— 实现、类型、样式、`component-spec.json`
- 库导出入口 — 新增 `export`
- `.ai/docs/components/{ComponentName}/` — props、rules、example、demos
- `.ai/docs/mapping.json` — 新增检索条目
- 向用户说明：参考来源、形态、主要 API、如何查看 demo

## 不允许

- **Read `src/` 下组件、工具、样式变量等实现源码**（含「对照参考组件源码」）
- 跳过问答直接生成
- **在一轮消息里同时索要组件名、Props、子组件、依赖等多项自由填写内容**
- 自造库中已有组件/工具（须从 `lyrixi-mobile` 引入）
- 编造未在 props 类型中出现的 API
- 破坏形态规范（如形态 C 创建空的 `*.modules.types.ts`）
