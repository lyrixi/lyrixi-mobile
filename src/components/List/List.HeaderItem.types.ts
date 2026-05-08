import type { CSSProperties, ReactNode } from 'react'

export interface ListHeaderItemProps {
  style?: CSSProperties
  className?: string
  anchor?: string
  title?: ReactNode
  description?: ReactNode
}
