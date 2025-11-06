---
group:
  title: 数据录入
  order: 2
order: 1
title: Picker
toc: content
---

# Picker

选择器组件，用于多列数据选择。

## 何时使用

- 需要多列数据选择时
- 需要滚轮选择器时
- 需要联动选择时
- 需要自定义选择器时

## 示例

### Picker.Combo

<code src="./demos/Combo/index.jsx"></code>

### Picker.Modal

<code src="./demos/Modal/index.jsx"></code>

### Picker.Main

<code src="./demos/Main/index.jsx"></code>

## Picker.Main

### 属性

| 属性       | 说明         | 类型                     | 默认值 |
| ---------- | ------------ | ------------------------ | ------ |
| open       | 是否可见     | `boolean`                | `true` |
| value      | 当前值       | `array`                  | -      |
| allowClear | 是否允许清除 | `boolean`                | -      |
| onChange   | 变化回调     | `(value: array) => void` | -      |
| list       | 数据列表     | `array`                  | -      |

### Ref

| 属性       | 说明           | 类型                   |
| ---------- | -------------- | ---------------------- |
| mainDOM    | 主容器元素     | `HtmlDivElement`       |
| getMainDOM | 获取主容器元素 | () => `HtmlDivElement` |
| getValue   | 获取当前值     | `() => array`          |
| update     | 更新视图       | `() => void`           |
