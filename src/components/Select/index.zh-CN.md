---
group:
  title: 数据录入
  order: 2
order: 1
title: Select
toc: content
---

# Select

选择器组件，提供多种选择方式。

## 何时使用

- 需要用户从多个选项中选择时
- 需要下拉选择、弹窗选择等不同交互方式时
- 需要单选或多选功能时

## 示例

### Select.Combo

<code src="./demos/Combo/index.jsx"></code>

## Select.Combo

### 属性

| 属性             | 说明           | 类型                   | 默认值 |
| ---------------- | -------------- | ---------------------- | ------ |
| open             | 是否可见       | `boolean`              | `true` |
| value            | 当前选中值     | `any \| any[]`         | -      |
| multiple         | 是否多选       | `boolean`              | -      |
| allowClear       | 是否允许清除   | `boolean`              | -      |
| onChange         | 值变化回调     | `(value: any) => void` | -      |
| list             | 选项列表       | `array`                | -      |
| checkable        | 是否可选中     | `boolean`              | `true` |
| checkbox         | 是否显示复选框 | `boolean`              | -      |
| checkboxPosition | 复选框位置     | `string`               | -      |

### Ref

| 属性           | 说明           | 类型                   |
| -------------- | -------------- | ---------------------- |
| mainElement    | 主容器元素     | `HtmlDivElement`       |
| getMainElement | 获取主容器元素 | () => `HtmlDivElement` |
