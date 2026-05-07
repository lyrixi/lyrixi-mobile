import type { CSSProperties, ReactNode } from 'react'

import type { EllipsisConfig } from '../../types'

export interface FormMainProps {
  ellipsis?: EllipsisConfig
  span?: number | string
  style?: CSSProperties
  className?: string
  errorMessage?: string
  inputExtraNode?: ReactNode
  extraNode?: ReactNode
  children?: ReactNode
}
