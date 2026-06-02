import type { CSSProperties, ReactNode } from 'react'

import type { EllipsisConfig } from './Form.ItemsContext.types'

export interface FormItemMainProps {
  // Value & Display Value
  ellipsis?: EllipsisConfig
  span?: number | string
  errorMessage?: string
  // Style
  style?: CSSProperties
  className?: string
  // Elements
  inputExtraNode?: ReactNode
  extraNode?: ReactNode
  children?: ReactNode
}
