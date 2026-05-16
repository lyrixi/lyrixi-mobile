import type React from 'react'

import type {
  CalendarCellDate,
  CalendarDraggableAxis,
  CalendarSelectionMode,
  CalendarValue
} from './Calendar.common.types'
import type { CalendarProps } from './Calendar.types'

export interface CalendarBodyRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export type CalendarBodyTouchDirection = 0 | 'horizontal' | 'vertical' | null

export interface CalendarBodyProps {
  open?: boolean
  value?: CalendarValue
  selectionMode?: CalendarSelectionMode
  pages?: CalendarCellDate[][][] | null
  cellHeight: number
  min?: Date
  max?: Date
  draggable?: CalendarDraggableAxis[]
  allowClear?: boolean
  dateRender?: CalendarProps['dateRender']
  onChange?: (
    date: CalendarCellDate,
    ctx: { action: 'select' | 'clear' }
  ) => void
  onSlideX?: (action: 'previous' | 'next' | '') => void | Promise<void>
  onSlideY?: (action: 'expand' | 'collapse' | '') => void | Promise<void>
  onToggle?: (e: React.MouseEvent) => void
}
