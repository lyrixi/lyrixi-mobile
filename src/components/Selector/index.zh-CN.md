---
group:
  title: 数据录入
  order: 2
order: 1
title: Selector
toc: content
---

# Selector

选择组组件，用于从多个选项中选择。

## 何时使用

- 需要从多个选项中选择时
- 需要单选或多选时
- 需要网格布局显示选项时

## 代码演示

<code src="./demos/Selector.jsx"></code>

## API

### 属性

| 属性       | 说明       | 类型                                                    | 默认值 |
| ---------- | ---------- | ------------------------------------------------------- | ------ |
| value      | 选中的值   | `any[]`                                                 | -      |
| list       | 选项列表   | `Array<{id: string, name: string, [key: string]: any}>` | -      |
| ellipsis   | 省略配置   | `object`                                                | -      |
| disabled   | 是否禁用   | `boolean`                                               | -      |
| multiple   | 是否多选   | `boolean`                                               | -      |
| allowClear | 允许清除   | `boolean`                                               | -      |
| style      | 自定义样式 | `object`                                                | -      |
| className  | 自定义类名 | `string`                                                | -      |
| columns    | 列数       | `number`                                                | `2`    |
| id         | 选择组 ID  | `string`                                                | -      |
| onChange   | 变化事件   | `(value: any[]) => void`                                | -      |

### Ref

| 属性        | 说明         | 类型                   |
| ----------- | ------------ | ---------------------- |
| element     | 根元素       | `HtmlDivElement`       |
| instance    | 实例对象     | `object`               |
| getElement  | 获取根元素   | () => `HtmlDivElement` |
| getInstance | 获取实例对象 | () => `object`         |
