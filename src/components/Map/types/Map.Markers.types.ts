import type { CSSProperties } from 'react'
import type { L } from './Map.leaflet.types'
import type { MapContainerAPI, MapPoint } from './Map.MapContainer.types'

export type { MapPoint } from './Map.MapContainer.types'

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

export interface MapMarkersPoint extends MapPoint {
  icon?: unknown
}

export interface AddMarkersIconParams {
  icon: L.Icon | L.DivIcon | null
  onClick?: ((options: unknown) => void) | null
}

export interface AddMarkersLayersParams {
  layer: L.LayerGroup
  canvasLayer: CanvasMarkerLayer
}

export interface MapMarkersLayerProps {
  // Value & Display Value
  points?: unknown
  map?: MapContainerAPI
  icon?: unknown
  // Style
  style?: CSSProperties
  className?: string
  // Events
  onClick?: (options: unknown) => void
}

export interface MapMarkersLayerHandle {
  redraw: () => void
  focus: (point: MapCoord) => void
  blur: () => void
}
