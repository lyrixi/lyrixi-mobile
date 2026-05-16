import type { DatePickerRangesMap } from './DatePicker.common.types'

export interface DatePickerRangeSelectorButtonsProps {
  value?: (Date | null)[] | null
  onChange?: (value: (Date | null)[] | null, meta?: { rangeId?: string | null }) => void
  rangeId?: string | null
  ranges?: DatePickerRangesMap
  allowClear?: boolean
}
