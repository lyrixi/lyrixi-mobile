---
group:
  title: 布局
  order: 2
order: 1
title: Space
toc: content
---

# Space

间距组件，用于设置元素之间的间距。

## 何时使用

- 需要设置元素之间的间距时
- 需要统一的间距规范时
- 需要响应式间距时

## 示例

### 间距

<code src="./demos/space.jsx"></code>

### Compact

<code src="./demos/compact.jsx"></code>

## Space

### 属性

| 属性     | 说明     | 类型                         | 默认值 |
| -------- | -------- | ---------------------------- | ------ |
| size     | 间距大小 | `number \| [number, number]` | -      |
| children | 子元素   | `ReactNode`                  | -      |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| rootDOM    | 根元素     | `HtmlDivElement`       |
| getRootDOM | 获取根元素 | () => `HtmlDivElement` |
