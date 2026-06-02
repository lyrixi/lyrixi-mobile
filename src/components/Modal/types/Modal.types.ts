import type { CSSProperties, MouseEvent, ReactNode } from 'react'

export interface ModalRef {
  maskElement: HTMLDivElement | null
  getMaskElement: () => HTMLDivElement | null
  modalElement: HTMLDivElement | null
  getModalElement: () => HTMLDivElement | null
}

export interface ModalProps {
  // Value & Display Value
  animation?: string
  // Status
  open?: boolean
  maskClosable?: boolean
  safeArea?: boolean
  // Style
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  // Elements
  portal?: HTMLElement | false | null
  children?: ReactNode
  // Events
  onClose?: (e?: MouseEvent<HTMLDivElement>) => void
}
