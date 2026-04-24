import type * as L from 'leaflet'

function clearPolyline(layer: L.LayerGroup | null): void {
  if (!layer) return
  layer.clearLayers()
}

export default clearPolyline
