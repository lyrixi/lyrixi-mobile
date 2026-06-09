---
group:
  title: 数据展示
  order: 5
order: 1
title: Map
toc: content
---

## Map.MapContainer

地图组件，用于显示和操作地图。

### 何时使用

- 需要显示地图时
- 需要在地图上标注位置时
- 需要选择地理位置时

### 代码演示

<code src="./demos/MapMapContainer.tsx"></code>

### API

#### 属性

| 属性         | 说明         | 类型                                                                          | 默认值 |
| ------------ | ------------ | ----------------------------------------------------------------------------- | ------ |
| center       | 地图中心点   | `MapPoint \| Array<MapPoint>`                                                 | -      |
| zoom         | 缩放级别     | `number`                                                                      | -      |
| minZoom      | 最小缩放级别 | `number`                                                                      | -      |
| maxZoom      | 最大缩放级别 | `number`                                                                      | -      |
| cacheExpires | 缓存过期时间 | `number`                                                                      | -      |
| getAddress   | 获取地址函数 | `(...args) => Promise<Record<string, unknown>>`                               | -      |
| getLocation  | 获取位置函数 | `(...args) => Promise<MapPoint \| null>`                                      | -      |
| openLocation | 打开位置函数 | `(...args) => unknown`                                                        | -      |
| queryNearby  | 查询附近函数 | `(...args) => unknown`                                                        | -      |
| style        | 自定义样式   | `CSSProperties`                                                               | -      |
| className    | 自定义类名   | `string`                                                                      | -      |
| children     | 地图内容     | `ReactNode`                                                                   | -      |
| onLoad       | 加载完成事件 | `(result: {status: string, message?: string, map?: MapContainerAPI}) => void` | -      |
| onZoomStart  | 缩放开始事件 | `(map: MapContainerAPI) => void`                                              | -      |
| onZoom       | 缩放事件     | `(map: MapContainerAPI) => void`                                              | -      |
| onZoomEnd    | 缩放结束事件 | `(map: MapContainerAPI) => void`                                              | -      |
| onMoveStart  | 移动开始事件 | `(map: MapContainerAPI) => void`                                              | -      |
| onMove       | 移动事件     | `(map: MapContainerAPI) => void`                                              | -      |
| onMoveEnd    | 移动结束事件 | `(map: MapContainerAPI) => void`                                              | -      |
| onDragStart  | 拖动开始事件 | `(map: MapContainerAPI) => void`                                              | -      |
| onDrag       | 拖动事件     | `(map: MapContainerAPI) => void`                                              | -      |
| onDragEnd    | 拖动结束事件 | `(map: MapContainerAPI) => void`                                              | -      |

说明：`MapPoint` 含 `latitude`、`longitude`、`type` 等字段。

#### Ref

| 属性         | 说明             | 类型                                                                                         |
| ------------ | ---------------- | -------------------------------------------------------------------------------------------- |
| element      | 根元素           | `HTMLDivElement \| null`                                                                     |
| getElement   | 获取根元素       | `() => HTMLDivElement \| null`                                                               |
| type         | 地图类型         | `string`                                                                                     |
| currentMap   | 当前地图实例     | `unknown`                                                                                    |
| leafletMap   | Leaflet 地图实例 | `L.Map \| null`                                                                              |
| openLocation | 打开位置         | `(opts: Record<string, unknown>) => void`                                                    |
| getAddress   | 获取地址         | `(coord: MapPoint) => Promise<Record<string, unknown> \| {status: string, message: string}>` |
| getLocation  | 获取位置         | `(params: Record<string, unknown>) => Promise<MapPoint \| null>`                             |
| queryNearby  | 查询附近         | `(...args) => unknown`                                                                       |
| center       | 当前中心点       | `MapPoint`                                                                                   |
| setView      | 设置视图         | `(...params) => void`                                                                        |
| panTo        | 平移至坐标       | `(coords: MapPoint \| MapPoint[]) => void`                                                   |
| getCenter    | 获取中心点       | `() => {latitude: number, longitude: number, type?: string}`                                 |
| zoomIn       | 放大             | `() => void`                                                                                 |
| zoomOut      | 缩小             | `() => void`                                                                                 |
| getZoom      | 获取缩放级别     | `() => number \| null`                                                                       |
| setZoom      | 设置缩放级别     | `(zoom: number) => unknown`                                                                  |

## Map.ZoomControl

地图缩放控制组件。

### 何时使用

- 需要显示地图缩放控制时

### 代码演示

<code src="./demos/MapZoomControl.tsx"></code>

### API

#### 属性

| 属性      | 说明         | 类型                             | 默认值 |
| --------- | ------------ | -------------------------------- | ------ |
| map       | 地图实例 API | `MapContainerAPI`                | -      |
| style     | 自定义样式   | `CSSProperties`                  | -      |
| className | 自定义类名   | `string`                         | -      |
| onZoomIn  | 放大事件     | `(map: MapContainerAPI) => void` | -      |
| onZoomOut | 缩小事件     | `(map: MapContainerAPI) => void` | -      |

#### Ref

| 属性       | 说明       | 类型                           |
| ---------- | ---------- | ------------------------------ |
| element    | 根元素     | `HTMLDivElement \| null`       |
| getElement | 获取根元素 | `() => HTMLDivElement \| null` |
| zoomIn     | 放大       | `() => void`                   |
| zoomOut    | 缩小       | `() => void`                   |

## Map.SearchControl

地图搜索控制组件。

### 何时使用

- 需要显示地图搜索控制时

### 代码演示

<code src="./demos/MapSearchControl.tsx"></code>

### API

#### 属性

| 属性      | 说明         | 类型                      | 默认值 |
| --------- | ------------ | ------------------------- | ------ |
| map       | 地图实例 API | `MapContainerAPI`         | -      |
| style     | 自定义样式   | `CSSProperties`           | -      |
| className | 自定义类名   | `string`                  | -      |
| onChange  | 选中变化事件 | `(item: unknown) => void` | -      |

## Map.CenterMarker

地图中心标记组件。

### 何时使用

- 需要显示地图中心标记时

### 代码演示

<code src="./demos/MapCenterMarker.tsx"></code>

### API

#### 属性

| 属性        | 说明         | 类型                             | 默认值 |
| ----------- | ------------ | -------------------------------- | ------ |
| value       | 中心点坐标   | `MapCenterMarkerPoint \| null`   | -      |
| map         | 地图实例 API | `MapContainerAPI`                | -      |
| icon        | 标记图标     | `L.Icon \| L.DivIcon \| null`    | -      |
| style       | 自定义样式   | `CSSProperties`                  | -      |
| className   | 自定义类名   | `string`                         | -      |
| onClick     | 点击事件     | `(info: MapPoint) => void`       | -      |
| onDragStart | 拖动开始事件 | `(map: MapContainerAPI) => void` | -      |
| onDragEnd   | 拖动结束事件 | `(map: MapContainerAPI) => void` | -      |

#### Ref

| 属性       | 说明       | 类型                            |
| ---------- | ---------- | ------------------------------- |
| element    | 根元素     | `HTMLSpanElement \| null`       |
| getElement | 获取根元素 | `() => HTMLSpanElement \| null` |

## Map.Markers

地图标记组件。

### 何时使用

- 需要显示地图标记时

### 代码演示

<code src="./demos/MapMarkers.tsx"></code>

### API

#### 属性

| 属性      | 说明         | 类型                         | 默认值 |
| --------- | ------------ | ---------------------------- | ------ |
| points    | 标记点列表   | `unknown`                    | -      |
| map       | 地图实例 API | `MapContainerAPI`            | -      |
| icon      | 标记图标     | `unknown`                    | -      |
| style     | 自定义样式   | `CSSProperties`              | -      |
| className | 自定义类名   | `string`                     | -      |
| onClick   | 点击事件     | `(payload: unknown) => void` | -      |

#### Ref

| 属性   | 说明           | 类型                        |
| ------ | -------------- | --------------------------- |
| redraw | 重新绘制标记层 | `() => void`                |
| focus  | 聚焦指定点     | `(point: MapCoord) => void` |
| blur   | 取消聚焦       | `() => void`                |

## Map.Circles

地图圆形组件。

### 何时使用

- 需要显示地图圆形时

### 代码演示

<code src="./demos/MapCircles.tsx"></code>

### API

#### 属性

| 属性   | 说明         | 类型              | 默认值 |
| ------ | ------------ | ----------------- | ------ |
| points | 圆形点列表   | `unknown`         | -      |
| color  | 描边颜色     | `string`          | -      |
| radius | 默认半径     | `number`          | -      |
| map    | 地图实例 API | `MapContainerAPI` | -      |

#### Ref

| 属性   | 说明           | 类型         |
| ------ | -------------- | ------------ |
| redraw | 重新绘制圆形层 | `() => void` |

## Map.Polyline

地图折线组件。

### 何时使用

- 需要显示地图折线时

### 代码演示

<code src="./demos/MapPolyline.tsx"></code>

### API

#### 属性

| 属性   | 说明         | 类型              | 默认值 |
| ------ | ------------ | ----------------- | ------ |
| points | 折线顶点列表 | `unknown`         | -      |
| color  | 线条颜色     | `string`          | -      |
| map    | 地图实例 API | `MapContainerAPI` | -      |

#### Ref

| 属性   | 说明           | 类型         |
| ------ | -------------- | ------------ |
| redraw | 重新绘制折线层 | `() => void` |

## Map.Polygon

地图多边形组件。

### 何时使用

- 需要在地图上绘制封闭区域时（如行政区、围栏、范围框）
- 需要显示带填充的折线闭合图形时

### 代码演示

<code src="./demos/MapPolygon.tsx"></code>

### API

#### 属性

| 属性        | 说明         | 类型              | 默认值      |
| ----------- | ------------ | ----------------- | ----------- |
| points      | 顶点坐标列表 | `unknown`         | -           |
| color       | 描边颜色     | `string`          | `'#3388ff'` |
| fillColor   | 填充颜色     | `string`          | 同 color    |
| fillOpacity | 填充透明度   | `number`          | `0.2`       |
| weight      | 描边宽度     | `number`          | `2`         |
| map         | 地图实例 API | `MapContainerAPI` | -           |

说明：`points` 至少 3 个点，首尾会自动闭合形成多边形。坐标需包含 `latitude`、`longitude`、`type`，建议使用 `Map.coordsToWgs84` 转换后传入。

#### Ref

| 属性   | 说明           | 类型         |
| ------ | -------------- | ------------ |
| redraw | 重新绘制多边形 | `() => void` |

## Map.LocationControl

地图定位控制组件。

### 何时使用

- 需要显示地图定位控制时

### 代码演示

<code src="./demos/MapLocationControl.tsx"></code>

### API

#### 属性

| 属性      | 说明         | 类型                        | 默认值 |
| --------- | ------------ | --------------------------- | ------ |
| map       | 地图实例 API | `MapContainerAPI`           | -      |
| style     | 自定义样式   | `CSSProperties`             | -      |
| className | 自定义类名   | `string`                    | -      |
| onChange  | 定位变化事件 | `(result: unknown) => void` | -      |

#### Ref

| 属性       | 说明         | 类型                           |
| ---------- | ------------ | ------------------------------ |
| element    | 根元素       | `HTMLDivElement \| null`       |
| getElement | 获取根元素   | `() => HTMLDivElement \| null` |
| update     | 更新当前位置 | `() => Promise<unknown>`       |

## Map.NearbyControl

地图附近控制组件。

### 何时使用

- 需要显示地图附近控制时

### 代码演示

<code src="./demos/MapNearbyControl.tsx"></code>

### API

#### 属性

| 属性          | 说明         | 类型                        | 默认值 |
| ------------- | ------------ | --------------------------- | ------ |
| value         | 当前选中位置 | `MapValue`                  | -      |
| radius        | 附近搜索半径 | `number`                    | -      |
| map           | 地图实例 API | `MapContainerAPI`           | -      |
| readOnly      | 是否只读     | `boolean`                   | -      |
| nearbyVisible | 是否显示附近 | `boolean`                   | -      |
| onChange      | 选中变化事件 | `(item: unknown) => void`   | -      |
| onSuccess     | 查询成功事件 | `(result: unknown) => void` | -      |
| onError       | 查询失败事件 | `(result: unknown) => void` | -      |

#### Ref

| 属性       | 说明       | 类型                           |
| ---------- | ---------- | ------------------------------ |
| element    | 根元素     | `HTMLDivElement \| null`       |
| getElement | 获取根元素 | `() => HTMLDivElement \| null` |
| reload     | 重新加载   | `() => void`                   |

## Map.MapChoose

地图选择页面组件。

### 何时使用

- 需要显示地图选择页面时

### 代码演示

<code src="./demos/PageMapChoose.tsx"></code>

### API

#### 属性

| 属性      | 说明       | 类型            | 默认值 |
| --------- | ---------- | --------------- | ------ |
| style     | 自定义样式 | `CSSProperties` | -      |
| className | 自定义类名 | `string`        | -      |
| children  | 页面内容   | `ReactNode`     | -      |

#### Ref

| 属性       | 说明       | 类型                           |
| ---------- | ---------- | ------------------------------ |
| element    | 根元素     | `HTMLDivElement \| null`       |
| getElement | 获取根元素 | () => `HTMLDivElement \| null` |

## Map.MapLoader

地图加载器组件，用于加载地图资源。

### 何时使用

- 需要预加载地图 SDK 和资源时
- 确保地图组件所需的外部库已就绪时

### 代码演示

### API

#### 属性

| 属性          | 说明         | 类型                                                                                               | 默认值 |
| ------------- | ------------ | -------------------------------------------------------------------------------------------------- | ------ |
| config        | 地图配置     | `{ key?: string; type?: string; leaflet?: { css?: string; js?: string }; [key: string]: unknown }` | -      |
| getAddress    | 获取地址函数 | `((...args: unknown[]) => unknown) \| null`                                                        | -      |
| getLocation   | 获取位置函数 | `((...args: unknown[]) => unknown) \| null`                                                        | -      |
| openLocation  | 打开位置函数 | `((...args: unknown[]) => unknown) \| null`                                                        | -      |
| queryNearby   | 查询附近函数 | `((...args: unknown[]) => unknown) \| null`                                                        | -      |
| loadingRender | 加载中渲染   | `(() => ReactNode) \| null`                                                                        | -      |
| loadingNode   | 加载中内容   | `ReactNode`                                                                                        | -      |
| children      | 子元素       | `ReactNode`                                                                                        | -      |
| onError       | 错误事件     | `((result: LoadResult & { reload?: () => void }) => ...) \| null`                                  | -      |
| onSuccess     | 成功事件     | `((result: { status: string; map: { reload: () => void } }) => void) \| null`                      | -      |

#### Ref

| 属性   | 说明     | 类型         |
| ------ | -------- | ------------ |
| reload | 重新加载 | `() => void` |

## Map.getSuperAddress

获取地址（带缓存）。

### 参数

| 参数                 | 说明               | 类型             | 默认值 |
| -------------------- | ------------------ | ---------------- | ------ |
| cacheExpiresContinue | 缓存过期后继续获取 | `boolean`        | `true` |
| cacheExpires         | 缓存过期时间（秒） | `number \| null` | -      |
| type                 | 坐标类型           | `string`         | -      |
| latitude             | 纬度               | `number`         | -      |
| longitude            | 经度               | `number`         | -      |

### 返回值

| 类型               | 说明     |
| ------------------ | -------- |
| `Promise<unknown>` | 地址数据 |

## Map.getSuperLocation

获取位置（带缓存和超时重试）。

### 参数

| 参数                 | 说明               | 类型             | 默认值  |
| -------------------- | ------------------ | ---------------- | ------- |
| timeout              | 超时时间（毫秒）   | `number`         | `10000` |
| cacheExpiresContinue | 缓存过期后继续获取 | `boolean`        | `true`  |
| cacheExpires         | 缓存过期时间（秒） | `number \| null` | -       |
| type                 | 坐标类型           | `string`         | -       |

### 返回值

| 类型               | 说明     |
| ------------------ | -------- |
| `Promise<unknown>` | 位置数据 |

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
