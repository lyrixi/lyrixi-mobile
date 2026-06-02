import type { CSSProperties, MutableRefObject, ReactNode } from 'react'
import type { MapContainerAPI, MapContainerProps } from './Map.MapContainer.types'
import type { MapMarkersLayerHandle } from './Map.Markers.types'
import type { MapZoomControlRef } from './Map.ZoomControl.types'
import type { MapPolylineRef } from './Map.Polyline.types'
import type { MapCirclesRef } from './Map.Circles.types'

export type { MapPolylineRef, MapCirclesRef }

export interface MapMapMarkersProps {
  // Value & Display Value
  markers?: unknown
  minZoom?: number
  maxZoom?: number
  polyline?: unknown
  circles?: unknown
  getAddress?: MapContainerProps['getAddress']
  getLocation?: MapContainerProps['getLocation']
  queryNearby?: MapContainerProps['queryNearby']
  openLocation?: MapContainerProps['openLocation']
  // Style
  style?: CSSProperties
  className?: string
  polylineStyle?: CSSProperties
  polylineClassName?: string
  circlesStyle?: CSSProperties
  circlesClassName?: string
  zoomControlStyle?: CSSProperties
  zoomControlClassName?: string
  // Elements
  children?: ReactNode
  // Events
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

export type MapMapMarkersHandle =
  | (MapContainerAPI & {
      markersRef: MutableRefObject<MapMarkersLayerHandle | null>
      polylineRef: MutableRefObject<MapPolylineRef | null>
      circlesRef: MutableRefObject<MapCirclesRef | null>
      zoomRef: MutableRefObject<MapZoomControlRef | null>
    })
  | null
