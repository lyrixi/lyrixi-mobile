# List/demos/Common 示例页总览

**源码路径**：`src/examples/List/demos/Common`

本示例是 Lyrixi 移动端「**全屏列表页**」的参考实现：顶部搜索/筛选 + 中间分页列表，展示如何用 **Page 布局**、**ToolBar 查询**、**ListPagination.Main** 与三层 **format** 函数把「接口 ↔ 列表 UI」拆开。

---

## 核心思想

1. **查询状态单点管理**  
   所有影响列表请求的参数（关键词、筛选项等）收敛为 `queryParams`，只在页面入口 `index.tsx` 用 `useState` 维护；`Header` / `Main` 只通过 props 读写，避免状态分散。

2. **Header 与 Main 解耦**  
   - Header：只负责「用户怎么改条件」——搜索条、筛选弹窗，改完后调用 `onSearch(newQueryParams)`。  
   - Main：只负责「用当前条件拉列表」——把 `queryParams` 作为 `ListPagination.Main` 的 `payload` 传入。

3. **列表与接口适配三层分离**  
   - **formatPayload**：把页面 `payload`（含 `queryParams`）与分页 `page` 合并成**真实请求体**（可补 `rows`、contentType 映射、字段重命名等）。  
   - **formatResult**：把**原始 HTTP 响应**转成 `ListAsync` 需要的 `{ status, list, totalPage? }`。  
   - **formatViewItem**：把**单条业务数据**转成列表行展示结构（`title` / `description` / `avatarUrl` 等），对应 `List` 的展示协议。

4. **可选能力**  
   - `cacheName` / `virtual`：列表缓存与虚拟滚动（示例 Main 支持传参，入口未演示时可省略）。  
   - `Footer`：独立组件文件存在，本 Common 入口未挂载；需要底部固定按钮时再在 `Page` 内引入。

---

## 目录与职责

| 路径 | 职责 |
|------|------|
| `index.tsx` | 页面壳：`Page` + 组装 `Header` / `Main`；`queryParams` 状态。 |
| `Header/index.tsx` | `Page.Header` + `ToolBar`：只读搜索入口 → 展开 `SearchActive`；挂载 `Filter`。 |
| `Header/Filter/index.tsx` | `ToolBar.Filter` + `Form` + `FooterBar`：筛选弹层表单项（示例为单行文本）。 |
| `Main/index.tsx` | `ListPagination.Main`：`url`、`payload={queryParams}`、`formatPayload` / `formatResult` / `formatViewItem`。 |
| `Main/formatPayload.ts` | 请求体：合并 `page` 与 `payload`（可扩展 rows、排序字段等）。 |
| `Main/formatResult.ts` | 响应解析：`code` → `status` + `list` + `totalPage`；开发可用 `mockResult` 兜底。 |
| `Main/formatViewItem.tsx` | 行渲染：接口字段 → 列表组件所需字段（含可选 `actionRender`）。 |
| `Main/mockResult.ts` | 本地假数据，仅供 `formatResult` 联调/演示。 |
| `Footer/index.tsx` | 通用底部栏（本入口未使用）。 |
| `index.less` | 页面级样式类名占位（可与业务 BEM 结合）。 |

---

## 组件依赖（lyrixi-mobile）

- **布局**：`Page`（示例中子节点直接放在 `Page` 下；规范用法可包一层 `Page.Main` 包裹列表区域，与文档 `list-page.mdc` 对齐）。  
- **顶栏**：`Page.Header`、`ToolBar`、`ToolBar.Search`、`ToolBar.SearchActive`、`ToolBar.Filter`。  
- **表单与底栏**：`Form`、`Input`、`FooterBar`。  
- **列表**：`ListPagination.Main`（需从默认导出对象取 `Main`：`import ListPagination from 'lyrixi-mobile/components/ListPagination'` 或包入口按文档导出）。

---

## 与代码生成（Skill + DSL）的关系

- **不变部分**：上述目录角色、数据流、`ListPagination.Main` + 三 format 分层。  
- **可变部分**：由 **DSL** 描述：`url`、`contentType`、请求字段映射、响应路径、列表展示字段映射等；生成器按 `ai/knowledge/dsl/templates/list-page.template.json` 填充 `formatPayload` / `formatResult` / `formatViewItem` 与 `Main` 上的 `url` / `headers`。

详见同目录 `data-flow.md`、`../../dsl/list-page.schema.md`。
