import type { MapContainerAPI } from './../MapContainer/types'
import getTabs from './utils/getTabs'

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

export interface NearbyControlProps {
  value?: MapValue
  radius?: number
  readOnly?: boolean
  nearbyVisible?: boolean
  map?: MapContainerAPI
  onChange?: (item: unknown) => void
  onSuccess?: (result: unknown) => void
  onError?: (result: unknown) => void
}

export interface NearbyControlRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  reload: () => void
}

export interface NearbyControlMainProps {
  result: Record<string, unknown> | null
  value?: unknown
  onChange?: (item: Record<string, unknown>) => void
}

export type NearbyTabItem = ReturnType<typeof getTabs>[number]

export interface NearbyControlTabsProps {
  tab: NearbyTabItem
  onChange: (t: NearbyTabItem) => void
}
