---
group:
  title: 反馈
  order: 4
order: 1
title: Toast
toc: content
---

# Toast

轻提示组件，用于显示简短的消息提示。

## 何时使用

- 需要显示简短的消息提示时
- 需要显示操作结果时
- 需要显示成功、错误、警告等信息时

## 代码演示

### Toast.open

<code src="./demos/open/index.tsx"></code>

### Toast.close

<code src="./demos/close/index.tsx"></code>

## API

### Toast.open

显示 Toast。

#### 参数

| 参数          | 说明             | 类型            | 默认值 |
| ------------- | ---------------- | --------------- | ------ |
| duration      | 显示时长（毫秒） | `number`        | -      |
| maskClickable | 遮罩是否可点击   | `boolean`       | -      |
| position      | 显示位置         | `string`        | -      |
| portal        | 挂载节点         | `HTMLElement`   | -      |
| id            | Toast ID         | `string`        | -      |
| maskClassName | 遮罩类名         | `string`        | -      |
| maskStyle     | 遮罩样式         | `CSSProperties` | -      |
| className     | 内容类名         | `string`        | -      |
| style         | 内容样式         | `CSSProperties` | -      |
| content       | 提示内容         | `string`        | -      |
| onOpen        | 打开事件         | `() => void`    | -      |
| onClose       | 关闭事件         | `() => void`    | -      |

#### 返回值

无返回值。

### Toast.close

隐藏 Toast。

#### 参数

| 参数    | 说明     | 类型         | 默认值 |
| ------- | -------- | ------------ | ------ |
| onClose | 关闭回调 | `() => void` | -      |

#### 返回值

无返回值。

### Toast.defaultProps

Toast 的静态默认属性。

#### 类型

`ToastOpenProps`
