import coordsToFit from './../../utils/coordsToFit'
import createMarkerIcon from './../Markers/createMarkerIcon'

// CenterMarker
function addCenterMarker(point, { onClick, icon } = {}, layer) {
  if (!layer) return null

  // eslint-disable-next-line
  point = coordsToFit(point)
  if (!point?.latitude || !point?.longitude || !point?.type) return

  // Draw center marker
  layer.clearLayers()
  let marker = window.L.marker(
    [point.latitude, point.longitude],
    // options
    {
      icon: point?.icon ? createMarkerIcon(point.icon) : icon
    }
  )
  marker.addTo(layer)

  if (!onClick) return marker
  marker.on('click', function (e) {
    onClick({
      ...(point || {}),
      icon: e?.target?.options?.icon?.options || null,
      setIcon: e.target.setIcon
    })
  })
  return marker
}

export default addCenterMarker
