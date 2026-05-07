import type { CSSProperties, ReactNode } from 'react'
import type { L } from './Map.leaflet.types'

/** 地图容器内使用的坐标点（与 createLeafletMap / panTo 等一致） */
export interface MapPoint {
  latitude?: number | string
  longitude?: number | string
  type?: string
  [key: string]: unknown
}

/** createCurrentMap 仅用经纬度，不要求 type */
export interface MapCenter {
  latitude?: number | string
  longitude?: number | string
  [key: string]: unknown
}

export interface CreateCurrentMapOptions {
  center?: MapCenter | MapCenter[]
}

export interface CreateLeafletMapOptions {
  center?: MapPoint | MapPoint[]
  minZoom?: number
  maxZoom?: number
  zoom?: number
}

export interface CenterResult {
  latitude: number
  longitude: number
  type?: string
}

export type GetAddressFn = (...args: unknown[]) => Promise<Record<string, unknown>>
export type GetLocationFn = (...args: unknown[]) => Promise<MapPoint | null>
export type QueryNearbyFn = (...args: unknown[]) => unknown

export interface MapContainerAPI {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  type: string
  currentMap: unknown
  leafletMap: L.Map | null
  openLocation: ((opts: Record<string, unknown>) => void) | null | undefined
  getAddress: (coord: MapPoint) => Promise<Record<string, unknown> | { status: string; message: string }>
  getLocation: (params: Record<string, unknown>) => Promise<MapPoint | null>
  queryNearby: QueryNearbyFn
  center: MapPoint
  setView: (...params: unknown[]) => void
  panTo: (coords: MapPoint | MapPoint[]) => void
  getCenter: () => { latitude: number; longitude: number; type?: string }
  zoomIn: () => void
  zoomOut: () => void
  getZoom: () => number | null
  setZoom: (zoom: number) => unknown
  onZoomStart?: (map: MapContainerAPI) => void
  onZoom?: (map: MapContainerAPI) => void
  onZoomEnd?: (map: MapContainerAPI) => void
  onMoveStart?: (map: MapContainerAPI) => void
  onMove?: (map: MapContainerAPI) => void
  onMoveEnd?: (map: MapContainerAPI) => void
  onDragStart?: ((map: MapContainerAPI) => void) | null
  onDrag?: (map: MapContainerAPI) => void
  onDragEnd?: ((map: MapContainerAPI) => void) | null
}

export interface MapContainerProps {
  center?: MapPoint | MapPoint[]
  zoom?: number
  minZoom?: number
  maxZoom?: number
  cacheExpires?: number
  getAddress?: GetAddressFn | null
  getLocation?: GetLocationFn | null
  openLocation?: ((...args: unknown[]) => unknown) | null
  queryNearby?: QueryNearbyFn | null
  style?: CSSProperties
  className?: string
  children?: ReactNode
  onLoad?: (result: { status: string; message?: string; map?: MapContainerAPI }) => void
  onZoomStart?: (map: MapContainerAPI) => void
  onZoom?: (map: MapContainerAPI) => void
  onZoomEnd?: (map: MapContainerAPI) => void
  onMoveStart?: (map: MapContainerAPI) => void
  onMove?: (map: MapContainerAPI) => void
  onMoveEnd?: (map: MapContainerAPI) => void
  onDragStart?: (map: MapContainerAPI) => void
  onDrag?: (map: MapContainerAPI) => void
  onDragEnd?: (map: MapContainerAPI) => void
}

/** injectChildrenProps 向下注入的额外 props */
export type MapContainerChildInjectProps = Record<string, unknown>
