import type { CSSProperties, ReactNode } from 'react'

import type { ModalProps } from '../../Modal/types'
import type { CascaderItem, LoadDataFn } from './Cascader.common.types'
import type { InputSelectProps, InputSelectRef } from '../../Input/types'

export type CascaderComboRef = InputSelectRef & {
  open: () => void
  close: () => void
} & Record<string, unknown>

export type CascaderComboProps = Omit<InputSelectProps, 'onSearch' | 'value' | 'onChange'> & {
  value?: CascaderItem[] | null
  list?: CascaderItem[]
  loadData?: LoadDataFn
  maskClosable?: boolean
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
  searchVisible?: boolean
  onSearch?: (keyword: string, options: { list: CascaderItem[] }) => void
  onChange?: (value: CascaderItem[]) => void
  onBeforeOpen?: () => boolean | Promise<boolean>
}
