---
group:
  title: 布局
  order: 3
order: 1
title: Row
toc: content
---

# Row

行组件，用于创建行布局。

## 何时使用

- 需要创建行布局时
- 需要水平排列元素时

## 代码演示

<code src="./demos/demo1.jsx"></code>

## API

### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 行内容     | `ReactNode` | -      |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HTMLDivElement`       |
| getElement | 获取根元素 | () => `HTMLDivElement` |
