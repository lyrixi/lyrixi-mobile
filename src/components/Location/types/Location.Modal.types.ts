import type { CSSProperties } from 'react'

import type { MapContainerProps } from '../../Map/types'

import type { LocationValue } from './Location.Value.types'

export interface LocationModalProps {
  // Value & Display Value
  value?: LocationValue | null
  cacheExpires?: number
  // Status
  open?: string
  maskClosable?: boolean
  safeArea?: boolean
  allowClear?: boolean
  multiple?: boolean
  nearbyVisible?: boolean
  // Style
  modalClassName?: string
  modalStyle?: CSSProperties
  maskStyle?: CSSProperties
  maskClassName?: string
  // Elements
  portal?: Element | null
  mapConfig?: Record<string, unknown>
  getLocation?: MapContainerProps['getLocation']
  getAddress?: MapContainerProps['getAddress']
  // Events
  onOk?: ((value: LocationValue | null) => unknown) | null
  onChange?: ((value: LocationValue | null) => void) | null
  onClose?: (() => void) | null
}
