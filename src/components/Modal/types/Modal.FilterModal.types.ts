import type { MouseEvent, ReactNode } from 'react'

import type { ModalProps, ModalRef } from './Modal.types'

export interface ModalFilterModalRef extends ModalRef {}

export interface ModalFilterModalProps
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
  footerRender?: (options: { onClose?: (e?: MouseEvent<HTMLDivElement>) => void }) => ReactNode
  onCancel?: () => void
}
