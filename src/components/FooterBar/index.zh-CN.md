---
group:
  title: 反馈
  order: 2
order: 1
title: FooterBar
toc: content
---

# FooterBar

底部栏组件，用于页面底部操作区域。

## 何时使用

- 需要页面底部操作按钮时
- 需要固定的底部操作区域时
- 需要底部导航时
- 需要底部表单提交时

## 示例

### 基本使用

### FooterBar.Button

<code src="./demos/Button.jsx"></code>

## FooterBar

### 属性

| 属性     | 说明   | 类型                  | 默认值      |
| -------- | ------ | --------------------- | ----------- |
| type     | 类型   | `'default' \| 'text'` | `'default'` |
| children | 子元素 | `ReactNode`           | -           |

### Ref

| 属性       | 说明       | 类型                      |
| ---------- | ---------- | ------------------------- |
| element    | 根元素     | `HtmlFooterElement`       |
| getElement | 获取根元素 | () => `HtmlFooterElement` |
