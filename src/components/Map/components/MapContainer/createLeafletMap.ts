import coordsToFit from './../../utils/coordsToFit'

// Create leaflet map
function createLeafletMap(container, { center, minZoom, maxZoom, zoom }) {
  if (!window.L || !window.L?.tileLayer?.currentTileLayer) {
    return null
  }

  let centerPoint = []
  if (center?.latitude && center?.longitude) {
    // 百度转bd09, 高德转gcj02, 国外转wgs84
    let coords = coordsToFit([center])
    centerPoint = [coords[0].latitude, coords[0].longitude]
  }
  // Init leaflet map config
  let config = {
    attributionControl: false, // 隐藏版权控件
    zoomControl: false, // 隐藏放大缩小控件
    center: centerPoint,
    ...(window.L.tileLayer?.currentTileLayer?.config || {}),
    maxZoom: maxZoom || window.L.tileLayer?.currentTileLayer?.config?.maxZoom || 18,
    minZoom: minZoom || window.L.tileLayer?.currentTileLayer?.config?.minZoom || 3,
    zoom: zoom || window.L.tileLayer?.currentTileLayer?.config?.zoom || 13
  }

  // Leaflet map
  let map = window.L.map(container, config)

  // TileLayer error
  if (!window.L.tileLayer?.currentTileLayer) {
    return map
  }

  // Add tileLayer
  let tileLayer = window.L.tileLayer.currentTileLayer()
  tileLayer.addTo(map)

  // Update tileLayer size
  // map.invalidateSize()

  return new Promise((resolve) => {
    tileLayer.on('load', function () {
      resolve(map)
    })
  })
}

export default createLeafletMap
