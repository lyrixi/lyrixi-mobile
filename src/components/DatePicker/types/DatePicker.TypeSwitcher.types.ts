import type { CSSProperties, ReactNode } from 'react'

// 内库使用-start
import type { ToolBarComboProps } from '../../ToolBar/components/ToolBar.Combo.types'
// 内库使用-end

export interface DatePickerTypeListItem {
  type: string
  id?: string
  name?: ReactNode
  value?: Date
  [key: string]: unknown
}

/** TypeSwitcher 根组件：当前选中项带具体日期 */
export type DatePickerTypeSwitcherValue = DatePickerTypeListItem & { value?: Date }

export type DatePickerTypeSwitcherRef = {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

/** TypeSwitcher 切换方式 */
export type DatePickerTypeSwitcherType = 'tabbar' | 'dropdown'

export interface DatePickerTypeSwitcherProps {
  value?: DatePickerTypeSwitcherValue
  types?: DatePickerTypeListItem[]
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
  style?: CSSProperties
  className?: string
  pickerComboStyle?: CSSProperties
  pickerComboClassName?: string
  tabbarStyle?: CSSProperties
  tabbarClassName?: string
  min?: Date | null
  max?: Date | null
  pickerComboRender?: (
    value: DatePickerTypeSwitcherValue,
    ctx: { onChange: (d: Date) => void }
  ) => ReactNode
  onChange?: (value: DatePickerTypeSwitcherValue) => void
}
