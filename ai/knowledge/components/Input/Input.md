# Input

输入组件命名空间。列表页首轮试水最常用的是：

- `Input.Text`
- `Input.Search`

注意：`Input.Select` 在源码里标注为**内部组件，不建议单独使用**。

## Usage

```tsx
<Form.Item name="keyword" label="关键词">
  <Input.Text allowClear maxLength={50} />
</Form.Item>
```

```tsx
<ToolBar.SearchActive
  value={searchValue}
  onChange={setSearchValue}
  onSearch={(keyword) => {
    onSearch?.({ ...queryParams, keyword })
  }}
/>
```
