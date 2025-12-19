---
group:
  title: 布局
  order: 3
order: 1
title: Divider
toc: content
---

# Divider

分割线组件，用于分隔内容。

## 何时使用

- 需要分隔内容时
- 需要显示分割线时
- 需要在内容之间添加分隔时

## 代码演示

<code src="./demos/Divider.jsx"></code>

## API

### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 分割线内容 | `ReactNode` | -      |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |
