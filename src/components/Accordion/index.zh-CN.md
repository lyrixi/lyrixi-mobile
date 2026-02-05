---
group:
  title: 数据展示
  order: 5
order: 1
title: Accordion
toc: content
---

# Accordion

手风琴组件，用于折叠和展开内容。

## 何时使用

- 需要折叠和展开内容时
- 需要显示可折叠的面板时
- 需要节省页面空间时

## 代码演示

<code src="./demos/Accordion.jsx"></code>

## API

### 属性

| 属性           | 说明           | 类型                                         | 默认值                       |
| -------------- | -------------- | -------------------------------------------- | ---------------------------- |
| open           | 是否展开       | `boolean`                                    | `false`                      |
| style          | 自定义样式     | `object`                                     | -                            |
| className      | 自定义类名     | `string`                                     | -                            |
| minHeight      | 最小高度       | `number`                                     | -                            |
| title          | 标题           | `ReactNode`                                  | -                            |
| headerRender   | 自定义头部渲染 | `() => ReactNode`                            | -                            |
| ellipsis       | 省略配置       | `{expandText: string, collapseText: string}` | -                            |
| ellipsisRender | 自定义省略渲染 | `(props: {open: boolean}) => ReactNode`      | -                            |
| arrowClassName | 箭头类名       | `string`                                     | `'lyrixi-iconfont-arrow-up'` |
| arrowPosition  | 箭头位置       | `'left' \| 'right'`                          | `'right'`                    |
| arrowRender    | 自定义箭头渲染 | `(props: {open: boolean}) => ReactNode`      | -                            |
| children       | 内容           | `ReactNode`                                  | -                            |
| onOpen         | 展开事件       | `() => void`                                 | -                            |
| onClose        | 收起事件       | `() => void`                                 | -                            |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HTMLDivElement`       |
| getElement | 获取根元素 | () => `HTMLDivElement` |
| open       | 展开       | `() => void`           |
| close      | 收起       | `() => void`           |
