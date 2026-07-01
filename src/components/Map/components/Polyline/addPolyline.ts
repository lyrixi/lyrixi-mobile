import type { L } from '../../types'
import coordsToFit from './../../utils/coordsToFit'
import type { LinePoint, LineStyleParams } from '../../types'

// Polyline
function addPolyline(
  points: LinePoint[] | null | undefined,
  params: LineStyleParams,
  layer: L.LayerGroup
): void {
  let fitted: unknown = coordsToFit(points)
  if (Array.isArray(fitted)) {
    fitted = (fitted as LinePoint[]).filter((point) => point)
  }
  if (!Array.isArray(fitted) || fitted.length === 0) return

  const list = fitted as LinePoint[]

  const polyline = window.L!.polyline(
    list.map((point) => [point.latitude, point.longitude] as L.LatLngExpression),
    {
      color: (params?.color as string) || 'red'
    }
  )
  polyline.addTo(layer)
}

export default addPolyline
