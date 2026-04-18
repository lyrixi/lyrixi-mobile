import coordsToFit from './../../utils/coordsToFit'

function addCircles(points, options, layer) {
  // eslint-disable-next-line
  points = coordsToFit(points)
  // eslint-disable-next-line
  points = points.filter((point) => point)
  if (!Array.isArray(points) || points.length === 0) return

  for (let point of points) {
    let circle = window.L.circle(
      [point.latitude, point.longitude],
      // options
      {
        radius: point?.radius || options?.radius || 200,
        color: point?.color || options?.color || '#3388ff'
      }
    )
    circle.addTo(layer)
  }
}

export default addCircles
