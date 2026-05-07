import type { CSSProperties, MutableRefObject, ReactNode } from 'react'
import type { MapContainerAPI, MapContainerProps } from './Map.MapContainer.types'
import type { MarkersHandle } from './Map.Markers.types'
import type { ZoomControlRef } from './Map.ZoomControl.types'
import type { PolylineRef } from './Map.Polyline.types'
import type { CirclesRef } from './Map.Circles.types'

export type { PolylineRef, CirclesRef }

export interface MapMarkersProps {
  markers?: unknown
  minZoom?: number
  maxZoom?: number
  polyline?: unknown
  circles?: unknown
  style?: CSSProperties
  className?: string
  polylineStyle?: CSSProperties
  polylineClassName?: string
  circlesStyle?: CSSProperties
  circlesClassName?: string
  zoomControlStyle?: CSSProperties
  zoomControlClassName?: string
  getAddress?: MapContainerProps['getAddress']
  getLocation?: MapContainerProps['getLocation']
  queryNearby?: MapContainerProps['queryNearby']
  openLocation?: MapContainerProps['openLocation']
  children?: ReactNode
  onLoad?: MapContainerProps['onLoad']
  onMarkerClick?: (e: unknown) => void
  onZoomStart?: MapContainerProps['onZoomStart']
  onZoom?: MapContainerProps['onZoom']
  onZoomEnd?: MapContainerProps['onZoomEnd']
  onMoveStart?: MapContainerProps['onMoveStart']
  onMove?: MapContainerProps['onMove']
  onMoveEnd?: MapContainerProps['onMoveEnd']
  onDragStart?: MapContainerProps['onDragStart']
  onDrag?: MapContainerProps['onDrag']
  onDragEnd?: MapContainerProps['onDragEnd']
}

export type MapMarkersHandle =
  | (MapContainerAPI & {
      markersRef: MutableRefObject<MarkersHandle | null>
      polylineRef: MutableRefObject<PolylineRef | null>
      circlesRef: MutableRefObject<CirclesRef | null>
      zoomRef: MutableRefObject<ZoomControlRef | null>
    })
  | null
