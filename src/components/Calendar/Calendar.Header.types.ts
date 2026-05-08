import type { CSSProperties, ReactNode } from 'react'
import type React from 'react'

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
