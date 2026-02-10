---
group:
  title: 数据展示
  order: 5
order: 1
title: Badge
toc: content
---

# Badge

徽标组件，用于显示数字、状态等标记。

## 何时使用

- 需要显示数字标记时
- 需要显示状态标记时
- 需要在元素上显示标记时

## 代码演示

<code src="./demos/Badge.jsx"></code>

## API

### 属性

| 属性      | 说明       | 类型                            | 默认值 |
| --------- | ---------- | ------------------------------- | ------ |
| children  | 徽标内容   | `string \| number \| ReactNode` | `'0'`  |
| style     | 自定义样式 | `object`                        | -      |
| className | 自定义类名 | `string`                        | -      |
| maxLength | 最大长度   | `number`                        | `2`    |
| ellipsis  | 省略符     | `string`                        | `'+'`  |

### Ref

| 属性       | 说明       | 类型                    |
| ---------- | ---------- | ----------------------- |
| element    | 根元素     | `HtmlSpanElement`       |
| getElement | 获取根元素 | () => `HtmlSpanElement` |
