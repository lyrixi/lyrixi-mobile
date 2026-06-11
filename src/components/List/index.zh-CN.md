---
group:
  title: 数据展示
  order: 5
order: 1
title: List
toc: content
---

# List

列表组件，用于展示数据列表。

## 何时使用

- 需要展示数据列表时
- 需要支持单选或多选时
- 需要分组显示数据时

## 代码演示

<code src="./demos/List.tsx"></code>

### List.Item 单独使用

<code src="./demos/ListItem.tsx"></code>

### List.InfiniteScroll

<code src="./demos/ListInfiniteScroll.tsx"></code>

### List.HeaderItem

<code src="./demos/ListHeaderItem.tsx"></code>

## API

### 属性

| 属性             | 说明             | 类型                                                                                                                         | 默认值 |
| ---------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------ |
| value            | 选中的值         | `ListItem \| ListItem[] \| null`                                                                                             | -      |
| multiple         | 是否多选         | `boolean`                                                                                                                    | -      |
| allowClear       | 允许清除         | `boolean`                                                                                                                    | -      |
| list             | 列表数据         | `ListItem[]`                                                                                                                 | -      |
| formatViewList   | 格式化列表       | `(list: ListItem[]) => ViewItem[]`                                                                                           | -      |
| formatViewItem   | 格式化项         | `(item: ListItem, options: { index: number }) => ViewItem`                                                                    | -      |
| checkable        | 是否可选         | `boolean`                                                                                                                    | -      |
| style            | 自定义样式       | `CSSProperties`                                                                                                              | -      |
| className        | 自定义类名       | `string`                                                                                                                     | -      |
| itemStyle        | 项样式           | `CSSProperties`                                                                                                              | -      |
| itemClassName    | 项类名           | `string`                                                                                                                     | -      |
| itemLayout       | 项布局           | `string`                                                                                                                     | -      |
| itemRender       | 自定义项渲染     | `(item: ListItem, options: { index: number; checked: boolean; onChange: (item: ListItem) => void }) => ReactNode`             | -      |
| checkboxVariant  | 复选框样式变体   | `string`                                                                                                                     | -      |
| checkboxPosition | 复选框位置       | `string`                                                                                                                     | -      |
| onChange         | 变化事件         | `(newValue: ListItem \| ListItem[] \| null, options?: { action?: string; checkedItem: ListItem }) => void`                    | -      |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HTMLDivElement`       |
| getElement | 获取根元素 | () => `HTMLDivElement` |

## List.Item

列表项组件。

### 何时使用

- 需要单独使用列表项时

### 代码演示

见上方 List.Item 示例。

### API

#### 属性

| 属性             | 说明         | 类型                                                            | 默认值 |
| ---------------- | ------------ | --------------------------------------------------------------- | ------ |
| _raw             | 原始数据     | `ListItem`                                                      | -      |
| checked          | 是否选中     | `boolean`                                                       | -      |
| disabled         | 是否禁用     | `boolean`                                                       | -      |
| checkable        | 是否可选     | `boolean`                                                       | -      |
| style            | 自定义样式   | `CSSProperties`                                                 | -      |
| className        | 自定义类名   | `string`                                                        | -      |
| layout           | 项布局       | `string`                                                        | -      |
| imageUrl         | 图片地址     | `string`                                                        | -      |
| imageRender      | 图片渲染     | `(item: ListItem & { checked?: boolean }) => ReactNode`         | -      |
| avatarUrl        | 头像地址     | `string`                                                        | -      |
| avatarRender     | 头像渲染     | `(item: ListItem & { checked?: boolean }) => ReactNode`         | -      |
| title            | 标题         | `ReactNode`                                                     | -      |
| description      | 描述         | `ReactNode`                                                     | -      |
| note             | 备注         | `ReactNode`                                                     | -      |
| content          | 内容         | `ReactNode`                                                     | -      |
| actionRender     | 操作区渲染   | `(item: ListItem & { checked?: boolean }) => ReactNode`         | -      |
| checkboxVariant  | 复选框样式   | `string`                                                        | -      |
| checkboxPosition | 复选框位置   | `string`                                                        | -      |
| onSelect         | 选中事件     | `(item: ListItem & { checked?: boolean }) => void`              | -      |
| onClick          | 点击事件     | `(e: MouseEvent<HTMLDivElement>) => void`                       | -      |

## List.HeaderItem

列表分组标题组件。

### 何时使用

- 需要给列表添加分组标题时

### 代码演示

见上方 List.HeaderItem 示例。

### API

#### 属性

| 属性        | 说明       | 类型             | 默认值 |
| ----------- | ---------- | ---------------- | ------ |
| anchor      | 锚点标识   | `string`         | -      |
| description | 描述       | `ReactNode`      | -      |
| style       | 自定义样式 | `CSSProperties`  | -      |
| className   | 自定义类名 | `string`         | -      |
| title       | 标题       | `ReactNode`      | -      |

## List.InfiniteScroll

无限滚动加载更多组件。

### 何时使用

- 列表使用虚拟滚动时需要显示的加载指示器

### 代码演示

见上方 List.InfiniteScroll 示例。

### API

#### 属性

| 属性    | 说明       | 类型        | 默认值 |
| ------- | ---------- | ----------- | ------ |
| status  | 加载状态   | `string`    | -      |
| content | 内容       | `ReactNode` | -      |
