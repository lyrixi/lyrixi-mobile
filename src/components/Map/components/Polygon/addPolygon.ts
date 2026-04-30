import type { L } from './../../leaflet.types'
import coordsToFit from './../../utils/coordsToFit'

export interface PolyPoint {
  latitude?: number | string
  longitude?: number | string
  [key: string]: unknown
}

export interface PolyStyleOptions {
  color?: string
  fillColor?: string
  fillOpacity?: number
  weight?: number
  [key: string]: unknown
}

// Polygon
function addPolygon(
  points: PolyPoint[] | null | undefined,
  options: PolyStyleOptions,
  layer: L.LayerGroup
): void {
  let fitted: unknown = coordsToFit(points)
  if (Array.isArray(fitted)) {
    fitted = (fitted as PolyPoint[]).filter((point) => point)
  }
  if (!Array.isArray(fitted) || fitted.length < 3) return

  const list = fitted as PolyPoint[]

  const polygon = window.L!.polygon(
    list.map((point) => [point.latitude, point.longitude] as L.LatLngExpression),
    {
      color: (options?.color as string) || '#3388ff',
      fillColor: (options?.fillColor as string) ?? (options?.color as string) ?? '#3388ff',
      fillOpacity: (options?.fillOpacity as number) ?? 0.2,
      weight: (options?.weight as number) ?? 2
    }
  )
  polygon.addTo(layer)
}

export default addPolygon
