import type * as L from 'leaflet'

function clearPolygon(layer: L.LayerGroup | null): void {
  if (!layer) return
  layer.clearLayers()
}

export default clearPolygon
