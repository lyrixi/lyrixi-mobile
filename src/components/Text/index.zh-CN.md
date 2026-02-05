---
group:
  title: 数据展示
  order: 5
order: 1
title: Text
toc: content
---

# Text

文本组件。

### 何时使用

- 需要显示文本时

### 代码演示

<code src="./demos/Text.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型                                                                               | 默认值 |
| --------- | ---------- | ---------------------------------------------------------------------------------- | ------ |
| highlight | 高亮文本   | `string \| Array<string>`                                                          | -      |
| ellipsis  | 省略配置   | `{rows: number, expandable: boolean, defaultExpanded: boolean}` | -      |
| style     | 自定义样式 | `object`                                                                           | -      |
| className | 自定义类名 | `string`                                                                           | -      |
| children  | 文本内容   | `ReactNode`                                                                        | -      |

#### Ref

| 属性           | 说明       | 类型                   |
| -------------- | ---------- | ---------------------- |
| element        | 根元素     | `HTMLDivElement`       |
| getElement     | 获取根元素 | () => `HTMLDivElement` |
| toggleEllipsis | 切换省略   | `() => boolean`        |
| hasEllipsis    | 是否有省略 | `() => boolean`        |
