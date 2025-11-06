---
category: Components
group: 数据录入
title: Keyboard
---

# Keyboard 键盘

虚拟键盘组件，用于在移动端或需要特殊输入的场景。

## 数字键盘

### 示例

<code src="./demos/Number/index.jsx"></code>

### API

数字键盘组件，支持数字、小数点和负号输入。

| 属性            | 说明                                                  | 类型                                  | 默认值 |
| --------------- | ----------------------------------------------------- | ------------------------------------- | ------ |
| value           | 当前值                                                | string                                | ''     |
| onChange        | 值改变时的回调                                        | (value: string) => void               | -      |
| ok              | 确定按钮文本，传 null 隐藏确定按钮                    | string \| null                        | '确定' |
| cancel          | 取消按钮配置，true 显示向下箭头，传 null 隐藏取消按钮 | boolean \| string \| null             | true   |
| onOk            | 点击确定按钮的回调                                    | (value: string, event: Event) => void | -      |
| onCancel        | 点击取消按钮的回调                                    | (event: Event) => void                | -      |
| maskStyle       | 遮罩层样式                                            | CSSProperties                         | -      |
| maskClassName   | 遮罩层类名                                            | string                                | -      |
| maskClosable    | 点击遮罩是否关闭键盘                                  | boolean                               | true   |
| open            | 是否显示键盘                                          | boolean                               | false  |
| onOpen          | 键盘打开时触发                                        | () => void                            | -      |
| onClose         | 键盘关闭时触发                                        | (event: Event) => void                | -      |
