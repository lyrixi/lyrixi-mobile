---
group:
  title: 数据录入
  order: 2
order: 1
title: Checkbox
toc: content
---

# Checkbox

复选框组件，用于多选场景。

## 何时使用

- 需要用户从多个选项中选择一个或多个时
- 需要表示开关状态时
- 需要用户确认某个选项时

## 示例

<code src="./demos/Checkbox.jsx"></code>
<code src="./demos/Group.jsx"></code>

## Checkbox

### 属性

| 属性     | 说明     | 类型      | 默认值  |
| -------- | -------- | --------- | ------- |
| icon | 自定义图标 | `ReactNode \| function \| string` | - |
| iconPosition | 图标位置 | `'left' \| 'right'` | `'left'` |
| checked | 是否选中 | `boolean` | - |
| readOnly | 是否只读 | `boolean` | - |
| disabled | 是否禁用 | `boolean` | - |
| children | 复选框内容 | `ReactNode` | - |
| onChange | 状态变化回调 | `(checked: boolean) => void` | - |

### Ref

| 属性       | 说明                 | 类型                   |
| ---------- | -------------------- | ---------------------- |
| rootDOM    | 根元素               | `HtmlDivElement`       |
| getRootDOM | 获取根元素           | () => `HtmlDivElement` |
