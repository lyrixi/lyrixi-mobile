---
group:
  title: 数据录入
  order: 2
order: 1
title: List
toc: content
---

# List

列表组件，用于展示和选择数据项。

## 何时使用

- 需要展示一组数据项时
- 需要用户从列表中选择项目时
- 需要展示分组数据时
- 需要虚拟滚动优化性能时

## 示例

## List.Main

<code src="./demos/Main/index.jsx"></code>

## List

<code src="./demos/List/index.jsx"></code>

## List children

<code src="./demos/ListChildren/index.jsx"></code>

## List

### 属性

| 属性       | 说明         | 类型                                 | 默认值 |
| ---------- | ------------ | ------------------------------------ | ------ |
| allowClear | 是否允许清除 | `boolean`                            | -      |
| multiple   | 是否多选     | `boolean`                            | -      |
| value      | 当前选中值   | `any \| any[]`                       | -      |
| list       | 数据列表     | `array`                              | -      |
| itemLayout | 布局方式     | `'vertical'`                         | -      |
| itemRender | 自定义包装器 | `function`                           | -      |
| checkable  | 是否可选中   | `boolean \| 'left' \| 'right'`       | -      |
| onChange   | 选择变化回调 | `(value: any, info: object) => void` | -      |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |
