import type { CSSProperties, ReactNode } from 'react'

import type { KeyboardAction } from './Keyboard.common.types'

export interface KeyboardNumberRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}

export interface KeyboardNumberProps {
  safeArea?: boolean
  portal?: HTMLElement
  value?: string
  onChange?: (value: string, options: { action: KeyboardAction }) => void
  dot?: boolean
  minus?: boolean
  okNode?: ReactNode
  okVisible?: boolean
  cancelNode?: ReactNode
  cancelVisible?: boolean
  onOk?: (value: string) => Promise<boolean | undefined> | boolean | undefined
  onCancel?: () => void
  modalStyle?: CSSProperties
  modalClassName?: string
  open?: boolean
  onOpen?: () => void
  onClose?: () => void
}
