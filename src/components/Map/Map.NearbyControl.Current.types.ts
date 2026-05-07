import type { MapContainerAPI } from './Map.MapContainer.types'
import type { MapValue } from './Map.NearbyControl.types'

export type { MapValue } from './Map.NearbyControl.types'

export interface CurrentProps {
  value?: MapValue
  readOnly?: boolean
  map?: MapContainerAPI
  onChange?: (item: unknown) => void
}

export interface NavigationProps {
  type?: string
  longitude?: number | string
  latitude?: number | string
  name?: string
  address?: string
  map?: MapContainerAPI
}
