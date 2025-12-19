---
group:
  title: 布局
  order: 2
order: 1
title: Row
toc: content
---

# Row

行组件，用于栅格布局的行容器。

## 何时使用

- 需要栅格布局时
- 需要响应式列布局时
- 需要设置列间距时

## 示例

<code src="./demos/demo1.jsx"></code>

## Row

### 属性

| 属性      | 说明       | 类型               | 默认值 |
| --------- | ---------- | ------------------ | ------ |
| gutter    | 列间距     | `number \| object` | -      |
| className | 自定义类名 | `string`           | -      |
| children  | 子元素     | `ReactNode`        | -      |

### Ref

| 属性    | 说明   | 类型             |
| ------- | ------ | ---------------- |
| element | 根元素 | `HtmlDivElement` |
