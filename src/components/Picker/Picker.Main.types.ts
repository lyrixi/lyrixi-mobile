import type { CSSProperties, ReactNode } from 'react'

export type PickerColumnItem = {
  id?: string | number
  name?: ReactNode
  [key: string]: unknown
}

export interface PickerSlotsProps {
  lists?: PickerColumnItem[][]
  cellHeight?: number
  onDragEnd?: (payload: { slotIndex: string | number; rowIndex: number }) => void
}

export interface PickerMainProps {
  /** 由 Picker.Modal 传入，主体内仅用于与弹层打开同步（保留 API） */
  open?: boolean
  allowClear?: boolean
  value?: PickerColumnItem[] | null
  list?: PickerColumnItem[] | PickerColumnItem[][]
  style?: CSSProperties
  className?: string
  onChange?: (value: PickerColumnItem[]) => void
}

export interface PickerMainRef {
  mainElement: HTMLDivElement | null
  getMainElement: () => HTMLDivElement | null
  getValue: () => PickerColumnItem[] | null
  update: () => void
}
