import type { CSSProperties, MouseEvent, ReactNode, RefObject } from 'react'

import type { ToolBarComboRef } from '../components/ToolBar.Combo.types'

export interface ToolBarDropdownRef {
  element?: HTMLDivElement | null
  getElement?: () => HTMLDivElement | null
  close: () => void
  open: () => void
}

export interface ToolBarDropdownProps {
  // Combo: Style
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
  // Combo: Elements
  children?: ReactNode
  comboRender?: (params: {
    comboRef: RefObject<ToolBarComboRef | null>
    open: boolean | null
    onClick: (e: MouseEvent) => void | Promise<void>
  }) => ReactNode
  arrowRender?: (props: { open: boolean | null }) => ReactNode
  // Modal: Style
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  offset?: { top?: number; bottom?: number; left?: number; right?: number }
  left?: string | number
  right?: string | number
  // Modal: Elements
  portal?: HTMLElement
  modalRender?: (ctx: { open: boolean | null; onClose: () => void }) => ReactNode
  // Events
  onBeforeOpen?: () => boolean | void | Promise<boolean | void>
  onOpen?: () => void
  onClose?: () => void
}
