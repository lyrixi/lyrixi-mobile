---
group:
  title: 布局
  order: 3
order: 1
title: Flex
toc: content
---

# Flex

弹性布局组件，用于创建灵活的布局。

## 何时使用

- 需要创建灵活的布局时
- 需要控制元素对齐方式时
- 需要控制元素间距时

## 代码演示

<code src="./demos/flex.jsx"></code>

## API

### 属性

| 属性      | 说明       | 类型                                                                                          | 默认值         |
| --------- | ---------- | --------------------------------------------------------------------------------------------- | -------------- |
| direction | 方向       | `'horizontal' \| 'vertical'`                                                                  | `'horizontal'` |
| wrap      | 是否换行   | `boolean \| 'scroll'`                                                                         | `false`        |
| align     | 对齐方式   | `'start' \| 'end' \| 'center' \| 'between' \| 'around' \| 'evenly'`                           | `'start'`      |
| gap       | 间距       | `number \| 'xxxs' \| 'xxs' \| 'xs' \| 's' \| 'm' \| 'l' \| 'xl' \| 'xxl' \| [number, number]` | `'s'`          |
| style     | 自定义样式 | `object`                                                                                      | -              |
| className | 自定义类名 | `string`                                                                                      | -              |
| children  | 子元素     | `ReactNode`                                                                                   | -              |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Flex.Compact

紧凑布局组件，用于创建紧凑的布局。

### 何时使用

- 需要创建紧凑的布局时
- 需要减少元素间距时

### 代码演示

<code src="./demos/compact.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 子元素     | `ReactNode` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |
