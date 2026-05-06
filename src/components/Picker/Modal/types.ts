import type { CSSProperties, MouseEvent, ReactNode } from 'react'

import type { ModalProps } from './../../Modal/Modal/types'

export interface PickerModalProps {
  value?: unknown
  list?: unknown
  open?: boolean
  maskClosable?: boolean
  allowClear?: boolean
  safeArea?: boolean
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  portal?: ModalProps['portal']
  title?: ReactNode
  okNode?: ReactNode
  cancelNode?: ReactNode
  okVisible?: boolean
  cancelVisible?: boolean
  onClose?: (e?: MouseEvent<HTMLDivElement>) => void
  onOk?: (value: unknown) => boolean | void | Date | Promise<boolean | void | Date>
  onChange?: (value: unknown) => void
}
