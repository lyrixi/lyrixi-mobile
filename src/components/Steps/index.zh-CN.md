---
group:
  title: 反馈
  order: 2
order: 1
title: Steps
toc: content
---

# Steps

步骤条组件，用于展示流程步骤。

## 何时使用

- 需要展示操作流程时
- 需要显示进度步骤时
- 需要时间线展示时
- 需要向导流程时

## 示例

## iconSize 默认 8

<code src="./demos/Dot.jsx"></code>

## iconSize 大于 24 时, 默认显示数值

<code src="./demos/Circle.jsx"></code>

## Active

<code src="./demos/Active.jsx"></code>

## Icon

<code src="./demos/Icon.jsx"></code>

## Timeline

<code src="./demos/Timeline.jsx"></code>

## Steps

### 属性

| 属性      | 说明     | 类型                         | 默认值       |
| --------- | -------- | ---------------------------- | ------------ |
| iconSize  | 图标尺寸 | `number`                     | `8`          |
| align     | 对齐方式 | `'center' \| 'left'`         | `'center'`   |
| direction | 方向     | `'vertical' \| 'horizontal'` | `'vertical'` |
| value     | 当前值   | `object`                     | -            |
| list      | 步骤列表 | `array`                      | -            |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| rootDOM    | 根元素     | `HtmlDivElement`       |
| getRootDOM | 获取根元素 | () => `HtmlDivElement` |
