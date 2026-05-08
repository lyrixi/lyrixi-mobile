import type { CSSProperties, ReactNode } from 'react'

import type { ModalProps } from './Modal.Modal.types'

export interface NavBarModalProps {
  open?: boolean
  maskClosable?: boolean
  safeArea?: boolean
  navBarStyle?: CSSProperties
  navBarClassName?: string
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  portal?: ModalProps['portal']
  title?: ReactNode
  okNode?: ReactNode
  okVisible?: boolean
  okPosition?: 'left' | 'right'
  cancelNode?: ReactNode
  cancelVisible?: boolean
  cancelPosition?: 'left' | 'right'
  children?: ReactNode
  onCancel?: () => void
  onOk?: () => boolean | void | Promise<boolean | void>
  onClose?: ModalProps['onClose']
}
