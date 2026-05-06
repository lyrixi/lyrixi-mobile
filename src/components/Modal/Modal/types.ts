import type { CSSProperties, MouseEvent, ReactNode } from 'react'

export interface ModalRef {
  maskElement: HTMLDivElement | null
  getMaskElement: () => HTMLDivElement | null
  modalElement: HTMLDivElement | null
  getModalElement: () => HTMLDivElement | null
}

export interface ModalProps {
  open?: boolean
  maskClosable?: boolean
  safeArea?: boolean
  animation?: string
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  portal?: HTMLElement | string | boolean | null
  children?: ReactNode
  onClose?: (e?: MouseEvent<HTMLDivElement>) => void
}
