import type { MapContainerAPI } from './Map.MapContainer.types'
import type { MapValue } from './Map.NearbyControl.types'

export type { MapValue } from './Map.NearbyControl.types'

export interface MapNearbyControlCurrentProps {
  // Value & Display Value
  value?: MapValue
  map?: MapContainerAPI
  // Status
  readOnly?: boolean
  // Events
  onChange?: (item: unknown) => void
}
