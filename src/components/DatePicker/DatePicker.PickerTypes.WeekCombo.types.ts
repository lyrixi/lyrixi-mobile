import type { CSSProperties, MouseEvent } from 'react'

/** PickerTypes/WeekCombo/Combo 展示层 */
export type DatePickerPickerTypesWeekComboComboProps = {
  value?: Date | null
  style?: CSSProperties
  className?: string
  children?: React.ReactNode
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
}

/** PickerTypes/WeekCombo/index 外层字段 props */
export type DatePickerPickerTypesWeekComboProps = {
  value?: Date | null
  min?: Date | null
  max?: Date | null
  style?: React.CSSProperties
  className?: string
  onChange?: (value: Date) => void
}
