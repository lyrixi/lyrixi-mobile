import type { CSSProperties } from 'react'
import type { L } from './Map.leaflet.types'
import type { MapContainerAPI } from './Map.MapContainer.types'

export interface MapPoint {
  latitude?: number | string
  longitude?: number | string
  type?: string
  icon?: unknown
  onClick?: (info: MapPoint) => void
  [key: string]: unknown
}

export interface MapCenterMarkerProps {
  value?: MapPoint | null
  style?: CSSProperties
  className?: string
  map?: MapContainerAPI
  icon?: L.Icon | L.DivIcon | null
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
