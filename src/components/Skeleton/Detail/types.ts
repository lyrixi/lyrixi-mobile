import type { CSSProperties } from 'react'

import type { PageLayout } from './../../Page'

export interface SkeletonDetailProps {
  listLength?: number
  paragraphLength?: number
  animated?: boolean
  safeArea?: boolean
  full?: boolean
  className?: string
  style?: CSSProperties
  divider?: string
  layout?: PageLayout
  animation?: string
}
