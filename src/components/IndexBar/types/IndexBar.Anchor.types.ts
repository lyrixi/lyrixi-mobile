import type { CSSProperties, ReactNode } from 'react'

export interface IndexBarAnchorProps {
  // Value & Display Value
  name?: string
  children?: ReactNode
  // Style
  className?: string
  style?: CSSProperties
}
