import type { CSSProperties } from 'react'

import type { MapContainerProps } from '../Map/types'

import type { LocationValue } from './Location.Value.types'

export interface LocationMainProps {
  value?: LocationValue | null
  cacheExpires?: number
  open?: string
  autoLocation?: boolean
  nearbyVisible?: boolean
  className?: string
  style?: CSSProperties
  id?: string
  mapConfig?: Record<string, unknown>
  getLocation?: MapContainerProps['getLocation']
  getAddress?: MapContainerProps['getAddress']
  onChange?: (newValue: LocationValue | null) => void
  onOk?: ((value: LocationValue | null) => void) | null
  onClear?: (() => void) | null
}
