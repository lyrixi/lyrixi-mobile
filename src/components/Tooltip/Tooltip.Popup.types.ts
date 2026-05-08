import type { CSSProperties, ReactNode } from 'react'

export interface TooltipPopupRef {
  maskElement: HTMLDivElement | null
  getMaskElement: () => HTMLDivElement | null
  modalElement: HTMLDivElement | null
  getModalElement: () => HTMLDivElement | null
}

export interface TooltipPopupProps {
  open?: boolean
  maskClosable?: boolean
  animation?: string
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  portal?: Element | null
  children?: ReactNode
  onClose?: () => void
}
