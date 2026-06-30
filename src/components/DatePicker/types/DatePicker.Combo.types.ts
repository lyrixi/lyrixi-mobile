import type { CSSProperties, ReactNode, RefObject } from 'react'
import type { InputSelectRef, InputSelectProps } from '../../Input/types'
import type { ModalProps, ModalRef } from '../../Modal/types'

import type { DatePickerPickerType } from './DatePicker.common.types'

/** 单日期 DatePicker 的 Combo + Modal 组合 props */
export interface DatePickerComboProps
  extends Omit<InputSelectProps, 'min' | 'max' | 'value' | 'onChange' | 'formatter'> {
  value?: Date | null
  formatter?: (value: Date | null | undefined, options?: { separator?: string }) => string
  onChange?: (value: Date | null | undefined, meta?: unknown) => void
  type?: DatePickerPickerType
  min?: Date | null
  max?: Date | null
  hourStep?: number
  minuteStep?: number
  maskClosable?: boolean
  safeArea?: boolean
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  portal?: ModalProps['portal']
  titleRender?: (
    value: Date | null | undefined,
    options: { type?: DatePickerPickerType }
  ) => ReactNode
  okNode?: ReactNode
  cancelNode?: ReactNode
  okVisible?: boolean
  cancelVisible?: boolean
  onBeforeOpen?: () => boolean | void | Promise<boolean | void>
  onOk?: (value: Date | null | undefined) => boolean | Date | void | Promise<boolean | Date | void>
  /** 自定义触发区域 */
  comboRender?: (options: {
    comboRef: RefObject<unknown>
    open: boolean
    onClick: () => void
  }) => ReactNode
  children?: ReactNode
}

export type DatePickerComboRef = InputSelectRef &
  ModalRef & {
    close: () => void
    open: () => void
  }
