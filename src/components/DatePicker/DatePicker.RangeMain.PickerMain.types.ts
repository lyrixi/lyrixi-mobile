import type { ReactNode } from 'react'

import type { DatePickerMultipleTab } from './DatePicker.common.types'

export type DatePickerRangeMainPickerTab = DatePickerMultipleTab & {
  id: string
  description: ReactNode
  value: Date | null
  disabled?: boolean
}
