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

## 何时使用

- 需要显示聊天消息时
- 需要显示对话列表时
- 需要显示消息气泡时

## 代码演示

<code src="./demos/Chat.List.jsx"></code>

## API

### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 聊天内容   | `ReactNode` | -      |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Chat.List

聊天列表组件。

### 何时使用

- 需要显示聊天列表时

### 代码演示

<code src="./demos/Chat.List.jsx"></code>

### API

#### 属性

| 属性           | 说明       | 类型                                                                                                             | 默认值  |
| -------------- | ---------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| timeSpace      | 时间间隔   | `number`                                                                                                         | `60000` |
| value          | 选中的值   | `Array<object>`                                                                                                  | -       |
| list           | 消息列表   | `Array<{id: string, position: 'left' \| 'right', avatar: string, name: string, content: ReactNode, time: Date}>` | -       |
| checkable      | 是否可选   | `boolean`                                                                                                        | -       |
| checkboxRender | 复选框渲染 | `(item: object) => ReactNode`                                                                                    | -       |
| onChange       | 变化事件   | `(value: Array<object>) => void`                                                                                 | -       |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Chat.Item

聊天项组件。

### 何时使用

- 需要显示聊天消息项时

### 代码演示

<code src="./demos/Chat.Item.jsx"></code>

### API

#### 属性

| 属性           | 说明       | 类型                                                  | 默认值 |
| -------------- | ---------- | ----------------------------------------------------- | ------ |
| className      | 自定义类名 | `string`                                              | -      |
| item           | 项数据     | `object`                                              | -      |
| checked        | 是否选中   | `boolean`                                             | -      |
| checkable      | 是否可选   | `boolean`                                             | -      |
| checkboxRender | 复选框渲染 | `(item: object) => ReactNode`                         | -      |
| position       | 位置       | `'left' \| 'right'`                                   | -      |
| avatar         | 头像       | `string \| ReactNode \| (props: object) => ReactNode` | -      |
| author         | 作者       | `string \| ReactNode \| (props: object) => ReactNode` | -      |
| content        | 内容       | `ReactNode`                                           | -      |
| style          | 自定义样式 | `object`                                              | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |
