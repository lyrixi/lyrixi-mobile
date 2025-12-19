---
group:
  title: 反馈
  order: 2
order: 1
title: TabBar
toc: content
---

# TabBar

标签栏组件，用于底部导航和标签切换。

## 何时使用

- 需要底部导航栏时
- 需要标签页切换时
- 需要分组菜单时
- 需要滑块切换时

## 示例

常用

<code src="./demos/Tabs.jsx"></code>

分组

<code src="./demos/Group.jsx"></code>

菜单

<code src="./demos/Menus.jsx"></code>

滑块

<code src="./demos/Slide.jsx"></code>

## TabBar.Tabs

### 属性

| 属性                | 说明       | 类型                     | 默认值     |
| ------------------- | ---------- | ------------------------ | ---------- |
| separator           | 分隔符     | `ReactNode`              | -          |
| value               | 当前选中值 | `object`                 | -          |
| list                | 标签列表   | `array`                  | `[]`       |
| className           | 自定义类名 | `string`                 | -          |
| disabled            | 是否禁用   | `boolean`                | -          |
| descriptionPosition | 描述位置   | `'top' \| 'bottom'`      | `'bottom'` |
| onChange            | 切换回调   | `(item: object) => void` | -          |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |
