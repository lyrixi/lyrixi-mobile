---
group:
  title: 数据展示
  order: 5
order: 1
title: TabBar
toc: content
---

# TabBar

标签栏组件，用于显示标签页。

## 何时使用

- 需要显示标签页时
- 需要切换不同内容时
- 需要显示导航标签时

## 代码演示

<code src="./demos/Tabs.jsx"></code>

## API

### 属性

| 属性      | 说明       | 类型                      | 默认值 |
| --------- | ---------- | ------------------------- | ------ |
| value     | 选中的值   | `object`                  | -      |
| list      | 标签列表   | `Array<object>`           | -      |
| style     | 自定义样式 | `object`                  | -      |
| className | 自定义类名 | `string`                  | -      |
| onChange  | 变化事件   | `(value: object) => void` | -      |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## TabBar.Tabs

标签页组件。

### 何时使用

- 需要显示标签页时

### 代码演示

<code src="./demos/Tabs.jsx"></code>

### API

#### 属性

| 属性                | 说明       | 类型                                                                                                                  | 默认值     |
| ------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------- | ---------- |
| value               | 选中的值   | `object`                                                                                                              | -          |
| list                | 标签列表   | `Array<{id: string, name: string, description: string, iconRender: function, content: ReactNode, disabled: boolean}>` | `[]`       |
| separator           | 分隔符     | `ReactNode`                                                                                                           | -          |
| gap                 | 间距       | `string \| number`                                                                                                    | -          |
| style               | 自定义样式 | `object`                                                                                                              | -          |
| className           | 自定义类名 | `string`                                                                                                              | -          |
| disabled            | 是否禁用   | `boolean`                                                                                                             | -          |
| descriptionPosition | 描述位置   | `'top' \| 'bottom'`                                                                                                   | `'bottom'` |
| onChange            | 变化事件   | `(value: object) => void`                                                                                             | -          |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## TabBar.Slide

滑动标签栏组件。

### 何时使用

- 需要显示滑动标签栏时

### 代码演示

<code src="./demos/Slide.jsx"></code>

### API

#### 属性

同 TabBar.Tabs 组件属性。

#### Ref

同 TabBar.Tabs 组件 Ref。

## TabBar.Menus

菜单标签栏组件。

### 何时使用

- 需要显示菜单标签栏时

### 代码演示

<code src="./demos/Menus.jsx"></code>

### API

#### 属性

同 TabBar.Tabs 组件属性。

#### Ref

同 TabBar.Tabs 组件 Ref。

## TabBar.Group

分组标签栏组件。

### 何时使用

- 需要显示分组标签栏时

### 代码演示

<code src="./demos/Group.jsx"></code>

### API

#### 属性

同 TabBar.Tabs 组件属性。

#### Ref

同 TabBar.Tabs 组件 Ref。
