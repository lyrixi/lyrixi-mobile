import type { CSSProperties, ReactNode } from 'react'

export interface ToolBarProps {
  // Value & Display Value
  variant?: string
  // Style
  className?: string
  style?: CSSProperties
  // Elements
  children?: ReactNode
}
