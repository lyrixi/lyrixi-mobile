---
group:
  title: 数据录入
  order: 2
order: 1
title: Location
toc: content
---

# Location

位置选择器组件，用于选择地理位置。

## 何时使用

- 需要选择地理位置时
- 需要显示地图时
- 需要获取地址信息时

## 代码演示

<code src="./demos/Main/index.jsx"></code>

## API

### 属性

| 属性           | 说明          | 类型                                                   | 默认值 |
| -------------- | ------------- | ------------------------------------------------------ | ------ |
| value          | 位置值        | `{latitude: number, longitude: number, value: string}` | -      |
| placeholder    | 占位符        | `string`                                               | -      |
| formatter      | 格式化函数    | `(value: object) => string`                            | -      |
| autoSize       | 自动调整大小  | `boolean`                                              | -      |
| separator      | 分隔符        | `string`                                               | -      |
| mode           | 模式          | `string`                                               | -      |
| readOnly       | 是否只读      | `boolean`                                              | -      |
| disabled       | 是否禁用      | `boolean`                                              | -      |
| allowClear     | 允许清除      | `boolean`                                              | -      |
| style          | 自定义样式    | `object`                                               | -      |
| className      | 自定义类名    | `string`                                               | -      |
| leftIconNode   | 左侧图标      | `ReactNode`                                            | -      |
| rightIconNode  | 右侧图标      | `ReactNode`                                            | -      |
| clearRender    | 清除按钮渲染  | `(props: object) => ReactNode`                         | -      |
| open           | 显示类型      | `'preview' \| 'choose'`                                | -      |
| allowClear     | 允许清除      | `boolean`                                              | -      |
| autoLocation   | 自动定位      | `boolean`                                              | `true` |
| id             | 位置选择器 ID | `string`                                               | -      |
| config         | 地图配置      | `object`                                               | -      |
| getLocation    | 获取位置函数  | `() => Promise<object>`                                | -      |
| getAddress     | 获取地址函数  | `(location: object) => Promise<string>`                | -      |
| maskClosable   | 点击遮罩关闭  | `boolean`                                              | -      |
| safeArea       | 是否安全区    | `boolean`                                              | -      |
| modalStyle     | 模态框样式    | `object`                                               | -      |
| modalClassName | 模态框类名    | `string`                                               | -      |
| maskStyle      | 遮罩样式      | `object`                                               | -      |
| maskClassName  | 遮罩类名      | `string`                                               | -      |
| portal         | 挂载节点      | `HTMLElement \| null \| false`                         | -      |
| title          | 标题          | `ReactNode`                                            | -      |
| onBeforeOpen   | 打开前事件    | `() => Promise<boolean>`                               | -      |
| onChange       | 变化事件      | `(value: object) => void`                              | -      |

### Ref

| 属性           | 说明       | 类型                   |
| -------------- | ---------- | ---------------------- |
| mainElement    | 主元素     | `HtmlDivElement`       |
| getMainElement | 获取主元素 | () => `HtmlDivElement` |

## Location.Combo

位置选择器组合组件，结合输入框和位置选择器。

### 何时使用

- 需要结合输入框和位置选择器时

### 代码演示

<code src="./demos/Combo/index.jsx"></code>

### API

#### 属性

同 Location 组件属性。

#### Ref

同 Location 组件 Ref。

## Location.Modal

位置选择器模态框组件。

### 何时使用

- 需要以模态框形式显示位置选择器时

### 代码演示

### API

#### 属性

同 Location 组件属性。

#### Ref

同 Location 组件 Ref。

## Location.Main

位置选择器主组件。

### 何时使用

- 需要直接使用位置选择器主组件时

### 代码演示

<code src="./demos/Main/index.jsx"></code>

### API

#### 属性

同 Location 组件属性。

#### Ref

同 Location 组件 Ref。
