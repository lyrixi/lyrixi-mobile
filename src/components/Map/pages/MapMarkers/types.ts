import type { CSSProperties, MutableRefObject, ReactNode } from 'react'
import type { MapContainerAPI, MapContainerProps } from './../../components/MapContainer'
import type { MarkersHandle } from './../../components/Markers'
import type { ZoomControlRef } from './../../components/ZoomControl'
import type { PolylineRef } from './../../components/Polyline/types'
import type { CirclesRef } from './../../components/Circles/types'

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
