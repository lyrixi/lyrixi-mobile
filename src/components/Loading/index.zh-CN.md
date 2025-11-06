---
group:
  title: 反馈
  order: 2
order: 1
title: Loading
toc: content
---

# Loading

加载组件，用于显示加载状态。

## 何时使用

- 需要显示数据加载状态时
- 需要显示操作进行中状态时
- 需要全屏或局部加载提示时

## 示例

### Loading

<code src="./demos/Loading/index.jsx"></code>

### Loading.show

<code src="./demos/show/index.jsx"></code>

### Loading.hide

<code src="./demos/hide/index.jsx"></code>

## Loading

### 属性

| 属性     | 说明       | 类型                    | 默认值        |
| -------- | ---------- | ----------------------- | ------------- |
| portal   | 渲染容器   | `HTMLElement`           | -             |
| open     | 是否可见   | `boolean`               | `true`        |
| icon     | 加载图标   | `ReactNode \| function` | -             |
| content  | 加载文本   | `string`                | `'加载中...'` |
| children | 自定义内容 | `ReactNode`             | -             |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| rootDOM    | 根元素     | `HtmlDivElement`       |
| getRootDOM | 获取根元素 | () => `HtmlDivElement` |
