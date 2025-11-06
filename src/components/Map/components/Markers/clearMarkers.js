// Clear all marker
function clearMarkers({ canvasLayer, layer }) {
  if (!canvasLayer || !layer) return
  // Clear Leaflet plugin layer
  canvasLayer && canvasLayer.clearLayers()
  // Clear Leaflet layer
  layer && layer.clearLayers()
}

export default clearMarkers
