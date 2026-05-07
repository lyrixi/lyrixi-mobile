import type { L } from '../../types'

function clearCenterMarker(layer: L.LayerGroup | null): void {
  if (!layer) return
  layer.clearLayers()
}

export default clearCenterMarker
