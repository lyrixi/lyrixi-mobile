---
group:
  title: 数据展示
  order: 5
order: 1
title: Progress
toc: content
---

# Progress

进度条组件，用于显示进度。

## 何时使用

- 需要显示操作进度时
- 需要显示加载进度时
- 需要显示完成度时

## 代码演示

<code src="./demos/barBasic.jsx"></code>

## API

### 属性

| 属性      | 说明       | 类型     | 默认值 |
| --------- | ---------- | -------- | ------ |
| percent   | 进度百分比 | `number` | `0`    |
| style     | 自定义样式 | `object` | -      |
| className | 自定义类名 | `string` | -      |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Progress.Bar

条形进度条组件。

### 何时使用

- 需要显示条形进度时

### 代码演示

<code src="./demos/barBasic.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型     | 默认值 |
| --------- | ---------- | -------- | ------ |
| percent   | 进度百分比 | `number` | `0`    |
| style     | 自定义样式 | `object` | -      |
| className | 自定义类名 | `string` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Progress.Circle

圆形进度条组件。

### 何时使用

- 需要显示圆形进度时

### 代码演示

<code src="./demos/circleBasic.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| percent   | 进度百分比 | `number`    | `0`    |
| size      | 尺寸       | `number`    | `50`   |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 中间内容   | `ReactNode` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |
