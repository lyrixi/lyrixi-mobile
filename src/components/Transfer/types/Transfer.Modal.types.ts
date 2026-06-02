import type { CSSProperties, ReactNode } from 'react'

import type { ModalProps } from '../../Modal/types'
import type { TransferItem, TransferTitlesInput } from './Transfer.common.types'

export interface TransferModalProps {
  // Value & Display Value
  value?: TransferItem[]
  list?: TransferItem[]
  titles?: TransferTitlesInput
  // Status
  open?: boolean
  maskClosable?: boolean
  allowClear?: boolean
  // Style
  safeArea?: boolean
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  // Elements
  portal?: ModalProps['portal']
  title?: ReactNode
  okNode?: ReactNode
  cancelNode?: ReactNode
  okVisible?: boolean
  cancelVisible?: boolean
  // Events
  onClose?: () => void
  onOk?: (value: TransferItem[]) => boolean | void | Promise<boolean | void>
  onChange?: (value: TransferItem[]) => void
}
