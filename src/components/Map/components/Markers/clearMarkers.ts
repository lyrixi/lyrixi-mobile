import type { L } from './../../leaflet.types'

export interface CanvasMarkerLayer {
  clearLayers: () => void
  addMarker: (m: L.Marker) => void
  removeMarker: (target: unknown, all?: boolean) => void
  addOnClickListener: (cb: (e: unknown, data: unknown) => void) => void
}

// Clear all marker
function clearMarkers(layers: {
  canvasLayer: CanvasMarkerLayer | null | undefined
  layer: L.LayerGroup | null | undefined
}): void {
  const { canvasLayer, layer } = layers
  if (!canvasLayer || !layer) return
  canvasLayer.clearLayers()
  layer.clearLayers()
}

export default clearMarkers
