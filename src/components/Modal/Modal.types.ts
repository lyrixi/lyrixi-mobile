import type { CSSProperties, MouseEvent, ReactNode } from 'react'

export type ModalMaskStyle = CSSProperties & {
  top?: string | number
  bottom?: string | number
  left?: string | number
  right?: string | number
}

export interface ModalRef {
  maskElement: HTMLDivElement | null
  getMaskElement: () => HTMLDivElement | null
  modalElement: HTMLDivElement | null
  getModalElement: () => HTMLDivElement | null
}

export interface ModalProps {
  // 公用属性
  open?: boolean
  maskClosable?: boolean
  safeArea?: boolean
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: ModalMaskStyle
  maskClassName?: string
  portal?: HTMLElement | string | boolean | null
  children?: ReactNode
  onClose?: (e?: MouseEvent<HTMLDivElement>) => void

  // Modal 专用属性
  animation?: string

  // DropdownModal 专用属性
  offset?: Record<string, number>
  left?: string | number
  right?: string | number
  referenceElement?: HTMLElement | (() => HTMLElement) | null

  // FilterModal 专用属性
  footerRender?: (params: { onClose?: (e?: MouseEvent<HTMLDivElement>) => void }) => ReactNode

  // FilterModal / NavBarModal 共用属性（根 Modal、DropdownModal 不使用）
  onCancel?: () => void

  // NavBarModal 专用属性
  navBarStyle?: CSSProperties
  navBarClassName?: string
  title?: ReactNode
  okNode?: ReactNode
  okVisible?: boolean
  okPosition?: 'left' | 'right'
  cancelNode?: ReactNode
  cancelVisible?: boolean
  cancelPosition?: 'left' | 'right'
  onOk?: () => boolean | void | Promise<boolean | void>
}
