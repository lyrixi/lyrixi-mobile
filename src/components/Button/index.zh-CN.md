---
group:
  title: 反馈
  order: 2
order: 1
title: Button
toc: content
---

# Button

用于开始一个即时操作。

## 何时使用

标记了一个或封装一组操作命令，响应用户点击行为，触发相应的业务逻辑。

## 示例

<code src="./demos/demo1.jsx"></code>

## Button

### 属性

| 属性            | 说明       | 类型                                                                                                                                                                                                      | 默认值      |
| --------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| color           | 按钮颜色   | `'default' \| 'primary' \| 'link' \| 'warning' \| 'danger' \| 'success'`                                                                                                                                  | `'default'` |
| backgroundColor | 背景颜色   | `'default' \| 'white' \| 'transparent' \| 'primary' \| 'primary-lighten' \| 'link' \| 'link-lighten' \| 'warning' \| 'warning-lighten' \| 'danger' \| 'danger-lighten' \| 'success' \| 'success-lighten'` | `'white'`   |
| border          | 边框样式   | `'none' \| 'dotted' \| 'dashed' \| 'solid'`                                                                                                                                                               | `'solid'`   |
| size            | 按钮尺寸   | `'xxs' \| 'xs' \| 's' \| 'm' \| 'l' \| 'xl'`                                                                                                                                                              | `'m'`       |
| radius          | 圆角大小   | `'xxs' \| 'xs' \| 's' \| 'm' \| 'l' \| 'xl'`                                                                                                                                                              | -           |
| sizeEqual       | 等宽高     | true/false 'round'`                                                                                                                                                                                       | -           |
| className       | 自定义类名 | `string`                                                                                                                                                                                                  | -           |
| children        | 按钮内容   | `ReactNode`                                                                                                                                                                                               | -           |

### Ref

| 属性       | 说明                 | 类型                   |
| ---------- | -------------------- | ---------------------- |
| element    | 原始 button 元素     | `HtmlDivElement`       |
| getElement | 获取原始 button 元素 | () => `HtmlDivElement` |
