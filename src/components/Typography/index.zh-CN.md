---
group:
  title: 通用
  order: 1
order: 1
title: Typography
toc: content
---

# Typography

排版组件，用于文本排版和格式化。

## 何时使用

- 需要文本排版时
- 需要格式化文本时
- 需要显示标题、段落等文本内容时

## 代码演示

<code src="./demos/demo1.jsx"></code>

## API

### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 文本内容   | `ReactNode` | -      |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Typography.Text

文本组件。

### 何时使用

- 需要显示文本时

### 代码演示

<code src="./demos/demo1.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型                                                                               | 默认值 |
| --------- | ---------- | ---------------------------------------------------------------------------------- | ------ |
| highlight | 高亮文本   | `string \| Array<string>`                                                          | -      |
| ellipsis  | 省略配置   | `{rows: number, rowHeight: number, expandable: boolean, defaultExpanded: boolean}` | -      |
| style     | 自定义样式 | `object`                                                                           | -      |
| className | 自定义类名 | `string`                                                                           | -      |
| children  | 文本内容   | `ReactNode`                                                                        | -      |

#### Ref

| 属性           | 说明       | 类型                   |
| -------------- | ---------- | ---------------------- |
| element        | 根元素     | `HtmlDivElement`       |
| getElement     | 获取根元素 | () => `HtmlDivElement` |
| toggleEllipsis | 切换省略   | `() => boolean`        |
| hasEllipsis    | 是否有省略 | `() => boolean`        |

## Typography.Title

标题组件。

### 何时使用

- 需要显示标题时

### 代码演示

<code src="./demos/demo1.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型                                                                               | 默认值 |
| --------- | ---------- | ---------------------------------------------------------------------------------- | ------ |
| highlight | 高亮文本   | `string \| Array<string>`                                                          | -      |
| ellipsis  | 省略配置   | `{rows: number, rowHeight: number, expandable: boolean, defaultExpanded: boolean}` | -      |
| style     | 自定义样式 | `object`                                                                           | -      |
| className | 自定义类名 | `string`                                                                           | -      |
| children  | 标题内容   | `ReactNode`                                                                        | -      |

#### Ref

| 属性           | 说明       | 类型                   |
| -------------- | ---------- | ---------------------- |
| element        | 根元素     | `HtmlDivElement`       |
| getElement     | 获取根元素 | () => `HtmlDivElement` |
| toggleEllipsis | 切换省略   | `() => boolean`        |
| hasEllipsis    | 是否有省略 | `() => boolean`        |

## Typography.Paragraph

段落组件。

### 何时使用

- 需要显示段落时

### 代码演示

<code src="./demos/demo1.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型                                                                               | 默认值 |
| --------- | ---------- | ---------------------------------------------------------------------------------- | ------ |
| highlight | 高亮文本   | `string \| Array<string>`                                                          | -      |
| ellipsis  | 省略配置   | `{rows: number, rowHeight: number, expandable: boolean, defaultExpanded: boolean}` | -      |
| style     | 自定义样式 | `object`                                                                           | -      |
| className | 自定义类名 | `string`                                                                           | -      |
| children  | 段落内容   | `ReactNode`                                                                        | -      |

#### Ref

| 属性           | 说明       | 类型                   |
| -------------- | ---------- | ---------------------- |
| element        | 根元素     | `HtmlDivElement`       |
| getElement     | 获取根元素 | () => `HtmlDivElement` |
| toggleEllipsis | 切换省略   | `() => boolean`        |
| hasEllipsis    | 是否有省略 | `() => boolean`        |

## Typography.Amount

金额组件。

### 何时使用

- 需要显示金额时

### 代码演示

<code src="./demos/demo1.jsx"></code>

### API

#### 属性

| 属性           | 说明       | 类型               | 默认值 |
| -------------- | ---------- | ------------------ | ------ |
| precision      | 小数精度   | `number`           | `2`    |
| currencySymbol | 货币符号   | `string`           | -      |
| style          | 自定义样式 | `object`           | -      |
| className      | 自定义类名 | `string`           | -      |
| noStyle        | 不使用样式 | `boolean`          | -      |
| children       | 金额数值   | `number \| string` | -      |

#### Ref

无 Ref 方法。

## Typography.Highlight

高亮组件。

### 何时使用

- 需要高亮文本时

### 代码演示

<code src="./demos/demo1.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 高亮内容   | `ReactNode` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Typography.Div

基础容器组件。

### 何时使用

- 需要基础容器时

### 代码演示

<code src="./demos/demo1.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型                                                                               | 默认值 |
| --------- | ---------- | ---------------------------------------------------------------------------------- | ------ |
| highlight | 高亮文本   | `string \| Array<string>`                                                          | -      |
| ellipsis  | 省略配置   | `{rows: number, rowHeight: number, expandable: boolean, defaultExpanded: boolean}` | -      |
| style     | 自定义样式 | `object`                                                                           | -      |
| className | 自定义类名 | `string`                                                                           | -      |
| children  | 容器内容   | `ReactNode`                                                                        | -      |

#### Ref

| 属性           | 说明       | 类型                   |
| -------------- | ---------- | ---------------------- |
| element        | 根元素     | `HtmlDivElement`       |
| getElement     | 获取根元素 | () => `HtmlDivElement` |
| toggleEllipsis | 切换省略   | `() => boolean`        |
| hasEllipsis    | 是否有省略 | `() => boolean`        |

## Typography.Form

表单排版组件。

### 何时使用

- 需要在表单中使用排版时

### 代码演示

<code src="./demos/demo1.jsx"></code>

### API

#### 属性

| 属性            | 说明         | 类型                                     | 默认值 |
| --------------- | ------------ | ---------------------------------------- | ------ |
| layout          | 布局方式     | `'horizontal' \| 'vertical' \| 'inline'` | -      |
| labelCol        | 标签列配置   | `object`                                 | -      |
| mainCol         | 内容列配置   | `object`                                 | -      |
| scrollerElement | 滚动容器元素 | `HTMLElement`                            | -      |
| virtual         | 是否虚拟滚动 | `boolean`                                | -      |
| style           | 自定义样式   | `object`                                 | -      |
| className       | 自定义类名   | `string`                                 | -      |
| children        | 表单内容     | `ReactNode`                              | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Typography.getDisplayValue

获取显示值（工具函数）。

### 参数

| 参数    | 说明     | 类型     | 默认值 |
| ------- | -------- | -------- | ------ |
| value   | 值       | `any`    | -      |
| options | 配置选项 | `object` | -      |

### 返回值

| 类型     | 说明   |
| -------- | ------ |
| `string` | 显示值 |
