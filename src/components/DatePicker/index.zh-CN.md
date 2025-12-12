---
group:
  title: 数据录入
  order: 2
order: 1
title: DatePicker
toc: content
---

# DatePicker

日期选择器组件，提供多种日期选择方式。

## 何时使用

- 需要选择日期时
- 需要选择时间时
- 需要选择日期范围时
- 需要选择周/月/年时

## 示例

### Combo

<code src="./demos/Combo/index.jsx"></code>

### MultipleCombo

<code src="./demos/MultipleCombo/index.jsx"></code>

### RangeCombo

<code src="./demos/RangeCombo/index.jsx"></code>

### RangeMain

<code src="./demos/RangeMain/index.jsx"></code>

### RangeSelector

<code src="./demos/RangeSelector/index.jsx"></code>

### Types

<code src="./demos/Types/index.jsx"></code>

### WeekCombo

<code src="./demos/WeekCombo/index.jsx"></code>

## DatePicker.Combo

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |

| defaultPickerValue | 默认选择值 | `Date` | - |
| onOk | 点击确定前校验 | `(error: Error) => boolean` | - |
| value | 当前值 | `Date` | - |
| type | 选择类型 | `'year' \| 'quarter' \| 'month' \| 'date' \| 'time' \| 'datetime' \| 'week'` | `'date'` |
| min | 最小日期 | `Date` | - |
| max | 最大日期 | `Date` | - |
| hourStep | 小时步长 | `number` | - |
| minuteStep | 分钟步长 | `number` | - |
