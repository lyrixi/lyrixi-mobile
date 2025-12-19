---
group:
  title: 布局
  order: 2
order: 1
title: Page
toc: content
---

# Page

页面布局组件，用于页面整体布局。

## 何时使用

- 需要页面整体布局时
- 需要安全区域适配时
- 需要侧边栏布局时
- 需要下拉刷新功能时

## 示例

### 基本使用

<code src="./demos/Page.jsx"></code>

### 下拉刷新

<code src="./demos/Refresh.jsx"></code>

## Page

### 属性

| 属性      | 说明     | 类型                | 默认值 |
| --------- | -------- | ------------------- | ------ |
| safeArea  | 安全区域 | `boolean \| object` | -      |
| animation | 动画类型 | `string`            | -      |
| children  | 布局内容 | `ReactNode`         | -      |

### Ref

| 属性       | 说明       | 类型                       |
| ---------- | ---------- | -------------------------- |
| element    | 根元素     | `HtmlSectionElement`       |
| getElement | 获取根元素 | () => `HtmlSectionElement` |
