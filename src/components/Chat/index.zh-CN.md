---
group:
  title: 数据展示
  order: 2
order: 1
title: Chat
toc: content
---

# Chat

聊天组件，用于聊天界面展示。

## 何时使用

- 需要聊天界面时
- 需要消息列表时
- 需要对话展示时
- 需要即时通讯时

## 示例

<code src="./demos/Chat.List.jsx"></code>

<code src="./demos/Chat.Item.jsx"></code>

## Chat.List

### 属性

| 属性             | 说明             | 类型                     | 默认值  |
| ---------------- | ---------------- | ------------------------ | ------- |
| timeSpace        | 时间间隔（毫秒） | `number`                 | `60000` |
| value            | 选中值           | `array`                  | -       |
| list             | 消息列表         | `array`                  | -       |
| checkable        | 是否可选中       | `boolean`                | -       |
| checkbox         | 复选框配置       | `ReactNode \| function`  | -       |
| checkboxPosition | 复选框位置       | `string`                 | -       |
| onChange         | 选择变化回调     | `(value: array) => void` | -       |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| rootDOM    | 根元素     | `HtmlDivElement`       |
| getRootDOM | 获取根元素 | () => `HtmlDivElement` |
