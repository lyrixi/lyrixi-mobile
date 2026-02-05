---
group:
  title: 反馈
  order: 4
order: 1
title: Modal
toc: content
---

# Modal

模态框组件，用于显示对话框、确认框等。

## 何时使用

- 需要显示对话框时
- 需要用户确认操作时
- 需要显示重要信息时

## 代码演示

<code src="./demos/Modal/index.jsx"></code>

## API

### 属性

| 属性           | 说明         | 类型                                                                                    | 默认值   |
| -------------- | ------------ | --------------------------------------------------------------------------------------- | -------- |
| open           | 是否显示     | `boolean`                                                                               | -        |
| maskClosable   | 点击遮罩关闭 | `boolean`                                                                               | `true`   |
| safeArea       | 是否安全区   | `boolean`                                                                               | `true`   |
| animation      | 动画效果     | `'none' \| 'slideLeft' \| 'slideRight' \| 'slideUp' \| 'slideDown' \| 'zoom' \| 'fade'` | `'zoom'` |
| modalStyle     | 模态框样式   | `object`                                                                                | -        |
| modalClassName | 模态框类名   | `string`                                                                                | -        |
| maskStyle      | 遮罩样式     | `object`                                                                                | -        |
| maskClassName  | 遮罩类名     | `string`                                                                                | -        |
| portal         | 挂载节点     | `HTMLElement \| null \| false`                                                          | -        |
| children       | 模态框内容   | `ReactNode`                                                                             | -        |
| onClose        | 关闭事件     | `(e: Event) => void`                                                                    | -        |

### Ref

| 属性            | 说明           | 类型                   |
| --------------- | -------------- | ---------------------- |
| maskElement     | 遮罩元素       | `HTMLDivElement`       |
| getMaskElement  | 获取遮罩元素   | () => `HTMLDivElement` |
| modalElement    | 模态框元素     | `HTMLDivElement`       |
| getModalElement | 获取模态框元素 | () => `HTMLDivElement` |
