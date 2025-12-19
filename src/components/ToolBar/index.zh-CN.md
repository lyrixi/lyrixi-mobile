---
group:
  title: 反馈
  order: 2
order: 1
title: ToolBar
toc: content
---

# ToolBar

工具栏组件，用于工具按钮的容器。

ToolBar 内的所有控件 Combo 部分都与 Button 属性一致，可以直接参考 Button

## 何时使用

- 需要工具栏时
- 需要工具按钮容器时
- 需要操作按钮组时
- 需要功能按钮栏时

## 示例

<code src="./demos/common.jsx"></code>

## ToolBar

### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| variant   | 变体       | `string`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 子元素     | `ReactNode` | -      |

### Ref

| 属性    | 说明   | 类型             |
| ------- | ------ | ---------------- |
| element | 根元素 | `HtmlDivElement` |
