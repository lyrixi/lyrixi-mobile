import type { MapContainerAPI } from './../MapContainer'

export interface PolygonProps {
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
