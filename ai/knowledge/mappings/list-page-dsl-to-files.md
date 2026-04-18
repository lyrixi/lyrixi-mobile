# DSL → 文件落点映射（list-page）

供 **mappings** 层与生成器使用：给定 `list-page` DSL 节点，决定写入哪个文件、哪段模板。

| DSL 节点 | 目标文件 | 生成内容 |
|----------|----------|----------|
| `meta.*` | `index.tsx`、路由配置（若项目有） | 常量标题、导出组件名 `{pageId}` |
| `header.search` | `Header/index.tsx` | `ToolBar.Search` / `SearchActive`，`onSearch` 合并 `queryField` |
| `header.filter` | `Header/Filter/index.tsx` | `ToolBar.Filter` + `Form.Item` 循环 |
| `http.url`, `http.headers` | `Main/index.tsx` | `ListPagination.Main` 的 `url`、`headers` |
| `request.defaults`, `request.payloadMap` | `Main/formatPayload.ts` | 合并 `rows`、字段重命名 |
| `http.contentType` | `Main/formatPayload.ts` 或 Request 封装 | 表单序列化 / JSON（与团队 Request 一致） |
| `response.*` | `Main/formatResult.ts` | 按 `successCode`、`listPath`、`totalPath` 解析 |
| `listItem.*` | `Main/formatViewItem.tsx` | 按 `view` 字段名从 `item` 取值 |
| 无 DSL 等价 | `Main/mockResult.ts` | 仅开发环境：可保留模板假数据 |

## 组件选用（与 lyrixi-mobile）

| UI 意图 | 组件 |
|---------|------|
| 页面壳 | `Page`，子区域可用 `Page.Header` / `Page.Main` |
| 顶栏工具条 | `ToolBar` |
| 搜索 | `ToolBar.Search` + `ToolBar.SearchActive` |
| 筛选弹层 | `ToolBar.Filter` + `Form` + `Input.*` + `FooterBar` |
| 分页列表 | `ListPagination.Main` |
