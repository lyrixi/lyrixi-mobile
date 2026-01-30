---
group:
  title: 数据展示
  order: 5
order: 1
title: ToolBar
toc: content
---

# ToolBar

工具栏组件，用于显示工具栏。

## 何时使用

- 需要显示工具栏时
- 需要显示操作按钮时
- 需要显示筛选、搜索等功能时

## 代码演示

<code src="./demos/ToolBar.jsx"></code>

## API

### 属性

| 属性      | 说明       | 类型                    | 默认值      |
| --------- | ---------- | ----------------------- | ----------- |
| variant   | 变体       | `'filled' \| 'default'` | `'default'` |
| style     | 自定义样式 | `object`                | -           |
| className | 自定义类名 | `string`                | -           |
| children  | 工具栏内容 | `ReactNode`             | -           |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## ToolBar.Button

工具栏按钮组件。

### 何时使用

- 需要在工具栏中显示按钮时

### 代码演示

<code src="./demos/ToolBarButton.jsx"></code>

### API

#### 属性

| 属性            | 说明           | 类型                                                                                                 | 默认值   |
| --------------- | -------------- | ---------------------------------------------------------------------------------------------------- | -------- |
| direction       | 方向           | `'horizontal' \| 'vertical'`                                                                         | -        |
| block           | 是否为块级元素 | `boolean`                                                                                            | -        |
| color           | 颜色           | `'default' \| 'transparent' \| 'primary' \| 'info' \| 'warning' \| 'danger' \| 'success'`            | -        |
| backgroundColor | 背景颜色       | `'default' \| 'transparent' \| 'white' \| 'primary' \| 'info' \| 'warning' \| 'danger' \| 'success'` | -        |
| borderColor     | 边框颜色       | `'default' \| 'transparent' \| 'primary' \| 'info' \| 'warning' \| 'danger' \| 'success'`            | -        |
| border          | 边框样式       | `'none' \| 'dotted' \| 'dashed' \| 'solid'`                                                          | `'none'` |
| size            | 高度尺寸       | `'xxs' \| 'xs' \| 's' \| 'm' \| 'l' \| 'xl' \| [number, number]`                                     | -        |
| sizeEqual       | 是否为等宽高   | `boolean`                                                                                            | -        |
| fontSize        | 字体大小       | `'xxs' \| 'xs' \| 's' \| 'm' \| 'l' \| 'xl'`                                                         | -        |
| radius          | 圆角           | `'xxs' \| 'xs' \| 's' \| 'm' \| 'l' \| 'xl'`                                                         | `'m'`    |
| style           | 自定义样式     | `object`                                                                                             | -        |
| className       | 自定义类名     | `string`                                                                                             | -        |
| children        | 按钮内容       | `ReactNode`                                                                                          | -        |
| onClick         | 点击事件       | `(e: Event) => void`                                                                                 | -        |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## ToolBar.Dropdown

工具栏下拉组件。

### 何时使用

- 需要在工具栏中显示下拉菜单时

### 代码演示

<code src="./demos/ToolBarDropdown.jsx"></code>

### API

#### 属性

| 属性            | 说明             | 类型                                                                                                 | 默认值      |
| --------------- | ---------------- | ---------------------------------------------------------------------------------------------------- | ----------- |
| direction       | 方向             | `'horizontal' \| 'vertical'`                                                                         | -           |
| block           | 是否为块级元素   | `boolean`                                                                                            | -           |
| color           | 颜色             | `'default' \| 'transparent' \| 'primary' \| 'info' \| 'warning' \| 'danger' \| 'success'`            | `'default'` |
| backgroundColor | 背景颜色         | `'default' \| 'transparent' \| 'white' \| 'primary' \| 'info' \| 'warning' \| 'danger' \| 'success'` | -           |
| borderColor     | 边框颜色         | `'default' \| 'transparent' \| 'primary' \| 'info' \| 'warning' \| 'danger' \| 'success'`            | `'default'` |
| border          | 边框样式         | `'none' \| 'dotted' \| 'dashed' \| 'solid'`                                                          | `'none'`    |
| size            | 高度尺寸         | `'xxs' \| 'xs' \| 's' \| 'm' \| 'l' \| 'xl' \| [number, number]`                                     | -           |
| sizeEqual       | 是否为等宽高     | `boolean`                                                                                            | -           |
| radius          | 圆角             | `'xxs' \| 'xs' \| 's' \| 'm' \| 'l' \| 'xl'`                                                         | `'m'`       |
| fontSize        | 字体大小         | `'xxs' \| 'xs' \| 's' \| 'm' \| 'l' \| 'xl'`                                                         | -           |
| style           | 自定义样式       | `object`                                                                                             | -           |
| className       | 自定义类名       | `string`                                                                                             | -           |
| children        | 下拉内容         | `ReactNode`                                                                                          | -           |
| comboRender     | 自定义组合渲染   | `() => ReactNode`                                                                                    | -           |
| arrowRender     | 自定义箭头渲染   | `() => ReactNode`                                                                                    | -           |
| modalStyle      | 模态框样式       | `object`                                                                                             | -           |
| modalClassName  | 模态框类名       | `string`                                                                                             | -           |
| maskStyle       | 遮罩样式         | `object`                                                                                             | -           |
| maskClassName   | 遮罩类名         | `string`                                                                                             | -           |
| offset          | 偏移量           | `{top: number, left?: number, right?: number}`                                                       | `{top: 6}`  |
| left            | 左侧偏移         | `number`                                                                                             | -           |
| right           | 右侧偏移         | `number`                                                                                             | -           |
| portal          | 挂载节点         | `HTMLElement \| null \| false`                                                                       | -           |
| modalRender     | 自定义模态框渲染 | `() => ReactNode`                                                                                    | -           |
| onBeforeOpen    | 打开前事件       | `() => Promise<boolean>`                                                                             | -           |
| onOpen          | 打开事件         | `() => void`                                                                                         | -           |
| onClose         | 关闭事件         | `() => void`                                                                                         | -           |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |
| close      | 关闭下拉   | `() => void`           |
| open       | 打开下拉   | `() => void`           |

## ToolBar.Search

工具栏搜索组件。

### 何时使用

- 需要在工具栏中显示搜索框时

### 代码演示

<code src="./demos/ToolBarSearch.jsx"></code>

### API

#### 属性

| 属性          | 说明             | 类型                             | 默认值 |
| ------------- | ---------------- | -------------------------------- | ------ |
| id            | 搜索框 ID        | `string`                         | -      |
| name          | 搜索框名称       | `string`                         | -      |
| value         | 输入值           | `string \| number`               | `''`   |
| placeholder   | 占位符           | `string`                         | -      |
| formatter     | 格式化函数       | `(value: any) => string`         | -      |
| readOnly      | 是否只读         | `boolean`                        | -      |
| disabled      | 是否禁用         | `boolean`                        | -      |
| allowClear    | 允许清除         | `boolean`                        | -      |
| autoFocus     | 自动获取焦点     | `boolean`                        | -      |
| autoSelect    | 自动选中         | `boolean`                        | -      |
| style         | 自定义样式       | `object`                         | -      |
| className     | 自定义类名       | `string`                         | -      |
| inputRender   | 自定义输入框渲染 | `(props: object) => ReactNode`   | -      |
| leftIconNode  | 左侧图标         | `ReactNode`                      | -      |
| rightIconNode | 右侧图标         | `ReactNode`                      | -      |
| clearRender   | 清除按钮渲染     | `(props: object) => ReactNode`   | -      |
| precision     | 小数精度         | `number`                         | -      |
| trim          | 是否去除空格     | `boolean`                        | -      |
| max           | 最大值           | `number`                         | -      |
| min           | 最小值           | `number`                         | -      |
| maxLength     | 最大长度         | `number`                         | -      |
| inputMode     | 输入模式         | `string`                         | -      |
| onClick       | 点击事件         | `(e: Event) => void`             | -      |
| onChange      | 值变化事件       | `(value: any, e: Event) => void` | -      |
| onBlur        | 失焦事件         | `(e: Event) => void`             | -      |
| onFocus       | 聚焦事件         | `(e: Event) => void`             | -      |
| onKeyDown     | 按键事件         | `(e: Event) => void`             | -      |
| onPressEnter  | 回车事件         | `(e: Event) => void`             | -      |
| onSearch      | 搜索事件         | `(value: any) => void`           | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## ToolBar.SearchActive

工具栏激活搜索组件。

### 何时使用

- 需要在工具栏中显示激活搜索时

### 代码演示

<code src="./demos/ToolBarSearchActive.jsx"></code>

### API

#### 属性

同 ToolBar.Search 组件属性。

#### Ref

同 ToolBar.Search 组件 Ref。

## ToolBar.DateRange

工具栏日期范围组件。

### 何时使用

- 需要在工具栏中显示日期范围选择时

### 代码演示

<code src="./demos/ToolBarDateRange.jsx"></code>

### API

#### 属性

| 属性           | 说明         | 类型                                                                         | 默认值 |
| -------------- | ------------ | ---------------------------------------------------------------------------- | ------ |
| value          | 日期范围值   | `[Date, Date]`                                                               | -      |
| placeholder    | 占位符       | `string`                                                                     | -      |
| formatter      | 格式化函数   | `(value: [Date, Date]) => string`                                            | -      |
| readOnly       | 是否只读     | `boolean`                                                                    | -      |
| disabled       | 是否禁用     | `boolean`                                                                    | -      |
| allowClear     | 允许清除     | `boolean`                                                                    | -      |
| style          | 自定义样式   | `object`                                                                     | -      |
| className      | 自定义类名   | `string`                                                                     | -      |
| leftIconNode   | 左侧图标     | `ReactNode`                                                                  | -      |
| rightIconNode  | 右侧图标     | `ReactNode`                                                                  | -      |
| clearRender    | 清除按钮渲染 | `(props: object) => ReactNode`                                               | -      |
| type           | 日期类型     | `'year' \| 'quarter' \| 'month' \| 'date' \| 'time' \| 'datetime' \| 'week'` | -      |
| min            | 最小日期     | `Date`                                                                       | -      |
| max            | 最大日期     | `Date`                                                                       | -      |
| maskClosable   | 点击遮罩关闭 | `boolean`                                                                    | -      |
| safeArea       | 是否安全区   | `boolean`                                                                    | -      |
| modalStyle     | 模态框样式   | `object`                                                                     | -      |
| modalClassName | 模态框类名   | `string`                                                                     | -      |
| maskStyle      | 遮罩样式     | `object`                                                                     | -      |
| maskClassName  | 遮罩类名     | `string`                                                                     | -      |
| portal         | 挂载节点     | `HTMLElement \| null \| false`                                               | -      |
| titleRender    | 标题渲染     | `() => ReactNode`                                                            | -      |
| okNode         | 确认按钮     | `ReactNode`                                                                  | -      |
| cancelNode     | 取消按钮     | `ReactNode`                                                                  | -      |
| okVisible      | 确认按钮可见 | `boolean`                                                                    | -      |
| cancelVisible  | 取消按钮可见 | `boolean`                                                                    | -      |
| onBeforeOpen   | 打开前事件   | `() => Promise<boolean>`                                                     | -      |
| onChange       | 变化事件     | `(value: [Date, Date]) => void`                                              | -      |
| onOk           | 确认事件     | `(value: [Date, Date]) => void`                                              | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |
| close      | 关闭选择器 | `() => void`           |
| open       | 打开选择器 | `() => void`           |

## ToolBar.List

工具栏列表组件。

### 何时使用

- 需要在工具栏中显示列表时

### 代码演示

<code src="./demos/ToolBarList.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 列表内容   | `ReactNode` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## ToolBar.ActionSheet

工具栏动作面板组件。

### 何时使用

- 需要在工具栏中显示动作面板时

### 代码演示

<code src="./demos/ToolBarActionSheet.jsx"></code>

### API

#### 属性

同 ActionSheet 组件属性。

#### Ref

同 ActionSheet 组件 Ref。

## ToolBar.Filter

工具栏筛选组件。

### 何时使用

- 需要在工具栏中显示筛选时

### 代码演示

<code src="./demos/ToolBarFilter.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 筛选内容   | `ReactNode` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |
