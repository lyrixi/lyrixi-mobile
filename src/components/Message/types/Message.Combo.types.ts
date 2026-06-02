import type { CSSProperties, ReactNode } from 'react'

import type { MessageComboButton } from './Message.common.types'
import type { MessageModalProps } from './Message.Modal.types'

export type { MessageComboButton } from './Message.common.types'

export interface MessageComboRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  open?: () => void
  close?: () => void
}

export interface MessageComboProps extends Omit<MessageModalProps, 'children' | 'open'> {
  onOpen?: () => void
  open?: boolean
  className?: string
  style?: CSSProperties
  children?: ReactNode
}
