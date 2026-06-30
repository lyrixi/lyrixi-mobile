import type { CSSProperties, ReactNode } from 'react'

export interface NavBarProps {
  // Style
  style?: CSSProperties
  className?: string
  // Elements
  children?: ReactNode
  leftRender?: () => ReactNode
  rightRender?: () => ReactNode
}
