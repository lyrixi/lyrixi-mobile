import type { CSSProperties, ReactNode } from 'react'
import type { InputSelectComboProps } from './../Input/Select'

type TransferComboField = Omit<InputSelectComboProps, 'onChange' | 'value'>

export interface TransferItem {
  id: string | number
  name?: ReactNode
  [key: string]: unknown
}

export interface TransferTitles {
  selected?: ReactNode
  unSelected?: ReactNode
}

/** 也支持 [已选区标题, 未选区标题] */
export type TransferTitlesInput = TransferTitles | [ReactNode, ReactNode]

export interface TransferMainProps {
  value: TransferItem[]
  list: TransferItem[]
  titles?: TransferTitlesInput
  open?: boolean
  allowClear?: boolean
  className?: string
  style?: CSSProperties
  onChange?: (value: TransferItem[]) => void
}

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

/** Combo + Modal 组合 */
export type TransferComboProps = TransferComboField &
  Omit<TransferModalProps, 'value' | 'onChange'> & {
    value?: TransferItem[]
    list?: TransferItem[]
    onChange?: (value: TransferItem[]) => void
    onBeforeOpen?: () => boolean | void | Promise<boolean | void>
  }

export interface TransferItemProps {
  children?: ReactNode
  sortable?: boolean
  onAdd?: () => void
  onDelete?: () => void
}
