import type { DatePickerRangesMap } from './DatePicker.common.types'

export interface DatePickerRangeSelectorButtonsProps {
  // Value & Display Value
  value?: (Date | null)[] | null
  rangeId?: string | null
  ranges?: DatePickerRangesMap
  // Status
  allowClear?: boolean
  // Events
  onChange?: (value: (Date | null)[] | null, meta?: { rangeId?: string | null }) => void
}
