import type { CSSProperties } from 'react'

import type { DatePickerPickerType } from './DatePicker.common.types'

export interface DatePickerMainProps {
  // Value & Display Value
  value?: Date | null
  type?: DatePickerPickerType
  min?: Date | null
  max?: Date | null
  hourStep?: number
  minuteStep?: number
  weekStart?: string
  // Status
  open?: boolean
  allowClear?: boolean
  // Style
  style?: CSSProperties
  className?: string
  // Events
  onChange?: (value: Date | null) => void
}
