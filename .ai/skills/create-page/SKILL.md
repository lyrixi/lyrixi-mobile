---
name: create-page
description: >-
  问答式生成业务页面：让用户选择 docs/pages 模板、补充设计说明与接口信息，再按模板生成
  src/pages 页面。在用户要新建页面、搭列表/编辑/详情/报表页时使用。
---

# create-page

通过**多轮问答**收集需求，读取 `.ai/docs/pages/` 中的参考模板，生成新业务页面。

**约束：** 生成代码时**不要修改** `.ai/rules/`；遵守 `page-structure.md`、`global-coding-sequence.md`、`global-coding-locale.md` 等 rules。本技能自身迭代时可改 `.cursor/skills/create-page/` 与 `.ai/skills/create-page/`。

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
- **自由填写**（**输出路径**、apiUrl、入参说明、文字版 designNotes）**禁止**合并成「请在下一条消息补充 1、2、3…」；应单独发一条消息、只问一个字段，等用户答完再继续。
- **Q7 Mock 数据**不可跳过；须先收集 mock（或选推测字段），再进入 Q8 出参映射。
- **Q8 出参映射**为单独一轮；**禁止用表格向用户提问**。须给出 [reference/api-response-template.txt](reference/api-response-template.txt) 的**可复制文本块**（见 Q8）；用户回复「用默认」或粘贴修改后的整段/部分行。有 mock 时可对照 sample 中的 `code` / `data` / `message` 结构填写。
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

### Q7 — 后台 Mock 数据（AskQuestion）

**问题：** 能否提供后台 mock 数据（接口成功时的返回示例）？

| 选项 | 下一步 |
|------|--------|
| 我能提供 mock 数据 | 进入 Q7a |
| 暂时没有，请推测字段 | 记录 `mockData.source = 'inferred'`；生成时根据 `designNotes`、页面类型与接口说明**推测字段**渲染，并在产出说明中标注「字段为推测，联调后需校正」 |

### Q7a — Mock 数据内容（仅当 Q7 选「我能提供」；单独一轮文字问）

**只问：** 请粘贴后台 mock 数据（JSON）。建议粘贴**完整 response**（含 `code` / `message` / `data`），便于下一步配置出参映射。

可参考 [reference/mock-data-template.txt](reference/mock-data-template.txt) 复制修改：

````
{
  "code": "1",
  "message": "",
  "data": {
    "fieldName": "示例值"
  }
}
````

- 记录 `mockData.source = 'user'`，`mockData.sample` = 解析后的 JSON（同时保留完整 response 供 Q8 对照）。
- JSON 无法解析时**只追问此项**。

### Q8 — 接口出参（单独一轮；可复制文本填空）

**顺序说明：** 须在 Q7 之后提问——用户已提供 mock 时，可对照 sample 填写 `success` / `data` / `message` 对应关系。

聊天无法提供多输入框，**向用户展示时必须用下面这段可复制文本**（禁止表格）：

````
请确认接口出参映射：

- 默认值即可 → 直接回复「用默认」
- 需要修改 → 复制下面 4 行，改好后粘贴发回（只改要改的行即可）

success: result.code === '1'
error: result.code !== '1'
data: result.data
message: result.message
````

**解析规则**

- 每行格式：`{key}: {expression}`，`key` 仅允许 `success` | `error` | `data` | `message`。
- 回复「用默认」「默认」→ 四项均用 `DEFAULT_API_RESPONSE_MAPPING`。
- 用户只粘贴部分行 → 未出现的 key 仍用默认值。
- 记录 `api.*.response` 为 `ApiResponseMapping`；生成时在 `api/**/index.ts` 按表达式映射到 `result.status` / `result.data` / `result.message`。

### Q9 — 确认（可选）

用简短摘要列出：模板、`output.outputPath`、`designNotes` 要点、`apiMethod`、`apiUrl`、入参、**mock 来源**（用户提供 / 推测字段）、出参映射要点。用户确认后再生成。

## 生成步骤

1. **读文档与模板** — Read catalog 指向的 `{Variant}-props.ts`、`{Variant}-rules.md`；再递归 Read `.ai/docs/pages/{templatePath}/`（至少 `index.tsx`、`api/**`、子组件入口）。
2. **写 `page-spec.json`** — 在目标页面目录写入本次问答结果，**字段结构与 props.ts 对齐**（见 [reference/page-spec.schema.json](reference/page-spec.schema.json)）。
3. **复制并改写** — 按模板目录结构创建目标目录：
   - 按 `{Variant}-props.ts` 与 `{Variant}-rules.md` 的「替换点」表改 url、字段、文案；
   - 按 `reference/generation.md` 替换 URL、method、payload/response 转换；
   - 按 `mockData` 与 `design.designNotes` 生成/增删视图字段（见 generation.md「Mock 与视图字段」）；
   - 删除 demo 专有逻辑（mock、`/api/examples/*`、`console.log`）。
4. **校验** — `npx tsc --noEmit`；修复新增文件中的类型错误。

## 产出清单

- `{output.outputPath}/index.tsx` 及子目录
- `{output.outputPath}/page-spec.json`
- 向用户说明：模板来源、主要改动、如何联调接口

## 不允许

- 跳过问答直接生成
- **跳过 Q7**（Mock 数据）直接生成视图字段或进入 Q8
- **在一轮消息里同时索要输出路径、apiUrl、入参等多项自由填写内容**（Q8 四项填空除外，属同一轮）
- **跳过或自动填充输出路径**（Q3 必填）
- 使用与 catalog 无关的随意目录当模板（除非用户明确指定路径）
