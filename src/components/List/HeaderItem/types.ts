import type { CSSProperties, ReactNode } from 'react'

export interface HeaderItemProps {
  style?: CSSProperties
  className?: string
  anchor?: string
  title?: ReactNode
  description?: ReactNode
}
