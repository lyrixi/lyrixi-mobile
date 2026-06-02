import type { CSSProperties } from 'react'

import type { LocationValue } from './Location.Value.types'

export interface LocationComboProps {
  // Combo: Value & Display Value
  value?: LocationValue | null
  placeholder?: string
  type?: string
  getAddress?: ((...args: unknown[]) => unknown) | null
  getLocation?: ((...args: unknown[]) => unknown) | null
  cacheExpires?: number
  mapConfig?: Record<string, unknown>
  autoSize?: boolean
  errorText?: string
  loadingText?: string
  // Combo: Status
  allowClear?: boolean
  disabled?: boolean
  editable?: boolean
  autoLocation?: boolean
  locationVisible?: boolean
  chooseVisible?: boolean | { nearbyVisible?: boolean }
  previewVisible?: boolean
  clickAction?: string
  // Combo: Style
  className?: string
  // Modal: Style
  modalClassName?: string
  modalStyle?: CSSProperties
  // Modal: Elements
  portal?: HTMLElement | null
  // Events
  onChange?: ((value: LocationValue | null) => void) | null
  onOpen?: (() => void) | null
  onClose?: (() => void) | null
  onLocationStatusChange?: ((status: string) => void) | null
  onError?: ((error: { status: string; message: string }) => void) | null
}

export interface LocationComboRef {
  element: unknown
  getElement: () => unknown
}
