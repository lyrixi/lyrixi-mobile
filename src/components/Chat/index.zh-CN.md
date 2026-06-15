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

<code src="./demos/ChatList.tsx"></code>

### API

#### 属性

| 属性             | 说明       | 类型                                                                                                                                                                                                                                                           | 默认值  |
| ---------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| timeSpace        | 时间间隔   | `number`                                                                                                                                                                                                                                                       | `60000` |
| value            | 选中的值   | `ChatListValue[]`                                                                                                                                                                                                                                              | -       |
| list             | 消息列表   | `ChatItem[]`                                                                                                                                                                                                                                                   | -       |
| formatViewList   | 格式化列表 | `(list: ChatViewItem[]) => ChatViewItem[]`                                                                                                                                                                                                                      | -       |
| formatViewItem   | 格式化项   | `(item: ChatRawItem, ctx: { index: number }) => ChatRawItem`                                                                                                                                                                                                   | -       |
| checkable        | 是否可选   | `boolean`                                                                                                                                                                                                                                                      | -       |
| checkboxVariant  | 复选框渲染 | `string`                                                                                                                                                                                                                                                       | -       |
| checkboxPosition | 复选框位置 | `string`                                                                                                                                                                                                                                                       | -       |
| onChange         | 变化事件   | `(value: ChatListValue[]) => void`                                                                                                                                                                                                                              | -       |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HTMLDivElement`       |
| getElement | 获取根元素 | () => `HTMLDivElement` |

## Chat.Item

聊天项组件。

### 何时使用

- 需要显示聊天消息项时
- 需要显示单条消息气泡时

### 代码演示

<code src="./demos/ChatItem.tsx"></code>

### API

#### 属性

| 属性             | 说明           | 类型                                                         | 默认值 |
| ---------------- | -------------- | ------------------------------------------------------------ | ------ |
| id               | 消息唯一标识   | `string \| number`                                           | -      |
| _raw             | 原始消息数据   | `Record<string, unknown>`                                    | -      |
| checked          | 是否选中       | `boolean`                                                    | -      |
| checkable        | 是否可选       | `boolean`                                                    | -      |
| className        | 自定义类名     | `string`                                                     | -      |
| placement        | 气泡位置       | `string`                                                     | -      |
| style            | 自定义样式     | `CSSProperties`                                              | -      |
| checkboxVariant  | 复选框样式变体 | `string`                                                     | -      |
| checkboxPosition | 复选框位置     | `string`                                                     | -      |
| avatarUrl        | 头像地址       | `string`                                                     | -      |
| avatarRender     | 头像渲染       | `(ctx: {checked?: boolean, ...}) => ReactNode`               | -      |
| avatarNode       | 头像节点       | `ReactNode`                                                  | -      |
| authorRender     | 作者渲染       | `(ctx: {checked?: boolean, ...}) => ReactNode`               | -      |
| authorNode       | 作者节点       | `ReactNode`                                                  | -      |
| content          | 消息内容       | `ReactNode`                                                  | -      |
| onChange         | 选中变化事件   | `(checked: boolean) => void`                                 | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HTMLDivElement`       |
| getElement | 获取根元素 | () => `HTMLDivElement` |
