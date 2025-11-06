---
group:
  title: 数据录入
  order: 2
order: 1
title: Transfer
toc: content
---

# Transfer 穿梭框

穿梭框组件，用于在两个列表之间移动数据。

## 何时使用

- 需要在两个列表间移动数据时
- 需要批量选择数据时
- 需要数据排序时
- 需要数据分配时

## 示例

### Transfer.Combo

<code src="./demos/Combo/index.jsx"></code>

### Transfer.Modal

<code src="./demos/Modal/index.jsx"></code>

### Transfer.Main

<code src="./demos/Main/index.jsx"></code>

## Transfer.Main

### 属性

| 属性       | 说明         | 类型                     | 默认值 |
| ---------- | ------------ | ------------------------ | ------ |
| open       | 是否可见     | `boolean`                | -      |
| value      | 已选择的值   | `array`                  | -      |
| allowClear | 是否允许清除 | `boolean`                | -      |
| onChange   | 变化回调     | `(value: array) => void` | -      |
| list       | 数据列表     | `array`                  | -      |
| titles     | 标题配置     | `object`                 | -      |

### Ref

| 属性       | 说明           | 类型                   |
| ---------- | -------------- | ---------------------- |
| mainDOM    | 主容器元素     | `HtmlDivElement`       |
| getMainDOM | 获取主容器元素 | () => `HtmlDivElement` |
