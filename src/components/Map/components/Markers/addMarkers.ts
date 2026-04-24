import type * as L from 'leaflet'
import coordsToFit from './../../utils/coordsToFit'
import type { CanvasMarkerLayer } from './clearMarkers'
import createMarkerIcon from './createMarkerIcon'
import clearMarkers from './clearMarkers'
import markerClickLeaflet from './markerClickLeaflet'
import markerClickCanvas from './markerClickCanvas'

export interface MapPoint {
  latitude?: number | string
  longitude?: number | string
  type?: string
  icon?: unknown
  [key: string]: unknown
}

// Marker
function addMarkers(
  points: MapPoint[] | null | undefined,
  { icon, onClick = null }: { icon: L.Icon | L.DivIcon | null; onClick?: ((payload: unknown) => void) | null },
  {
    layer,
    canvasLayer
  }: { layer: L.LayerGroup; canvasLayer: CanvasMarkerLayer }
): void {
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
