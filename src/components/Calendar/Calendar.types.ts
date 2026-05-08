import type { CSSProperties, ReactNode } from 'react'

import type {
  CalendarCellDate,
  CalendarDraggableAxis,
  CalendarErrorObject,
  CalendarHeaderRenderParams,
  CalendarOnErrorHandler,
  CalendarSelectionMode,
  CalendarType,
  CalendarValue,
  CalendarWeekStart
} from './Calendar.common.types'

export interface CalendarRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  getCurrentType: () => CalendarType | null
  slideCollapse: () => Promise<void>
  slideExpand: () => Promise<void>
  slidePrevious: () => Promise<void>
  slideNext: () => Promise<void>
}

export interface CalendarProps {
  open?: boolean
  value?: CalendarValue
  selectionMode?: CalendarSelectionMode
  type?: CalendarType
  weekStart?: CalendarWeekStart
  style?: CSSProperties
  className?: string
  min?: Date
  max?: Date
  allowClear?: boolean
  draggable?: CalendarDraggableAxis[]
  titleRender?: (date: Date | null, ctx: { type: CalendarType | null }) => ReactNode
  headerRender?: (params: CalendarHeaderRenderParams) => ReactNode
  dateRender?: (
    date: CalendarCellDate,
    ctx: { isSelected: string[] | null; isDisabled: false | CalendarErrorObject; isCurrent?: boolean }
  ) => ReactNode
  onChange?: (
    value: CalendarValue,
    ctx: { currentDate: Date; action: 'select' | 'clear' }
  ) => void
  onPageChange?: (
    drawDate: Date | null,
    ctx: { action: string; type: CalendarType | null; pages: unknown }
  ) => void
  onError?: CalendarOnErrorHandler
}
