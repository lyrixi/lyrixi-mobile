import type * as L from 'leaflet'

function clearCenterMarker(layer: L.LayerGroup | null): void {
  if (!layer) return
  layer.clearLayers()
}

export default clearCenterMarker
