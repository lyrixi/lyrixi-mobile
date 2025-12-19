---
group:
  title: 布局
  order: 3
order: 1
title: Page
toc: content
---

# Page

页面容器组件，用于构建页面布局。

## 何时使用

- 需要构建页面布局时
- 需要页面级别的容器时
- 需要带安全区的页面时

## 代码演示

<code src="./demos/Page.jsx"></code>

## API

### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| safeArea  | 是否安全区 | `boolean`   | -      |
| full      | 是否全屏   | `boolean`   | `true` |
| layout    | 布局方式   | `string`    | -      |
| animation | 动画效果   | `string`    | -      |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 页面内容   | `ReactNode` | -      |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Page.Header

页面头部组件。

### 何时使用

- 需要在页面顶部显示标题、导航等内容时

### 代码演示

<code src="./demos/Page.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 头部内容   | `ReactNode` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Page.Main

页面主体组件。

### 何时使用

- 需要在页面中间显示主要内容时

### 代码演示

<code src="./demos/Page.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 主体内容   | `ReactNode` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Page.Footer

页面底部组件。

### 何时使用

- 需要在页面底部显示操作按钮、信息等内容时

### 代码演示

<code src="./demos/Page.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 底部内容   | `ReactNode` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |
