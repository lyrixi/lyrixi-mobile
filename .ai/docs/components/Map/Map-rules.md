# Map Rules

> 源文档：`src/components/Map/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-mobile` 引入 `Map`，**禁止**自造同类 UI。
- 子组件写法：`Map.Sub`（与库导出一致）。

## 何时使用
- 见 `src/components/Map/index.zh-CN.md` 中「何时使用」。

## 子组件
- `Map.CenterMarker`
- `Map.Circles`
- `Map.LocationControl`
- `Map.MapChoose`
- `Map.MapContainer`
- `Map.MapLoader`
- `Map.MapMarkers`
- `Map.Markers`
- `Map.NearbyControl`
- `Map.Polygon`
- `Map.Polyline`
- `Map.SearchControl`
- `Map.ZoomControl`
- `Map.coordsToWgs84`
- `Map.getAddress`
- `Map.getLocation`
- `Map.getSuperAddress`
- `Map.getSuperLocation`
- `Map.queryNearby`
- `Map.wgs84ToCoords`

## Demo 索引（本目录 `demos/`）
- `demos/MapMapContainer.tsx`
- `demos/MapZoomControl.tsx`
- `demos/MapSearchControl.tsx`
- `demos/MapCenterMarker.tsx`
- `demos/MapMarkers.tsx`
- `demos/MapCircles.tsx`
- `demos/MapPolyline.tsx`
- `demos/MapPolygon.tsx`
- `demos/MapLocationControl.tsx`
- `demos/MapNearbyControl.tsx`
- `demos/PageMapChoose.tsx`
- `demos/PageMapMarkers.tsx`

## 查阅顺序
- Props：`Map-props.ts`
- 示例：`Map-example.md`