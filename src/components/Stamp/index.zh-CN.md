---
group:
  title: 数据展示
  order: 5
order: 1
title: Stamp
toc: content
---

# Stamp

邮戳组件

## 何时使用

- 需要显示加载占位效果时
- 需要在内容加载时显示骨架屏时
- 需要提升用户体验时

## 代码演示

<code src="./demos/Stamp.jsx"></code>

## API

### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 骨架屏内容 | `ReactNode` | -      |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |
