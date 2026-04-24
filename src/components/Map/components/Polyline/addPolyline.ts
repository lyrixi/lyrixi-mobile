import type * as L from 'leaflet'
import coordsToFit from './../../utils/coordsToFit'

export interface LinePoint {
  latitude?: number | string
  longitude?: number | string
  [key: string]: unknown
}

export interface LineStyleOptions {
  color?: string
  [key: string]: unknown
}

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
