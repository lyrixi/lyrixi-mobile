---
group:
  title: 数据展示
  order: 5
order: 1
title: Map
toc: content
---

# Map

地图组件，用于显示和操作地图。

## 何时使用

- 需要显示地图时
- 需要在地图上标注位置时
- 需要选择地理位置时

## 代码演示

<code src="./demos/mapChoose.jsx"></code>

## API

### 属性

| 属性         | 说明         | 类型                                                  | 默认值 |
| ------------ | ------------ | ----------------------------------------------------- | ------ |
| center       | 地图中心点   | `{latitude: number, longitude: number, type: string}` | -      |
| zoom         | 缩放级别     | `number`                                              | -      |
| minZoom      | 最小缩放级别 | `number`                                              | -      |
| maxZoom      | 最大缩放级别 | `number`                                              | -      |
| getAddress   | 获取地址函数 | `(coord: object) => Promise<string>`                  | -      |
| getLocation  | 获取位置函数 | `() => Promise<object>`                               | -      |
| openLocation | 打开位置函数 | `(location: object) => void`                          | -      |
| queryNearby  | 查询附近函数 | `(location: object) => Promise<Array>`                | -      |
| style        | 自定义样式   | `object`                                              | -      |
| className    | 自定义类名   | `string`                                              | -      |
| children     | 地图内容     | `ReactNode`                                           | -      |
| onLoad       | 加载完成事件 | `(map: object) => void`                               | -      |
| onZoomStart  | 缩放开始事件 | `(e: Event) => void`                                  | -      |
| onZoom       | 缩放事件     | `(e: Event) => void`                                  | -      |
| onZoomEnd    | 缩放结束事件 | `(e: Event) => void`                                  | -      |
| onMoveStart  | 移动开始事件 | `(e: Event) => void`                                  | -      |
| onMove       | 移动事件     | `(e: Event) => void`                                  | -      |
| onMoveEnd    | 移动结束事件 | `(e: Event) => void`                                  | -      |
| onDragStart  | 拖动开始事件 | `(e: Event) => void`                                  | -      |
| onDrag       | 拖动事件     | `(e: Event) => void`                                  | -      |
| onDragEnd    | 拖动结束事件 | `(e: Event) => void`                                  | -      |

### Ref

| 属性         | 说明             | 类型                                   |
| ------------ | ---------------- | -------------------------------------- | --- |
| element      | 根元素           | `HtmlDivElement`                       |
| getElement   | 获取根元素       | () => `HtmlDivElement`                 |
| type         | 地图类型         | `string`                               |
| currentMap   | 当前地图实例     | `object`                               |
| leafletMap   | Leaflet 地图实例 | `object`                               |
| openLocation | 打开位置         | `(location: object) => void`           | -   |
| getAddress   | 获取地址         | `(coord: object) => Promise<string>`   | -   |
| getLocation  | 获取位置         | `() => Promise<object>`                | -   |
| queryNearby  | 查询附近         | `(location: object) => Promise<Array>` | -   |

## Map.MapContainer

地图容器组件。

### 何时使用

- 需要显示地图容器时

### 代码演示

<code src="./demos/mapChoose.jsx"></code>

### API

#### 属性

同 Map 组件属性。

#### Ref

同 Map 组件 Ref。

## Map.APILoader

地图 API 加载器组件。

### 何时使用

- 需要加载地图 API 时

### 代码演示

<code src="./demos/mapChoose.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 加载器内容 | `ReactNode` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Map.ZoomControl

地图缩放控制组件。

### 何时使用

- 需要显示地图缩放控制时

### 代码演示

<code src="./demos/mapChoose.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型     | 默认值 |
| --------- | ---------- | -------- | ------ |
| style     | 自定义样式 | `object` | -      |
| className | 自定义类名 | `string` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Map.SearchControl

地图搜索控制组件。

### 何时使用

- 需要显示地图搜索控制时

### 代码演示

<code src="./demos/mapChoose.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型     | 默认值 |
| --------- | ---------- | -------- | ------ |
| style     | 自定义样式 | `object` | -      |
| className | 自定义类名 | `string` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Map.CenterMarker

地图中心标记组件。

### 何时使用

- 需要显示地图中心标记时

### 代码演示

<code src="./demos/mapChoose.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型     | 默认值 |
| --------- | ---------- | -------- | ------ |
| style     | 自定义样式 | `object` | -      |
| className | 自定义类名 | `string` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Map.Markers

地图标记组件。

### 何时使用

- 需要显示地图标记时

### 代码演示

<code src="./demos/mapChoose.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型            | 默认值 |
| --------- | ---------- | --------------- | ------ |
| list      | 标记列表   | `Array<object>` | -      |
| style     | 自定义样式 | `object`        | -      |
| className | 自定义类名 | `string`        | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Map.Circles

地图圆形组件。

### 何时使用

- 需要显示地图圆形时

### 代码演示

<code src="./demos/mapChoose.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型            | 默认值 |
| --------- | ---------- | --------------- | ------ |
| list      | 圆形列表   | `Array<object>` | -      |
| style     | 自定义样式 | `object`        | -      |
| className | 自定义类名 | `string`        | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Map.Polyline

地图折线组件。

### 何时使用

- 需要显示地图折线时

### 代码演示

<code src="./demos/mapChoose.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型            | 默认值 |
| --------- | ---------- | --------------- | ------ |
| list      | 折线列表   | `Array<object>` | -      |
| style     | 自定义样式 | `object`        | -      |
| className | 自定义类名 | `string`        | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Map.LocationControl

地图定位控制组件。

### 何时使用

- 需要显示地图定位控制时

### 代码演示

<code src="./demos/mapChoose.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型     | 默认值 |
| --------- | ---------- | -------- | ------ |
| style     | 自定义样式 | `object` | -      |
| className | 自定义类名 | `string` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Map.NearbyControl

地图附近控制组件。

### 何时使用

- 需要显示地图附近控制时

### 代码演示

<code src="./demos/mapChoose.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型     | 默认值 |
| --------- | ---------- | -------- | ------ |
| style     | 自定义样式 | `object` | -      |
| className | 自定义类名 | `string` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Map.MapChoose

地图选择页面组件。

### 何时使用

- 需要显示地图选择页面时

### 代码演示

<code src="./demos/mapChoose.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 页面内容   | `ReactNode` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Map.MapMarkers

地图标记页面组件。

### 何时使用

- 需要显示地图标记页面时

### 代码演示

<code src="./demos/mapChoose.jsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型        | 默认值 |
| --------- | ---------- | ----------- | ------ |
| style     | 自定义样式 | `object`    | -      |
| className | 自定义类名 | `string`    | -      |
| children  | 页面内容   | `ReactNode` | -      |

#### Ref

| 属性       | 说明       | 类型                   |
| ---------- | ---------- | ---------------------- |
| element    | 根元素     | `HtmlDivElement`       |
| getElement | 获取根元素 | () => `HtmlDivElement` |

## Map.coordsToWgs84

坐标转换为 WGS84（工具函数）。

### 参数

| 参数  | 说明 | 类型     | 默认值 |
| ----- | ---- | -------- | ------ |
| coord | 坐标 | `object` | -      |

### 返回值

| 类型     | 说明       |
| -------- | ---------- |
| `object` | WGS84 坐标 |

## Map.wgs84ToCoords

WGS84 坐标转换为其他坐标系（工具函数）。

### 参数

| 参数  | 说明       | 类型     | 默认值 |
| ----- | ---------- | -------- | ------ |
| coord | WGS84 坐标 | `object` | -      |

### 返回值

| 类型     | 说明         |
| -------- | ------------ |
| `object` | 转换后的坐标 |

## Map.getAddress

获取地址（工具函数）。

### 参数

| 参数  | 说明 | 类型     | 默认值 |
| ----- | ---- | -------- | ------ |
| coord | 坐标 | `object` | -      |

### 返回值

| 类型              | 说明       |
| ----------------- | ---------- |
| `Promise<string>` | 地址字符串 |

## Map.getLocation

获取位置（工具函数）。

### 参数

无参数。

### 返回值

| 类型              | 说明     |
| ----------------- | -------- |
| `Promise<object>` | 位置对象 |

## Map.queryNearby

查询附近（工具函数）。

### 参数

| 参数     | 说明 | 类型     | 默认值 |
| -------- | ---- | -------- | ------ |
| location | 位置 | `object` | -      |

### 返回值

| 类型             | 说明         |
| ---------------- | ------------ |
| `Promise<Array>` | 附近位置列表 |
