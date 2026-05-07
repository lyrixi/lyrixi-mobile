import type { L } from '../../types'

function clearPolyline(layer: L.LayerGroup | null): void {
  if (!layer) return
  layer.clearLayers()
}

export default clearPolyline
