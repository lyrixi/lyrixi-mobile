import type { L } from '../../types'
import coordsToFit from './../../utils/coordsToFit'
import type { MapPoint, AddMarkersIconParams, AddMarkersLayersParams } from '../../types'
import createMarkerIcon from './createMarkerIcon'
import clearMarkers from './clearMarkers'
import markerClickLeaflet from './markerClickLeaflet'
import markerClickCanvas from './markerClickCanvas'

// Marker
function addMarkers(
  points: MapPoint[] | null | undefined,
  iconParams: AddMarkersIconParams,
  layerParams: AddMarkersLayersParams
): void {
  const { icon, onClick = null } = iconParams
  const { layer, canvasLayer } = layerParams
  if (!canvasLayer || !layer) return

  let fitted: unknown = coordsToFit(points)
  if (Array.isArray(fitted)) {
    fitted = fitted.filter((p: unknown) => p)
  }
  if (!Array.isArray(fitted) || fitted.length === 0) return
  const list = fitted as MapPoint[]

  // canvas不支持渲染html
  const enableCanvas =
    list.length > 100 &&
    list.every((point) => {
      return point?.icon && typeof point.icon === 'object' && (point.icon as { html?: unknown })?.html
        ? false
        : true
    })

  // Draw markers
  for (const point of list) {
    const mIcon: L.Icon | L.DivIcon | null = point?.icon ? createMarkerIcon(point.icon) : icon
    const opts: L.MarkerOptions = {}
    if (mIcon) {
      opts.icon = mIcon
    }
    const marker = window.L!.marker(
      [Number(point.latitude), Number(point.longitude)] as L.LatLngExpression,
      opts
    )
    if (enableCanvas) {
      canvasLayer.addMarker(marker)
    } else {
      marker.addTo(layer)
    }
  }

  if (!onClick) return
  if (enableCanvas) {
    markerClickCanvas({
      points: list,
      layerGroup: canvasLayer,
      clearMarkers: () => clearMarkers({ layer, canvasLayer }),
      defaultIcon: icon,
      onClick
    })
  } else {
    markerClickLeaflet({
      points: list,
      clearMarkers: () => clearMarkers({ layer, canvasLayer }),
      layerGroup: layer,
      defaultIcon: icon,
      onClick
    })
  }
}

export default addMarkers
