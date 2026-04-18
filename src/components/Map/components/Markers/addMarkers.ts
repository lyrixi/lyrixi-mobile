import coordsToFit from './../../utils/coordsToFit'
import createMarkerIcon from './createMarkerIcon'
import clearMarkers from './clearMarkers'
import markerClickLeaflet from './markerClickLeaflet'
import markerClickCanvas from './markerClickCanvas'

// Marker
function addMarkers(points, { icon, onClick = null }, { layer, canvasLayer }) {
  if (!canvasLayer || !layer) return

  // eslint-disable-next-line
  points = coordsToFit(points)
  // eslint-disable-next-line
  points = points.filter((point) => point)
  if (!Array.isArray(points) || points.length === 0) return

  // canvas不支持渲染html
  let enableCanvas =
    points.length > 100 &&
    points.every((point) => {
      return point?.icon?.html ? false : true
    })

  // Draw markers
  for (let point of points) {
    let marker = window.L.marker(
      [point.latitude, point.longitude],
      // options
      {
        icon: point?.icon ? createMarkerIcon(point.icon) : icon,
        // zIndexOffset默认0, z-index = 原始z-index + zIndexOffset
        // zIndexOffset为undefined, 则会删除z-index, 会按顺序显示
        // 其它方法都不可用, 因为地图放大缩放后会重置z-index
        zIndexOffset: undefined
      }
    )
    if (enableCanvas) {
      canvasLayer.addMarker(marker)
    } else {
      marker.addTo(layer)
    }
  }

  if (!onClick) return
  // Leaflet canvas marker plugin click
  if (enableCanvas) {
    markerClickCanvas({
      points,
      layerGroup: canvasLayer,
      clearMarkers: () => clearMarkers({ layer, canvasLayer }),
      defaultIcon: icon,
      onClick
    })
  } else {
    markerClickLeaflet({
      points,
      clearMarkers: () => clearMarkers({ layer, canvasLayer }),
      layerGroup: layer,
      defaultIcon: icon,
      onClick
    })
  }
}

export default addMarkers
