import type { MapContainerAPI } from '../../../types/Map.MapContainer.types'

export interface MapNearbyControlNavigationProps {
  // Value & Display Value
  type?: string
  longitude?: number | string
  latitude?: number | string
  name?: string
  address?: string
  map?: MapContainerAPI
}
