# 列表页 DSL 语义说明（list-page）

用于 **Skill：根据 DSL 生成与 `List/demos/Common` 同构页面**。字段分为「页面元信息」「布局」「HTTP」「请求体」「响应映射」「列表行映射」「Header 搜索/筛选」「Footer」。

## 字段表

| 字段路径 | 类型 | 说明 |
|----------|------|------|
| `meta.pageId` | string | 页面标识，用于生成目录名/路由名（可选）。 |
| `meta.title` | string | 页面标题文案 key 或直出文案（可选）。 |
| `layout.usePageMain` | boolean | 是否在 `index.tsx` 中用 `Page.Main` 包裹 `Main` 组件区域。 |
| `http.url` | string | `ListPagination.Main` 的 `url`。 |
| `http.method` | `'POST' \| 'GET'` | 语义字段。当前 `ListPagination.Main` 内置请求链路以 `Request.post` 为主；若填 `GET`，生成前需提示能力缺口。 |
| `http.headers` | object | 如 `Content-Type`；对应传入 `ListPagination.Main` 的 `headers`。 |
| `http.contentType` | `'json' \| 'form'` | 语义字段。当前默认请求头仍以 `application/json` 为主；若确需真实表单编码，需额外改 Request 链路或在生成前提示。 |
| `request.defaults` | object | 与分页无关的固定参数（如 `rows`、业务类型码）。其中 `rows` 常作为分页大小使用。 |
| `request.payloadMap` | object | 页面 `queryParams` 键 → 接口字段名映射（缺省则同名透传）。 |
| `response.successCode` | string | 业务成功码，默认 `'1'`。 |
| `response.listPath` | string | 点路径，如 `data.list`，用于 `formatResult` 取列表数组。 |
| `response.totalPath` | string | 可选，如 `data.totalPage` 或 `data.total`。 |
| `response.totalMode` | `'totalPage' \| 'totalRows'` | `totalPath` 指向的是总页数还是总条数；默认 `'totalPage'`。 |
| `response.messagePath` | string | 可选，错误信息字段，默认 `message`。 |
| `listItem.idField` | string | 唯一键字段，默认 `id`。 |
| `listItem.view` | object | 映射到 `formatViewItem` 返回值：见下表。 |
| `header.search.enabled` | boolean | 是否生成搜索入口。 |
| `header.search.placeholderKey` | string | 搜索占位文案或 i18n key。 |
| `header.search.queryField` | string | 搜索关键词写回 `queryParams` 的字段名，如 `keyword`。 |
| `header.filter.enabled` | boolean | 是否生成筛选入口。 |
| `header.filter.fields[]` | array | 筛选表单项配置。 |
| `header.filter.fields[].name` | string | 表单字段名，同时也是 `queryParams` 键。 |
| `header.filter.fields[].labelKey` | string | 表单标签文案或 i18n key。 |
| `header.filter.fields[].component` | string | 当前建议仅使用已在知识中明确的组件，如 `Input.Text`。 |
| `header.filter.fields[].props` | object | 透传给具体表单控件的 props。 |
| `footer.enabled` | boolean | 是否生成 `Footer/index.tsx` 与入口挂载。 |

### `listItem.view` 与 List 展示字段

| DSL 键 | 对应 formatViewItem 输出 | 说明 |
|--------|---------------------------|------|
| `title` | `title` | 主标题；值可为接口字段名，如 `name`。 |
| `description` | `description` | 副标题；如 `introduce`。 |
| `note` | `note` | 角标/备注。 |
| `avatarUrl` | `avatarUrl` | 头像 URL 字段名。 |
| `imageUrl` | `imageUrl` | 左侧大图字段名。 |
| `content` | `content` | 第三行文案。 |
| `actionLabel` | — | 若存在，生成简单 `actionRender` 占位（或留空由业务改）。 |

### `header.filter.fields[]` 推荐约束

首轮试水建议只使用知识库已明确覆盖的筛选组件：

- `Input.Text`

若需要 `Select.Combo`、`DatePicker.Combo` 等，请在提示词中额外要求 AI 先读取对应组件文档/示例，再继续生成。

### `formatPayload` / `formatResult` 运行时约定

- `formatPayload` 接收的不是纯 `queryParams`，而是类似 `{ rows, ...payload, page }` 的对象。
- `page` 仅在分页开启时注入；`rows` 常来自 `request.defaults.rows` 或 `ListPagination.Main` 的分页配置。
- `formatResult` 实际可按 `formatResult(result, { payload })` 理解，必要时可根据请求参数做兼容处理。
- `formatResult` 返回值除 `totalPage` 外，也可在 `response.totalMode = 'totalRows'` 时返回 `totalRows`。

## 校验规则（生成器）

- `http.url` 必填。  
- `response.listPath` 必填（或约定默认 `data.list`）。  
- `listItem.view.title` 建议必填（至少一个主展示字段）。
- 若 `header.search.enabled = true`，建议填写 `header.search.queryField`。
- 若 `header.filter.enabled = true`，`header.filter.fields` 至少一项。

## 与代码文件的对应关系

| DSL 区块 | 生成/填充目标文件 |
|----------|-------------------|
| `http.*` | `Main/index.tsx` 中 `url` / `headers` |
| `request.*` | `Main/formatPayload.ts` |
| `response.*` | `Main/formatResult.ts` |
| `listItem.view` | `Main/formatViewItem.tsx` |
| 搜索/筛选 UI | `Header/*`（需 Skill 规则：是否生成 Search、Filter 表单项） |
| `layout.usePageMain` | `index.tsx` 中是否包 `Page.Main` |
| `footer.enabled` | `Footer/index.tsx` 与 `index.tsx` |
