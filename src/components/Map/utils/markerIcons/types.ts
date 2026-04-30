/** 与 createMarkerIcon / L.icon 字段对齐的预设片段 */
export interface MarkerIconPreset {
  active?: boolean
  className?: string
  iconUrl?: string
  iconRetinaUrl?: string
  shadowUrl?: string
  shadowRetinaUrl?: string
  shadowSize?: [number, number]
  iconSize?: [number, number]
  iconAnchor?: [number, number]
  shadowAnchor?: [number, number] | undefined
  popupAnchor?: [number, number] | undefined
}

export interface MarkerIconsConfig {
  centerMarkerIcon: MarkerIconPreset
  markerIcon: MarkerIconPreset
}
