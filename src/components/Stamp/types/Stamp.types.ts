import type { CSSProperties, ReactNode } from 'react'

export interface StampProps {
  // Value & Display Value
  shape?: string
  color?: string
  // Style
  style?: CSSProperties
  className?: string
  // Elements
  children?: ReactNode
}

export interface StampRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface StampStyleInput {
  color?: string
  style?: CSSProperties
}
