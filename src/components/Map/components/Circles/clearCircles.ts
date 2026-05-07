import type { L } from '../../types'

function clearCircles(layer: L.LayerGroup | null): void {
  if (!layer) return
  layer.clearLayers()
}

export default clearCircles
