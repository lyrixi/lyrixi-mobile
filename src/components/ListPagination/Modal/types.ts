import type { CSSProperties, ReactNode } from 'react'

import type { ModalRef } from './../../Modal/Modal/types'
import type { ListPaginationProps, ListPaginationRef } from './../Main/types'

type RawItem = Record<string, unknown>

export interface ModalPaginationRef extends ModalRef {
  reload?: ListPaginationRef['reload']
  getResult?: ListPaginationRef['getResult']
  updateCache?: ListPaginationRef['updateCache']
  clearCache?: ListPaginationRef['clearCache']
  getCache?: ListPaginationRef['getCache']
}

export interface ModalPaginationProps extends ListPaginationProps {
  open?: boolean
  maskClosable?: boolean
  safeArea?: boolean
  list?: RawItem[]
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  portal?: HTMLElement | string | boolean | null
  title?: ReactNode
  cancelNode?: ReactNode
  cancelVisible?: boolean
  headerRender?: (options: { open?: boolean; value?: unknown; list?: RawItem[] }) => ReactNode
  onOk?: (value: unknown) => Promise<unknown | false> | unknown | false
  onClose?: () => void
}
