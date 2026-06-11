---
name: create-page
description: >-
  问答式生成业务页面：让用户选择 docs/pages 模板、补充设计说明与接口信息，再按模板生成
  src/pages 页面。在用户要新建页面、搭列表/编辑/详情/报表页时使用。
---

# create-page

通过**多轮问答**收集需求，读取 `.ai/docs/pages/` 中的参考模板，生成新业务页面。

**约束：** 生成代码时**不要修改** `.ai/rules/`；遵守 `develop-page-structure.md`、`develop-sequence-import.md`、`develop-locale.md` 等 rules。本技能自身迭代时可改 `.cursor/skills/create-page/` 与 `.ai/skills/create-page/`。

## 何时启用

- 用户说「生成页面」「新建列表页/编辑页/详情页」「create-page」
- 用户提供接口信息并要求搭页面骨架

## 准备

1. Read [`.ai/docs/pages/catalog.json`](../../docs/pages/catalog.json) — 模板清单（`id`、`title`、`templatePath`、`props`、`rules`、`example`）。
2. Read [reference/generation.md](reference/generation.md) — 复制模板后的 API / 目录改写规则。

## 选定模板后（Q1b 之后必读）

根据 catalog 中该项的 `props`、`rules`、`example` 路径：

1. **`{Variant}-props.ts`** — 本模板所有**可替换项**（output、design、api、formFields、listItem 等）；问答收集的每个答案必须能映射到 props 中的字段。
2. **`{Variant}-rules.md`** — 目录结构、替换点表、禁止项。
3. **`{Variant}-example.md`** — 仅索引；需要看代码时再 Read `demos/{Variant}/` 下文件。

## 问答原则（必读）

- **一次只问一件事**：每一轮只收集一个字段；拿到用户回复后再问下一项。
- **选择题**用 `AskQuestion`（页面类型、是否有设计稿、GET/POST 等）。
- **自由填写**（**输出路径**、apiUrl、入参说明、出参说明、文字版 designNotes）**禁止**合并成「请在下一条消息补充 1、2、3…」；应单独发一条消息、只问一个字段，等用户答完再继续。
- 表述不清时**只追问当前字段**，不要猜测业务含义。
- 未完成全部问答前**不要**开始写业务代码。

## 问答流程（必须按序）

### Q1 — 页面大类（AskQuestion）

**问题：** 你想生成什么类型的页面？

- 从 `catalog.json` 按 `List` / `Edit` / `Detail` / `Report` 分组；选项过多时先问大类，再问具体模板。

### Q1b — 具体模板（AskQuestion，若 Q1 下有多于 1 个模板）

**问题：** 选择具体模板？

- 展示 `category · title`，值为 `id`。记录 `templateId`、`templatePath`，以及 catalog 中的 `props` / `rules` / `example` 路径 → **立即 Read props + rules**。

### Q2 — 是否有高保真（AskQuestion）

**问题：** 页面有没有高保真设计稿？

| 选项 | 下一步 |
|------|--------|
| 有 | **单独一轮**：请用户上传图片；分析后写入 `designNotes`，再进入 Q3 |
| 没有 | 进入 Q2b |

### Q2b — 页面描述（仅当 Q2 选「没有」；单独一轮文字问）

**只问：** 请用文字描述页面布局（Header/Main/Footer、展示字段、交互）。记入 `design.designNotes`（对应 `{Variant}-props.ts` 的 `PageDesignSpec`）。

### Q3 — 输出路径（必填；单独一轮文字问）

**只问：** 页面生成到哪里？请给出相对仓库根的完整目录，例如 `src/pages/OrderDetail/`。

- **必填**，不提供默认规则；未给出有效路径时**只追问此项**，不得猜测或自动生成。
- 记录 `output.outputPath` = 用户给出的路径。
- 记录 `output.pageName` = 路径末级目录名（PascalCase）；入口组件名与之相同。

### Q4 — 请求方式（AskQuestion）

**问题：** 接口是 GET 还是 POST？

- 不明则与模板一致；仍无法判断时默认 POST。记录 `apiMethod`。

### Q5 — 接口地址（单独一轮文字问）

**只问：** 接口地址（apiUrl）是什么？例如 `/api/order/detail`。

### Q6 — 接口入参（单独一轮文字问）

**只问：** 接口入参有哪些？请写字段名、类型、来源（如 `id` 来自 `Device.getUrlParameter('id')`，或来自 `queryParams`）。

记录：`apiRequest`（写入 page-spec，并映射到 props 里对应 `api.*.request`）。

### Q7 — 接口出参（单独一轮文字问）

**只问：** 接口出参如何映射？请写成功码字段、业务数据字段、错误文案字段（与前端 `result.status` / `result.data` / `result.message` 的对应关系）。

记录：`apiResponse`（映射到 props 里对应 `api.*.response`）。

### Q8 — 确认（可选）

用简短摘要列出：模板、`output.outputPath`、`designNotes` 要点、`apiMethod`、`apiUrl`、入参/出参要点。用户确认后再生成。

## 生成步骤

1. **读文档与模板** — Read catalog 指向的 `{Variant}-props.ts`、`{Variant}-rules.md`；再递归 Read `.ai/docs/pages/{templatePath}/`（至少 `index.tsx`、`api/**`、子组件入口）。
2. **写 `page-spec.json`** — 在目标页面目录写入本次问答结果，**字段结构与 props.ts 对齐**（见 [reference/page-spec.schema.json](reference/page-spec.schema.json)）。
3. **复制并改写** — 按模板目录结构创建目标目录：
   - 按 `{Variant}-props.ts` 与 `{Variant}-rules.md` 的「替换点」表改 url、字段、文案；
   - 按 `reference/generation.md` 替换 URL、method、payload/response 转换；
   - 按 `design.designNotes` 增删表单项、列表列（`formFields` / `displayFields` / `listItem`）；
   - 删除 demo 专有逻辑（mock、`/api/examples/*`、`console.log`）。
4. **校验** — `npx tsc --noEmit`；修复新增文件中的类型错误。

## 产出清单

- `{output.outputPath}/index.tsx` 及子目录
- `{output.outputPath}/page-spec.json`
- 向用户说明：模板来源、主要改动、如何联调接口

## 不允许

- 跳过问答直接生成
- **在一轮消息里同时索要输出路径、apiUrl、入参、出参等多项自由填写内容**
- **跳过或自动填充输出路径**（Q3 必填）
- 使用与 catalog 无关的随意目录当模板（除非用户明确指定路径）
