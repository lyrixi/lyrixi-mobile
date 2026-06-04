---
group:
  title: 反馈
  order: 4
order: 1
title: Message
toc: content
---

# Message

消息对话框组件集合，用于展示提示、确认等居中弹窗。提供命令式 API（`Message.open` / `Message.close`）与组合式子组件（`Message.Modal`、`Message.Combo` 等）。

## 何时使用

- 需要居中展示标题、正文与操作按钮的对话框时
- 需要命令式唤起全局消息框（如操作确认、结果提示）时
- 需要自定义对话框结构（图标、标题、内容、底部按钮分区）时

## 代码演示

### Message.open / Message.close

<code src="./demos/Message.tsx"></code>

### Message.Modal

<code src="./demos/MessageModal.tsx"></code>

### Message.Combo

<code src="./demos/MessageCombo.tsx"></code>

### 组合式子组件

<code src="./demos/MessageMain.tsx"></code>

<code src="./demos/MessageHeader.tsx"></code>

<code src="./demos/MessageFooter.tsx"></code>

<code src="./demos/MessageIcon.tsx"></code>

<code src="./demos/MessageTitle.tsx"></code>

<code src="./demos/MessageButton.tsx"></code>

## API

### Message.open

打开消息对话框。全局同时仅存在一个实例，再次调用会先关闭上一个。

#### 参数

| 参数             | 说明                                                                 | 类型                                                                               | 默认值         |
| ---------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | -------------- |
| iconRender       | 图标区域渲染                                                         | `() => ReactNode`                                                                  | -              |
| title            | 标题                                                                 | `ReactNode`                                                                        | -              |
| content          | 正文                                                                 | `ReactNode`                                                                        | -              |
| buttonsLayout    | 底部按钮布局                                                         | `'vertical' \| 'horizontal'`                                                       | `'horizontal'` |
| buttons          | 底部按钮配置，见下方 [按钮配置](#按钮配置-messagecombobutton)        | `MessageComboButton[]`                                                             | `[]`           |
| titleClassName   | 标题类名                                                             | `string`                                                                           | -              |
| titleStyle       | 标题样式                                                             | `CSSProperties`                                                                    | -              |
| contentClassName | 正文类名                                                             | `string`                                                                           | -              |
| contentStyle     | 正文样式                                                             | `CSSProperties`                                                                    | -              |
| footerClassName  | 底部类名                                                             | `string`                                                                           | -              |
| footerStyle      | 底部样式                                                             | `CSSProperties`                                                                    | -              |
| maskClosable     | 点击遮罩是否关闭                                                     | `boolean`                                                                          | `true`         |
| maskClassName    | 遮罩类名                                                             | `string`                                                                           | -              |
| maskStyle        | 遮罩样式                                                             | `CSSProperties`                                                                    | -              |
| portal           | 挂载节点                                                             | `HTMLElement \| null \| false`                                                     | `document.body` |
| onClose          | 关闭后回调                                                           | `() => void`                                                                       | -              |

按钮 `onClick` 返回 `false`（或 resolve 为 `false`）时不关闭对话框；其余情况会关闭。

#### 返回值

无返回值。

### Message.close

关闭当前由 `Message.open` 打开的消息对话框。

#### 参数

无参数。

#### 返回值

无返回值。

## Message.Modal

基于 `Modal` 的消息对话框，受控通过 `open` 显示/隐藏。未传 `children` 且提供了 `iconRender`、`title`、`content` 或 `buttons` 时，会自动渲染 `Message.Main`。

### API

#### 属性

| 属性           | 说明           | 类型                           | 默认值  |
| -------------- | -------------- | ------------------------------ | ------- |
| open           | 是否显示       | `boolean`                      | `false` |
| maskClosable   | 点击遮罩关闭   | `boolean`                      | `true`  |
| safeArea       | 是否启用安全区 | `boolean`                      | -       |
| modalStyle     | 模态框样式     | `CSSProperties`                | -       |
| modalClassName | 模态框类名     | `string`                       | -       |
| maskStyle      | 遮罩样式       | `CSSProperties`                | -       |
| maskClassName  | 遮罩类名       | `string`                       | -       |
| portal         | 挂载节点       | `HTMLElement \| null \| false` | -       |
| children       | 自定义内容     | `ReactNode`                    | -       |
| onClose        | 关闭事件       | `() => void`                   | -       |
| iconRender     | 图标区域渲染   | `() => ReactNode`              | -       |
| title          | 标题           | `ReactNode`                    | -       |
| content        | 正文           | `ReactNode`                    | -       |
| buttonsLayout  | 底部按钮布局   | `'vertical' \| 'horizontal'`   | -       |
| buttons        | 底部按钮配置   | `MessageComboButton[]`         | -       |
| titleClassName | 标题类名       | `string`                       | -       |
| titleStyle     | 标题样式       | `CSSProperties`                | -       |
| contentClassName | 正文类名     | `string`                       | -       |
| contentStyle   | 正文样式       | `CSSProperties`                | -       |
| footerClassName | 底部类名      | `string`                       | -       |
| footerStyle    | 底部样式       | `CSSProperties`                | -       |

#### Ref

同 [Modal](/components/modal) 组件 Ref（`maskElement`、`getMaskElement`、`modalElement`、`getModalElement`）。

## Message.Combo

将触发区域与 `Message.Modal` 组合：点击 `children` 打开对话框，适合表单或列表中的确认入口。

### API

#### 属性

在 [Message.Modal](#messagemodal) 属性基础上，去掉受控的 `open`（内部管理），并增加：

| 属性      | 说明                     | 类型            | 默认值 |
| --------- | ------------------------ | --------------- | ------ |
| onOpen    | 打开事件                 | `() => void`    | -      |
| className | 触发区域类名             | `string`        | -      |
| style     | 触发区域样式             | `CSSProperties` | -      |
| children  | 触发区域内容（点击打开） | `ReactNode`     | -      |

其余对话框相关属性（`title`、`content`、`buttons`、`maskClosable` 等）与 `Message.Modal` 一致。

#### Ref

| 属性       | 说明           | 类型                              |
| ---------- | -------------- | --------------------------------- |
| element    | 触发区域根元素 | `HTMLDivElement \| null`          |
| getElement | 获取触发区域   | `() => HTMLDivElement \| null`    |
| open       | 打开对话框     | `() => void`                      |
| close      | 关闭对话框     | `() => void`                      |

另包含 `Message.Modal` 对应 Ref 上的遮罩/模态框方法。

## Message.Main

消息对话框主体，默认组合 `Message.Icon`、`Message.Title`、正文与 `Message.Footer`（按钮区）。

### API

#### 属性

| 属性             | 说明           | 类型                                                                               | 默认值         |
| ---------------- | -------------- | ---------------------------------------------------------------------------------- | -------------- |
| iconRender       | 图标区域渲染   | `() => ReactNode`                                                                  | -              |
| title            | 标题           | `ReactNode`                                                                        | -              |
| content          | 正文           | `ReactNode`                                                                        | -              |
| buttonsLayout    | 底部按钮布局   | `'vertical' \| 'horizontal'`                                                       | `'horizontal'` |
| buttons          | 底部按钮配置   | `MessageComboButton[]`                                                             | -              |
| titleClassName   | 标题类名       | `string`                                                                           | -              |
| titleStyle       | 标题样式       | `CSSProperties`                                                                    | -              |
| contentClassName | 正文类名       | `string`                                                                           | -              |
| contentStyle     | 正文样式       | `CSSProperties`                                                                    | -              |
| footerClassName  | 底部类名       | `string`                                                                           | -              |
| footerStyle      | 底部样式       | `CSSProperties`                                                                    | -              |
| className        | 根节点类名     | `string`                                                                           | -              |
| style            | 根节点样式     | `CSSProperties`                                                                    | -              |
| children         | 自定义主体内容 | `ReactNode`                                                                        | -              |
| onButtonClick    | 按钮点击       | `(button: MessageComboButton, e: MouseEvent) => boolean \| void \| Promise<...>`   | -              |

#### Ref

| 属性       | 说明     | 类型                         |
| ---------- | -------- | ---------------------------- |
| element    | 根元素   | `HTMLElement \| null`        |
| getElement | 获取根元素 | `() => HTMLElement \| null` |

## Message.Header

对话框头部容器。

### API

#### 属性

| 属性      | 说明     | 类型            | 默认值 |
| --------- | -------- | --------------- | ------ |
| className | 类名     | `string`        | -      |
| style     | 样式     | `CSSProperties` | -      |
| children  | 头部内容 | `ReactNode`     | -      |

#### Ref

| 属性       | 说明     | 类型                         |
| ---------- | -------- | ---------------------------- |
| element    | 根元素   | `HTMLElement \| null`        |
| getElement | 获取根元素 | `() => HTMLElement \| null` |

## Message.Footer

对话框底部容器（常与 `layout` 配合按钮排列）。

### API

#### 属性

| 属性      | 说明       | 类型            | 默认值 |
| --------- | ---------- | --------------- | ------ |
| layout    | 按钮布局   | `string`        | -      |
| className | 类名       | `string`        | -      |
| style     | 样式       | `CSSProperties` | -      |
| children  | 底部内容   | `ReactNode`     | -      |

#### Ref

同 [Message.Header](#messageheader) Ref。

## Message.Icon

对话框图标区域。

### API

#### 属性

| 属性      | 说明     | 类型            | 默认值 |
| --------- | -------- | --------------- | ------ |
| className | 类名     | `string`        | -      |
| style     | 样式     | `CSSProperties` | -      |
| children  | 图标内容 | `ReactNode`     | -      |

#### Ref

| 属性       | 说明     | 类型                         |
| ---------- | -------- | ---------------------------- |
| element    | 根元素   | `HTMLDivElement \| null`     |
| getElement | 获取根元素 | `() => HTMLDivElement \| null` |

## Message.Title

对话框标题区域。

### API

#### 属性

| 属性      | 说明     | 类型            | 默认值 |
| --------- | -------- | --------------- | ------ |
| className | 类名     | `string`        | -      |
| style     | 样式     | `CSSProperties` | -      |
| children  | 标题内容 | `ReactNode`     | -      |

#### Ref

同 [Message.Icon](#messageicon) Ref。

## Message.Button

对话框底部操作按钮。

### API

#### 属性

| 属性            | 说明     | 类型                                      | 默认值 |
| --------------- | -------- | ----------------------------------------- | ------ |
| block           | 块级按钮 | `boolean`                                 | -      |
| color           | 文字颜色 | `string`                                  | -      |
| backgroundColor | 背景颜色 | `string`                                  | -      |
| className       | 类名     | `string`                                  | -      |
| style           | 样式     | `CSSProperties`                           | -      |
| children        | 按钮文案 | `ReactNode`                               | -      |
| onClick         | 点击事件 | `(e: MouseEvent<HTMLDivElement>) => void` | -      |

#### Ref

同 [Message.Icon](#messageicon) Ref。

### 按钮配置 MessageComboButton

用于 `Message.open`、`Message.Modal`、`Message.Combo`、`Message.Main` 的 `buttons` 数组项：

| 属性      | 说明           | 类型                                                                               | 默认值 |
| --------- | -------------- | ---------------------------------------------------------------------------------- | ------ |
| id        | 按钮标识       | `string`                                                                           | -      |
| name      | 按钮文案       | `string`                                                                           | -      |
| className | 按钮类名       | `string`                                                                           | -      |
| style     | 按钮样式       | `CSSProperties`                                                                    | -      |
| onClick   | 点击；返回 `false` 时不关闭对话框 | `(e: MouseEvent<HTMLDivElement>) => boolean \| void \| Promise<boolean \| void>` | -      |
