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

## Input.Text

文本输入框组件，基于 Input 组件封装。

### 何时使用

- 需要单行文本输入时
- 需要带清除按钮的输入框时
- 需要格式化显示的输入框时

### 代码演示

<code src="./demos/InputText.jsx"></code>

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
| element         | 根元素         | `HTMLDivElement`         |
| inputElement    | 输入框元素     | `HTMLInputElement`       |
| getElement      | 获取根元素     | () => `HTMLDivElement`   |
| getInputElement | 获取输入框元素 | () => `HTMLInputElement` |
| correctValue    | 矫正值         | `(value: any) => string` |
| focus           | 获取焦点       | `() => void`             |

## Input.Number

数字输入框组件。

### 何时使用

- 需要数字输入时
- 需要限制数字范围时
- 需要小数精度控制时

### 代码演示

<code src="./demos/InputNumber.jsx"></code>

### API

#### 属性

同 Input.Text 组件属性。

#### Ref

同 Input.Text 组件 Ref。

## Input.NumberBox

数字输入框组件，带增减按钮。

### 何时使用

- 需要数字输入且带增减按钮时
- 需要快速调整数值时

### 代码演示

<code src="./demos/InputNumberBox.jsx"></code>

### API

#### 属性

同 Input.Text 组件属性。

#### Ref

同 Input.Text 组件 Ref。

## Input.NumberKeyboard

数字键盘输入框组件。

### 何时使用

- 需要数字键盘输入时
- 需要移动端数字输入优化时

### 代码演示

<code src="./demos/InputNumberKeyboard.jsx"></code>

### API

#### 属性

同 Input.Text 组件属性。

#### Ref

同 Input.Text 组件 Ref。

## Input.Password

密码输入框组件。

### 何时使用

- 需要密码输入时
- 需要隐藏输入内容时

### 代码演示

<code src="./demos/InputPassword.jsx"></code>

### API

#### 属性

同 Input.Text 组件属性。

#### Ref

同 Input.Text 组件 Ref。

## Input.PasswordStrength

密码强度输入框组件。

### 何时使用

- 需要密码输入且显示强度时
- 需要密码强度验证时

### 代码演示

<code src="./demos/InputPasswordStrength.jsx"></code>

### API

#### 属性

同 Input.Text 组件属性。

#### Ref

同 Input.Text 组件 Ref。

## Input.Search

搜索输入框组件。

### 何时使用

- 需要搜索输入时
- 需要搜索功能时

### 代码演示

<code src="./demos/InputSearch.jsx"></code>

### API

#### 属性

同 Input.Text 组件属性，以及：

| 属性     | 说明     | 类型                      | 默认值 |
| -------- | -------- | ------------------------- | ------ |
| onSearch | 搜索事件 | `(value: string) => void` | -      |

#### Ref

同 Input.Text 组件 Ref。

## Input.Tel

电话输入框组件。

### 何时使用

- 需要电话输入时
- 需要电话号码格式化时

### 代码演示

<code src="./demos/InputTel.jsx"></code>

### API

#### 属性

同 Input.Text 组件属性。

#### Ref

同 Input.Text 组件 Ref。

## Input.Url

URL 输入框组件。

### 何时使用

- 需要 URL 输入时
- 需要网址输入时

### 代码演示

<code src="./demos/InputUrl.jsx"></code>

### API

#### 属性

同 Input.Text 组件属性。

#### Ref

同 Input.Text 组件 Ref。

## Input.Textarea

多行文本输入框组件。

### 何时使用

- 需要多行文本输入时
- 需要长文本输入时

### 代码演示

<code src="./demos/InputTextarea.jsx"></code>

### API

#### 属性

同 Input.Text 组件属性。

#### Ref

同 Input.Text 组件 Ref。

## Input.AutoSize

自适应高度输入框组件。

### 何时使用

- 需要自适应高度的输入框时
- 需要根据内容自动调整高度时

### 代码演示

<code src="./demos/InputAutoSize.jsx"></code>

### API

#### 属性

同 Input.Text 组件属性。

#### Ref

同 Input.Text 组件 Ref。

## Input.OTP

一次性密码输入框组件。

### 何时使用

- 需要一次性密码输入时
- 需要验证码输入时

### 代码演示

<code src="./demos/InputOTP.jsx"></code>

### API

#### 属性

同 Input.Text 组件属性。

#### Ref

同 Input.Text 组件 Ref。

## Input.Range

范围输入框组件。

### 何时使用

- 需要范围输入时
- 需要滑块输入时

### 代码演示

<code src="./demos/InputRange.jsx"></code>

### API

#### 属性

同 Input.Text 组件属性。

#### Ref

同 Input.Text 组件 Ref。

## Input.Rate

评分输入框组件。

### 何时使用

- 需要评分输入时
- 需要星级评分时

### 代码演示

<code src="./demos/InputRate.jsx"></code>

### API

#### 属性

同 Input.Text 组件属性。

#### Ref

同 Input.Text 组件 Ref。
