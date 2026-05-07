import type { CSSProperties } from 'react'
import type { L } from './../../leaflet/types'
import type { MapContainerAPI } from './../MapContainer'

export interface MapPoint {
  latitude?: number | string
  longitude?: number | string
  type?: string
  icon?: unknown
  onClick?: (info: MapPoint) => void
  [key: string]: unknown
}

export interface CenterMarkerProps {
  value?: MapPoint | null
  style?: CSSProperties
  className?: string
  map?: MapContainerAPI
  icon?: L.Icon | L.DivIcon | null
  onClick?: ((info: MapPoint) => void) | null
  onDragStart?: ((map: MapContainerAPI) => void) | null
  onDragEnd?: ((map: MapContainerAPI) => void) | null
}

export interface CenterMarkerRef {
  element: HTMLSpanElement | null
  getElement: () => HTMLSpanElement | null
}

export interface AddCenterMarkerOptions {
  onClick?: ((info: MapPoint & { setIcon?: unknown }) => void) | null
  icon?: L.Icon | L.DivIcon | null
}
