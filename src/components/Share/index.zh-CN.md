---
group:
  title: 数据展示
  order: 5
order: 1
title: Share
toc: content
---

# Share

分享组件，用于分享内容。

## 何时使用

- 需要分享内容时
- 需要调用平台分享功能时
- 需要自定义分享选项时

## 代码演示

<code src="./demos/Main/index.jsx"></code>

## API

### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| shareTo   | 分享配置   | `object`    | -      |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 分享内容   | `ReactNode` | -      |

### Ref

| 属性           | 说明         | 类型                           |
| -------------- | ------------ | ------------------------------ | --- |
| mainElement    | 主元素       | `HtmlDivElement`               |
| getMainElement | 获取主元素   | () => `HtmlDivElement`         |
| support        | 检查是否支持 | `(shareTo: object) => boolean` | -   |

## Share.Combo

分享组合组件，结合输入框和分享。

### 何时使用

- 需要结合输入框和分享时

### 代码演示

<code src="./demos/Combo/index.jsx"></code>

### API

#### 属性

同 Share 组件属性。

#### Ref

同 Share 组件 Ref。

## Share.Modal

分享模态框组件。

### 何时使用

- 需要以模态框形式显示分享时

### 代码演示

<code src="./demos/Modal/index.jsx"></code>

### API

#### 属性

同 Share 组件属性。

#### Ref

同 Share 组件 Ref。

## Share.Main

分享主组件。

### 何时使用

- 需要直接使用分享主组件时

### 代码演示

<code src="./demos/Main/index.jsx"></code>

### API

#### 属性

同 Share 组件属性。

#### Ref

同 Share 组件 Ref。

## Share.Item

分享项组件。

### 何时使用

- 需要显示分享项时

### 代码演示

<code src="./demos/Main/index.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 分享项内容 | `ReactNode` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Share.support

检查是否支持分享（工具函数）。

### 参数

| 参数    | 说明     | 类型     | 默认值 |
| ------- | -------- | -------- | ------ |
| shareTo | 分享配置 | `object` | -      |

### 返回值

| 类型      | 说明         |
| --------- | ------------ |
| `boolean` | 是否支持分享 |
