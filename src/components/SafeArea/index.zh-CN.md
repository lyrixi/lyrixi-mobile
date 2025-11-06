---
group:
  title: 布局
  order: 2
order: 1
title: SafeArea
toc: content
---

# SafeArea

安全区域组件，用于适配不同设备的安全区域。

## 何时使用

- 需要适配刘海屏时
- 需要适配底部安全区域时
- 需要适配不同设备时
- 需要避免内容被遮挡时

## 示例

<code src="./demos/demo1.jsx"></code>

## SafeArea

### 属性

| 属性     | 说明         | 类型                | 默认值 |
| -------- | ------------ | ------------------- | ------ |
| safeArea | 安全区域类型 | `'auto' \| boolean` | -      |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| rootDOM    | 根元素     | `HtmlDivElement`       |
| getRootDOM | 获取根元素 | () => `HtmlDivElement` |
