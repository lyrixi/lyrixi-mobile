import type { MapContainerAPI } from './Map.MapContainer.types'
import getTabs from './components/NearbyControl/utils/getTabs'

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
  value?: MapValue
  radius?: number
  readOnly?: boolean
  nearbyVisible?: boolean
  map?: MapContainerAPI
  onChange?: (item: unknown) => void
  onSuccess?: (result: unknown) => void
  onError?: (result: unknown) => void
}

export interface MapNearbyControlRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  reload: () => void
}

export interface MapNearbyControlMainProps {
  result: Record<string, unknown> | null
  value?: unknown
  onChange?: (item: Record<string, unknown>) => void
}

export type MapNearbyTabItem = ReturnType<typeof getTabs>[number]

export interface MapNearbyControlTabsProps {
  tab: MapNearbyTabItem
  onChange: (t: MapNearbyTabItem) => void
}
