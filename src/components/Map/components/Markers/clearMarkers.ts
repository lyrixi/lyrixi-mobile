import type { L } from '../../types'
import type { CanvasMarkerLayer } from '../../types'

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
