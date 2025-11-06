import coordsToFit from './../../utils/coordsToFit'

// Polyline
function addPolyline(points, options, layer) {
  // eslint-disable-next-line
  points = coordsToFit(points)
  // eslint-disable-next-line
  points = points.filter((point) => point)
  if (!Array.isArray(points) || points.length === 0) return

  let polyline = window.L.polyline(
    points.map((point) => [point.latitude, point.longitude]),
    // options
    {
      color: options?.color || 'red'
    }
  )
  polyline.addTo(layer)
}

export default addPolyline
