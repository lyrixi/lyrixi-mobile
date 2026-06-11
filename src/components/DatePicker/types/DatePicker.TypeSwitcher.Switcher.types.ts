import type { CSSProperties } from 'react'

import type {
  DatePickerTypeListItem,
  DatePickerTypeSwitcherType,
  DatePickerTypeSwitcherValue
} from './DatePicker.TypeSwitcher.types'

export interface DatePickerTypeSwitcherSwitcherProps {
  // Value & Display Value
  variant?: DatePickerTypeSwitcherType
  dropdownPortal?: HTMLElement
  dropdownLeft?: string | number
  types: DatePickerTypeListItem[]
  value: DatePickerTypeSwitcherValue
  // Style
  style?: CSSProperties
  className?: string
  // Events
  onChange: (item: DatePickerTypeListItem) => void
}
