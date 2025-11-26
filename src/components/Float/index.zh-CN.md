---
group:
  title: 反馈
  order: 2
order: 1
title: Float
toc: content
---

# Float 悬浮按钮

悬浮按钮组件，用于快速操作入口。

## 何时使用

- 需要快速操作入口时
- 需要悬浮操作按钮时
- 需要可拖动的按钮时
- 需要辅助触摸功能时

## 示例

<code src="./demos/index.jsx"></code>

## Float

### 属性

| 属性      | 说明         | 类型                         | 默认值                                     |
| --------- | ------------ | ---------------------------- | ------------------------------------------ |
| safeArea  | 安全区域     | `boolean`                    | `true`                                     |
| portal    | 渲染容器     | `HTMLElement`                | -                                          |
| draggable | 是否可拖动   | `boolean`                    | -                                          |
| gap       | 边距         | `object`                     | `{ top: 8, right: 8, bottom: 8, left: 8 }` |
| list      | 按钮列表     | `array`                      | -                                          |
| onChange  | 变化回调     | `(item: object) => void`     | -                                          |
| onDragEnd | 拖动结束回调 | `(position: object) => void` | -                                          |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| rootDOM    | 根元素     | `HtmlDivElement`       |
| getRootDOM | 获取根元素 | () => `HtmlDivElement` |
