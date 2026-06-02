import type { CSSProperties, ReactNode } from 'react'

import type { EllipsisConfig } from './Form.ItemsContext.types'

export interface FormItemLabelProps {
  // Value & Display Value
  ellipsis?: EllipsisConfig
  span?: number | string
    required?: boolean
  help?: ReactNode
  // Style
  style?: CSSProperties
  className?: string
  // Elements
  children?: ReactNode
}
