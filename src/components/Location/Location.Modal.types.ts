import type { CSSProperties } from 'react'

import type { MapContainerProps } from '../Map/types'

import type { LocationValue } from './Location.Value.types'

export interface LocationModalProps {
  value?: LocationValue | null
  cacheExpires?: number
  open?: string
  maskClosable?: boolean
  safeArea?: boolean
  allowClear?: boolean
  multiple?: boolean
  nearbyVisible?: boolean
  modalClassName?: string
  modalStyle?: CSSProperties
  maskStyle?: CSSProperties
  maskClassName?: string
  portal?: Element | null
  mapConfig?: Record<string, unknown>
  getLocation?: MapContainerProps['getLocation']
  getAddress?: MapContainerProps['getAddress']
  onOk?: ((value: LocationValue | null) => unknown) | null
  onChange?: ((value: LocationValue | null) => void) | null
  onClose?: (() => void) | null
}
