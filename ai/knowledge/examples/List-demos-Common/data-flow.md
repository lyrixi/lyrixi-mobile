# List/demos/Common 数据流

## 状态

- **queryParams**（`Record<string, unknown>`，建议与 DSL 字段保持一致，例如 `{ keyword: '1' }` 或空对象）  
  - 由 `index.tsx` 持有。  
  - 用户通过 Header 搜索、筛选变更 → `onSearch` → `setQueryParams`。  
  - 列表 **Main** 以 `payload={queryParams}` 传入 `ListPagination.Main`。

## 列表请求链路

1. `ListPagination` 内部在 `url` / `JSON.stringify(payload)` 变化时触发 `reload`。  
2. **formatPayload** 接收的运行时对象可按 `{ rows, ...payload, page }` 理解，其中 `payload` 即当前 `queryParams` 展开。返回值会作为请求体发给后端。  
3. 请求返回原始 `result` → **formatResult(result, { payload })** → `{ status: 'success'|'error'|..., list, totalPage? }` 或 `{ ..., totalRows? }`。  
4. 每条 `item` → **formatViewItem** → 列表行 UI 字段。

## Header 局部状态（与 queryParams 的关系）

- **searchActive**：控制是否显示 `ToolBar.SearchActive`。  
- **searchValue**：搜索框受控值；确认搜索时合并进 `queryParams.keyword` 并通过 `onSearch` 上浮。  
- **Filter 内 form**：弹层内表单项；确定后通过 `onSearch({ ...queryParams, ...values })` 上浮。Common 示例已经包含这条衔接逻辑。

## 扩展点

- 增加筛选项：在 `queryParams` 增加字段，在 `formatPayload` 里透传或映射。  
- 更换接口：改 `Main` 的 `url`、`headers`，必要时在 **formatResult** 中适配不同 `code` / `data` 结构。  
- 更换列表样式：只改 **formatViewItem** 的字段映射与 `actionRender`。
- 若接口返回的是总条数而不是总页数，可在 `formatResult` 中返回 `totalRows`，并在 DSL 中声明 `response.totalMode = 'totalRows'`。
