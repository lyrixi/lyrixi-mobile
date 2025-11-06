---
group:
  title: 反馈
  order: 2
order: 1
title: Message
toc: content
---

# Message

消息对话框组件，用于用户确认操作和显示消息。

## 何时使用

- 需要用户确认重要操作时
- 需要显示警告信息时
- 需要用户做出选择时
- 需要防止误操作时

## 示例

### Message.Modal

<code src="./demos/Modal.jsx"></code>

### Message.Combo

<code src="./demos/Combo.jsx"></code>

### Message.open API

<code src="./demos/API.jsx"></code>

## Message.Modal

### 属性

| 属性            | 说明             | 类型                         | 默认值   |
| --------------- | ---------------- | ---------------------------- | -------- |
| portal          | 渲染容器         | `HTMLElement`                | -        |
| maskClosable    | 点击遮罩是否关闭 | `boolean`                    | -        |
| open            | 是否可见         | `boolean`                    | -        |
| onOpen          | 打开时的回调     | `() => void`                 | -        |
| onClose         | 关闭时的回调     | `(e: Event) => void`         | -        |
| animation       | 动画类型         | `string`                     | `'zoom'` |
| children        | 对话框内容       | `ReactNode`                  | -        |

### Ref

| 属性        | 说明           | 类型                       |
| ----------- | -------------- | -------------------------- |
| maskDOM     | 遮罩元素       | `HtmlDivElement`           |
| getMaskDOM  | 获取遮罩元素   | () => `HtmlDivElement`     |
| modalDOM    | 模态框元素     | `HtmlSectionElement`       |
| getModalDOM | 获取模态框元素 | () => `HtmlSectionElement` |

## Message.open API

### 参数

| 属性            | 说明             | 类型                                | 默认值         |
| --------------- | ---------------- | ----------------------------------- | -------------- |
| portal          | 渲染容器         | `HTMLElement`                       | `document.body`|
| maskClosable    | 点击遮罩是否关闭 | `boolean`                           | `true`         |
| maskClassName   | 遮罩类名         | `string`                            | -              |
| maskStyle       | 遮罩样式         | `object`                            | -              |
| icon            | 图标             | `string`                            | -              |
| title           | 标题             | `string`                            | -              |
| titleClassName  | 标题类名         | `string`                            | -              |
| titleStyle      | 标题样式         | `object`                            | -              |
| content         | 内容             | `string`                            | -              |
| contentClassName| 内容类名         | `string`                            | -              |
| contentStyle    | 内容样式         | `object`                            | -              |
| buttonsLayout   | 按钮布局         | `'horizontal' \| 'vertical'`        | `'horizontal'` |
| buttons         | 按钮配置         | `ButtonConfig[]`                    | `[]`           |
| onOpen          | 打开时的回调     | `() => void`                        | -              |
| onClose         | 关闭时的回调     | `(e: Event) => void`                | -              |

### ButtonConfig

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| name      | 按钮文本   | `string`    | -      |
| className | 按钮类名   | `string`    | -      |
| style     | 按钮样式   | `object`    | -      |
| onClick   | 点击回调   | `() => boolean` | -  |

### 方法

| 方法名  | 说明           | 参数 |
| ------- | -------------- | ---- |
| open    | 打开消息对话框 | `config` |
| close   | 关闭当前对话框 | -    |
