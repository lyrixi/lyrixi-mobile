import type { CSSProperties, ReactNode } from 'react'
import type { ModalRef } from '../../Modal/types'

import type { DatePickerPickerType } from './DatePicker.common.types'
import type { DatePickerComboProps } from './DatePicker.Combo.types'

/** 单日期弹层（NavBarModal + Main） */
export interface DatePickerModalProps {
  // Value & Display Value
  value?: Date | null
  type?: DatePickerPickerType
  min?: Date | null
  max?: Date | null
  hourStep?: number
  minuteStep?: number
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
  portal?: DatePickerComboProps['portal']
  titleRender?: DatePickerComboProps['titleRender']
  okNode?: ReactNode
  cancelNode?: ReactNode
  okVisible?: boolean
  cancelVisible?: boolean
  // Events
  onClose?: () => void
  onChange?: (value: Date | null) => void
  onOk?: DatePickerComboProps['onOk']
}

export type DatePickerModalRef = ModalRef & Record<string, unknown>
