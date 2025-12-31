---
group:
  title: 导航
  order: 6
order: 1
title: FooterBar
toc: content
---

# FooterBar

底部栏组件，用于显示页面底部内容。

## 何时使用

- 需要显示页面底部内容时
- 需要显示操作按钮时
- 需要在页面底部显示固定内容时

## 代码演示

<code src="./demos/FooterBarButton.jsx"></code>

## API

### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 底部栏内容 | `ReactNode` | -      |

### Ref

| 属性       | 说明       | 类型                      |
| ---------- | ---------- | ------------------------- |
| element    | 根元素     | `HtmlFooterElement`       |
| getElement | 获取根元素 | () => `HtmlFooterElement` |
