import type { CSSProperties, MouseEvent, ReactNode } from 'react'

import type { ModalProps, ModalRef } from '../../Modal/types'

import type { PickerItem } from './Picker.common.types'
import type { PickerMainRef } from './Picker.Main.types'

export interface PickerModalRef extends ModalRef, PickerMainRef {}

export interface PickerModalProps {
  // Value & Display Value
  value?: PickerItem[] | null
  list?: PickerItem[] | PickerItem[][]
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
  onClose?: (e?: MouseEvent<HTMLDivElement>) => void
  onOk?: (value: PickerItem[]) => boolean | void | Date | Promise<boolean | void | Date>
  onChange?: (value: PickerItem[]) => void
}
