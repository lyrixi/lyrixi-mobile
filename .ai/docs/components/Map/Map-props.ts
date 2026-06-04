/**
 * Map Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface MapMapContainerProps {
  /** 地图中心点 */
  center?: MapPoint | Array<MapPoint>
  /** 缩放级别 */
  zoom?: number
  /** 最小缩放级别 */
  minZoom?: number
  /** 最大缩放级别 */
  maxZoom?: number
  /** 缓存过期时间 */
  cacheExpires?: number
  /** 获取地址函数 */
  getAddress?: (...args) => Promise<Record<string, unknown>>
  /** 获取位置函数 */
  getLocation?: (...args) => Promise<MapPoint | null>
  /** 打开位置函数 */
  openLocation?: (...args) => unknown
  /** 查询附近函数 */
  queryNearby?: (...args) => unknown
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 地图内容 */
  children?: ReactNode
  /** 加载完成事件 */
  onLoad?: (result: {status: string, message?: string, map?: MapContainerAPI}) => void
  /** 缩放开始事件 */
  onZoomStart?: (map: MapContainerAPI) => void
  /** 缩放事件 */
  onZoom?: (map: MapContainerAPI) => void
  /** 缩放结束事件 */
  onZoomEnd?: (map: MapContainerAPI) => void
  /** 移动开始事件 */
  onMoveStart?: (map: MapContainerAPI) => void
  /** 移动事件 */
  onMove?: (map: MapContainerAPI) => void
  /** 移动结束事件 */
  onMoveEnd?: (map: MapContainerAPI) => void
  /** 拖动开始事件 */
  onDragStart?: (map: MapContainerAPI) => void
  /** 拖动事件 */
  onDrag?: (map: MapContainerAPI) => void
  /** 拖动结束事件 */
  onDragEnd?: (map: MapContainerAPI) => void
}

export interface MapZoomControlProps {
  /** 地图实例 API */
  map?: MapContainerAPI
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 放大事件 */
  onZoomIn?: (map: MapContainerAPI) => void
  /** 缩小事件 */
  onZoomOut?: (map: MapContainerAPI) => void
}

export interface MapSearchControlProps {
  /** 地图实例 API */
  map?: MapContainerAPI
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 选中变化事件 */
  onChange?: (item: unknown) => void
}

export interface MapCenterMarkerProps {
  /** 中心点坐标 */
  value?: MapCenterMarkerPoint | null
  /** 地图实例 API */
  map?: MapContainerAPI
  /** 标记图标 */
  icon?: L.Icon | L.DivIcon | null
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 点击事件 */
  onClick?: (info: MapPoint) => void
  /** 拖动开始事件 */
  onDragStart?: (map: MapContainerAPI) => void
  /** 拖动结束事件 */
  onDragEnd?: (map: MapContainerAPI) => void
}

export interface MapMarkersProps {
  /** 标记点列表 */
  points?: unknown
  /** 地图实例 API */
  map?: MapContainerAPI
  /** 标记图标 */
  icon?: unknown
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 点击事件 */
  onClick?: (payload: unknown) => void
}

export interface MapCirclesProps {
  /** 圆形点列表 */
  points?: unknown
  /** 描边颜色 */
  color?: string
  /** 默认半径 */
  radius?: number
  /** 地图实例 API */
  map?: MapContainerAPI
}

export interface MapPolylineProps {
  /** 折线顶点列表 */
  points?: unknown
  /** 线条颜色 */
  color?: string
  /** 地图实例 API */
  map?: MapContainerAPI
}

export interface MapPolygonProps {
  /** 顶点坐标列表 */
  points?: unknown
  /** 描边颜色，默认 `'#3388ff'` */
  color?: string
  /** 填充颜色，默认 同 color */
  fillColor?: string
  /** 填充透明度，默认 `0.2` */
  fillOpacity?: number
  /** 描边宽度，默认 `2` */
  weight?: number
  /** 地图实例 API */
  map?: MapContainerAPI
}

export interface MapLocationControlProps {
  /** 地图实例 API */
  map?: MapContainerAPI
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 定位变化事件 */
  onChange?: (result: unknown) => void
}

export interface MapNearbyControlProps {
  /** 当前选中位置 */
  value?: MapValue
  /** 附近搜索半径 */
  radius?: number
  /** 地图实例 API */
  map?: MapContainerAPI
  /** 是否只读 */
  readOnly?: boolean
  /** 是否显示附近 */
  nearbyVisible?: boolean
  /** 选中变化事件 */
  onChange?: (item: unknown) => void
  /** 查询成功事件 */
  onSuccess?: (result: unknown) => void
  /** 查询失败事件 */
  onError?: (result: unknown) => void
}

export interface MapMapChooseProps {
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 页面内容 */
  children?: ReactNode
}

export interface MapMapMarkersProps {
  /** 标记点数据 */
  markers?: unknown
  /** 最小缩放级别 */
  minZoom?: number
  /** 最大缩放级别 */
  maxZoom?: number
  /** 折线数据 */
  polyline?: unknown
  /** 圆形数据 */
  circles?: unknown
  /** 获取地址函数 */
  getAddress?: (coord: object) => Promise<string>
  /** 获取位置函数 */
  getLocation?: () => Promise<object>
  /** 查询附近函数 */
  queryNearby?: (location: object) => Promise<Array>
  /** 打开位置函数 */
  openLocation?: (location: object) => void
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 折线样式 */
  polylineStyle?: object
  /** 折线类名 */
  polylineClassName?: string
  /** 圆形样式 */
  circlesStyle?: object
  /** 圆形类名 */
  circlesClassName?: string
  /** 缩放控件样式 */
  zoomControlStyle?: object
  /** 缩放控件类名 */
  zoomControlClassName?: string
  /** 页面内容 */
  children?: ReactNode
  /** 加载完成事件 */
  onLoad?: (result: object) => void
  /** 标记点击事件 */
  onMarkerClick?: (e: unknown) => void
  /** 缩放开始事件 */
  onZoomStart?: (map: MapContainerAPI) => void
  /** 缩放事件 */
  onZoom?: (map: MapContainerAPI) => void
  /** 缩放结束事件 */
  onZoomEnd?: (map: MapContainerAPI) => void
  /** 移动开始事件 */
  onMoveStart?: (map: MapContainerAPI) => void
  /** 移动事件 */
  onMove?: (map: MapContainerAPI) => void
  /** 移动结束事件 */
  onMoveEnd?: (map: MapContainerAPI) => void
  /** 拖动开始事件 */
  onDragStart?: (map: MapContainerAPI) => void
  /** 拖动事件 */
  onDrag?: (map: MapContainerAPI) => void
  /** 拖动结束事件 */
  onDragEnd?: (map: MapContainerAPI) => void
}

export interface MapMapContainerRef {
  /** 根元素 */
  element?: HTMLDivElement | null
  /** 获取根元素 */
  getElement?: () => HTMLDivElement | null
  /** 地图类型 */
  type?: string
  /** 当前地图实例 */
  currentMap?: unknown
  /** Leaflet 地图实例 */
  leafletMap?: L.Map | null
  /** 打开位置 */
  openLocation?: (opts: Record<string, unknown>) => void
  /** 获取地址 */
  getAddress?: (coord: MapPoint) => Promise<Record<string, unknown> | {status: string, message: string}>
  /** 获取位置 */
  getLocation?: (params: Record<string, unknown>) => Promise<MapPoint | null>
  /** 查询附近 */
  queryNearby?: (...args) => unknown
  /** 当前中心点 */
  center?: MapPoint
  /** 设置视图 */
  setView?: (...params) => void
  /** 平移至坐标 */
  panTo?: (coords: MapPoint | MapPoint[]) => void
  /** 获取中心点 */
  getCenter?: () => {latitude: number, longitude: number, type?: string}
  /** 放大 */
  zoomIn?: () => void
  /** 缩小 */
  zoomOut?: () => void
  /** 获取缩放级别 */
  getZoom?: () => number | null
  /** 设置缩放级别 */
  setZoom?: (zoom: number) => unknown
}

export interface MapZoomControlRef {
  /** 根元素 */
  element?: HTMLDivElement | null
  /** 获取根元素 */
  getElement?: () => HTMLDivElement | null
  /** 放大 */
  zoomIn?: () => void
  /** 缩小 */
  zoomOut?: () => void
}

export interface MapCenterMarkerRef {
  /** 根元素 */
  element?: HTMLSpanElement | null
  /** 获取根元素 */
  getElement?: () => HTMLSpanElement | null
}

export interface MapMarkersRef {
  /** 重新绘制标记层 */
  redraw?: () => void
  /** 聚焦指定点 */
  focus?: (point: MapCoord) => void
  /** 取消聚焦 */
  blur?: () => void
}

export interface MapCirclesRef {
  /** 重新绘制圆形层 */
  redraw?: () => void
}

export interface MapPolylineRef {
  /** 重新绘制折线层 */
  redraw?: () => void
}

export interface MapPolygonRef {
  /** 重新绘制多边形 */
  redraw?: () => void
}

export interface MapLocationControlRef {
  /** 根元素 */
  element?: HTMLDivElement | null
  /** 获取根元素 */
  getElement?: () => HTMLDivElement | null
  /** 更新当前位置 */
  update?: () => Promise<unknown>
}

export interface MapNearbyControlRef {
  /** 根元素 */
  element?: HTMLDivElement | null
  /** 获取根元素 */
  getElement?: () => HTMLDivElement | null
  /** 重新加载 */
  reload?: () => void
}

export interface MapMapChooseRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}
