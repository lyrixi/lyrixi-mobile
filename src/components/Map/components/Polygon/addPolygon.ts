import type { L } from '../../types'
import coordsToFit from './../../utils/coordsToFit'
import type { PolyPoint, PolyStyleParams } from '../../types'

// Polygon
function addPolygon(
  points: PolyPoint[] | null | undefined,
  params: PolyStyleParams,
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
      color: (params?.color as string) || '#3388ff',
      fillColor: (params?.fillColor as string) ?? (params?.color as string) ?? '#3388ff',
      fillOpacity: (params?.fillOpacity as number) ?? 0.2,
      weight: (params?.weight as number) ?? 2
    }
  )
  polygon.addTo(layer)
}

export default addPolygon
