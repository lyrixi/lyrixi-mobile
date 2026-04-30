import type { MapEngineKind } from './types'

// Get map render type
function getMapType(): MapEngineKind {
  if (window.google) {
    return 'google'
  }
  if (window.AMap) {
    return 'amap'
  }
  if (window.BMap) {
    return 'bmap'
  }

  // No third-party map are used, only load leaflet, leaflet use open osm render
  if (window.leaflet) {
    return 'osm'
  }
  return ''
}

export default getMapType
