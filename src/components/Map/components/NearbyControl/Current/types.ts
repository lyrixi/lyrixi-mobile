import type { MapContainerAPI } from './../../MapContainer'
import type { MapValue } from '../types'

export type { MapValue } from '../types'

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
