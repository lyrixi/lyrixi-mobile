---
group:
  title: 数据展示
  order: 5
order: 1
title: QRCode
toc: content
---

# QRCode

二维码组件，用于生成和显示二维码。

## 何时使用

- 需要生成二维码时
- 需要显示二维码时
- 需要扫描二维码时

## 代码演示

<code src="./demos/demo1.jsx"></code>

## API

### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| text      | 二维码内容 | `string`    | -      |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 子元素     | `ReactNode` | -      |

### Ref

| 属性        | 说明           | 类型                    |
| ----------- | -------------- | ----------------------- |
| element     | 根元素         | `HtmlSpanElement`       |
| instance    | 二维码实例     | `QRCodeInstance`        |
| getElement  | 获取根元素     | () => `HtmlSpanElement` |
| getInstance | 获取二维码实例 | () => `QRCodeInstance`  |
