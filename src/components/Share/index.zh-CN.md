---
group:
  title: 反馈
  order: 2
order: 1
title: Share
toc: content
---

# Share

分享组件，用于内容分享功能。

## 何时使用

- 需要分享内容时
- 需要社交分享时
- 需要多平台分享时
- 需要自定义分享时

## 示例

### Share.Combo

<code src="./demos/Combo/index.jsx"></code>

### Share.Modal

<code src="./demos/Modal/index.jsx"></code>

### Share.Main

<code src="./demos/Main/index.jsx"></code>

## Share.Main

### 属性

| 属性      | 说明       | 类型     | 默认值 |
| --------- | ---------- | -------- | ------ |
| className | 自定义类名 | `string` | -      |
| style     | 自定义样式 | `object` | -      |
| shareTo   | 分享配置   | `object` | -      |

### Ref

| 属性           | 说明             | 类型                           |
| -------------- | ---------------- | ------------------------------ |
| mainElement    | 主容器元素       | `HtmlDivElement`               |
| getMainElement | 获取主容器元素   | () => `HtmlDivElement`         |
| support        | 检查是否支持分享 | `(shareTo: object) => boolean` |
