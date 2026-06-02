import type { MapContainerAPI } from './Map.MapContainer.types'

export interface MapPolygonRef {
  redraw: () => void
}

export interface MapPolygonProps {
  // Value & Display Value
  points?: unknown
  color?: string
  fillColor?: string
  fillOpacity?: number
  weight?: number
  map?: MapContainerAPI
}

export interface PolyPoint {
  latitude?: number | string
  longitude?: number | string
  [key: string]: unknown
}

export interface PolyStyleOptions {
  color?: string
  fillColor?: string
  fillOpacity?: number
  weight?: number
  [key: string]: unknown
}
