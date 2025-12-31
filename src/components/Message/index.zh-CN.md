---
group:
  title: 反馈
  order: 4
order: 1
title: Message
toc: content
---

# Message

消息对话框组件，用于显示消息、确认等对话框。

## 何时使用

- 需要显示消息对话框时
- 需要显示确认对话框时
- 需要显示提示对话框时

## 代码演示

<code src="./demos/Message.jsx">></code>

## API

### 属性

| 属性           | 说明         | 类型                           | 默认值  |
| -------------- | ------------ | ------------------------------ | ------- |
| open           | 是否显示     | `boolean`                      | `false` |
| maskClosable   | 点击遮罩关闭 | `boolean`                      | `true`  |
| safeArea       | 是否安全区   | `boolean`                      | -       |
| modalStyle     | 模态框样式   | `object`                       | -       |
| modalClassName | 模态框类名   | `string`                       | -       |
| maskStyle      | 遮罩样式     | `object`                       | -       |
| maskClassName  | 遮罩类名     | `string`                       | -       |
| portal         | 挂载节点     | `HTMLElement \| null \| false` | -       |
| children       | 对话框内容   | `ReactNode`                    | -       |
| onClose        | 关闭事件     | `() => void`                   | -       |

### Ref

| 属性            | 说明           | 类型                   |
| --------------- | -------------- | ---------------------- |
| maskElement     | 遮罩元素       | `HtmlDivElement`       |
| getMaskElement  | 获取遮罩元素   | () => `HtmlDivElement` |
| modalElement    | 模态框元素     | `HtmlDivElement`       |
| getModalElement | 获取模态框元素 | () => `HtmlDivElement` |

## Message.open

打开消息对话框（JS API）。

### 参数

| 参数             | 说明         | 类型                                                                           | 默认值         |
| ---------------- | ------------ | ------------------------------------------------------------------------------ | -------------- |
| onOpen           | 打开事件     | `() => void`                                                                   | -              |
| onClose          | 关闭事件     | `() => void`                                                                   | -              |
| portal           | 挂载节点     | `HTMLElement`                                                                  | -              |
| maskClassName    | 遮罩类名     | `string`                                                                       | -              |
| maskStyle        | 遮罩样式     | `object`                                                                       | -              |
| maskClosable     | 点击遮罩关闭 | `boolean`                                                                      | `true`         |
| icon             | 图标         | `ReactNode`                                                                    | -              |
| title            | 标题         | `ReactNode`                                                                    | -              |
| titleClassName   | 标题类名     | `string`                                                                       | -              |
| titleStyle       | 标题样式     | `object`                                                                       | -              |
| content          | 内容         | `ReactNode`                                                                    | -              |
| contentClassName | 内容类名     | `string`                                                                       | -              |
| contentStyle     | 内容样式     | `object`                                                                       | -              |
| footerClassName  | 底部类名     | `string`                                                                       | -              |
| footerStyle      | 底部样式     | `object`                                                                       | -              |
| buttonsLayout    | 按钮布局     | `'vertical' \| 'horizontal'`                                                   | `'horizontal'` |
| buttons          | 按钮数组     | `Array<{name: string, onClick: function, className?: string, style?: object}>` | `[]`           |

### 返回值

无返回值。

## Message.close

关闭消息对话框（JS API）。

### 参数

无参数。

### 返回值

无返回值。

## Message.Modal

消息对话框模态框组件。

### 何时使用

- 需要以模态框形式显示消息对话框时

### 代码演示

<code src="./demos/Message.jsx">></code>

### API

#### 属性

同 Message 组件属性。

#### Ref

同 Message 组件 Ref。

## Message.Combo

消息对话框组合组件。

### 何时使用

- 需要组合消息对话框时

### 代码演示

<code src="./demos/Message.jsx">></code>

### API

#### 属性

同 Message 组件属性。

#### Ref

同 Message 组件 Ref。

## Message.Header

消息对话框头部组件。

### 何时使用

- 需要在消息对话框中显示头部时

### 代码演示

<code src="./demos/Message.jsx">></code>

### API

#### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 头部内容   | `ReactNode` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Message.Main

消息对话框主体组件。

### 何时使用

- 需要在消息对话框中显示主体内容时

### 代码演示

<code src="./demos/Message.jsx">></code>

### API

#### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 主体内容   | `ReactNode` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Message.Footer

消息对话框底部组件。

### 何时使用

- 需要在消息对话框中显示底部时

### 代码演示

<code src="./demos/Message.jsx">></code>

### API

#### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 底部内容   | `ReactNode` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Message.Icon

消息对话框图标组件。

### 何时使用

- 需要在消息对话框中显示图标时

### 代码演示

<code src="./demos/Message.jsx">></code>

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

## Message.Title

消息对话框标题组件。

### 何时使用

- 需要在消息对话框中显示标题时

### 代码演示

<code src="./demos/Message.jsx">></code>

### API

#### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 标题内容   | `ReactNode` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Message.Button

消息对话框按钮组件。

### 何时使用

- 需要在消息对话框中显示按钮时

### 代码演示

<code src="./demos/Message.jsx">></code>

### API

#### 属性

| 属性      | 说明       | 类型                    | 默认值 |
| --------- | ---------- | ----------------------- | ------ |
| style     | 自定义样式 | `object`                | -      |
| className | 自定义类名 | `string`                | -      |
| children  | 按钮内容   | `ReactNode`             | -      |
| onClick   | 点击事件   | `() => boolean \| void` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |
