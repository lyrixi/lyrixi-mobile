import type { CSSProperties } from 'react'
import type { L } from './Map.leaflet.types'
import type { MapContainerAPI, MapPoint } from './Map.MapContainer.types'

export type { MapPoint } from './Map.MapContainer.types'

export interface MapCenterMarkerPoint extends MapPoint {
  icon?: unknown
  onClick?: (info: MapCenterMarkerPoint) => void
}

export interface MapCenterMarkerProps {
  // Value & Display Value
  value?: MapCenterMarkerPoint | null
  map?: MapContainerAPI
  icon?: L.Icon | L.DivIcon | null
  // Style
  style?: CSSProperties
  className?: string
  // Events
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
