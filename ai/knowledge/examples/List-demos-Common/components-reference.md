# List 页面组件/API 参考

只记录 **list-page 生成最常用、最容易写错** 的组件用法，供 `list-page-from-dsl` workflow 读取。

更完整的组件知识见：

- `ai/knowledge/components/Page/Page.md`
- `ai/knowledge/components/ToolBar/ToolBar.md`
- `ai/knowledge/components/ListPagination/ListPagination.md`
- `ai/knowledge/components/Form/Form.md`
- `ai/knowledge/components/Input/Input.md`
- `ai/knowledge/components/FooterBar/FooterBar.md`

## 1. Page

- 页面壳使用 `Page`
- 顶部区域使用 `Page.Header`
- 列表区域可选使用 `Page.Main`
- 是否包 `Page.Main` 由 DSL `layout.usePageMain` 或用户附加要求决定

推荐：

```tsx
<Page>
  <Header />
  <Page.Main>
    <Main />
  </Page.Main>
</Page>
```

也允许直接：

```tsx
<Page>
  <Header />
  <Main />
</Page>
```

## 2. ToolBar 搜索模式

列表页搜索建议遵循两段式：

1. `ToolBar.Search`：只读入口，点击后展开
2. `ToolBar.SearchActive`：真正输入、搜索、取消

推荐交互：

- `ToolBar.Search`：`readOnly`
- `ToolBar.SearchActive`：`value`、`onChange`、`onSearch`、`onCancel`、`onBlur`
- 搜索确认后：`onSearch({ ...queryParams, [queryField]: keyword })`

## 3. ToolBar.Filter + Form + FooterBar

筛选建议组合：

- `ToolBar.Filter`
- `Form`
- `Form.Item`
- `Input.Text`（首轮试水优先）
- `FooterBar` + `FooterBar.Button`

推荐结构：

```tsx
<ToolBar.Filter
  onOpen={handleOpen}
  onClose={handleClose}
  modalRender={() => {
    return (
      <Form form={form} layout="vertical">
        <Form.Item name="input" label={locale('单行文本框')}>
          <Input.Text allowClear maxLength={50} />
        </Form.Item>
      </Form>
    )
  }}
  footerRender={({ onClose }) => {
    return (
      <FooterBar>
        <FooterBar.Button onClick={onClose}>取消</FooterBar.Button>
        <FooterBar.Button onClick={() => handleConfirm(onClose)}>确定</FooterBar.Button>
      </FooterBar>
    )
  }}
/>
```

筛选确认时应把表单值并回 `queryParams`：

```tsx
onSearch?.({ ...queryParams, ...values })
```

## 4. ListPagination.Main

推荐从包入口导入：

```tsx
import { ListPagination } from 'lyrixi-mobile'
```

再使用：

```tsx
<ListPagination.Main ... />
```

列表页生成时最关键的 props：

- `url`
- `headers`
- `payload={queryParams}`
- `formatPayload`
- `formatResult`
- `formatViewItem`
- 可选：`cacheName`
- 可选：`virtual`

### 运行时要点

- 当前默认请求链路以 `Request.post` 为主
- `payload` 变化会触发 reload
- `formatPayload` 可按 `{ rows, ...payload, page }` 理解
- `formatResult` 可按 `(result, { payload })` 理解
- `formatResult` 返回值至少要有：
  - `status`
  - `list`
- 分页结束可通过以下任一字段表达：
  - `totalPage`
  - `totalRows`

## 5. format 三层职责

### `formatPayload.ts`

- 做字段重命名
- 合并固定默认参数
- 保留分页 `page`

### `formatResult.ts`

- 判断业务成功码
- 解析列表路径
- 解析 `totalPage` 或 `totalRows`
- 返回统一结构

### `formatViewItem.tsx`

- 只负责把单条接口数据映射成列表行协议
- 不要把请求逻辑、状态逻辑写进这里

## 6. 首轮试水建议

为了让 AI 命中率更高，首轮 list-page DSL 建议只覆盖这些能力：

- 搜索：一个关键词字段
- Filter：1~3 个简单字段，优先 `Input.Text`
- Main：一个 `ListPagination.Main`
- format：只做简单映射
- Footer：如无明确动作，先不生成

复杂场景（多联动筛选、复杂日期区间、真正 GET、真实 form 编码、自定义 itemRender）建议在提示词里单独说明“若知识未覆盖，先列缺口再实现”。
