---
group:
  title: 数据录入
  order: 2
order: 1
title: Cascader
toc: content
---

# Cascader

级联选择器组件，用于从级联数据中选择。

## Cascader.Combo

级联选择器组合组件，结合输入框和级联选择器。

### 何时使用

- 需要结合输入框和级联选择器时

### 代码演示

<code src="./demos/CascaderCombo.jsx"></code>

### API

#### 属性

| 属性           | 说明         | 类型                                                  | 默认值 |
| -------------- | ------------ | ----------------------------------------------------- | ------ |
| value          | 选中的值     | `any \| any[]`                                        | -      |
| placeholder    | 占位符       | `string`                                              | -      |
| formatter      | 格式化函数   | `(value: any \| any[]) => string`                     | -      |
| autoSize       | 自动调整大小 | `boolean`                                             | -      |
| separator      | 分隔符       | `string`                                              | -      |
| mode           | 模式         | `string`                                              | -      |
| readOnly       | 是否只读     | `boolean`                                             | -      |
| disabled       | 是否禁用     | `boolean`                                             | -      |
| allowClear     | 允许清除     | `boolean`                                             | -      |
| style          | 自定义样式   | `object`                                              | -      |
| className      | 自定义类名   | `string`                                              | -      |
| leftIconNode   | 左侧图标     | `ReactNode`                                           | -      |
| rightIconNode  | 右侧图标     | `ReactNode`                                           | -      |
| clearRender    | 清除按钮渲染 | `(props: object) => ReactNode`                        | -      |
| list           | 级联数据     | `Array<{id: string, name: string, children?: Array}>` | -      |
| loadData       | 加载数据函数 | `(tabs: Array) => Promise<Array \| null>`             | -      |
| maskClosable   | 点击遮罩关闭 | `boolean`                                             | -      |
| safeArea       | 是否安全区   | `boolean`                                             | -      |
| modalStyle     | 模态框样式   | `object`                                              | -      |
| modalClassName | 模态框类名   | `string`                                              | -      |
| maskStyle      | 遮罩样式     | `object`                                              | -      |
| maskClassName  | 遮罩类名     | `string`                                              | -      |
| portal         | 挂载节点     | `HTMLElement \| null \| false`                        | -      |
| title          | 标题         | `ReactNode`                                           | -      |
| okNode         | 确认按钮     | `ReactNode`                                           | -      |
| cancelNode     | 取消按钮     | `ReactNode`                                           | -      |
| okVisible      | 确认按钮可见 | `boolean`                                             | -      |
| cancelVisible  | 取消按钮可见 | `boolean`                                             | -      |
| searchVisible  | 搜索可见     | `boolean`                                             | -      |
| onBeforeOpen   | 打开前事件   | `() => Promise<boolean>`                              | -      |
| onChange       | 变化事件     | `(value: any \| any[]) => void`                       | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |
| close      | 关闭选择器 | `() => void`           |
| open       | 打开选择器 | `() => void`           |

## Cascader.Modal

级联选择器模态框组件。

### 何时使用

- 需要以模态框形式显示级联选择器时

### 代码演示

<code src="./demos/CascaderModal.jsx"></code>

### API

#### 属性

同 Cascader.Combo 组件属性。

#### Ref

同 Cascader.Combo 组件 Ref。

## Cascader.Main

级联选择器主组件。

### 何时使用

- 需要直接使用级联选择器主组件时

### 代码演示

<code src="./demos/CascaderMain.jsx"></code>

### API

#### 属性

同 Cascader.Combo 组件属性。

#### Ref

同 Cascader.Combo 组件 Ref。

## Cascader.DistrictCombo

地区级联选择器组合组件。

### 何时使用

- 需要选择地区时
- 需要结合输入框和地区选择器时

### 代码演示

<code src="./demos/CascaderDistrictCombo.jsx"></code>

### API

#### 属性

同 Cascader.Combo 组件属性。

#### Ref

同 Cascader.Combo 组件 Ref。

## Cascader.DistrictModal

地区级联选择器模态框组件。

### 何时使用

- 需要以模态框形式显示地区级联选择器时

### 代码演示

<code src="./demos/CascaderDistrictModal.jsx"></code>

### API

#### 属性

同 Cascader.Combo 组件属性。

#### Ref

同 Cascader.Combo 组件 Ref。

## Cascader.DistrictMain

地区级联选择器主组件。

### 何时使用

- 需要直接使用地区级联选择器主组件时

### 代码演示

<code src="./demos/CascaderDistrictMain.jsx"></code>

### API

#### 属性

同 Cascader.Combo 组件属性。

#### Ref

同 Cascader.Combo 组件 Ref。
