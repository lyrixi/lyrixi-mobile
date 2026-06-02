import type { CSSProperties } from 'react'

export interface SkeletonTabsProps {
  // Value & Display Value
  length?: number
  animated?: boolean
  // Style
  className?: string
  style?: CSSProperties
  tabClassName?: string
  tabStyle?: CSSProperties
}
