import type { CSSProperties, MouseEvent, ReactNode, RefObject } from 'react'

import type { ButtonProps, ButtonRef } from '../../Button/types'
import type { ModalProps } from '../../Modal/types'

export interface ToolBarFilterRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  close: () => void
  open: () => void
}

export interface ToolBarFilterProps {
  // Style
  direction?: ButtonProps['direction']
  block?: boolean
  style?: CSSProperties
  className?: string
  color?: ButtonProps['color']
  variant?: ButtonProps['variant']
  size?: ButtonProps['size']
  sizeEqual?: boolean
  fontSize?: string | number
  radius?: string | number
  maskStyle?: CSSProperties
  maskClassName?: string
  modalStyle?: CSSProperties
  modalClassName?: string
  // Elements
  children?: ReactNode
  comboRender?: (params: {
    comboRef: RefObject<ButtonRef | null>
    open: boolean | null
    onClick: (e: MouseEvent<HTMLDivElement>) => void
  }) => ReactNode
  modalRender?: (params: { open: boolean | null; onClose: () => void }) => ReactNode
  portal?: ModalProps['portal']
  footerRender?: (params: { onClose?: ModalProps['onClose'] }) => ReactNode
  // Events
  onCancel?: () => void
  onOpen?: () => void
  onClose?: () => void
  onConfig?: () => void
  onReset?: () => void
  onOk?: (ctx: { close: () => void }) => void
  icon?: ReactNode
}
