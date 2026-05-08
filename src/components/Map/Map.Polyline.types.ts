import type { MapContainerAPI } from './Map.MapContainer.types'

export interface MapPolylineRef {
  redraw: () => void
}

export interface MapPolylineProps {
  points?: unknown
  color?: string
  map?: MapContainerAPI
}

export interface LinePoint {
  latitude?: number | string
  longitude?: number | string
  [key: string]: unknown
}

export interface LineStyleOptions {
  color?: string
  [key: string]: unknown
}
