import coordsToFit from './../../utils/coordsToFit'

// Polygon
function addPolygon(points, options, layer) {
  // eslint-disable-next-line
  points = coordsToFit(points)
  // eslint-disable-next-line
  points = points.filter((point) => point)
  if (!Array.isArray(points) || points.length < 3) return

  let polygon = window.L.polygon(
    points.map((point) => [point.latitude, point.longitude]),
    {
      color: options?.color || '#3388ff',
      fillColor: options?.fillColor ?? options?.color ?? '#3388ff',
      fillOpacity: options?.fillOpacity ?? 0.2,
      weight: options?.weight ?? 2
    }
  )
  polygon.addTo(layer)
}

export default addPolygon
