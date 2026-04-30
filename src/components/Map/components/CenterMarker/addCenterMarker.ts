import type { L } from './../../leaflet.types'
import coordsToFit from './../../utils/coordsToFit'
import createMarkerIcon from './../Markers/createMarkerIcon'

interface MapPoint {
  latitude?: number | string
  longitude?: number | string
  type?: string
  icon?: unknown
  [key: string]: unknown
}

interface AddCenterMarkerOptions {
  onClick?: ((info: MapPoint & { setIcon?: unknown }) => void) | null
  icon?: L.Icon | L.DivIcon | null
}

function addCenterMarker(
  point: MapPoint,
  { onClick, icon }: AddCenterMarkerOptions = {},
  layer: L.LayerGroup | null
): L.Marker | null {
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
  const marker = window.L!.marker([fittedPoint.latitude as number, fittedPoint.longitude as number], {
    ...(resolvedIcon ? { icon: resolvedIcon } : {})
  })
  marker.addTo(layer)

  if (!onClick) return marker
  marker.on('click', function (e) {
    onClick({
      ...(fittedPoint || {}),
      icon: (e?.target as L.Marker)?.options?.icon?.options || null,
      setIcon: (e.target as L.Marker).setIcon.bind(e.target)
    })
  })
  return marker
}

export default addCenterMarker
