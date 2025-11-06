---
group:
  title: 数据录入
  order: 2
order: 1
title: Signature
toc: content
---

# Signature 手写签名

手写签名组件，用于电子签名功能。

## 何时使用

- 需要电子签名功能时
- 需要手写输入时
- 需要签名确认时
- 需要数字签名时

## 示例

### Signature.Combo

<code src="./demos/Combo/index.jsx"></code>

### Signature.Modal

<code src="./demos/Modal/index.jsx"></code>

### Signature.Main

<code src="./demos/Main/index.jsx"></code>

## Signature.Main

### 属性

| 属性            | 说明     | 类型     | 默认值   |
| --------------- | -------- | -------- | -------- |
| color           | 画笔颜色 | `string` | `'#000'` |
| backgroundColor | 背景颜色 | `string` | `'#fff'` |
| lineWidth       | 画笔宽度 | `number` | `3`      |
| quality         | 图片质量 | `number` | `0.92`   |
| suffix          | 图片格式 | `string` | `'png'`  |

### Ref

| 属性       | 说明             | 类型                    |
| ---------- | ---------------- | ----------------------- |
| rootDOM    | 根元素           | `HtmlDivElement`        |
| getRootDOM | 获取根元素       | () => `HtmlDivElement`  |
| getBase64  | 获取 Base64 图片 | `() => Promise<string>` |
| clear      | 清除画布         | `() => void`            |
