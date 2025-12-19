---
group:
  title: 布局
  order: 2
order: 1
title: Card
toc: content
---

# Card

卡片容器，用于展示内容块。

## 何时使用

- 需要展示独立的内容块时
- 需要将内容分组展示时
- 需要突出显示某些信息时

## 示例

<code src="./demos/demo1.jsx"></code>

## Card

### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| className | 自定义类名 | `string`    | -      |
| children  | 卡片内容   | `ReactNode` | -      |

### Ref

| 属性       | 说明               | 类型                   |
| ---------- | ------------------ | ---------------------- |
| element    | 原始 card 元素     | `HtmlDivElement`       |
| getElement | 获取原始 card 元素 | () => `HtmlDivElement` |
