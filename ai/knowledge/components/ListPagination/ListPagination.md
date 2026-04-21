# ListPagination

列表分页相关组件命名空间，默认导出包含：

- `ListPagination.Main`
- `ListPagination.Modal`
- `ListPagination.Combo`

列表页生成首轮试水**重点只关注 `ListPagination.Main`**。

## Usage

```tsx
import { ListPagination } from 'lyrixi-mobile'

<ListPagination.Main
  url="/api/list/query"
  headers={{ 'Content-Type': 'application/json' }}
  payload={queryParams}
  formatPayload={formatPayload}
  formatResult={formatResult}
  formatViewItem={formatViewItem}
/>
```

## 运行时特点

- 当前默认请求链路以 `Request.post` 为主
- `payload` 变化会触发 reload
- `formatPayload` 负责把页面查询参数转成真实请求体
- `formatResult` 负责把原始接口结果转成列表协议
- `formatViewItem` 负责把单条业务数据转成列表展示字段
