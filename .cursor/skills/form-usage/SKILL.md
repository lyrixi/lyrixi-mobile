---
name: form-usage
description: >
  Guides how to use lyrixi-mobile Form and related input components in this repo, especially for Edit/Detail pages. Use when generating or refactoring forms so that field structure, value/onChange patterns, and layout follow project conventions.
---

# 表单使用规范（Form / Input / Select / DatePicker 等）

本 skill 专门指导在本项目里如何使用 `Form` 及其字段组件，优先面向：

- `src/pages/Edit/**`
- `src/pages/Detail/**`

目标：当用户用自然语言描述表单需求时，AI 能按**统一模式**生成字段、布局和请求代码。

---

## 1. 何时使用本 skill

在本项目中，以下场景应启用此 skill：

- 创建或修改 **编辑页 / 新增页 / 带表单的详情页**；
- 需要生成或调整：
  - `Form` 结构（`Form`, `Form.Item` 等），
  - 常见字段（输入框、下拉、日期、开关等），
  - 表单与请求（加载初始值 / 提交）的交互。

不用于：

- 纯展示型页面（无表单交互）；
- 只包含少量独立输入控件、无需 Form 管理的简单场景。

---

## 2. 通用规则

1. **Import 方式**
   - 在页面/业务代码中，推荐：

```jsx
import { Page, Form, Input, Select, DatePicker, Button } from 'lyrixi-mobile'
```

2. **字段值约定**
   - 普通输入（`Input.Text` 等）：`value` 通常为 `string` / `number`。
   - 下拉 / 选择类（`Select`, `Picker`, `List`, `ActionSheet` 等）：
     - 单选：`{ id, name, ... }`
     - 多选：`Array<{ id, name, ... }>`
   - 日期类（`DatePicker` / `ToolBar.DateRange`）：
     - 单个值：`Date` 或可以被组件识别的值；
     - 范围：`[Date, Date]`。

3. **onChange 模式**
   - 所有字段尽量遵循：

```jsx
onChange={(value, extra) => {
  // value: 字段值
  // extra: 额外信息（如选项、event 等），视组件而定
}}
```

4. **布局**
   - 表单放在 `<Page.Main>` 中：

```jsx
<Page>
  <Page.Main>
    <Form>{/* Form.Item 列表 */}</Form>
  </Page.Main>
</Page>
```

---

## 3. Form 结构模式

### 3.1 基本骨架

```jsx
export default () => {
  const [form] = Form.useForm?.() || []

  return (
    <Page>
      <Page.Main>
        <Form
          form={form}
          // layout / labelCol / wrapperCol 等布局配置按实际需要添加
          onFinish={(values) => {
            // 提交处理
          }}
        >
          {/* Form.Item 列表 */}
        </Form>
      </Page.Main>
    </Page>
  )
}
```

> 如果当前项目的 Form 没有 `useForm` API，则按照现有 `src/pages/Edit/demos/Common` 里的用法为准，优先复用那套模式。

### 3.2 Form.Item 基本写法

```jsx
<Form.Item
  name="fieldName"
  label="字段名称"
  rules={[
    { required: true, message: '必填项' }
  ]}
>
  <Input.Text placeholder="请输入" />
</Form.Item>
```

要点：

- `name`：字段 key，与后端数据字段或本地 state 对应；
- `label`：显示标签，可以是中文，必要时用 `LocaleUtil.locale` 包装；
- `rules`：校验规则数组，可以包含 `required`, `pattern`, `validator` 等。

---

## 4. 常见字段模板

### 4.1 文本输入

```jsx
<Form.Item
  name="title"
  label="标题"
  rules={[{ required: true, message: '请输入标题' }]}
>
  <Input.Text placeholder="请输入标题" />
</Form.Item>
```

### 4.2 数字输入

```jsx
<Form.Item
  name="amount"
  label="金额"
  rules={[{ required: true, message: '请输入金额' }]}
>
  <Input.Number placeholder="请输入金额" precision={2} />
</Form.Item>
```

### 4.3 下拉选择

```jsx
const [option, setOption] = useState(null)

<Form.Item name="status" label="状态">
  <Select.Combo
    value={option}
    onChange={setOption}
    list={[
      { id: '1', name: '启用' },
      { id: '0', name: '停用' }
    ]}
  />
</Form.Item>
```

### 4.4 日期选择

```jsx
const [date, setDate] = useState(null)

<Form.Item name="date" label="日期">
  <DatePicker.Combo
    type="date"
    value={date}
    onChange={(val) => setDate(val)}
  />
</Form.Item>
```

### 4.5 Switch / Checkbox

```jsx
<Form.Item name="enabled" label="是否启用" valuePropName="checked">
  <Switch />
</Form.Item>
```

---

## 5. 与请求/数据的配合（Edit / Detail）

1. **加载初始值**
   - 在 Edit / Detail 页面中，通常需要：
     - 页面加载时根据 `id` 调接口获取数据；
     - 将结果回填到 `Form` 中。

2. **推荐模式**

```jsx
import { Request, Page, Form, Input, Button } from 'lyrixi-mobile'

export default () => {
  const [form] = Form.useForm?.() || []

  useEffect(() => {
    async function fetchData() {
      const res = await Request.get('/api/detail', { id: /* 从路由或 props 获取 */ '' })
      // 假设 res.data 为对象
      form?.setFieldsValue?.(res.data)
    }
    fetchData()
  }, [])

  async function handleSubmit(values) {
    await Request.post('/api/save', values)
  }

  return (
    <Page>
      <Page.Main>
        <Form form={form} onFinish={handleSubmit}>
          {/* Form.Item 列表 */}
        </Form>
      </Page.Main>
    </Page>
  )
}
```

> 具体接口路径、参数名应根据项目实际代码（例如 `src/pages/Edit/demos/Common`）来，skill 只提供结构模式。

---

## 6. 使用本 skill 的建议

当用户用自然语言描述表单时，例如：

- 「帮我做一个包含标题、金额、状态（下拉）、日期（日期选择）的表单」
- 「做一个编辑页的表单，加载详情后可以编辑再提交」

优先按上述模式生成：

1. `Page + Page.Main + Form` 的骨架；
2. 使用本 skill 给出的字段模板；
3. 按需补充请求加载和提交逻辑，同时避免发明新的工具函数，优先使用 `Request` 等已有 util。 

