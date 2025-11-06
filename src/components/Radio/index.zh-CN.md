---
group:
  title: 数据录入
  order: 2
order: 1
title: Radio
toc: content
---

# Radio

单选框组件，用于单选场景。

## 何时使用

- 需要用户从多个选项中选择一个时
- 需要表示互斥的选项时
- 需要用户做出唯一选择时

## 示例

<code src="./demos/Radio.jsx"></code>
<code src="./demos/Group.jsx"></code>

## Radio

### 属性

| 属性     | 说明     | 类型      | 默认值  |
| -------- | -------- | --------- | ------- |
| icon | 自定义图标 | `ReactNode \| function \| string` | - |
| iconPosition | 图标位置 | `'left' \| 'right'` | `'left'` |
| checked | 是否选中 | `boolean` | - |
| readOnly | 是否只读 | `boolean` | - |
| disabled | 是否禁用 | `boolean` | - |
| children | 单选框内容 | `ReactNode` | - |
| onChange | 状态变化回调 | `(checked: boolean) => void` | - |

### Ref

| 属性       | 说明                 | 类型                   |
| ---------- | -------------------- | ---------------------- |
| rootDOM    | 根元素               | `HtmlDivElement`       |
| getRootDOM | 获取根元素           | () => `HtmlDivElement` |

## Radio.Group

### 属性

| 属性     | 说明     | 类型      | 默认值  |
| -------- | -------- | --------- | ------- |
| value | 当前选中值 | `any` | - |
| onChange | 值变化回调 | `(value: any) => void` | - |
| children | 子元素 | `ReactNode` | - |
