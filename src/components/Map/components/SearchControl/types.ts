import type { CSSProperties } from 'react'
import type { MapContainerAPI } from './../MapContainer'

export interface SearchControlProps {
  style?: CSSProperties
  className?: string
  map?: MapContainerAPI
  onChange?: (item: unknown) => void
}

/** Search 弹层内 queryNearby 返回形态 */
export interface SearchQueryNearbyResult {
  list?: Array<Record<string, unknown>>
  message?: string
  status?: string
  [key: string]: unknown
}

export interface SearchPageProps {
  open: boolean
  map?: MapContainerAPI
  onClose?: () => void
  onChange?: (item: unknown) => void
}
