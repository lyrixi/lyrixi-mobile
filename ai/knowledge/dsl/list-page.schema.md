# 列表页 DSL 语义说明（list-page）

用于 **Skill：根据 DSL 生成与 `List/demos/Common` 同构页面**。字段分为「页面元信息」「HTTP」「请求体」「响应映射」「列表行映射」。

## 字段表

| 字段路径 | 类型 | 说明 |
|----------|------|------|
| `meta.pageId` | string | 页面标识，用于生成目录名/路由名（可选）。 |
| `meta.title` | string | 页面标题文案 key 或直出文案（可选）。 |
| `http.url` | string | `ListPagination.Main` 的 `url`。 |
| `http.method` | `'POST' \| 'GET'` | 与库内 `Request` 默认一致；多数列表为 POST。 |
| `http.headers` | object | 如 `Content-Type`；对应传入 `ListPagination.Main` 的 `headers`。 |
| `http.contentType` | `'json' \| 'form'` | 语义字段：生成 `formatPayload` 或 Request 调用时是否按 JSON / 表单编码（需与项目 `Request` 封装对齐）。 |
| `request.defaults` | object | 与分页无关的固定参数（如 `rows`、业务类型码）。 |
| `request.payloadMap` | object | 页面 `queryParams` 键 → 接口字段名映射（缺省则同名透传）。 |
| `response.successCode` | string | 业务成功码，默认 `'1'`。 |
| `response.listPath` | string | 点路径，如 `data.list`，用于 `formatResult` 取列表数组。 |
| `response.totalPath` | string | 可选，如 `data.totalPage` 或 `data.total`。 |
| `response.messagePath` | string | 可选，错误信息字段，默认 `message`。 |
| `listItem.idField` | string | 唯一键字段，默认 `id`。 |
| `listItem.view` | object | 映射到 `formatViewItem` 返回值：见下表。 |

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

## 校验规则（生成器）

- `http.url` 必填。  
- `response.listPath` 必填（或约定默认 `data.list`）。  
- `listItem.view.title` 建议必填（至少一个主展示字段）。

## 与代码文件的对应关系

| DSL 区块 | 生成/填充目标文件 |
|----------|-------------------|
| `http.*` | `Main/index.tsx` 中 `url` / `headers` |
| `request.*` | `Main/formatPayload.ts` |
| `response.*` | `Main/formatResult.ts` |
| `listItem.view` | `Main/formatViewItem.tsx` |
| 搜索/筛选 UI | `Header/*`（需 Skill 规则：是否生成 Search、Filter 表单项） |
