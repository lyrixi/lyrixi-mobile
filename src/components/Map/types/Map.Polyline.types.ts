import type { MapContainerAPI } from './Map.MapContainer.types'

export interface MapPolylineRef {
  redraw: () => void
}

export interface MapPolylineProps {
  // Value & Display Value
  points?: unknown
  color?: string
  map?: MapContainerAPI
}

export interface LinePoint {
  latitude?: number | string
  longitude?: number | string
  [key: string]: unknown
}

export interface LineStyleParams {
  color?: string
  [key: string]: unknown
}
