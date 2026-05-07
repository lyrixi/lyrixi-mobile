import type { CSSProperties } from 'react'

import type { PageLayout } from './../../Page/types'

export interface SkeletonEditProps {
  listLength?: number
  itemLength?: number
  animated?: boolean
  safeArea?: boolean
  full?: boolean
  className?: string
  style?: CSSProperties
  divider?: string
  layout?: PageLayout
  animation?: string
}
