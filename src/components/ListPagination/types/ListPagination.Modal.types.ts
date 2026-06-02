import type { CSSProperties, ReactNode } from 'react'

import type { ModalProps, ModalRef } from '../../Modal/types'

import type { ListPaginationItem } from './ListPagination.common.types'
import type { ListPaginationMainProps, ListPaginationMainRef } from './ListPagination.Main.types'

export interface ListPaginationModalRef extends ModalRef, ListPaginationMainRef {}

export interface ListPaginationModalProps extends ListPaginationMainProps {
  open?: boolean
  maskClosable?: boolean
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  portal?: ModalProps['portal']
  title?: ReactNode
  cancelNode?: ReactNode
  cancelVisible?: boolean
  headerRender?: (options: {
    open?: boolean
    value?: ListPaginationItem | ListPaginationItem[] | null
    list?: ListPaginationItem[]
  }) => ReactNode
  onOk?: (
    value: ListPaginationItem | ListPaginationItem[] | null
  ) => Promise<unknown | false> | unknown | false
  onClose?: () => void
}
