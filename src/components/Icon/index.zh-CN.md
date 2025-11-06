---
group:
  title: 图标
  order: 2
order: 1
title: Icon
toc: content
---

# Icon

图标组件，用于显示各种图标。

## 何时使用

- 需要显示图标时
- 需要统一的图标样式时
- 需要自定义图标尺寸时

## 示例

<code src="./demos/demo1.jsx"></code>

## Icon

### 属性

| 属性     | 说明     | 类型      | 默认值  |
| -------- | -------- | --------- | ------- |
| size | 图标尺寸 | `number` | - |
| children | 图标内容 | `ReactNode` | - |

### Ref

| 属性       | 说明                 | 类型                   |
| ---------- | -------------------- | ---------------------- |
| rootDOM    | 根元素               | `HtmlIElement`         |
| getRootDOM | 获取根元素           | () => `HtmlIElement`   |
