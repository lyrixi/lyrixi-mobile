import type { CSSProperties, ReactNode } from 'react'

import type { ModalProps } from './../Modal/types'

export interface DropdownModalProps {
  open?: boolean
  maskClosable?: boolean
  safeArea?: boolean
  offset?: Record<string, number>
  left?: string | number
  right?: string | number
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties & { top?: string | number; bottom?: string | number; left?: string | number; right?: string | number }
  maskClassName?: string
  portal?: ModalProps['portal']
  referenceElement?: HTMLElement | (() => HTMLElement) | null
  children?: ReactNode
  onClose?: ModalProps['onClose']
}
