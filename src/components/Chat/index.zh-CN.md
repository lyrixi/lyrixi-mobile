---
group:
  title: 数据展示
  order: 5
order: 1
title: Chat
toc: content
---

# Chat

聊天组件，用于显示聊天消息。

## Chat.List

聊天列表组件。

### 何时使用

- 需要显示聊天列表时
- 需要显示对话消息列表时

### 代码演示

<code src="./demos/ChatList.jsx"></code>

### API

#### 属性

| 属性           | 说明       | 类型                                                                                                                                                                                                                                                           | 默认值  |
| -------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| timeSpace      | 时间间隔   | `number`                                                                                                                                                                                                                                                       | `60000` |
| value          | 选中的值   | `Array<object>`                                                                                                                                                                                                                                                | -       |
| list           | 消息列表   | `Array<{id: string, position: 'left' \| 'right', avatarUrl?: string, name: string, avatarRender?: (props: object) => ReactNode, avatarNode?: ReactNode, authorRender?: (props: object) => ReactNode, authorNode?: ReactNode, content: ReactNode, time: Date}>` | -       |
| formatViewList | 格式化列表 | `(list: Array<{...item, _raw: item}>) => Array<object>`                                                                                                                                                                                                        | -       |
| formatViewItem | 格式化项   | `(item: object, index: number) => object`                                                                                                                                                                                                                      | -       |
| checkable      | 是否可选   | `boolean`                                                                                                                                                                                                                                                      | -       |
| checkboxRender | 复选框渲染 | `(item: object) => ReactNode`                                                                                                                                                                                                                                  | -       |
| onChange       | 变化事件   | `(value: Array<object>) => void`                                                                                                                                                                                                                               | -       |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Chat.Item

聊天项组件。

### 何时使用

- 需要显示聊天消息项时
- 需要显示单条消息气泡时

### 代码演示

<code src="./demos/ChatItem.jsx"></code>

### API

#### 属性

| 属性           | 说明       | 类型                           | 默认值 |
| -------------- | ---------- | ------------------------------ | ------ |
| className      | 自定义类名 | `string`                       | -      |
| item           | 项数据     | `object`                       | -      |
| checked        | 是否选中   | `boolean`                      | -      |
| checkable      | 是否可选   | `boolean`                      | -      |
| checkboxRender | 复选框渲染 | `(item: object) => ReactNode`  | -      |
| position       | 位置       | `'left' \| 'right'`            | -      |
| avatarUrl      | 头像地址   | `string`                       | -      |
| avatarRender   | 头像渲染   | `(props: object) => ReactNode` | -      |
| avatarNode     | 头像节点   | `ReactNode`                    | -      |
| authorRender   | 作者渲染   | `(props: object) => ReactNode` | -      |
| authorNode     | 作者节点   | `ReactNode`                    | -      |
| content        | 内容       | `ReactNode`                    | -      |
| style          | 自定义样式 | `object`                       | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |
