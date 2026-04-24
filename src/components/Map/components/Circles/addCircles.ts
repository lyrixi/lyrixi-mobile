import type * as L from 'leaflet'
import coordsToFit from './../../utils/coordsToFit'

export interface CirclePoint {
  latitude?: number | string
  longitude?: number | string
  radius?: number
  color?: string
  [key: string]: unknown
}

interface CircleOptions {
  radius?: number
  color?: string
  [key: string]: unknown
}

function addCircles(
  points: CirclePoint[] | null | undefined,
  options: CircleOptions,
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
        radius: (point?.radius as number) || options?.radius || 200,
        color: (point?.color as string) || (options?.color as string) || '#3388ff'
      }
    )
    circle.addTo(layer)
  }
}

export default addCircles
