function getCenter() {
  let latlng = leafletMap?.getCenter()
  let center = {
    latitude: latlng.lat,
    longitude: latlng.lng
  }

  // 百度国内坐标为gcj02和bd09
  let isInChina = GeoUtil.isInChina([center.longitude, center.latitude])
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
