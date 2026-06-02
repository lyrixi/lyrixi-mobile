import type { CSSProperties, ReactNode } from 'react'

import type { KeyboardAction } from './Keyboard.common.types'

export interface KeyboardNumberRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}

export interface KeyboardNumberProps {
  // Value & Display Value
  value?: string
  dot?: boolean
  minus?: boolean
  // Status
  safeArea?: boolean
  open?: boolean
  okVisible?: boolean
  cancelVisible?: boolean
  // Style
  modalStyle?: CSSProperties
  modalClassName?: string
  // Elements
  portal?: HTMLElement
  okNode?: ReactNode
  cancelNode?: ReactNode
  // Events
  onChange?: (value: string, options: { action: KeyboardAction }) => void
  onOk?: (value: string) => Promise<boolean | undefined> | boolean | undefined
  onCancel?: () => void
  onOpen?: () => void
  onClose?: () => void
}
