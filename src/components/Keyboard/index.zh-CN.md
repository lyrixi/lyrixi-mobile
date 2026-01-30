---
group:
  title: 数据录入
  order: 2
order: 1
title: Keyboard
toc: content
---

# Keyboard

键盘组件，用于显示自定义键盘。

## 何时使用

- 需要显示自定义键盘时
- 需要数字键盘时
- 需要自定义输入键盘时

## 代码演示

<code src="./demos/Keyboard.jsx"></code>

## API

### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 键盘内容   | `ReactNode` | -      |

### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Keyboard.Number

数字键盘组件。

### 何时使用

- 需要显示数字键盘时

### 代码演示

<code src="./demos/Number/index.jsx"></code>

### API

#### 属性

| 属性           | 说明         | 类型                                       | 默认值 |
| -------------- | ------------ | ------------------------------------------ | ------ |
| safeArea       | 是否安全区   | `boolean`                                  | `true` |
| portal         | 挂载节点     | `HTMLElement`                              | -      |
| value          | 当前值       | `string`                                   | `''`   |
| onChange       | 变化事件     | `(value: string, options: object) => void` | -      |
| dot            | 小数点按钮   | `ReactNode`                                | -      |
| minus          | 负号按钮     | `ReactNode`                                | -      |
| okNode         | 确认按钮     | `ReactNode`                                | -      |
| okVisible      | 确认按钮可见 | `boolean`                                  | -      |
| cancelNode     | 取消按钮     | `ReactNode`                                | -      |
| cancelVisible  | 取消按钮可见 | `boolean`                                  | -      |
| modalStyle     | 模态框样式   | `object`                                   | -      |
| modalClassName | 模态框类名   | `string`                                   | -      |
| open           | 是否显示     | `boolean`                                  | -      |
| onOpen         | 打开事件     | `() => void`                               | -      |
| onClose        | 关闭事件     | `() => void`                               | -      |
| onOk           | 确认事件     | `(value: string) => void`                  | -      |
| onCancel       | 取消事件     | `() => void`                               | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |
