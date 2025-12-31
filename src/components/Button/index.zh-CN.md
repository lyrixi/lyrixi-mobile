---
group:
  title: 反馈
  order: 4
order: 1
title: Button
toc: content
---

# Button

按钮组件，用于触发操作。

## 何时使用

- 需要触发一个操作时
- 需要提交表单时
- 需要执行确认、取消等操作时

## 代码演示

<code src="./demos/Button.jsx"></code>

## API

### 属性

| 属性            | 说明           | 类型                                                                                                 | 默认值         |
| --------------- | -------------- | ---------------------------------------------------------------------------------------------------- | -------------- |
| id              | 按钮 ID        | `string`                                                                                             | -              |
| direction       | 方向           | `'horizontal' \| 'vertical'`                                                                         | `'horizontal'` |
| block           | 是否为块级元素 | `boolean`                                                                                            | -              |
| color           | 颜色           | `'default' \| 'transparent' \| 'primary' \| 'link' \| 'warning' \| 'danger' \| 'success'`            | `'default'`    |
| backgroundColor | 背景颜色       | `'default' \| 'transparent' \| 'white' \| 'primary' \| 'link' \| 'warning' \| 'danger' \| 'success'` | `'white'`      |
| borderColor     | 边框颜色       | `'default' \| 'transparent' \| 'primary' \| 'link' \| 'warning' \| 'danger' \| 'success'`            | `'default'`    |
| border          | 边框样式       | `'none' \| 'dotted' \| 'dashed' \| 'solid'`                                                          | `'solid'`      |
| size            | 高度尺寸       | `'xxs' \| 'xs' \| 's' \| 'm' \| 'l' \| 'xl' \| [number, number]`                                     | -              |
| sizeEqual       | 是否为等宽高   | `boolean`                                                                                            | -              |
| fontSize        | 字体大小       | `'xxs' \| 'xs' \| 's' \| 'm' \| 'l' \| 'xl'`                                                         | -              |
| radius          | 圆角           | `'xxs' \| 'xs' \| 's' \| 'm' \| 'l' \| 'xl'`                                                         | -              |
| style           | 自定义样式     | `object`                                                                                             | -              |
| className       | 自定义类名     | `string`                                                                                             | -              |
| disabled        | 是否禁用       | `boolean`                                                                                            | -              |
| children        | 按钮内容       | `ReactNode`                                                                                          | -              |
| onClick         | 点击事件       | `(e: Event) => void`                                                                                 | -              |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Button.Text

按钮文本组件。

### 何时使用

- 需要在按钮中显示文本时

### 代码演示

<code src="./demos/ButtonText.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 文本内容   | `ReactNode` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Button.Icon

按钮图标组件。

### 何时使用

- 需要在按钮中显示图标时

### 代码演示

<code src="./demos/ButtonIcon.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 图标内容   | `ReactNode` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |
