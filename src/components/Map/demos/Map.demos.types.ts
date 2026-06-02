import type { L } from '../types/Map.leaflet.types'
import type { MapPoint } from '../types/Map.coordsToWgs84.types'

/** Markers onClick 示例里用到的 payload（演示 setIcon） */
export interface DemoMarkerClickPayload {
  setIcon: (icon: L.Icon | L.DivIcon, opts?: { multiple?: boolean }) => void
}

/** demos/getPoints 随机点生成参数 */
export interface GetPointsOptions {
  center?: { latitude?: number; longitude?: number }
  radius?: number
  count?: number
}

/** 随机演示点：结构满足 {@link MapPoint}（含 string 索引签名），可传入 coordsToWgs84 */
export interface DemoRandomMapPoint extends MapPoint {
  latitude: number
  longitude: number
  name: string
  address: string
  type: string
}
