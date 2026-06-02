import type { CSSProperties, ReactNode, RefObject } from 'react'

import type { ComboRef } from '../../Combo/types'

export interface TooltipProps {
  // Status
  maskClosable?: boolean
  // Style
  style?: CSSProperties
  className?: string
  animation?: string
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  // Elements
  children?: ReactNode
  comboRender?: (ctx: {
    comboRef: RefObject<ComboRef | null>
    open: boolean | null
    onClick: () => void
  }) => ReactNode
  modalRender?: (ctx: { open: boolean | null; onClose: () => void }) => ReactNode
  referenceElement?: Element | null | (() => Element | null)
  portal?: boolean | Element | null
  // Events
  onBeforeOpen?: () => boolean | void | Promise<boolean | void>
  onOpen?: () => void
  onClose?: () => void
}
