import type * as L from 'leaflet'

function clearCircles(layer: L.LayerGroup | null): void {
  if (!layer) return
  layer.clearLayers()
}

export default clearCircles
