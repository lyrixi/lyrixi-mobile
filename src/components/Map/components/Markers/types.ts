import type { CSSProperties } from 'react'
import type { L } from './../../leaflet/types'
import type { MapContainerAPI } from './../MapContainer/types'

/** 与 filterCoords 输出项一致 */
export interface MapCoord {
  longitude?: unknown
  latitude?: unknown
  type?: unknown
  [key: string]: unknown
}

export interface CanvasMarkerLayer {
  clearLayers: () => void
  addMarker: (m: L.Marker) => void
  removeMarker: (target: unknown, all?: boolean) => void
  addOnClickListener: (cb: (e: unknown, data: unknown) => void) => void
}

export interface MapPoint {
  latitude?: number | string
  longitude?: number | string
  type?: string
  icon?: unknown
  [key: string]: unknown
}

export interface AddMarkersIconOptions {
  icon: L.Icon | L.DivIcon | null
  onClick?: ((payload: unknown) => void) | null
}

export interface AddMarkersLayersOptions {
  layer: L.LayerGroup
  canvasLayer: CanvasMarkerLayer
}

export interface MarkersProps {
  points?: unknown
  map?: MapContainerAPI
  icon?: unknown
  style?: CSSProperties
  className?: string
  onClick?: (payload: unknown) => void
}

export interface MarkersHandle {
  redraw: () => void
  focus: (point: MapCoord) => void
  blur: () => void
}
