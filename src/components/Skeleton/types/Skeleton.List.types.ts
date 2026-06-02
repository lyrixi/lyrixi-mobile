import type { CSSProperties } from 'react'

import type { PageLayout } from '../../Page/types'

export interface SkeletonListProps {
  // Value & Display Value
  listLength?: number
  itemLength?: number
  // Status
  animated?: boolean
  safeArea?: boolean
  full?: boolean
  // Style
  className?: string
  style?: CSSProperties
  divider?: string
  layout?: PageLayout
  animation?: string
}
