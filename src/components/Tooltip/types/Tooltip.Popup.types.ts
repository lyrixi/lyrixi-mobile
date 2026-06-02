import type { CSSProperties, ReactNode } from 'react'

export interface TooltipPopupRef {
  maskElement: HTMLDivElement | null
  getMaskElement: () => HTMLDivElement | null
  modalElement: HTMLDivElement | null
  getModalElement: () => HTMLDivElement | null
}

export interface TooltipPopupProps {
  // Value & Display Value
  animation?: string
  // Status
  open?: boolean
  maskClosable?: boolean
  // Style
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  // Elements
  portal?: Element | null
  children?: ReactNode
  // Events
  onClose?: () => void
}
