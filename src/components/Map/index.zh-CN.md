---
group:
  title: 数据录入
  order: 2
order: 1
title: Map
toc: content
---

# Map

支持国际化的地图组件。

## 何时使用

- 需要地图展示时
- 需要位置选择时
- 需要地图标注时
- 需要地理信息时

## 示例

### 标注一个点

<code src="./demos/mapChoose.jsx"></code>

### 多点显示

<code src="./demos/mapMarkers.jsx"></code>

## Map.Choose

### 属性

| 属性                 | 说明         | 类型                       | 默认值 |
| -------------------- | ------------ | -------------------------- | ------ |
| readOnly             | 是否只读     | `boolean`                  | -      |
| autoLocation         | 自动定位     | `boolean`                  | `true` |
| getAddress           | 获取地址函数 | `function`                 | -      |
| getLocation          | 获取位置函数 | `function`                 | -      |
| queryNearby          | 查询附近函数 | `function`                 | -      |
| center               | 中心点       | `object`                   | -      |
| value                | 当前值       | `object`                   | -      |
| onLoad               | 加载回调     | `(map: object) => void`    | -      |
| onChange             | 变化回调     | `(value: object) => void`  | -      |
| onMarkerClick        | 标记点击回调 | `(marker: object) => void` | -      |
| SearchControlProps   | 搜索控件属性 | `object`                   | -      |
| CenterMarkerProps    | 中心标记属性 | `object`                   | -      |
| MarkersProps         | 标记属性     | `object`                   | -      |
| ZoomControlProps     | 缩放控件属性 | `object`                   | -      |
| LocationControlProps | 定位控件属性 | `object`                   | -      |
| NearbyControlProps   | 附近控件属性 | `object`                   | -      |

### Ref

| 属性   | 说明     | 类型     |
| ------ | -------- | -------- |
| mapRef | 地图实例 | `object` |
