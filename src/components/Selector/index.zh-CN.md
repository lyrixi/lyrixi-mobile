---
group:
  title: 数据录入
  order: 2
order: 1
title: Selector
toc: content
---

# Selector

选择器组件，用于多选项选择。

## 何时使用

- 需要多选项选择时
- 需要网格布局选择时
- 需要单选或多选时
- 需要自定义选择器时

## 示例

<code src="./demos/demo1.jsx"></code>

## Selector

### 属性

| 属性       | 说明         | 类型                     | 默认值 |
| ---------- | ------------ | ------------------------ | ------ |
| multiple   | 是否多选     | `boolean`                | -      |
| columns    | 列数         | `number`                 | `2`    |
| allowClear | 是否允许清除 | `boolean`                | -      |
| value      | 当前值       | `array`                  | -      |
| list       | 选项列表     | `array`                  | -      |
| onChange   | 变化回调     | `(value: array) => void` | -      |
| ellipsis   | 省略配置     | `{max: number}`          | -      |
| style      | 自定义样式   | `object`                 | -      |
| className  | 自定义类名   | `string`                 | -      |

### Ref

| 属性        | 说明           | 类型                   |
| ----------- | -------------- | ---------------------- |
| element     | 根元素         | `HtmlDivElement`       |
| instance    | 选择器实例     | `object`               |
| getElement  | 获取根元素     | () => `HtmlDivElement` |
| getInstance | 获取选择器实例 | () => `object`         |
