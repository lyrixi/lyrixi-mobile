import type { CSSProperties, MouseEvent, ReactNode, RefObject } from 'react'

import type { ButtonProps, ButtonRef } from './../../Button/types'
import type { ModalProps } from './../../Modal/Modal/types'

export interface ToolBarFilterRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  close: () => void
  open: () => void
}

export interface ToolBarFilterProps {
  direction?: ButtonProps['direction']
  block?: boolean
  style?: CSSProperties
  className?: string
  color?: string
  backgroundColor?: string
  borderColor?: string
  border?: string
  size?: ButtonProps['size']
  sizeEqual?: boolean
  fontSize?: string | number
  radius?: string | number
  maskStyle?: CSSProperties
  maskClassName?: string
  modalStyle?: CSSProperties
  modalClassName?: string
  children?: ReactNode
  comboRender?: (params: {
    comboRef: RefObject<ButtonRef | null>
    open: boolean | null
    onClick: (e: MouseEvent<HTMLDivElement>) => void
  }) => ReactNode
  modalRender?: (params: { open: boolean | null; onClose: () => void }) => ReactNode
  portal?: ModalProps['portal']
  footerRender?: (params: { onClose?: ModalProps['onClose'] }) => ReactNode
  onCancel?: () => void
  onOpen?: () => void
  onClose?: () => void
  /** 业务侧扩展（筛选项配置等） */
  onConfig?: () => void
  onReset?: () => void
  onOk?: (ctx: { close: () => void }) => void
  /** 未传 children 时，作为筛选按钮主图标 */
  icon?: ReactNode
}
