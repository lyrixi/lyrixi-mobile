import type { CSSProperties } from 'react'

import type { DatePickerRangeComboProps } from './DatePicker.common.types'

export type DatePickerRangeSelectorCustomDatesProps = Pick<
  DatePickerRangeComboProps,
  | 'value'
  | 'type'
  | 'min'
  | 'max'
  | 'hourStep'
  | 'minuteStep'
  | 'startDisabled'
  | 'endDisabled'
  | 'allowClear'
  | 'portal'
  | 'onChange'
  | 'onOk'
> & {
  maskClassName?: string
  maskStyle?: CSSProperties
  modalClassName?: string
  modalStyle?: CSSProperties
}

export type DatePickerRangeSelectorDatesInputTextProps = {
  value?: (Date | null)[] | null
  displayValue?: string
  type?: string
  separator?: string
  onChange?: (value: (Date | null)[] | null) => void
}
