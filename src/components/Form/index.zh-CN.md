---
group:
  title: 数据录入
  order: 2
order: 1
title: Form
toc: content
---

# Form

表单组件，用于数据收集、校验和提交。

## 何时使用

- 需要收集用户输入数据时
- 需要对输入进行校验时
- 需要提交表单数据时

## 代码演示

<code src="./demos/Layout.jsx"></code>

## API

### 属性

| 属性             | 说明         | 类型                                     | 默认值         |
| ---------------- | ------------ | ---------------------------------------- | -------------- |
| layout           | 布局方式     | `'horizontal' \| 'vertical' \| 'inline'` | `'horizontal'` |
| labelCol         | 标签列配置   | `object`                                 | -              |
| mainCol          | 内容列配置   | `object`                                 | -              |
| scrollerElement  | 滚动容器元素 | `HTMLElement`                            | -              |
| virtual          | 是否虚拟滚动 | `boolean`                                | -              |
| style            | 自定义样式   | `object`                                 | -              |
| className        | 自定义类名   | `string`                                 | -              |
| children         | 表单内容     | `ReactNode`                              | -              |
| form             | 表单实例     | `FormInstance`                           | -              |
| name             | 表单名称     | `string`                                 | -              |
| validateMessages | 校验提示信息 | `object`                                 | -              |
| initialValues    | 初始值       | `object`                                 | -              |
| onFieldsChange   | 字段变化事件 | `(changedFields, allFields) => void`     | -              |
| onValuesChange   | 值变化事件   | `(changedValues, allValues) => void`     | -              |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Form.Item

表单项组件，用于包裹表单控件。

### 何时使用

- 需要包裹表单控件时
- 需要对表单字段进行校验时
- 需要显示标签和帮助信息时

### 代码演示

<code src="./demos/FormItem.jsx"></code>

### API

#### 属性

| 属性             | 说明           | 类型                                                | 默认值 |
| ---------------- | -------------- | --------------------------------------------------- | ------ |
| name             | 字段名         | `string`                                            | -      |
| valuePropName    | 值属性名       | `string`                                            | -      |
| shouldUpdate     | 是否更新       | `boolean \| (prevValues, currentValues) => boolean` | -      |
| initialValue     | 初始值         | `any`                                               | -      |
| validateTrigger  | 校验触发时机   | `string`                                            | -      |
| rules            | 校验规则       | `Rule[]`                                            | -      |
| id               | 表单项 ID      | `string`                                            | -      |
| style            | 自定义样式     | `object`                                            | -      |
| className        | 自定义类名     | `string`                                            | -      |
| layout           | 布局方式       | `'horizontal' \| 'vertical' \| 'inline'`            | -      |
| labelCol         | 标签列配置     | `object`                                            | -      |
| mainCol          | 内容列配置     | `object`                                            | -      |
| label            | 标签           | `ReactNode`                                         | -      |
| inputExtraRender | 输入框额外渲染 | `ReactNode`                                         | -      |
| extraRender      | 额外渲染       | `ReactNode`                                         | -      |
| help             | 帮助信息       | `ReactNode`                                         | -      |
| children         | 表单项内容     | `ReactNode`                                         | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |
