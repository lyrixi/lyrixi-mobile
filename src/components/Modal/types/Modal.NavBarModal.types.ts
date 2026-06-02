import type { CSSProperties, ReactNode } from 'react'

import type { ModalProps, ModalRef } from './Modal.types'

export interface ModalNavBarModalRef extends ModalRef {}

export interface ModalNavBarModalProps
  extends Pick<
    ModalProps,
    | 'open'
    | 'maskClosable'
    | 'safeArea'
    | 'modalStyle'
    | 'modalClassName'
    | 'maskStyle'
    | 'maskClassName'
    | 'portal'
    | 'children'
    | 'onClose'
  > {
  navBarStyle?: CSSProperties
  navBarClassName?: string
  title?: ReactNode
  okNode?: ReactNode
  okVisible?: boolean
  okPosition?: 'left' | 'right'
  cancelNode?: ReactNode
  cancelVisible?: boolean
  cancelPosition?: 'left' | 'right'
  onCancel?: () => void
  onOk?: () => boolean | void | Promise<boolean | void>
}
