/**
 * Map Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

// --- Common types ---

export interface MapPoint {
  latitude?: number | string
  longitude?: number | string
  type?: string
  [key: string]: unknown
}

export interface MapContainerAPI {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  type: string
  currentMap: unknown
  leafletMap: unknown
  openLocation: ((opts: Record<string, unknown>) => void) | null | undefined
  getAddress: (coord: MapPoint) => Promise<Record<string, unknown> | { status: string; message: string }>
  getLocation: (params: Record<string, unknown>) => Promise<MapPoint | null>
  queryNearby: (...args: unknown[]) => unknown
  center: MapPoint
  setView: (...params: unknown[]) => void
  panTo: (coords: MapPoint | MapPoint[]) => void
  getCenter: () => { latitude: number; longitude: number; type?: string }
  zoomIn: () => void
  zoomOut: () => void
  getZoom: () => number | null
  setZoom: (zoom: number) => unknown
}

// --- Map.MapLoader ---

export interface MapLoaderProps {
  config?: {
    key?: string
    type?: string
    leaflet?: { css?: string; js?: string }
    [key: string]: unknown
  }
  getAddress?: ((...args: unknown[]) => unknown) | null
  getLocation?: ((...args: unknown[]) => unknown) | null
  openLocation?: ((...args: unknown[]) => unknown) | null
  queryNearby?: ((...args: unknown[]) => unknown) | null
  loadingRender?: (() => ReactNode) | null
  loadingNode?: ReactNode
  children?: ReactNode
  onError?: ((
    result: { status: string; message?: string | ReactNode; data?: unknown; reload?: () => void; [key: string]: unknown }
  ) => Promise<{ status: string; message?: string | ReactNode; [key: string]: unknown } | undefined> | { status: string; message?: string | ReactNode; [key: string]: unknown } | undefined | void) | null
  onSuccess?: ((result: { status: string; map: { reload: () => void } }) => void) | null
}

export interface MapLoaderRef {
  reload: () => void
}

// --- Map.MapContainer ---

export interface MapContainerProps {
  /** 地图中心点 */
  center?: MapPoint | MapPoint[]
  /** 缩放级别 */
  zoom?: number
  /** 最小缩放级别 */
  minZoom?: number
  /** 最大缩放级别 */
  maxZoom?: number
  /** 缓存过期时间 */
  cacheExpires?: number
  /** 获取地址函数 */
  getAddress?: ((...args: unknown[]) => unknown) | null
  /** 获取位置函数 */
  getLocation?: ((...args: unknown[]) => unknown) | null
  /** 打开位置函数 */
  openLocation?: ((...args: unknown[]) => unknown) | null
  /** 查询附近函数 */
  queryNearby?: ((...args: unknown[]) => unknown) | null
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 地图内容 */
  children?: ReactNode
  /** 加载完成事件 */
  onLoad?: (result: { status: string; message?: string; map?: MapContainerAPI }) => void
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

// --- Map.MapMarkers ---

export interface MapMarkersProps {
  /** 标记点列表 */
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
  getAddress?: ((...args: unknown[]) => unknown) | null
  /** 获取位置函数 */
  getLocation?: ((...args: unknown[]) => unknown) | null
  /** 查询附近函数 */
  queryNearby?: ((...args: unknown[]) => unknown) | null
  /** 打开位置函数 */
  openLocation?: ((...args: unknown[]) => unknown) | null
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 折线样式 */
  polylineStyle?: CSSProperties
  /** 折线类名 */
  polylineClassName?: string
  /** 圆形样式 */
  circlesStyle?: CSSProperties
  /** 圆形类名 */
  circlesClassName?: string
  /** 缩放控件样式 */
  zoomControlStyle?: CSSProperties
  /** 缩放控件类名 */
  zoomControlClassName?: string
  /** 页面内容 */
  children?: ReactNode
  /** 加载完成事件 */
  onLoad?: (result: { status: string; message?: string; map?: MapContainerAPI }) => void
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

// --- Map refs ---

export interface MapContainerRef extends MapContainerAPI {}

export interface MapMarkersRef extends MapContainerAPI {
  markersRef: { current: unknown }
  polylineRef: { current: unknown }
  circlesRef: { current: unknown }
  zoomRef: { current: unknown }
}

// --- Map static methods ---

export interface MapStaticUtils {
  /** 获取超级地址 */
  getSuperAddress: (params: { cacheExpiresContinue?: boolean; cacheExpires?: number | null; type: string; latitude: number; longitude: number }) => Promise<unknown>
  /** 获取超级定位 */
  getSuperLocation: (options: { timeout?: number; cacheExpiresContinue?: boolean; cacheExpires?: number | null; type: string }) => Promise<{ status?: string; code?: string; longitude?: number; latitude?: number; [key: string]: unknown }>
}

export interface MapCenterMarkerProps {

  value?: MapCenterMarkerPoint | null
  map?: MapContainerAPI
  icon?: L.Icon | L.DivIcon | null

  style?: CSSProperties
  className?: string

  onClick?: ((info: MapPoint) => void) | null
  onDragStart?: ((map: MapContainerAPI) => void) | null
  onDragEnd?: ((map: MapContainerAPI) => void) | null
}

export interface MapCenterMarkerRef {
  element: HTMLSpanElement | null
  getElement: () => HTMLSpanElement | null
}

export interface MapCenterMarkerAddOptions {
  onClick?: ((info: MapPoint & { setIcon?: unknown }) => void) | null
  icon?: L.Icon | L.DivIcon | null
}

export interface MapCirclesRef {
  redraw: () => void
}

export interface MapCirclesProps {

  points?: unknown
  color?: string
  radius?: number
  map?: MapContainerAPI
}

export interface MapLocationControlProps {

  map?: MapContainerAPI

  style?: CSSProperties
  className?: string

  onChange?: (result: unknown) => void
}

export interface MapLocationControlRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  update: () => Promise<unknown>
}

export interface MapChooseProps {

  value?: MapChooseValue
  center?: MapContainerProps['center']
  zoom?: number
  minZoom?: number
  maxZoom?: number
  cacheExpires?: number
  autoLocation?: boolean
  getAddress?: MapContainerProps['getAddress']
  getLocation?: MapContainerProps['getLocation']
  queryNearby?: MapContainerProps['queryNearby']
  openLocation?: MapContainerProps['openLocation']

  readOnly?: boolean
  nearbyVisible?: boolean

  style?: CSSProperties
  className?: string
  searchControlStyle?: CSSProperties
  searchControlClassName?: string
  centerMarkerStyle?: CSSProperties
  centerMarkerClassName?: string
  markersStyle?: CSSProperties
  markersClassName?: string
  zoomControlStyle?: CSSProperties
  zoomControlClassName?: string
  locationControlStyle?: CSSProperties
  locationControlClassName?: string
  nearbyControlStyle?: CSSProperties
  nearbyControlClassName?: string

  children?: ReactNode

  onLoad?: MapContainerProps['onLoad']
  onChange?: (value: WgsMapPoint | (WgsMapPoint | null)[] | null) => void
  onMarkerClick?: (e: unknown) => void
  onZoomStart?: MapContainerProps['onZoomStart']
  onZoom?: MapContainerProps['onZoom']
  onZoomEnd?: MapContainerProps['onZoomEnd']
  onMoveStart?: MapContainerProps['onMoveStart']
  onMove?: MapContainerProps['onMove']
  onMoveEnd?: MapContainerProps['onMoveEnd']
  onDragStart?: MapContainerProps['onDragStart']
  onDrag?: MapContainerProps['onDrag']
  onDragEnd?: MapContainerProps['onDragEnd']
}

export interface MapMapMarkersProps {

  markers?: unknown
  minZoom?: number
  maxZoom?: number
  polyline?: unknown
  circles?: unknown
  getAddress?: MapContainerProps['getAddress']
  getLocation?: MapContainerProps['getLocation']
  queryNearby?: MapContainerProps['queryNearby']
  openLocation?: MapContainerProps['openLocation']

  style?: CSSProperties
  className?: string
  polylineStyle?: CSSProperties
  polylineClassName?: string
  circlesStyle?: CSSProperties
  circlesClassName?: string
  zoomControlStyle?: CSSProperties
  zoomControlClassName?: string

  children?: ReactNode

  onLoad?: MapContainerProps['onLoad']
  onMarkerClick?: (e: unknown) => void
  onZoomStart?: MapContainerProps['onZoomStart']
  onZoom?: MapContainerProps['onZoom']
  onZoomEnd?: MapContainerProps['onZoomEnd']
  onMoveStart?: MapContainerProps['onMoveStart']
  onMove?: MapContainerProps['onMove']
  onMoveEnd?: MapContainerProps['onMoveEnd']
  onDragStart?: MapContainerProps['onDragStart']
  onDrag?: MapContainerProps['onDrag']
  onDragEnd?: MapContainerProps['onDragEnd']
}

export interface MapMarkersLayerProps {

  points?: unknown
  map?: MapContainerAPI
  icon?: unknown

  style?: CSSProperties
  className?: string

  onClick?: (options: unknown) => void
}

export interface MapMarkersLayerHandle {
  redraw: () => void
  focus: (point: MapCoord) => void
  blur: () => void
}

export interface MapNearbyControlCurrentProps {

  value?: MapValue
  map?: MapContainerAPI

  readOnly?: boolean

  onChange?: (item: unknown) => void
}

export interface MapNearbyControlProps {

  value?: MapValue
  radius?: number
  map?: MapContainerAPI

  readOnly?: boolean
  nearbyVisible?: boolean

  onChange?: (item: unknown) => void
  onSuccess?: (result: unknown) => void
  onError?: (result: unknown) => void
}

export interface MapNearbyControlRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  reload: () => void
}

export interface MapPolygonRef {
  redraw: () => void
}

export interface MapPolygonProps {

  points?: unknown
  color?: string
  fillColor?: string
  fillOpacity?: number
  weight?: number
  map?: MapContainerAPI
}

export interface MapPolylineRef {
  redraw: () => void
}

export interface MapPolylineProps {

  points?: unknown
  color?: string
  map?: MapContainerAPI
}

export interface MapSearchControlProps {

  map?: MapContainerAPI

  style?: CSSProperties
  className?: string

  onChange?: (item: unknown) => void
}

export type MapSearchBarForwardedProps {
  readOnly?: boolean
  className?: string
  style?: CSSProperties
  onClick?: () => void
}

export interface MapZoomControlProps {

  map?: MapContainerAPI

  style?: CSSProperties
  className?: string

  onZoomIn?: (map: MapContainerAPI) => void
  onZoomOut?: (map: MapContainerAPI) => void
}

export interface MapZoomControlRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  zoomOut: () => void
  zoomIn: () => void
}

export interface MapLoaderSourceConfig {
  key?: string
  type?: string
  leaflet?: { css?: string; js?: string }
  [key: string]: unknown
}

export type MapContainerChildInjectProps = Record<string, unknown>

export type MapMapMarkersHandle =
  | (MapContainerAPI & {
      markersRef: MutableRefObject<MapMarkersLayerHandle | null>
      polylineRef: MutableRefObject<MapPolylineRef | null>
      circlesRef: MutableRefObject<MapCirclesRef | null>
      zoomRef: MutableRefObject<MapZoomControlRef | null>
    })
  | null

export type MapNearbyTabItem = ReturnType<typeof getTabs>[number]

export interface MapOptions {}

export interface Map {
    setView(center: LatLngExpression, zoom?: number, options?: unknown): this
    fitBounds(bounds: LatLngBoundsExpression, options?: { padding?: [number, number] }): this
    panTo(center: LatLngExpression, options?: unknown): this
    zoomIn(delta?: number): this
    zoomOut(delta?: number): this
    getZoom(): number
    setZoom(zoom: number): this
    getCenter(): { lat: number; lng: number }
    on(type: string, fn: (...args: unknown[]) => void): this
  }
