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

<code src="./demos/Toast.jsx"></code>

## API

### Toast.show

显示 Toast。

#### 参数

| 参数          | 说明             | 类型                            | 默认值 |
| ------------- | ---------------- | ------------------------------- | ------ |
| duration      | 显示时长（毫秒） | `number`                        | -      |
| maskClickable | 遮罩是否可点击   | `boolean`                       | -      |
| position      | 显示位置         | `'top' \| 'middle' \| 'bottom'` | -      |
| portal        | 挂载节点         | `HTMLElement`                   | -      |
| id            | Toast ID         | `string`                        | -      |
| maskClassName | 遮罩类名         | `string`                        | -      |
| maskStyle     | 遮罩样式         | `object`                        | -      |
| className     | 内容类名         | `string`                        | -      |
| style         | 内容样式         | `object`                        | -      |
| content       | 提示内容         | `string \| ReactNode`           | -      |
| onOpen        | 打开事件         | `() => void`                    | -      |
| onClose       | 关闭事件         | `() => void`                    | -      |

#### 返回值

无返回值。

### Toast.hide

隐藏 Toast。

#### 参数

| 参数 | 说明     | 类型     | 默认值 |
| ---- | -------- | -------- | ------ |
| id   | Toast ID | `string` | -      |

#### 返回值

无返回值。
