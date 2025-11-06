---
group: 反馈
category: Components
title: Toast
---

# Toast

轻提示组件，用于显示简短的反馈信息。

## 何时使用

- 需要显示操作结果反馈时
- 需要显示简短的提示信息时
- 需要非阻塞式的消息提示时

## 示例

### Toast.show

<code src="./demos/show/index.jsx"></code>

### Toast.hide

<code src="./demos/hide/index.jsx"></code>

## Toast.show

### 属性

| 属性            | 说明             | 类型                            | 默认值     |
| --------------- | ---------------- | ------------------------------- | ---------- |
| duration        | 显示时长（毫秒） | `number`                        | `2000`     |
| maskClickable   | 遮罩是否可点击   | `boolean`                       | `true`     |
| position        | 显示位置         | `'top' \| 'middle' \| 'bottom'` | `'middle'` |
| id              | 唯一标识         | `string`                        | -          |
| className       | 自定义类名       | `string`                        | -          |
| style           | 自定义样式       | `object`                        | -          |
| content         | 提示内容         | `string \| ReactNode`           | -          |
| onOpen          | 打开时的回调     | `() => void`                    | -          |
| onClose         | 关闭时的回调     | `(e: Event) => void`            | -          |

## Toast.hide

### 属性

| 属性    | 说明         | 类型                | 默认值 |
| ------- | ------------ | ------------------- | ------ |
| onOpen  | 打开时的回调 | `() => void`        | -      |
| onClose | 关闭时的回调 | `(e: Event) => void`| -      |
