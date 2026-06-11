import type { CSSProperties } from 'react'

import type {
  DatePickerTypeListItem,
  DatePickerTypeSwitcherType,
  DatePickerTypeSwitcherValue
} from './DatePicker.TypeSwitcher.types'

// 内库使用-start
import type { ToolBarComboProps } from '../../ToolBar/components/ToolBar.Combo.types'
// 内库使用-end

export interface DatePickerTypeSwitcherSwitcherProps {
  // Value & Display Value
  variant?: DatePickerTypeSwitcherType
  dropdownPortal?: HTMLElement
  dropdownLeft?: string | number
  dropdownColor?: ToolBarComboProps['color']
  dropdownVariant?: ToolBarComboProps['variant']
  dropdownSize?: ToolBarComboProps['size']
  dropdownSizeEqual?: ToolBarComboProps['sizeEqual']
  dropdownFontSize?: ToolBarComboProps['fontSize']
  dropdownRadius?: ToolBarComboProps['radius']
  dropdownClassName?: string
  dropdownStyle?: CSSProperties
  dropdownArrowSvg?: ToolBarComboProps['arrowSvg']
  types: DatePickerTypeListItem[]
  value: DatePickerTypeSwitcherValue
  // Style
  style?: CSSProperties
  className?: string
  // Events
  onChange: (item: DatePickerTypeListItem) => void
}
