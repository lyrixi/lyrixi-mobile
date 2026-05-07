/** createCenterMarkerIcon 入参（与 defaultMarkerIcons.centerMarkerIcon 字段对齐） */
export interface CenterMarkerIconOptions {
  html?: string
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
  active?: boolean
  [key: string]: unknown
}
