---
group:
  title: 导航
  order: 6
order: 1
title: TabBar
toc: content
---

# TabBar

标签栏组件，用于显示标签页。

## TabBar.Tabs

标签页组件。

### 何时使用

- 需要显示标签页时

### 代码演示

<code src="./demos/TabBarTabs.tsx"></code>

### API

#### 属性

| 属性                | 说明       | 类型                                                                                                                  | 默认值     |
| ------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------- | ---------- |
| value               | 选中的值   | `{ id?: string \| number }`                                                                                          | -          |
| list                | 标签列表   | `Array<{id?: string \| number, name?: ReactNode, description?: ReactNode, placeholder?: ReactNode, disabled?: boolean, iconRender?: (params: Record<string, unknown>) => ReactNode, content?: ReactNode \| ((params: Record<string, unknown>) => ReactNode)}>` | `[]`       |
| separator           | 分隔符     | `ReactNode`                                                                                                           | -          |
| gap                 | 间距       | `string \| number`                                                                                                    | -          |
| style               | 自定义样式 | `CSSProperties`                                                                                                       | -          |
| className           | 自定义类名 | `string`                                                                                                              | -          |
| disabled            | 是否禁用   | `boolean`                                                                                                             | -          |
| descriptionPosition | 描述位置   | `string`                                                                                                              | `'bottom'` |
| onChange            | 变化事件   | `(item: TabBarItem) => void`                                                                                         | -          |

#### Ref

| 属性       | 说明       | 类型                         |
| ---------- | ---------- | ---------------------------- |
| element    | 根元素     | `HTMLDivElement \| null`     |
| getElement | 获取根元素 | () => `HTMLDivElement \| null` |

## TabBar.Slide

滑动标签栏组件。

### 何时使用

- 需要显示滑动标签栏时

### 代码演示

<code src="./demos/TabBarSlide.tsx"></code>

### API

#### 属性

| 属性                | 说明       | 类型                                                                                                                  | 默认值     |
| ------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------- | ---------- |
| value               | 选中的值   | `{ id?: string \| number }`                                                                                          | -          |
| list                | 标签列表   | `Array<{id?: string \| number, name?: ReactNode, description?: ReactNode, placeholder?: ReactNode, disabled?: boolean, iconRender?: (params: Record<string, unknown>) => ReactNode, content?: ReactNode \| ((params: Record<string, unknown>) => ReactNode)}>` | `[]`       |
| separator           | 分隔符     | `ReactNode`                                                                                                           | -          |
| style               | 自定义样式 | `CSSProperties`                                                                                                       | -          |
| className           | 自定义类名 | `string`                                                                                                              | -          |
| disabled            | 是否禁用   | `boolean`                                                                                                             | -          |
| descriptionPosition | 描述位置   | `string`                                                                                                              | `'bottom'` |
| onChange            | 变化事件   | `(item: TabBarItem) => void`                                                                                         | -          |

#### Ref

| 属性       | 说明       | 类型                         |
| ---------- | ---------- | ---------------------------- |
| element    | 根元素     | `HTMLDivElement \| null`     |
| getElement | 获取根元素 | () => `HTMLDivElement \| null` |

## TabBar.Menus

菜单标签栏组件。

### 何时使用

- 需要显示菜单标签栏时

### 代码演示

<code src="./demos/TabBarMenus.tsx"></code>

### API

#### 属性

| 属性                | 说明       | 类型                                                                                                                  | 默认值     |
| ------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------- | ---------- |
| value               | 选中的值   | `{ id?: string \| number }`                                                                                          | -          |
| list                | 标签列表   | `Array<{id?: string \| number, name?: ReactNode, description?: ReactNode, placeholder?: ReactNode, disabled?: boolean, iconRender?: (params: Record<string, unknown>) => ReactNode, content?: ReactNode \| ((params: Record<string, unknown>) => ReactNode)}>` | `[]`       |
| separator           | 分隔符     | `ReactNode`                                                                                                           | -          |
| style               | 自定义样式 | `CSSProperties`                                                                                                       | -          |
| className           | 自定义类名 | `string`                                                                                                              | -          |
| disabled            | 是否禁用   | `boolean`                                                                                                             | -          |
| descriptionPosition | 描述位置   | `string`                                                                                                              | `'bottom'` |
| onChange            | 变化事件   | `(item: TabBarItem) => void`                                                                                         | -          |

#### Ref

| 属性       | 说明       | 类型                         |
| ---------- | ---------- | ---------------------------- |
| element    | 根元素     | `HTMLDivElement \| null`     |
| getElement | 获取根元素 | () => `HTMLDivElement \| null` |

## TabBar.Group

分组标签栏组件。

### 何时使用

- 需要显示分组标签栏时

### 代码演示

<code src="./demos/TabBarGroup.tsx"></code>

### API

#### 属性

| 属性                | 说明       | 类型                                                                                                                  | 默认值     |
| ------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------- | ---------- |
| value               | 选中的值   | `{ id?: string \| number }`                                                                                          | -          |
| list                | 标签列表   | `Array<{id?: string \| number, name?: ReactNode, description?: ReactNode, placeholder?: ReactNode, disabled?: boolean, iconRender?: (params: Record<string, unknown>) => ReactNode, content?: ReactNode \| ((params: Record<string, unknown>) => ReactNode)}>` | `[]`       |
| separator           | 分隔符     | `ReactNode`                                                                                                           | -          |
| style               | 自定义样式 | `CSSProperties`                                                                                                       | -          |
| className           | 自定义类名 | `string`                                                                                                              | -          |
| disabled            | 是否禁用   | `boolean`                                                                                                             | -          |
| descriptionPosition | 描述位置   | `string`                                                                                                              | `'bottom'` |
| onChange            | 变化事件   | `(item: TabBarItem) => void`                                                                                         | -          |

#### Ref

| 属性       | 说明       | 类型                         |
| ---------- | ---------- | ---------------------------- |
| element    | 根元素     | `HTMLDivElement \| null`     |
| getElement | 获取根元素 | () => `HTMLDivElement \| null` |
