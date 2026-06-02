import type { MouseEvent, ReactNode } from 'react'

export interface KeyboardNumberButtonQuickProps {
  // Style
  className?: string
  // Elements
  children?: ReactNode
  // Events
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
}
