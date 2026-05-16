import type { CSSProperties, MouseEvent, ReactNode } from 'react'

import type { DatePickerPickerType } from './DatePicker.common.types'

/** TypeTabs/DateCombo/Combo 展示层 */
export type DatePickerPickerTypesDateComboComboProps = {
  value?: Date | null
  type?: DatePickerPickerType | string
  style?: CSSProperties
  className?: string
  children?: ReactNode
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
}

/** TypeTabs/DateCombo/index 外层字段 props */
export type DatePickerPickerTypesDateComboProps = {
  value?: Date | null
  type: string
  min?: Date | null
  max?: Date | null
  style?: CSSProperties
  className?: string
  onChange?: (value: Date) => void
}
