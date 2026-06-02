import type { MapContainerAPI } from './Map.MapContainer.types'
import getTabs from '../components/NearbyControl/utils/getTabs'

export interface MapValue {
  name?: string
  address?: string
  longitude?: number | string
  latitude?: number | string
  type?: string
  [key: string]: unknown
}

export interface QueryNearbyResult {
  status: string
  list?: unknown[]
  message?: string
  [key: string]: unknown
}

export interface MapNearbyControlProps {
  // Value & Display Value
  value?: MapValue
  radius?: number
  map?: MapContainerAPI
  // Status
  readOnly?: boolean
  nearbyVisible?: boolean
  // Events
  onChange?: (item: unknown) => void
  onSuccess?: (result: unknown) => void
  onError?: (result: unknown) => void
}

export interface MapNearbyControlRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  reload: () => void
}

export type MapNearbyTabItem = ReturnType<typeof getTabs>[number]
