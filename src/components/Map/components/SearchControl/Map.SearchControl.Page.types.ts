import type { MapContainerAPI } from '../../types/Map.MapContainer.types'

/** Search 弹层内 queryNearby 返回形态 */
export interface MapSearchControlSearchQueryNearbyResult {
  list?: Array<Record<string, unknown>>
  message?: string
  status?: string
  [key: string]: unknown
}

export interface MapSearchControlPageProps {
  // Value & Display Value
  map?: MapContainerAPI
  // Status
  open: boolean
  // Events
  onClose?: () => void
  onChange?: (item: unknown) => void
}
