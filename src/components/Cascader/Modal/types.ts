import type { CSSProperties, ReactNode } from 'react'

import type { CascaderNode, LoadDataFn } from './../types'

export interface CascaderModalProps {
  value?: CascaderNode[] | null
  list?: CascaderNode[] | null
  loadData?: LoadDataFn
  open?: boolean
  maskClosable?: boolean
  allowClear?: boolean
  safeArea?: boolean
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  portal?: string | boolean | HTMLElement | null
  searchVisible?: boolean
  title?: ReactNode
  okNode?: ReactNode
  cancelNode?: ReactNode
  okVisible?: boolean
  cancelVisible?: boolean
  onClose?: () => void
  onOk?: (value: CascaderNode[] | null | undefined) => boolean | Promise<unknown> | void
  onSearch?: (keyword: string, ctx: { list: CascaderNode[] }) => void
  onChange?: (value: CascaderNode[], meta?: unknown) => void
}
