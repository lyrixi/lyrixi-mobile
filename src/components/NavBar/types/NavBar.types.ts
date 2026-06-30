import type { CSSProperties, ReactNode } from 'react'

export interface NavBarProps {
  // Style
  style?: CSSProperties
  className?: string
  // Elements
  title?: ReactNode
  children?: ReactNode
  leftRender?: () => ReactNode
  rightRender?: () => ReactNode
}
