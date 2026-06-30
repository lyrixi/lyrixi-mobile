import type { CSSProperties, ReactNode } from 'react'

import type { ModalProps } from '../../Modal/types'
import type { CascaderItem, LoadDataFn } from './Cascader.common.types'

export interface CascaderModalProps {
  // Value & Display Value
  value?: CascaderItem[] | null
  list?: CascaderItem[] | null
  loadData?: LoadDataFn
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
  searchVisible?: boolean
  title?: ReactNode
  okNode?: ReactNode
  cancelNode?: ReactNode
  okVisible?: boolean
  cancelVisible?: boolean
  // Events
  onClose?: () => void
  onOk?: (value: CascaderItem[] | null | undefined) => boolean | Promise<unknown> | void
  onSearch?: (keyword: string, options: { list: CascaderItem[] }) => void
  onChange?: (value: CascaderItem[], meta?: unknown) => void
}
