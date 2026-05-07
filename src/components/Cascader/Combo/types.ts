import type { CSSProperties, ReactNode } from 'react'

import type { CascaderNode, LoadDataFn } from './../types'
import type { InputSelectComboProps, InputSelectComboRef } from './../../Input/Select/types'

export type CascaderComboRef = InputSelectComboRef & {
  open: () => void
  close: () => void
} & Record<string, unknown>

export type CascaderComboProps = InputSelectComboProps & {
  list?: CascaderNode[]
  loadData?: LoadDataFn
  maskClosable?: boolean
  safeArea?: boolean
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  portal?: string | boolean | HTMLElement | null
  title?: ReactNode
  okNode?: ReactNode
  cancelNode?: ReactNode
  okVisible?: boolean
  cancelVisible?: boolean
  searchVisible?: boolean
  onSearch?: (keyword: string, ctx: { list: CascaderNode[] }) => void
  onBeforeOpen?: () => boolean | Promise<boolean>
}
