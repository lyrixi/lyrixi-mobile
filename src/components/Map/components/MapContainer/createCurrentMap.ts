import type { CreateCurrentMapParams } from '../../types'

function createCurrentMap(container: HTMLElement, params: CreateCurrentMapParams = {}): unknown {
  const { center } = params
  let wgs84Center: { longitude: number | string; latitude: number | string } | null = null

  const centerObj = Array.isArray(center) ? null : center
  const centerArr = Array.isArray(center) ? center : null

  if (centerObj?.longitude && centerObj?.latitude) {
    wgs84Center = { longitude: centerObj.longitude, latitude: centerObj.latitude }
  } else if (centerArr && centerArr.length && centerArr[0]?.longitude && centerArr[0]?.latitude) {
    wgs84Center = {
      longitude: centerArr[0].longitude,
      latitude: centerArr[0].latitude
    }
  }

  let currentMap: unknown = null

  if (window.google) {
    const googleCenter = new window.google.maps.LatLng(
      Number(wgs84Center?.longitude ?? 0),
      Number(wgs84Center?.latitude ?? 0)
    )
    currentMap = new window.google.maps.Map(container, {
      center: googleCenter,
      zoom: 5,
      mapTypeId: window.google.maps.MapTypeId.ROADMAP
    })
  } else if (window.BMap) {
    const bmapCenter = new window.BMap.Point(
      Number(wgs84Center?.longitude ?? 0),
      Number(wgs84Center?.latitude ?? 0)
    )
    const bmap = new window.BMap.Map(container)
    bmap.centerAndZoom(bmapCenter, 12)
    bmap.disableDragging()
    bmap.disableScrollWheelZoom()
    bmap.disableDoubleClickZoom()
    bmap.disablePinchToZoom()
    currentMap = bmap
  }

  return currentMap
}

export default createCurrentMap
