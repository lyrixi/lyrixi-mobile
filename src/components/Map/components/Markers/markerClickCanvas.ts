import type { L } from './../../leaflet.types'
import type { MapPoint, CanvasMarkerLayer } from './types'

// 点击canvas绘制的marker
function markerClickCanvas({
  points,
  layerGroup,
  clearMarkers,
  defaultIcon,
  onClick
}: {
  points: MapPoint[]
  layerGroup: CanvasMarkerLayer
  clearMarkers: () => void
  defaultIcon: L.Icon | L.DivIcon | null
  onClick: (payload: unknown) => void
}): void {
  layerGroup.addOnClickListener((e: unknown, data: unknown) => {
    const dataArr = data as { data: { _latlng: { lng: number; lat: number }; options?: { icon?: { options?: unknown } } } }[]
    const target = dataArr[0]
    const longitude = target.data._latlng.lng
    const latitude = target.data._latlng.lat

    let currentPoint: MapPoint | null = null
    for (const point of points) {
      if (point.longitude === longitude && point.latitude === latitude) {
        currentPoint = point
      }
    }

    onClick({
      longitude,
      latitude,
      ...(currentPoint || {}),
      icon: target?.data?.options?.icon?.options || null,
      setIcon: (
        icon: L.Icon | L.DivIcon,
        { multiple = true }: { multiple?: boolean } = {}
      ) => {
        if (!multiple) {
          clearMarkers()
          for (const point of points) {
            let newIcon: L.Icon | L.DivIcon | unknown = point?.icon || defaultIcon
            if (point.latitude === latitude && point.longitude === longitude) {
              newIcon = icon
            }
            const marker = window.L!.marker([point.latitude, point.longitude] as L.LatLngExpression, {
              icon: newIcon as L.Icon
            })
            layerGroup.addMarker(marker)
          }
        } else {
          layerGroup.removeMarker(target, true)
          const marker = window.L!.marker([latitude, longitude] as L.LatLngExpression, {
            icon: icon
          })
          layerGroup.addMarker(marker)
        }
      },
      remove: () => layerGroup.removeMarker(dataArr[0], true)
    })
  })
}

export default markerClickCanvas
