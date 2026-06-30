import type { CSSProperties, ReactNode } from 'react'

import type { ModalProps, ModalRef } from '../../Modal/types'

import type { SelectItem, SelectListProps } from './Select.common.types'
import type { SelectMainRef } from './Select.Main.types'

export interface SelectModalRef extends ModalRef, SelectMainRef {}

export interface SelectModalProps extends SelectListProps {
  open?: boolean
  maskClosable?: boolean
  safeArea?: boolean
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  portal?: ModalProps['portal']
  title?: ReactNode
  cancelNode?: ReactNode
  cancelVisible?: boolean
  headerRender?: (options: {
    open: boolean
    value?: SelectItem | SelectItem[] | null
    list?: SelectItem[]
  }) => ReactNode
  onOk?: (value: SelectItem | SelectItem[] | null) => unknown
  onClose?: () => void
}
