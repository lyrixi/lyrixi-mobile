import type { CSSProperties, ReactNode } from 'react'

export interface StampProps {
  shape?: string
  style?: CSSProperties
  className?: string
  color?: string
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
