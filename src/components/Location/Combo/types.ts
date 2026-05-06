import type { CSSProperties } from 'react'

import type { LocationValue } from './../types'

export interface LocationComboProps {
  value?: LocationValue | null
  placeholder?: string
  type?: string
  getAddress?: ((...args: unknown[]) => unknown) | null
  getLocation?: ((...args: unknown[]) => unknown) | null
  cacheExpires?: number
  mapConfig?: Record<string, unknown>
  autoSize?: boolean
  allowClear?: boolean
  disabled?: boolean
  editable?: boolean
  autoLocation?: boolean
  locationVisible?: boolean
  chooseVisible?: boolean | { nearbyVisible?: boolean }
  previewVisible?: boolean
  clickAction?: string
  className?: string
  modalClassName?: string
  modalStyle?: CSSProperties
  portal?: HTMLElement | null
  errorText?: string
  loadingText?: string
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
