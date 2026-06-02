import type { CSSProperties, ReactNode } from 'react'
import type { MapContainerProps } from './Map.MapContainer.types'
import type { MapPoint as WgsMapPoint } from './Map.coordsToWgs84.types'

export interface MapChooseValue {
  latitude?: number | string
  longitude?: number | string
  type?: string
  address?: string
  name?: string
  [key: string]: unknown
}

export interface MapChooseProps {
  // Value & Display Value
  value?: MapChooseValue
  center?: MapContainerProps['center']
  zoom?: number
  minZoom?: number
  maxZoom?: number
  cacheExpires?: number
  autoLocation?: boolean
  getAddress?: MapContainerProps['getAddress']
  getLocation?: MapContainerProps['getLocation']
  queryNearby?: MapContainerProps['queryNearby']
  openLocation?: MapContainerProps['openLocation']
  // Status
  readOnly?: boolean
  nearbyVisible?: boolean
  // Style
  style?: CSSProperties
  className?: string
  searchControlStyle?: CSSProperties
  searchControlClassName?: string
  centerMarkerStyle?: CSSProperties
  centerMarkerClassName?: string
  markersStyle?: CSSProperties
  markersClassName?: string
  zoomControlStyle?: CSSProperties
  zoomControlClassName?: string
  locationControlStyle?: CSSProperties
  locationControlClassName?: string
  nearbyControlStyle?: CSSProperties
  nearbyControlClassName?: string
  // Elements
  children?: ReactNode
  // Events
  onLoad?: MapContainerProps['onLoad']
  onChange?: (value: WgsMapPoint | (WgsMapPoint | null)[] | null) => void
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
