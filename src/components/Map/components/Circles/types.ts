import type { MapContainerAPI } from './../MapContainer'

export interface CirclesRef {
  redraw: () => void
}

export interface CirclesProps {
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
