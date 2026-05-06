import type { CSSProperties, ReactNode } from 'react'

import type { ModalProps } from './../../Modal/Modal/types'

export interface MessageModalProps {
  open?: boolean
  maskClosable?: boolean
  safeArea?: boolean
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  portal?: ModalProps['portal']
  children?: ReactNode
  onClose?: ModalProps['onClose']
}
