---
group:
  title: 通用
  order: 1
order: 1
title: Icon
toc: content
---

# Icon

图标组件，用于显示图标。

## 何时使用

- 需要显示图标时
- 需要自定义图标样式时
- 需要在按钮、输入框等组件中使用图标时

## 代码演示

<code src="./demos/demo1.jsx"></code>

## API

### 属性

| 属性            | 说明         | 类型                                                                                                 | 默认值 |
| --------------- | ------------ | ---------------------------------------------------------------------------------------------------- | ------ |
| disabled        | 是否禁用     | `boolean`                                                                                            | -      |
| color           | 颜色         | `'default' \| 'transparent' \| 'primary' \| 'link' \| 'warning' \| 'danger' \| 'success'`            | -      |
| backgroundColor | 背景颜色     | `'default' \| 'transparent' \| 'white' \| 'primary' \| 'link' \| 'warning' \| 'danger' \| 'success'` | -      |
| size            | 尺寸         | `'xxs' \| 'xs' \| 's' \| 'm' \| 'l' \| 'xl'`                                                         | `'m'`  |
| radius          | 圆角         | `'xxs' \| 'xs' \| 's' \| 'm' \| 'l' \| 'xl'`                                                         | -      |
| style           | 自定义样式   | `object`                                                                                             | -      |
| className       | 自定义类名   | `string`                                                                                             | -      |
| children        | 图标内容     | `ReactNode`                                                                                          | -      |
| onClick         | 点击事件     | `(e: Event) => void`                                                                                 | -      |
| onTouchStart    | 触摸开始事件 | `(e: Event) => void`                                                                                 | -      |

### Ref

| 属性       | 说明       | 类型                 |
| ---------- | ---------- | -------------------- |
| element    | 根元素     | `HtmlIElement`       |
| getElement | 获取根元素 | () => `HtmlIElement` |
