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
## IndexBar

### 何时使用

- 需要快速定位内容时
- 需要显示索引导航时
- 需要字母索引时

### 代码演示

<code src="./demos/IndexBar.tsx"></code>

### API

#### 属性

| 属性               | 说明                                                                     | 类型                                                                      | 默认值 |
| ------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------- | ------ |
| anchors            | 锚点数组                                                                 | `string[]`                                                                | -      |
| getScrollerElement | 滚动容器元素 getter（初始化时 ref 可能未挂载，传 getter 可在使用时再取） | `() => Element \| null`                                                  | -      |
| style              | 自定义样式                                                               | `CSSProperties`                                                           | -      |
| className          | 自定义类名                                                               | `string`                                                                  | -      |
| scrollToAnchor     | 自定义滚动到指定位置                                                     | `(anchor: string, opts: { scrollerElement: Element \| null }) => void`    | -      |

#### Ref

| 属性              | 说明         | 类型                                  |
| ----------------- | ------------ | ------------------------------------- |
| element           | 根元素       | `HTMLDivElement \| null`              |
| tooltipElement    | 提示元素     | `HTMLDivElement \| null`              |
| getElement        | 获取根元素   | () => `HTMLDivElement \| null`        |
| getTooltipElement | 获取提示元素 | () => `HTMLDivElement \| null`        |
| scrollToAnchor    | 滚动到锚点   | `(anchor: string) => void`            |

## IndexBar.Anchor

索引栏锚点组件。

### 何时使用

- 需要在内容中设置锚点时

### 代码演示

<code src="./demos/IndexBarAnchor.tsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型            | 默认值 |
| --------- | ---------- | --------------- | ------ |
| name      | 锚点名称   | `string`        | -      |
| style     | 自定义样式 | `CSSProperties` | -      |
| className | 自定义类名 | `string`        | -      |
| children  | 锚点内容   | `ReactNode`     | -      |

