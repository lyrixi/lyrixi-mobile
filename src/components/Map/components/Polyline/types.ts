import type { MapContainerAPI } from './../MapContainer/types'

export interface PolylineRef {
  redraw: () => void
}

export interface PolylineProps {
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
