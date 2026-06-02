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
  // Modal: Status
  open?: boolean
  // Value & Display Value
  value?: CalendarValue
  selectionMode?: CalendarSelectionMode
  type?: CalendarType
  weekStart?: CalendarWeekStart
  // Style
  style?: CSSProperties
  className?: string
  // Status
  min?: Date
  max?: Date
  allowClear?: boolean
  draggable?: CalendarDraggableAxis[]
  // Elements
  titleRender?: (date: Date | null, ctx: { type: CalendarType | null }) => ReactNode
  headerRender?: (params: CalendarHeaderRenderParams) => ReactNode
  dateRender?: (
    date: CalendarCellDate,
    ctx: { isSelected: string[] | null; isDisabled: false | CalendarErrorObject; isCurrent?: boolean }
  ) => ReactNode
  // Events
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
