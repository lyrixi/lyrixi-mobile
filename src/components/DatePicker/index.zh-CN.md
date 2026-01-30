---
group:
  title: 数据录入
  order: 2
order: 1
title: DatePicker
toc: content
---

# DatePicker

日期选择器组件，用于选择日期、时间等。

## 何时使用

- 需要选择日期时
- 需要选择时间时
- 需要选择日期范围时

## 代码演示

<code src="./demos/DatePickerCombo.jsx" id="datepicker-combo"></code>

## API

### 属性

| 属性           | 说明           | 类型                                                                         | 默认值   |
| -------------- | -------------- | ---------------------------------------------------------------------------- | -------- |
| value          | 选中的值       | `Date \| Date[]`                                                             | -        |
| placeholder    | 占位符         | `string`                                                                     | -        |
| formatter      | 格式化函数     | `(value: Date \| Date[]) => string`                                          | -        |
| autoSize       | 自动调整大小   | `boolean`                                                                    | -        |
| separator      | 分隔符         | `string`                                                                     | -        |
| readOnly       | 是否只读       | `boolean`                                                                    | -        |
| disabled       | 是否禁用       | `boolean`                                                                    | -        |
| allowClear     | 允许清除       | `boolean`                                                                    | -        |
| style          | 自定义样式     | `object`                                                                     | -        |
| className      | 自定义类名     | `string`                                                                     | -        |
| comboRender    | 自定义组合渲染 | `() => ReactNode`                                                            | -        |
| children       | 子元素         | `ReactNode`                                                                  | -        |
| leftIconNode   | 左侧图标       | `ReactNode`                                                                  | -        |
| rightIconNode  | 右侧图标       | `ReactNode`                                                                  | -        |
| clearRender    | 清除按钮渲染   | `(props: object) => ReactNode`                                               | -        |
| type           | 日期类型       | `'year' \| 'quarter' \| 'month' \| 'date' \| 'time' \| 'datetime' \| 'week'` | `'date'` |
| min            | 最小日期       | `Date`                                                                       | -        |
| max            | 最大日期       | `Date`                                                                       | -        |
| hourStep       | 小时步长       | `number`                                                                     | -        |
| minuteStep     | 分钟步长       | `number`                                                                     | -        |
| maskClosable   | 点击遮罩关闭   | `boolean`                                                                    | -        |
| safeArea       | 是否安全区     | `boolean`                                                                    | -        |
| modalStyle     | 模态框样式     | `object`                                                                     | -        |
| modalClassName | 模态框类名     | `string`                                                                     | -        |
| maskStyle      | 遮罩样式       | `object`                                                                     | -        |
| maskClassName  | 遮罩类名       | `string`                                                                     | -        |
| portal         | 挂载节点       | `HTMLElement \| null \| false`                                               | -        |
| titleRender    | 标题渲染       | `() => ReactNode`                                                            | -        |
| okNode         | 确认按钮       | `ReactNode`                                                                  | -        |
| cancelNode     | 取消按钮       | `ReactNode`                                                                  | -        |
| okVisible      | 确认按钮可见   | `boolean`                                                                    | -        |
| cancelVisible  | 取消按钮可见   | `boolean`                                                                    | -        |
| onBeforeOpen   | 打开前事件     | `() => Promise<boolean>`                                                     | -        |
| onChange       | 变化事件       | `(value: Date \| Date[]) => void`                                            | -        |
| onOk           | 确认事件       | `(value: Date \| Date[]) => void`                                            | -        |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |
| close      | 关闭选择器 | `() => void`           |
| open       | 打开选择器 | `() => void`           |

## DatePicker.Combo

日期选择器组合组件，结合输入框和日期选择器。

### 何时使用

- 需要结合输入框和日期选择器时

### 代码演示

<code src="./demos/DatePickerCombo.jsx" id="datepicker-combo-usage"></code>

### API

#### 属性

同 DatePicker 组件属性。

#### Ref

同 DatePicker 组件 Ref。

## DatePicker.Modal

日期选择器模态框组件。

### 何时使用

- 需要以模态框形式显示日期选择器时

### 代码演示

### API

#### 属性

同 DatePicker 组件属性。

#### Ref

同 DatePicker 组件 Ref。

## DatePicker.Main

日期选择器主组件。

### 何时使用

- 需要直接使用日期选择器主组件时

### 代码演示

### API

#### 属性

同 DatePicker 组件属性。

#### Ref

同 DatePicker 组件 Ref。

## DatePicker.Range

日期范围选择器组件。

### 何时使用

- 需要选择日期范围时

### 代码演示

<code src="./demos/DatePickerRangeCombo.jsx"></code>

### API

#### 属性

同 DatePicker 组件属性，但 value 为 `Date[]`。

#### Ref

同 DatePicker 组件 Ref。

## DatePicker.Multiple

多日期选择器组件。

### 何时使用

- 需要选择多个日期时

### 代码演示

<code src="./demos/DatePickerMultipleCombo.jsx"></code>

### API

#### 属性

同 DatePicker 组件属性，但 value 为 `Date[]`。

#### Ref

同 DatePicker 组件 Ref。

## DatePicker.Week

周选择器组件。

### 何时使用

- 需要选择周时

### 代码演示

<code src="./demos/DatePickerWeekCombo.jsx"></code>

### API

#### 属性

同 DatePicker 组件属性。

#### Ref

同 DatePicker 组件 Ref。

## DatePicker.Types

日期类型选择器组件。

### 何时使用

- 需要选择日期类型时

### 代码演示

<code src="./demos/DatePickerTypes.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 类型内容   | `ReactNode` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## DatePicker.RangeSelector

日期范围快捷选择器组件。

### 何时使用

- 需要快捷选择日期范围时
- 需要提供预设日期范围选项时

### 代码演示

<code src="./demos/DatePickerRangeSelector.jsx"></code>

### API

#### 属性

| 属性          | 说明           | 类型                                                               | 默认值   |
| ------------- | -------------- | ------------------------------------------------------------------ | -------- |
| value         | 选中的值       | `Date[]`                                                           | -        |
| autoSwapValue | 自动交换值     | `boolean`                                                          | `true`   |
| type          | 日期类型       | `'year' \| 'quarter' \| 'month' \| 'date' \| 'time' \| 'datetime'` | `'date'` |
| rangeId       | 当前选中的范围 | `string`                                                           | -        |
| ranges        | 范围配置       | `object`                                                           | -        |
| min           | 最小日期       | `Date`                                                             | -        |
| max           | 最大日期       | `Date`                                                             | -        |
| hourStep      | 小时步长       | `number`                                                           | -        |
| minuteStep    | 分钟步长       | `number`                                                           | -        |
| startDisabled | 禁用开始日期   | `boolean`                                                          | -        |
| endDisabled   | 禁用结束日期   | `boolean`                                                          | -        |
| allowClear    | 允许清除       | `boolean`                                                          | -        |
| style         | 自定义样式     | `object`                                                           | -        |
| className     | 自定义类名     | `string`                                                           | -        |
| portal        | 挂载节点       | `HTMLElement`                                                      | -        |
| onChange      | 变化事件       | `(value: Date[], { rangeId, ranges, displayValue }) => void`       | -        |
| onOk          | 确认事件       | `(value: Date[], { rangeId, ranges, displayValue }) => void`       | -        |

#### Ref

| 属性           | 说明       | 类型                   |
| -------------- | ---------- | ---------------------- |
| mainElement    | 主元素     | `HtmlDivElement`       |
| getMainElement | 获取主元素 | () => `HtmlDivElement` |
