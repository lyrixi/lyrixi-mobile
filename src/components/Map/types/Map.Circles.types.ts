import type { MapContainerAPI } from './Map.MapContainer.types'

export interface MapCirclesRef {
  redraw: () => void
}

export interface MapCirclesProps {
  // Value & Display Value
  points?: unknown
  color?: string
  radius?: number
  map?: MapContainerAPI
}

export interface CirclePoint {
  latitude?: number | string
  longitude?: number | string
  radius?: number
  color?: string
  [key: string]: unknown
}

export interface CircleOptions {
  radius?: number
  color?: string
  [key: string]: unknown
}
