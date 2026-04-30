import type { L } from './../../leaflet.types'
import coordsToFit from './../../utils/coordsToFit'
import type { LinePoint, LineStyleOptions } from './types'

export type { LinePoint, LineStyleOptions } from './types'

// Polyline
function addPolyline(
  points: LinePoint[] | null | undefined,
  options: LineStyleOptions,
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
      color: (options?.color as string) || 'red'
    }
  )
  polyline.addTo(layer)
}

export default addPolyline
