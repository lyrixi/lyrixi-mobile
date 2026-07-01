import type { L } from '../../types'
import coordsToFit from './../../utils/coordsToFit'
import type { CirclePoint, CircleParams } from '../../types'

function addCircles(
  points: CirclePoint[] | null | undefined,
  params: CircleParams,
  layer: L.LayerGroup
): void {
  let fitted: unknown = coordsToFit(points)
  if (Array.isArray(fitted)) {
    fitted = (fitted as CirclePoint[]).filter((point) => point)
  }
  if (!Array.isArray(fitted) || fitted.length === 0) return

  for (const point of fitted as CirclePoint[]) {
    const circle = window.L!.circle(
      [point.latitude, point.longitude] as L.LatLngExpression,
      {
        radius: (point?.radius as number) || params?.radius || 200,
        color: (point?.color as string) || (params?.color as string) || '#3388ff'
      }
    )
    circle.addTo(layer)
  }
}

export default addCircles
