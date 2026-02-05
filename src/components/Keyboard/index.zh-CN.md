---
group:
  title: 数据录入
  order: 2
order: 1
title: Keyboard
toc: content
---

# Keyboard

键盘组件，目前提供数字键盘 Keyboard.Number。

## Keyboard.Number

数字键盘组件，常与 Input.Node 配合使用：点击 Input.Node 打开键盘，通过 `open` / `onClose` 控制显隐。

### 何时使用

- 需要数字输入时（金额、数量等）
- 需要避免系统键盘弹起时
- 需要自定义键盘样式或按钮时

### 代码演示

<code src="./demos/KeyboardNumber.jsx"></code>

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
| element    | 根元素     | `HTMLDivElement`       |
| getElement | 获取根元素 | () => `HTMLDivElement` |
