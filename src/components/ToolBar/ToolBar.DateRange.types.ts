import type { CSSProperties, ReactNode } from 'react'

import type { DatePickerRangesMap } from './../DatePicker/types'
import type { ToolBarDropdownProps } from './ToolBar.Dropdown.types'

export interface ToolBarDateRangeBarProps {
  value?: (Date | null)[] | null
  rangeId?: string | null
  type?: string
  placeholder?: string
  allowClear?: boolean
  direction?: string
  block?: boolean
  color?: string
  borderColor?: string
  backgroundColor?: string
  border?: string
  size?: string | number | readonly string[]
  sizeEqual?: boolean
  fontSize?: string | number
  radius?: string | number
  style?: CSSProperties
  className?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  modalStyle?: CSSProperties
  modalClassName?: string
  comboRender?: ToolBarDropdownProps['comboRender']
  children?: ReactNode
  arrowRender?: ToolBarDropdownProps['arrowRender']
  portal?: HTMLElement
  min?: Date | null
  max?: Date | null
  ranges?: DatePickerRangesMap
  onOk?: (
    value: (Date | null)[] | null | undefined,
    meta: { rangeId: string | null | undefined }
  ) => void | boolean | (Date | null)[] | Promise<void | boolean | (Date | null)[]>
  onChange?: (value: (Date | null)[] | null, meta: { rangeId: string | null | undefined }) => void
}
