---
group:
  title: 导航
  order: 6
order: 1
title: IndexBar
toc: content
---

# IndexBar

索引栏组件，用于快速定位内容。

## 何时使用

- 需要快速定位内容时
- 需要显示索引导航时
- 需要字母索引时

## 代码演示

<code src="./demos/IndexBar.jsx"></code>

## API

### 属性

| 属性            | 说明                 | 类型                       | 默认值 |
| --------------- | -------------------- | -------------------------- | ------ |
| anchors         | 锚点数组             | `Array<string>`            | -      |
| scrollerElement | 滚动容器元素         | `HTMLElement`              | -      |
| style           | 自定义样式           | `object`                   | -      |
| className       | 自定义类名           | `string`                   | -      |
| scrollToAnchor  | 自定义滚动到指定位置 | `(anchor: string) => void` | -      |

### Ref

| 属性              | 说明         | 类型                       |
| ----------------- | ------------ | -------------------------- | --- |
| element           | 根元素       | `HtmlDivElement`           |
| tooltipElement    | 提示元素     | `HtmlDivElement`           |
| getElement        | 获取根元素   | () => `HtmlDivElement`     |
| getTooltipElement | 获取提示元素 | () => `HtmlDivElement`     |
| scrollToAnchor    | 滚动到锚点   | `(anchor: string) => void` | -   |

## IndexBar.Anchor

索引栏锚点组件。

### 何时使用

- 需要在内容中设置锚点时

### 代码演示

<code src="./demos/IndexBarAnchor.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| id        | 锚点 ID    | `string`    | -      |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 锚点内容   | `ReactNode` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |
