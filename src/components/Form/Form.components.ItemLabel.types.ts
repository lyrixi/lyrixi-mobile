import type { CSSProperties, ReactNode } from 'react'

import type { EllipsisConfig } from './Form.ItemsContext.types'

export interface FormLabelProps {
  ellipsis?: EllipsisConfig
  span?: number | string
  style?: CSSProperties
  className?: string
  required?: boolean
  help?: ReactNode
  children?: ReactNode
}
