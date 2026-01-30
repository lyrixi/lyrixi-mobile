---
group:
  title: 反馈
  order: 4
order: 1
title: ActionSheet
toc: content
---

# ActionSheet

动作面板组件，用于显示操作选项。

## ActionSheet.Combo

动作面板组合组件，结合输入框和动作面板。

### 何时使用

- 需要结合输入框和动作面板时
- 需要从输入框触发动作面板时

### 代码演示

<code src="./demos/ActionSheetCombo.jsx"></code>

### API

#### 属性

| 属性           | 说明           | 类型                           | 默认值 |
| -------------- | -------------- | ------------------------------ | ------ |
| value          | 选中的值       | `any`                          | -      |
| placeholder    | 占位符         | `string`                       | -      |
| formatter      | 格式化函数     | `(value: any) => string`       | -      |
| autoSize       | 自动调整大小   | `boolean`                      | -      |
| separator      | 分隔符         | `string`                       | -      |
| mode           | 模式           | `string`                       | -      |
| readOnly       | 是否只读       | `boolean`                      | -      |
| disabled       | 是否禁用       | `boolean`                      | -      |
| allowClear     | 允许清除       | `boolean`                      | -      |
| style          | 自定义样式     | `object`                       | -      |
| className      | 自定义类名     | `string`                       | -      |
| comboRender    | 自定义组合渲染 | `() => ReactNode`              | -      |
| children       | 子元素         | `ReactNode`                    | -      |
| leftIconNode   | 左侧图标       | `ReactNode`                    | -      |
| rightIconNode  | 右侧图标       | `ReactNode`                    | -      |
| clearRender    | 清除按钮渲染   | `(props: object) => ReactNode` | -      |
| list           | 选项列表       | `Array<object>`                | -      |
| maskClosable   | 点击遮罩关闭   | `boolean`                      | -      |
| safeArea       | 是否安全区     | `boolean`                      | -      |
| modalStyle     | 模态框样式     | `object`                       | -      |
| modalClassName | 模态框类名     | `string`                       | -      |
| maskStyle      | 遮罩样式       | `object`                       | -      |
| maskClassName  | 遮罩类名       | `string`                       | -      |
| portal         | 挂载节点       | `HTMLElement \| null \| false` | -      |
| title          | 标题           | `ReactNode`                    | -      |
| cancelNode     | 取消按钮       | `ReactNode`                    | -      |
| cancelVisible  | 取消按钮可见   | `boolean`                      | -      |
| itemRender     | 项渲染         | `(item: object) => ReactNode`  | -      |
| onBeforeOpen   | 打开前事件     | `() => Promise<boolean>`       | -      |
| onOpen         | 打开事件       | `() => void`                   | -      |
| onClose        | 关闭事件       | `() => void`                   | -      |
| onClick        | 点击事件       | `(e: Event) => void`           | -      |
| onChange       | 变化事件       | `(value: any) => void`         | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |
| close      | 关闭面板   | `() => void`           |
| open       | 打开面板   | `() => void`           |

## ActionSheet.Modal

动作面板模态框组件。

### 何时使用

- 需要以模态框形式显示动作面板时
- 需要从底部弹出操作选项时

### 代码演示

<code src="./demos/ActionSheetItem.jsx" id="actionsheet-modal"></code>

### API

#### 属性

| 属性           | 说明         | 类型                           | 默认值  |
| -------------- | ------------ | ------------------------------ | ------- |
| value          | 选中的值     | `any`                          | -       |
| list           | 选项列表     | `Array<object>`                | -       |
| open           | 是否显示     | `boolean`                      | `false` |
| maskClosable   | 点击遮罩关闭 | `boolean`                      | `true`  |
| allowClear     | 允许清除     | `boolean`                      | -       |
| safeArea       | 是否安全区   | `boolean`                      | -       |
| modalStyle     | 模态框样式   | `object`                       | -       |
| modalClassName | 模态框类名   | `string`                       | -       |
| maskStyle      | 遮罩样式     | `object`                       | -       |
| maskClassName  | 遮罩类名     | `string`                       | -       |
| itemStyle      | 选项样式     | `object`                       | -       |
| itemClassName  | 选项类名     | `string`                       | -       |
| groupStyle     | 组样式       | `object`                       | -       |
| groupClassName | 组类名       | `string`                       | -       |
| portal         | 挂载节点     | `HTMLElement \| null \| false` | -       |
| title          | 标题         | `ReactNode`                    | -       |
| cancelNode     | 取消按钮     | `ReactNode`                    | -       |
| cancelVisible  | 取消按钮可见 | `boolean`                      | -       |
| itemRender     | 项渲染       | `(item: object) => ReactNode`  | -       |
| onChange       | 变化事件     | `(value: any) => void`         | -       |
| onCancel       | 取消事件     | `() => void`                   | -       |
| onClose        | 关闭事件     | `() => void`                   | -       |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |
| close      | 关闭面板   | `() => void`           |
| open       | 打开面板   | `() => void`           |

## ActionSheet.Item

动作面板项组件。

### 何时使用

- 需要显示动作面板项时
- 需要自定义动作面板项时

### 代码演示

<code src="./demos/ActionSheetItem.jsx" id="actionsheet-item"></code>

### API

#### 属性

| 属性      | 说明       | 类型                 | 默认值 |
| --------- | ---------- | -------------------- | ------ |
| checked   | 是否选中   | `boolean`            | -      |
| disabled  | 是否禁用   | `boolean`            | -      |
| style     | 自定义样式 | `object`             | -      |
| className | 自定义类名 | `string`             | -      |
| children  | 项内容     | `ReactNode`          | -      |
| onClick   | 点击事件   | `(e: Event) => void` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |
