import type { CSSProperties, ReactNode } from 'react'

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
  switcherType?: DatePickerTypeSwitcherType
  dropdownPortal?: HTMLElement
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
