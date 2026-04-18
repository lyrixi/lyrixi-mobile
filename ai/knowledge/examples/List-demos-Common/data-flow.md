# List/demos/Common 数据流

## 状态

- **queryParams**（`Record<string, unknown>`，示例初始 `{ query: '1' }`）  
  - 由 `index.tsx` 持有。  
  - 用户通过 Header 搜索、筛选变更 → `onSearch` → `setQueryParams`。  
  - 列表 **Main** 以 `payload={queryParams}` 传入 `ListPagination.Main`。

## 列表请求链路

1. `ListPagination` 内部在 `url` / `payload` 变化时触发 `reload`。  
2. **formatPayload** 接收 `{ page, ...payload }`（payload 即当前 `queryParams` 展开），返回发给后端的 body（可含 `rows`、keyword 等）。  
3. 请求返回原始 `result` → **formatResult** → `{ status: 'success'|'error'|..., list, totalPage? }`。  
4. 每条 `item` → **formatViewItem** → 列表行 UI 字段。

## Header 局部状态（与 queryParams 的关系）

- **searchActive**：控制是否显示 `ToolBar.SearchActive`。  
- **searchValue**：搜索框受控值；确认搜索时合并进 `queryParams.keyword` 并通过 `onSearch` 上浮。  
- **Filter 内 form**：弹层内表单项；确定后应在业务里调用 `onSearch({ ...queryParams, ... })`（当前示例 Filter 若仅演示 UI，需业务补全 onOk 与 `onSearch` 的衔接）。

## 扩展点

- 增加筛选项：在 `queryParams` 增加字段，在 `formatPayload` 里透传或映射。  
- 更换接口：改 `Main` 的 `url`、`headers`，必要时在 **formatResult** 中适配不同 `code` / `data` 结构。  
- 更换列表样式：只改 **formatViewItem** 的字段映射与 `actionRender`。
