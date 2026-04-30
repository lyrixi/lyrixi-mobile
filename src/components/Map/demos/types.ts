import type { L } from './../leaflet.types'

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
