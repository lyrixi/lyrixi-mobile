---
group:
  title: 数据录入
  order: 2
order: 1
title: Input
toc: content
---

# Input

输入框组件，提供多种类型的输入控件。

## 何时使用

- 需要用户输入文本、数字、密码等数据时
- 需要表单输入控件时
- 需要带验证、格式化等功能的输入框时

## 代码演示

<code src="./demos/Text/index.jsx"></code>

## API

### 属性

| 属性         | 说明         | 类型                                                                  | 默认值   |
| ------------ | ------------ | --------------------------------------------------------------------- | -------- |
| id           | 输入框 ID    | `string`                                                              | -        |
| type         | 输入类型     | `'text' \| 'number' \| 'tel' \| 'password' \| 'search' \| 'autoSize'` | `'text'` |
| style        | 自定义样式   | `object`                                                              | -        |
| className    | 自定义类名   | `string`                                                              | -        |
| readOnly     | 是否只读     | `boolean`                                                             | -        |
| disabled     | 是否禁用     | `boolean`                                                             | -        |
| name         | 输入框名称   | `string`                                                              | -        |
| value        | 输入值       | `string \| number`                                                    | `''`     |
| inputMode    | 输入模式     | `string`                                                              | -        |
| enterKeyHint | 回车键提示   | `string`                                                              | -        |
| autoComplete | 自动完成     | `string`                                                              | -        |
| autoCorrect  | 自动纠正     | `string`                                                              | -        |
| spellCheck   | 拼写检查     | `string`                                                              | -        |
| formatter    | 格式化函数   | `(value: any) => string`                                              | -        |
| precision    | 小数精度     | `number`                                                              | -        |
| trim         | 是否去除空格 | `boolean`                                                             | -        |
| max          | 最大值       | `number`                                                              | -        |
| min          | 最小值       | `number`                                                              | -        |
| placeholder  | 占位符       | `string`                                                              | -        |
| maxLength    | 最大长度     | `number`                                                              | -        |
| autoFocus    | 自动获取焦点 | `boolean`                                                             | -        |
| autoSelect   | 自动选中     | `boolean`                                                             | -        |
| input        | 自定义输入框 | `ReactNode`                                                           | -        |
| leftIcon     | 左侧图标     | `ReactNode`                                                           | -        |
| rightIcon    | 右侧图标     | `ReactNode`                                                           | -        |
| clear        | 清除按钮     | `boolean \| ReactNode`                                                | -        |
| allowClear   | 允许清除     | `boolean`                                                             | -        |
| onClick      | 点击事件     | `(e: Event) => void`                                                  | -        |
| onChange     | 值变化事件   | `(value: any, e: Event) => void`                                      | -        |
| onBlur       | 失焦事件     | `(e: Event) => void`                                                  | -        |
| onFocus      | 聚焦事件     | `(e: Event) => void`                                                  | -        |
| onKeyDown    | 按键事件     | `(e: Event) => void`                                                  | -        |
| onPressEnter | 回车事件     | `(e: Event) => void`                                                  | -        |

### Ref

| 属性            | 说明           | 类型                     |
| --------------- | -------------- | ------------------------ |
| element         | 根元素         | `HtmlDivElement`         |
| inputElement    | 输入框元素     | `HtmlInputElement`       |
| getElement      | 获取根元素     | () => `HtmlDivElement`   |
| getInputElement | 获取输入框元素 | () => `HtmlInputElement` |

## Input.Text

文本输入框组件，基于 Input 组件封装。

### 何时使用

- 需要单行文本输入时
- 需要带清除按钮的输入框时
- 需要格式化显示的输入框时

### 代码演示

<code src="./demos/Text/index.jsx"></code>

### API

#### 属性

| 属性          | 说明         | 类型                                                                                | 默认值   |
| ------------- | ------------ | ----------------------------------------------------------------------------------- | -------- |
| id            | 输入框 ID    | `string`                                                                            | -        |
| name          | 输入框名称   | `string`                                                                            | -        |
| type          | 输入类型     | `'text' \| 'number' \| 'tel' \| 'password' \| 'search' \| 'textarea' \| 'autoSize'` | `'text'` |
| value         | 输入值       | `string \| number`                                                                  | `''`     |
| placeholder   | 占位符       | `string`                                                                            | -        |
| formatter     | 格式化函数   | `(value: any) => string`                                                            | -        |
| readOnly      | 是否只读     | `boolean`                                                                           | -        |
| disabled      | 是否禁用     | `boolean`                                                                           | -        |
| allowClear    | 允许清除     | `boolean`                                                                           | -        |
| autoFocus     | 自动获取焦点 | `boolean`                                                                           | -        |
| autoSelect    | 自动选中     | `boolean`                                                                           | -        |
| style         | 自定义样式   | `object`                                                                            | -        |
| className     | 自定义类名   | `string`                                                                            | -        |
| inputRender   | 自定义输入框 | `(props: object) => ReactNode`                                                      | -        |
| leftIconNode  | 左侧图标     | `ReactNode`                                                                         | -        |
| rightIconNode | 右侧图标     | `ReactNode \| (props: {value: any}) => ReactNode`                                   | -        |
| clearRender   | 清除按钮     | `(props: object) => ReactNode`                                                      | -        |
| precision     | 小数精度     | `number`                                                                            | -        |
| trim          | 是否去除空格 | `boolean`                                                                           | -        |
| max           | 最大值       | `number`                                                                            | -        |
| min           | 最小值       | `number`                                                                            | -        |
| maxLength     | 最大长度     | `number`                                                                            | -        |
| inputMode     | 输入模式     | `string`                                                                            | -        |
| enterKeyHint  | 回车键提示   | `string`                                                                            | -        |
| autoComplete  | 自动完成     | `string`                                                                            | -        |
| autoCorrect   | 自动纠正     | `string`                                                                            | -        |
| spellCheck    | 拼写检查     | `string`                                                                            | -        |
| onClick       | 点击事件     | `(e: Event) => void`                                                                | -        |
| onChange      | 值变化事件   | `(value: any, e: Event) => void`                                                    | -        |
| onBlur        | 失焦事件     | `(e: Event) => void`                                                                | -        |
| onFocus       | 聚焦事件     | `(e: Event) => void`                                                                | -        |
| onKeyDown     | 按键事件     | `(e: Event) => void`                                                                | -        |
| onPressEnter  | 回车事件     | `(e: Event) => void`                                                                | -        |

#### Ref

| 属性            | 说明           | 类型                     |
| --------------- | -------------- | ------------------------ |
| element         | 根元素         | `HtmlDivElement`         |
| inputElement    | 输入框元素     | `HtmlInputElement`       |
| getElement      | 获取根元素     | () => `HtmlDivElement`   |
| getInputElement | 获取输入框元素 | () => `HtmlInputElement` |
| correctValue    | 矫正值         | `(value: any) => string` |
| focus           | 获取焦点       | `() => void`             |
