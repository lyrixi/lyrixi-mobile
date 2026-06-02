import type { CSSProperties } from 'react'

import type { MapContainerProps } from '../../Map/types'

import type { LocationValue } from './Location.Value.types'

export interface LocationMainProps {
  // Value & Display Value
  value?: LocationValue | null
  cacheExpires?: number
  // Status
  open?: string
  autoLocation?: boolean
  nearbyVisible?: boolean
  // Style
  className?: string
  style?: CSSProperties
  // Elements
  id?: string
  mapConfig?: Record<string, unknown>
  getLocation?: MapContainerProps['getLocation']
  getAddress?: MapContainerProps['getAddress']
  // Events
  onChange?: (newValue: LocationValue | null) => void
  onOk?: ((value: LocationValue | null) => void) | null
  onClear?: (() => void) | null
}
