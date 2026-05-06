import type { CSSProperties, ReactNode, RefObject } from 'react'

import type { ComboRef } from './../Combo'

export interface PopupRef {
  maskElement: HTMLDivElement | null
  getMaskElement: () => HTMLDivElement | null
  modalElement: HTMLDivElement | null
  getModalElement: () => HTMLDivElement | null
}

export interface PopupProps {
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

export interface TooltipProps {
  maskClosable?: boolean
  style?: CSSProperties
  className?: string
  animation?: string
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  children?: ReactNode
  comboRender?: (ctx: {
    comboRef: RefObject<ComboRef | null>
    open: boolean | null
    onClick: () => void
  }) => ReactNode
  modalRender?: (ctx: { open: boolean | null; onClose: () => void }) => ReactNode
  referenceElement?: Element | null | (() => Element | null)
  portal?: boolean | Element | null
  onBeforeOpen?: () => boolean | void | Promise<boolean | void>
  onOpen?: () => void
  onClose?: () => void
}
