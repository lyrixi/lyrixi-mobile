import type { CSSProperties, ReactNode } from 'react'

import type { TransferItem, TransferTitlesInput } from './Transfer.core.types'

export interface TransferModalProps {
  value?: TransferItem[]
  list?: TransferItem[]
  /** 穿梭列表区域标题，传给内部 Main */
  titles?: TransferTitlesInput
  open?: boolean
  maskClosable?: boolean
  allowClear?: boolean
  safeArea?: boolean
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  portal?: boolean | HTMLElement | null
  title?: ReactNode
  okNode?: ReactNode
  cancelNode?: ReactNode
  okVisible?: boolean
  cancelVisible?: boolean
  onClose?: () => void
  onOk?: (value: TransferItem[]) => boolean | void | Promise<boolean | void>
  onChange?: (value: TransferItem[]) => void
}
