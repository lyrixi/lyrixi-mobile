import type { CSSProperties, MouseEvent, ReactNode } from 'react'

import type { DatePickerPickerType } from './DatePicker.common.types'

/** TypeSwitcher/DateCombo/Combo 展示层 */
export type DatePickerTypeSwitcherDateComboComboProps = {
  value?: Date | null
  type?: DatePickerPickerType | string
  style?: CSSProperties
  className?: string
  children?: ReactNode
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
}

/** TypeSwitcher/DateCombo/index 外层字段 props */
export type DatePickerTypeSwitcherDateComboProps = {
  value?: Date | null
  type: string
  min?: Date | null
  max?: Date | null
  style?: CSSProperties
  className?: string
  onChange?: (value: Date) => void
}
