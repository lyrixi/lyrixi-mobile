---
group: 反馈
category: Components
title: Modal
---

# Modal

模态对话框，用于展示重要信息或需要用户确认的内容。

## 何时使用

- 需要用户确认某个操作时
- 需要展示重要信息时
- 需要用户输入信息时
- 需要展示复杂表单时

## 示例

### Modal

基础模态框，支持多种动画效果和遮罩点击关闭。

<code src="./demos/Modal/demo1.jsx"></code>

### Modal.DropdownModal

下拉式模态框，常用于展示操作选项菜单。

<code src="./demos/DropdownModal/index.jsx"></code>

### Modal.FilterModal

筛选模态框，用于展示筛选条件和操作。

<code src="./demos/FilterModal/index.jsx"></code>

### Modal.NavBarModal

带导航栏的模态框，常用于表单编辑场景。

<code src="./demos/NavBarModal/index.jsx"></code>

## Modal

### 属性

| 属性         | 说明             | 类型                                                                                    | 默认值          |
| ------------ | ---------------- | --------------------------------------------------------------------------------------- | --------------- |
| safeArea     | 安全区域         | `boolean \| object`                                                                     | -               |
| portal       | 渲染容器         | `HTMLElement \| boolean`                                                                | `document.body` |
| animation    | 动画类型         | `'none' \| 'slideLeft' \| 'slideRight' \| 'slideUp' \| 'slideDown' \| 'zoom' \| 'fade'` | `'zoom'`        |
| referenceDOM | 参考元素         | `HTMLElement \| function`                                                               | -               |
| offset       | 偏移量           | `object`                                                                                | -               |
| open         | 是否可见         | `boolean`                                                                               | -               |
| maskClosable | 点击遮罩是否关闭 | `boolean`                                                                               | `true`          |
| onOpen       | 打开时的回调     | `() => void`                                                                            | -               |
| onClose      | 关闭时的回调     | `(e: Event) => void`                                                                    | -               |
| children     | 模态框内容       | `ReactNode`                                                                             | -               |

### Ref

| 属性        | 说明                | 类型                   |
| ----------- | ------------------- | ---------------------- |
| modalDOM    | 模态框 DOM 元素     | `HtmlDivElement`       |
| getModalDOM | 获取模态框 DOM 元素 | () => `HtmlDivElement` |

## Modal.DropdownModal

下拉式模态框，基于 Modal 组件实现。

### 属性

继承 Modal 的所有属性，并新增：

| 属性      | 说明     | 类型                      | 默认值 |
| --------- | -------- | ------------------------- | ------ |
| reference | 参考元素 | `HTMLElement \| function` | -      |

## Modal.FilterModal

筛选模态框，基于 Modal 组件实现。

### 属性

继承 Modal 的所有属性，并新增：

| 属性         | 说明         | 类型                       | 默认值 |
| ------------ | ------------ | -------------------------- | ------ |
| reference    | 参考元素     | `HTMLElement \| function`  | -      |
| footerRender | 底部渲染函数 | `({ close }) => ReactNode` | -      |

## Modal.NavBarModal

带导航栏的模态框，基于 Modal 组件实现。

### 属性

继承 Modal 的所有属性，并新增：

| 属性            | 说明             | 类型                  | 默认值 |
| --------------- | ---------------- | --------------------- | ------ |
| title           | 标题             | `string`              | -      |
| titleClassName  | 标题样式类名     | `string`              | -      |
| titleStyle      | 标题样式         | `object`              | -      |
| ok              | 确定按钮文本     | `string`              | -      |
| onOk            | 确定按钮回调     | `({ close }) => void` | -      |
| okClassName     | 确定按钮样式类名 | `string`              | -      |
| okStyle         | 确定按钮样式     | `object`              | -      |
| cancel          | 取消按钮文本     | `string`              | -      |
| onCancel        | 取消按钮回调     | `() => void`          | -      |
| cancelClassName | 取消按钮样式类名 | `string`              | -      |
| cancelStyle     | 取消按钮样式     | `object`              | -      |
