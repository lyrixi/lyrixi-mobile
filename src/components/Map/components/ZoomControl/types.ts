import type { CSSProperties } from 'react'
import type { MapContainerAPI } from './../MapContainer'

export interface ZoomControlProps {
  style?: CSSProperties
  className?: string
  map?: MapContainerAPI
  onZoomIn?: (map: MapContainerAPI) => void
  onZoomOut?: (map: MapContainerAPI) => void
}

export interface ZoomControlRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  zoomOut: () => void
  zoomIn: () => void
}
