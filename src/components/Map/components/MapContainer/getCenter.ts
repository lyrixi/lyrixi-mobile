import type { L } from './../../leaflet.types'
import type { CenterResult } from './types'

// 内库使用-start
import GeoUtil from './../../../../utils/GeoUtil'
// 内库使用-end

function getCenter(leafletMap: L.Map): CenterResult {
  const latlng = leafletMap.getCenter()
  const center: CenterResult = {
    latitude: latlng.lat,
    longitude: latlng.lng
  }

  const isInChina = GeoUtil.isInChina([center.longitude, center.latitude])
  if (isInChina) {
    if (window.google || window.AMap) {
      center.type = 'gcj02'
    } else if (window.BMap) {
      center.type = 'bd09'
    }
  } else {
    center.type = 'wgs84'
  }

  return center
}

export default getCenter
