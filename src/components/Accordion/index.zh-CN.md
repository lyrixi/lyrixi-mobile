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

## Accordion.Item

### 属性

| 属性           | 说明                       | 类型                 | 默认值                       |
| -------------- | -------------------------- | -------------------- | ---------------------------- |
| open           | 是否展开                   | `boolean`            | `true`                       |
| title          | 标题                       | `ReactNode`          | -                            |
| minHeight      | 收缩时保留的最小高度（px） | `number`             | -                            |
| headerRender   | 自定义头部                 | `(ctx) => ReactNode` | -                            |
| footerRender   | 自定义底部                 | `(ctx) => ReactNode` | -                            |
| arrowClassName | 箭头图标类名               | `string`             | `'lyrixi-iconfont-arrow-up'` |
| arrowPosition  | 箭头位置                   | `'left' \| 'right'`  | `'right'`                    |
| arrowRender    | 自定义箭头                 | `(ctx) => ReactNode` | -                            |
| children       | 内容                       | `ReactNode`          | -                            |

### 事件

| 事件    | 说明       | 类型         |
| ------- | ---------- | ------------ |
| onOpen  | 打开时回调 | `() => void` |
| onClose | 关闭时回调 | `() => void` |
