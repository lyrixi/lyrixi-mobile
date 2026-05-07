import type { CSSProperties, MouseEvent, ReactNode, RefObject } from 'react'

import type { ToolBarComboRef } from './ToolBar.components.types'

export interface ToolBarDropdownRef {
  element?: HTMLDivElement | null
  getElement?: () => HTMLDivElement | null
  close: () => void
  open: () => void
}

export interface ToolBarDropdownProps {
  direction?: string
  block?: boolean
  color?: string
  backgroundColor?: string
  borderColor?: string
  border?: string
  size?: string | number | readonly string[]
  sizeEqual?: boolean
  radius?: string | number
  fontSize?: string | number
  style?: CSSProperties
  className?: string
  children?: ReactNode
  comboRender?: (params: {
    comboRef: RefObject<ToolBarComboRef | null>
    open: boolean | null
    onClick: (e: MouseEvent) => void | Promise<void>
  }) => ReactNode
  arrowRender?: (props: { open: boolean | null }) => ReactNode
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  offset?: { top?: number; bottom?: number; left?: number; right?: number }
  left?: string | number
  right?: string | number
  portal?: HTMLElement
  modalRender?: (ctx: { open: boolean | null; onClose: () => void }) => ReactNode
  onBeforeOpen?: () => boolean | void | Promise<boolean | void>
  onOpen?: () => void
  onClose?: () => void
}
