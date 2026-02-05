---
group:
  title: 数据展示
  order: 5
order: 1
title: List
toc: content
---

# List

列表组件，用于展示数据列表。

## 何时使用

- 需要展示数据列表时
- 需要支持单选或多选时
- 需要分组显示数据时

## 代码演示

<code src="./demos/List.jsx"></code>

## API

### 属性

| 属性            | 说明             | 类型                                             | 默认值 |
| --------------- | ---------------- | ------------------------------------------------ | ------ |
| value           | 选中的值         | `any \| any[]`                                   | -      |
| multiple        | 是否多选         | `boolean`                                        | -      |
| allowClear      | 允许清除         | `boolean`                                        | -      |
| list            | 列表数据         | `Array<object>`                                  | -      |
| formatViewList  | 格式化列表       | `(list: Array) => Array`                         | -      |
| formatViewItem  | 格式化项         | `(item: object) => object`                       | -      |
| checkable       | 是否可选         | `boolean`                                        | -      |
| style           | 自定义样式       | `object`                                         | -      |
| className       | 自定义类名       | `string`                                         | -      |
| itemStyle       | 项样式           | `object`                                         | -      |
| itemClassName   | 项类名           | `string`                                         | -      |
| itemLayout      | 项布局           | `string`                                         | -      |
| itemRender      | 自定义项渲染     | `(item: object) => ReactNode`                    | -      |
| checkboxVariant | 自定义复选框渲染 | `(item: object) => ReactNode`                    | -      |
| onChange        | 变化事件         | `(value: any \| any[], options: object) => void` | -      |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HTMLDivElement`       |
| getElement | 获取根元素 | () => `HTMLDivElement` |
