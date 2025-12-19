---
group:
  title: 数据录入
  order: 2
order: 1
title: Location
toc: content
---

# Location

位置组件，用于位置选择和展示。

## 何时使用

- 需要位置选择时
- 需要位置展示时
- 需要地图定位时
- 需要地址选择时

## 示例

### Location.Combo

<code src="./demos/Combo/index.jsx"></code>

### Location.Main

<code src="./demos/Main/index.jsx"></code>

## Location.Main

### 属性

| 属性         | 说明         | 类型                      | 默认值 |
| ------------ | ------------ | ------------------------- | ------ |
| open         | 显示类型     | `'preview' \| 'choose'`   | -      |
| allowClear   | 是否允许清除 | `boolean`                 | -      |
| config       | 配置项       | `object`                  | -      |
| autoLocation | 自动定位     | `boolean`                 | `true` |
| getLocation  | 获取位置函数 | `function`                | -      |
| getAddress   | 获取地址函数 | `function`                | -      |
| value        | 当前值       | `object`                  | -      |
| onChange     | 变化回调     | `(value: object) => void` | -      |
| id           | 唯一标识     | `string`                  | -      |
| className    | 自定义类名   | `string`                  | -      |
| style        | 自定义样式   | `object`                  | -      |

### Ref

| 属性           | 说明           | 类型                   |
| -------------- | -------------- | ---------------------- |
| mainElement    | 主容器元素     | `HtmlDivElement`       |
| getMainElement | 获取主容器元素 | () => `HtmlDivElement` |
