---
group:
  title: 反馈
  order: 4
order: 1
title: Tooltip
toc: content
---

# Tooltip

文字提示组件，用于显示提示信息。

## 何时使用

- 需要显示提示信息时
- 需要在元素上显示提示时
- 需要显示帮助信息时

## 代码演示

<code src="./demos/demo1.jsx"></code>

## API

### 属性

| 属性             | 说明             | 类型                                                                                                       | 默认值            |
| ---------------- | ---------------- | ---------------------------------------------------------------------------------------------------------- | ----------------- |
| maskClosable     | 点击遮罩关闭     | `boolean`                                                                                                  | `true`            |
| style            | 自定义样式       | `object`                                                                                                   | -                 |
| className        | 自定义类名       | `string`                                                                                                   | -                 |
| animation        | 动画效果         | `'none' \| 'slideLeft' \| 'slideRight' \| 'slideUp' \| 'slideDown' \| 'zoom' \| 'fade' \| 'slideDownLeft'` | `'slideDownLeft'` |
| modalStyle       | 模态框样式       | `object`                                                                                                   | -                 |
| modalClassName   | 模态框类名       | `string`                                                                                                   | -                 |
| maskStyle        | 遮罩样式         | `object`                                                                                                   | -                 |
| maskClassName    | 遮罩类名         | `string`                                                                                                   | -                 |
| children         | 触发元素         | `ReactNode`                                                                                                | -                 |
| comboRender      | 自定义组合渲染   | `() => ReactNode`                                                                                          | -                 |
| modalRender      | 自定义模态框渲染 | `() => ReactNode`                                                                                          | -                 |
| referenceElement | 参考元素         | `HTMLElement \| (() => HTMLElement)`                                                                       | -                 |
| portal           | 挂载节点         | `HTMLElement \| null \| false`                                                                             | -                 |
| onBeforeOpen     | 打开前事件       | `() => Promise<boolean>`                                                                                   | -                 |
| onOpen           | 打开事件         | `() => void`                                                                                               | -                 |
| onClose          | 关闭事件         | `() => void`                                                                                               | -                 |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |
