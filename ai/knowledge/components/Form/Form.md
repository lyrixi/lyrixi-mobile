# Form

表单命名空间，列表页筛选弹层最常用的是：

- `Form`
- `Form.Item`
- `Form.useForm`
- `Form.useWatch`

## Usage

```tsx
const [form] = Form.useForm()

<Form form={form} layout="vertical">
  <Form.Item name="keyword" label="关键词">
    <Input.Text allowClear />
  </Form.Item>
</Form>
```

在筛选弹层里，`Form` 适合承接局部表单状态；真正请求参数仍由父层 `queryParams` 统一维护。
