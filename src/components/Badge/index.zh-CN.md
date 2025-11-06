---
group:
  title: 数据展示
  order: 2
order: 1
title: Badge
toc: content
---

# Badge

徽标组件，用于显示数字、状态等信息。

## 何时使用

- 需要显示未读消息数量时
- 需要显示状态标识时
- 需要显示数字标记时

## 示例

<code src="./demos/Badge.jsx"></code>

## Badge

### 属性

| 属性      | 说明         | 类型               | 默认值 |
| --------- | ------------ | ------------------ | ------ |
| children  | 徽标内容     | `string \| number` | `'0'`  |
| maxLength | 最大显示长度 | `number`           | `2`    |
| ellipsis  | 省略符号     | `string`           | `'+'`  |

### Ref

| 属性       | 说明       | 类型                    |
| ---------- | ---------- | ----------------------- |
| rootDOM    | 根元素     | `HtmlSpanElement`       |
| getRootDOM | 获取根元素 | () => `HtmlSpanElement` |
