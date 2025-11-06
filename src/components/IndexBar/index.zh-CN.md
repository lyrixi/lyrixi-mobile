---
group:
  title: 反馈
  order: 2
order: 1
title: IndexBar
toc: content
---

# IndexBar

索引栏组件，用于快速定位到指定位置。

IndexBar 需要包裹滚动容器

## 何时使用

- 需要快速定位到指定位置时
- 需要字母索引导航时
- 需要长列表快速跳转时
- 需要分组列表导航时

## 示例

<code src="./demos/demo1.jsx"></code>

## IndexBar

### 属性

| 属性          | 说明         | 类型                       | 默认值 |
| ------------- | ------------ | -------------------------- | ------ |
| anchors       | 锚点列表     | `array`                    | -      |
| onTouchAnchor | 触摸锚点回调 | `(anchor: string) => void` | -      |
| scrollerDOM   | 滚动容器     | `HTMLElement`              | -      |
| children      | 子元素       | `ReactNode`                | -      |

### Ref

| 属性           | 说明         | 类型                       |
| -------------- | ------------ | -------------------------- |
| rootDOM        | 根元素       | `HtmlDivElement`           |
| tooltipDOM     | 提示元素     | `HtmlDivElement`           |
| getRootDOM     | 获取根元素   | () => `HtmlDivElement`     |
| getTooltipDOM  | 获取提示元素 | () => `HtmlDivElement`     |
| activeAnchor   | 激活锚点     | `(anchor: string) => void` |
| update         | 更新锚点     | `() => void`               |
| scrollToAnchor | 滚动到锚点   | `(anchor: string) => void` |
