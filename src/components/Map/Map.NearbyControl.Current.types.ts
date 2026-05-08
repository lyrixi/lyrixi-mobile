import type { MapContainerAPI } from './Map.MapContainer.types'
import type { MapValue } from './Map.NearbyControl.types'

export type { MapValue } from './Map.NearbyControl.types'

export interface MapNearbyControlCurrentProps {
  value?: MapValue
  readOnly?: boolean
  map?: MapContainerAPI
  onChange?: (item: unknown) => void
}

export interface MapNearbyControlNavigationProps {
  type?: string
  longitude?: number | string
  latitude?: number | string
  name?: string
  address?: string
  map?: MapContainerAPI
}
