import type { CSSProperties, ReactNode } from 'react'

import type {
  DatePickerTypeListItem,
  DatePickerTypesValue
} from './../datePickerTypes'

export interface DatePickerTypesProps {
  value?: DatePickerTypesValue
  list?: DatePickerTypeListItem[]
  style?: CSSProperties
  className?: string
  pickerComboStyle?: CSSProperties
  pickerComboClassName?: string
  tabbarStyle?: CSSProperties
  tabbarClassName?: string
  min?: Date | null
  max?: Date | null
  pickerComboRender?: (
    value: DatePickerTypesValue,
    ctx: { onChange: (d: Date) => void }
  ) => ReactNode
  onChange?: (value: DatePickerTypesValue) => void
}
