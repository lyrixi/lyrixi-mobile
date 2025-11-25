---
group:
  title: 反馈
  order: 2
order: 1
title: Accordion
toc: content
---

# Accordion

折叠面板组件，用于内容展开和收起。

## 何时使用

- 需要展示可折叠的内容时
- 需要节省页面空间时
- 需要分组展示内容时
- 需要手风琴效果时

## 示例

<code src="./demos/demo1.jsx"></code>

## Accordion.Group

### 属性

| 属性     | 说明           | 类型                      | 默认值 |
| -------- | -------------- | ------------------------- | ------ |
| value    | 当前激活的索引 | `number`                  | -      |
| onChange | 变化回调       | `(index: number) => void` | -      |
| children | 子元素         | `ReactNode`               | -      |

### Ref

| 属性           | 说明         | 类型                      |
| -------------- | ------------ | ------------------------- |
| rootDOM        | 根元素       | `HtmlDivElement`          |
| getRootDOM     | 获取根元素   | () => `HtmlDivElement`    |
| getActiveIndex | 获取激活索引 | `() => number`            |
| openIndex      | 打开指定索引 | `(index: number) => void` |
| close          | 关闭所有     | `() => void`              |
