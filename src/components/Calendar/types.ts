import type { CSSProperties, ReactNode } from 'react'
import type React from 'react'

/** A calendar grid cell: a Date plus optional flags from getMonthDates. */
export type CalendarCellDate = Date & { isCurrent?: boolean }

export type CalendarSelectionMode = 'single' | 'multiple' | 'range'
export type CalendarType = 'week' | 'month'
export type WeekStart = 'Monday' | 'Sunday'
export type DraggableAxis = 'horizontal' | 'vertical'

export type CalendarValue = Date | Date[] | null | undefined

export type CalendarErrorObject = {
  code: string
  message: ReactNode
  date: Date
}

export type OnErrorHandler = (error: CalendarErrorObject) => void | boolean

export interface HeaderRenderParams {
  drawDate: Date | null
  onPreviousMonth: (e?: React.MouseEvent) => void | Promise<void>
  onNextMonth: (e?: React.MouseEvent) => void | Promise<void>
  onPreviousYear: (e?: React.MouseEvent) => void
  onNextYear: (e?: React.MouseEvent) => void
  /** Formatted title for convenience (same as default header). */
  title?: string
}

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
  weekStart?: WeekStart
  style?: CSSProperties
  className?: string
  min?: Date
  max?: Date
  allowClear?: boolean
  draggable?: DraggableAxis[]
  titleRender?: (date: Date | null, ctx: { type: CalendarType | null }) => ReactNode
  headerRender?: (params: HeaderRenderParams) => ReactNode
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
  onError?: OnErrorHandler
}

export interface CalendarBodyRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface CalendarBodyProps {
  open?: boolean
  value?: CalendarValue
  selectionMode?: CalendarSelectionMode
  pages?: CalendarCellDate[][][] | null
  cellHeight: number
  min?: Date
  max?: Date
  draggable?: DraggableAxis[]
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

export interface CalendarHeaderRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface CalendarHeaderProps {
  className?: string
  style?: CSSProperties
  onPreviousMonth?: (e?: React.MouseEvent) => void
  onNextMonth?: (e?: React.MouseEvent) => void
  onPreviousYear?: (e?: React.MouseEvent) => void
  onNextYear?: (e?: React.MouseEvent) => void
  children?: ReactNode
}
