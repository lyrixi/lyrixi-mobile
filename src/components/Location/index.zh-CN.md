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

## Location.Combo

位置选择器组合组件，结合输入框和位置选择器。

### 何时使用

- 需要结合输入框和位置选择器时
- 需要显示和选择位置时

### 代码演示

<code src="./demos/LocationCombo.jsx"></code>

### API

#### 属性

| 属性                   | 说明         | 类型                                                   | 默认值    |
| ---------------------- | ------------ | ------------------------------------------------------ | --------- |
| value                  | 位置值       | `{latitude: number, longitude: number, value: string}` | -         |
| errorText              | 错误提示文本 | `string`                                               | -         |
| loadingText            | 加载提示文本 | `string`                                               | -         |
| disabled               | 是否禁用     | `boolean`                                              | `false`   |
| editable               | 是否可编辑   | `boolean`                                              | `false`   |
| autoLocation           | 自动定位     | `boolean`                                              | `false`   |
| locationVisible        | 定位按钮可见 | `boolean`                                              | `true`    |
| chooseVisible          | 选择按钮可见 | `boolean`                                              | `false`   |
| previewVisible         | 预览按钮可见 | `boolean`                                              | `false`   |
| clickAction            | 点击动作     | `'location' \| 'choose' \| 'preview'`                  | -         |
| className              | 自定义类名   | `string`                                               | -         |
| modalClassName         | 模态框类名   | `string`                                               | -         |
| modalStyle             | 模态框样式   | `object`                                               | -         |
| type                   | 坐标类型     | `string`                                               | `'gcj02'` |
| autoSize               | 自动调整大小 | `boolean`                                              | -         |
| config                 | 地图配置     | `object`                                               | -         |
| getAddress             | 获取地址函数 | `(location: object) => Promise<string>`                | -         |
| getLocation            | 获取位置函数 | `() => Promise<object>`                                | -         |
| portal                 | 挂载节点     | `HTMLElement`                                          | -         |
| onChange               | 变化事件     | `(value: object) => void`                              | -         |
| onOpen                 | 打开事件     | `() => void`                                           | -         |
| onClose                | 关闭事件     | `() => void`                                           | -         |
| onLocationStatusChange | 定位状态变化 | `(status: string) => void`                             | -         |
| onError                | 错误事件     | `(error: object) => void`                              | -         |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Location.Modal

位置选择器模态框组件。

### 何时使用

- 需要以模态框形式显示位置选择器时
- 需要全屏显示地图选择时

### 代码演示

### API

#### 属性

| 属性           | 说明         | 类型                                                   | 默认值 |
| -------------- | ------------ | ------------------------------------------------------ | ------ |
| value          | 位置值       | `{latitude: number, longitude: number, value: string}` | -      |
| open           | 是否显示     | `boolean`                                              | -      |
| config         | 地图配置     | `object`                                               | -      |
| getAddress     | 获取地址函数 | `(location: object) => Promise<string>`                | -      |
| getLocation    | 获取位置函数 | `() => Promise<object>`                                | -      |
| portal         | 挂载节点     | `HTMLElement`                                          | -      |
| modalClassName | 模态框类名   | `string`                                               | -      |
| modalStyle     | 模态框样式   | `object`                                               | -      |
| onChange       | 变化事件     | `(value: object) => void`                              | -      |
| onOpen         | 打开事件     | `() => void`                                           | -      |
| onClose        | 关闭事件     | `() => void`                                           | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Location.Main

位置选择器主组件。

### 何时使用

- 需要直接使用位置选择器主组件时
- 需要自定义位置选择界面时

### 代码演示

<code src="./demos/LocationMain.jsx"></code>

### API

#### 属性

| 属性         | 说明          | 类型                                                   | 默认值 |
| ------------ | ------------- | ------------------------------------------------------ | ------ |
| value        | 位置值        | `{latitude: number, longitude: number, value: string}` | -      |
| open         | 显示类型      | `'preview' \| 'choose'`                                | -      |
| allowClear   | 允许清除      | `boolean`                                              | -      |
| autoLocation | 自动定位      | `boolean`                                              | `true` |
| id           | 位置选择器 ID | `string`                                               | -      |
| config       | 地图配置      | `object`                                               | -      |
| getLocation  | 获取位置函数  | `() => Promise<object>`                                | -      |
| getAddress   | 获取地址函数  | `(location: object) => Promise<string>`                | -      |
| style        | 自定义样式    | `object`                                               | -      |
| className    | 自定义类名    | `string`                                               | -      |
| onChange     | 变化事件      | `(value: object) => void`                              | -      |

#### Ref

| 属性           | 说明       | 类型                   |
| -------------- | ---------- | ---------------------- |
| mainElement    | 主元素     | `HtmlDivElement`       |
| getMainElement | 获取主元素 | () => `HtmlDivElement` |
