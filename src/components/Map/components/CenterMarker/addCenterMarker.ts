import type { L } from '../../types'
import coordsToFit from './../../utils/coordsToFit'
import createMarkerIcon from './../Markers/createMarkerIcon'
import type { MapPoint, MapCenterMarkerAddParams } from '../../types'

function addCenterMarker(
  point: MapPoint,
  params: MapCenterMarkerAddParams = {},
  layer: L.LayerGroup | null
): L.Marker | null {
  const { onClick, icon } = params
  if (!layer) return null

  // eslint-disable-next-line
  const fittedPoint = coordsToFit(point) as MapPoint
  if (!fittedPoint?.latitude || !fittedPoint?.longitude || !fittedPoint?.type) return null

  layer.clearLayers()
  let resolvedIcon: L.Icon | L.DivIcon | undefined
  if (fittedPoint?.icon) {
    const fromData = createMarkerIcon(fittedPoint.icon)
    resolvedIcon = fromData ?? undefined
  } else {
    resolvedIcon = icon ?? undefined
  }
  const marker = window.L!.marker(
    [fittedPoint.latitude as number, fittedPoint.longitude as number],
    {
      ...(resolvedIcon ? { icon: resolvedIcon } : {})
    }
  )
  marker.addTo(layer)

  if (!onClick) return marker
  marker.on('click', function (e: L.LeafletMouseEvent) {
    onClick({
      ...(fittedPoint || {}),
      icon: (e?.target as L.Marker)?.options?.icon?.options || null,
      setIcon: (e.target as L.Marker).setIcon.bind(e.target)
    })
  })
  return marker
}

export default addCenterMarker
