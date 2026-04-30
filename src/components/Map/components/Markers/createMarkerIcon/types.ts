/** createMarkerIcon 配置（与 defaultMarkerIcons.markerIcon 字段对齐） */
export interface MarkerIconConfig {
  className?: string
  iconUrl?: string
  iconRetinaUrl?: string
  shadowUrl?: string
  shadowRetinaUrl?: string
  shadowSize?: [number, number]
  iconSize?: [number, number]
  iconAnchor?: [number, number]
  shadowAnchor?: [number, number]
  popupAnchor?: [number, number]
  html?: string
  [key: string]: unknown
}
