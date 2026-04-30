import type { L } from './../../leaflet.types'

interface MapPoint {
  latitude?: number | string
  longitude?: number | string
  icon?: unknown
  [key: string]: unknown
}

// 公共点击leaflet点
function markerClickLeaflet({
  points,
  layerGroup,
  clearMarkers,
  defaultIcon,
  onClick
}: {
  points: MapPoint[]
  layerGroup: L.LayerGroup
  clearMarkers: () => void
  defaultIcon: L.Icon | L.DivIcon | null
  onClick: (payload: unknown) => void
}): void {
  layerGroup.eachLayer(function (layer) {
    const markerLayer = layer as L.Marker
    markerLayer.on('click', function (e: L.LeafletMouseEvent) {
      const latitude = e.latlng.lat
      const longitude = e.latlng.lng

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
        icon: (e?.target as L.Marker)?.options?.icon
          ? ((e.target as L.Marker).options.icon as L.Icon).options
          : null,
        setIcon: (icon: L.Icon | L.DivIcon, { multiple }: { multiple: boolean }) => {
          if (!multiple) {
            clearMarkers()
            for (const point of points) {
              let newIcon: L.Icon | L.DivIcon | unknown = point?.icon || defaultIcon
              if (point.latitude === latitude && point.longitude === longitude) {
                newIcon = icon
              }
              const m = window.L!.marker([point.latitude, point.longitude] as L.LatLngExpression, {
                icon: newIcon as L.Icon
              })
              m.addTo(layerGroup)
            }
            markerClickLeaflet({
              points,
              clearMarkers,
              layerGroup,
              defaultIcon,
              onClick
            })
          } else {
            ;(e.target as L.Marker).setIcon(icon)
          }
        },
        remove: () => (e.target as L.Marker).remove()
      })
    })
  })
}

export default markerClickLeaflet
