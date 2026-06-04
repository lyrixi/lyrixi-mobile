import type { CSSProperties, ReactNode } from 'react'

import type { ModalProps, ModalRef } from '../../Modal/types'

import type { MessageBodyProps } from './Message.common.types'

export type MessageModalRef = ModalRef

export interface MessageModalProps extends MessageBodyProps {
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
