import type { CSSProperties } from 'react'
import type { MapContainerAPI } from './Map.MapContainer.types'

export interface MapZoomControlProps {
  // Value & Display Value
  map?: MapContainerAPI
  // Style
  style?: CSSProperties
  className?: string
  // Events
  onZoomIn?: (map: MapContainerAPI) => void
  onZoomOut?: (map: MapContainerAPI) => void
}

export interface MapZoomControlRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  zoomOut: () => void
  zoomIn: () => void
}
