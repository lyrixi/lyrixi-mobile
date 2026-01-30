---
group:
  title: 数据展示
  order: 5
order: 1
title: Skeleton
toc: content
---

# Skeleton

骨架屏组件，用于在内容加载时显示占位效果。

## 何时使用

- 需要显示加载占位效果时
- 需要在内容加载时显示骨架屏时
- 需要提升用户体验时

## 代码演示

<code src="./demos/Skeleton.jsx"></code>

## API

### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 骨架屏内容 | `ReactNode` | -      |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Skeleton.Block

块级骨架屏组件。

### 何时使用

- 需要显示块级骨架屏时

### 代码演示

<code src="./demos/SkeletonBlock.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型     | 默认值 |
| --------- | ---------- | -------- | ------ |
| style     | 自定义样式 | `object` | -      |
| className | 自定义类名 | `string` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Skeleton.Paragraph

段落骨架屏组件。

### 何时使用

- 需要显示段落骨架屏时

### 代码演示

<code src="./demos/SkeletonParagraph.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型     | 默认值 |
| --------- | ---------- | -------- | ------ |
| style     | 自定义样式 | `object` | -      |
| className | 自定义类名 | `string` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Skeleton.Tabs

标签页骨架屏组件。

### 何时使用

- 需要显示标签页骨架屏时

### 代码演示

<code src="./demos/SkeletonTabs.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型     | 默认值 |
| --------- | ---------- | -------- | ------ |
| style     | 自定义样式 | `object` | -      |
| className | 自定义类名 | `string` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |
