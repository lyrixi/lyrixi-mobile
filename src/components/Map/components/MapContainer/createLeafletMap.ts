import type * as L from 'leaflet'
import coordsToFit from './../../utils/coordsToFit'

interface MapPoint {
  latitude?: number | string
  longitude?: number | string
  type?: string
  [key: string]: unknown
}

interface CreateLeafletMapOptions {
  center?: MapPoint | MapPoint[]
  minZoom?: number
  maxZoom?: number
  zoom?: number
}

function createLeafletMap(
  container: HTMLElement | null,
  { center, minZoom, maxZoom, zoom }: CreateLeafletMapOptions
): L.Map | Promise<L.Map> | null {
  if (!window.L || !window.L?.tileLayer?.currentTileLayer) {
    return null
  }

  const tileLayerEx = window.L.tileLayer as typeof window.L.tileLayer & {
    currentTileLayer?: (() => L.TileLayer) & { config?: Record<string, unknown> }
  }

  let centerPoint: [number, number] | [] = []
  if (center && !Array.isArray(center) && center.latitude && center.longitude) {
    const fitted = coordsToFit([center as MapPoint]) as MapPoint[] | null
    if (Array.isArray(fitted) && fitted[0]?.latitude && fitted[0]?.longitude) {
      centerPoint = [fitted[0].latitude as number, fitted[0].longitude as number]
    }
  }

  const config: Record<string, unknown> = {
    attributionControl: false,
    zoomControl: false,
    center: centerPoint,
    ...(tileLayerEx.currentTileLayer?.config || {}),
    maxZoom: maxZoom || (tileLayerEx.currentTileLayer?.config?.maxZoom as number | undefined) || 18,
    minZoom: minZoom || (tileLayerEx.currentTileLayer?.config?.minZoom as number | undefined) || 3,
    zoom: zoom || (tileLayerEx.currentTileLayer?.config?.zoom as number | undefined) || 13
  }

  const map = window.L.map(container as HTMLElement, config as L.MapOptions)

  if (!tileLayerEx.currentTileLayer) {
    return map
  }

  const tileLayer = tileLayerEx.currentTileLayer()
  tileLayer.addTo(map)

  return new Promise<L.Map>((resolve) => {
    tileLayer.on('load', function () {
      resolve(map)
    })
  })
}

export default createLeafletMap
