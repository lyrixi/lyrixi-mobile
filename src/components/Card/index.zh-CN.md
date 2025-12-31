---
group:
  title: 布局
  order: 3
order: 1
title: Card
toc: content
---

# Card

卡片组件，用于展示内容区块。

## 何时使用

- 需要展示相关内容区块时
- 需要将信息分组展示时
- 需要带标题和内容的结构化展示时

## 代码演示

<code src="./demos/demo1.jsx"></code>

## API

### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 卡片内容   | `ReactNode` | -      |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |
