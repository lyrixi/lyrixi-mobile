import type { CSSProperties, MouseEvent } from 'react'

/** TypeSwitcher/WeekCombo/Combo 展示层 */
export type DatePickerTypeSwitcherWeekComboComboProps = {
  value?: Date | null
  style?: CSSProperties
  className?: string
  children?: React.ReactNode
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
}

/** TypeSwitcher/WeekCombo/index 外层字段 props */
export type DatePickerTypeSwitcherWeekComboProps = {
  value?: Date | null
  min?: Date | null
  max?: Date | null
  style?: React.CSSProperties
  className?: string
  onChange?: (value: Date) => void
}
