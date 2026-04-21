# DSL → 文件落点映射（list-page）

供 **mappings** 层与生成器使用：给定 `list-page` DSL 节点，决定写入哪个文件、哪段模板。

| DSL 节点 | 目标文件 | 生成内容 |
|----------|----------|----------|
| `meta.*` | `index.tsx`、路由配置（若项目有） | 常量标题、导出组件名 `{pageId}` |
| `layout.usePageMain` | `index.tsx` | 是否用 `Page.Main` 包裹 `<Main />` |
| `header.search` | `Header/index.tsx` | `ToolBar.Search` / `SearchActive`，`onSearch` 合并 `queryField` |
| `header.filter` | `Header/Filter/index.tsx` | `ToolBar.Filter` + `Form.Item` 循环 |
| `http.url`, `http.headers` | `Main/index.tsx` | `ListPagination.Main` 的 `url`、`headers` |
| `request.defaults`, `request.payloadMap` | `Main/formatPayload.ts` | 合并 `rows`、字段重命名、保留分页 `page` |
| `http.contentType` | `Main/formatPayload.ts` 或 Request 封装 | 仅语义提示；若真需 form 编码，需额外调整请求链路 |
| `response.*` | `Main/formatResult.ts` | 按 `successCode`、`listPath`、`totalPath`、`totalMode` 解析 |
| `listItem.*` | `Main/formatViewItem.tsx` | 按 `view` 字段名从 `item` 取值 |
| `footer.enabled` | `Footer/index.tsx`、`index.tsx` | 是否生成 Footer 并在入口挂载 |
| 无 DSL 等价 | `Main/mockResult.ts` | 仅开发环境：可保留模板假数据 |

## 组件选用（与 lyrixi-mobile）

| UI 意图 | 组件 |
|---------|------|
| 页面壳 | `Page`，子区域可用 `Page.Header` / `Page.Main` |
| 顶栏工具条 | `ToolBar` |
| 搜索 | `ToolBar.Search` + `ToolBar.SearchActive` |
| 筛选弹层 | `ToolBar.Filter` + `Form` + `Input.*` + `FooterBar` |
| 分页列表 | `ListPagination.Main` |

## 当前实现约束

- `ListPagination.Main` 当前默认请求链路以 `Request.post` 为主，不能仅靠 DSL 把请求方式切成真实 GET。
- `http.contentType = form` 当前也只是意图描述，若后端要求真正表单编码，需在生成前提示“需要补 Request 能力或自定义请求实现”。
