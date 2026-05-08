import type { CSSProperties, ReactNode } from 'react'

import type { EllipsisConfig } from './Form.ItemsContext.types'

export interface FormItemsRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface FormItemsProps {
  style?: CSSProperties
  className?: string
  layout?: string
  labelSpan?: number
  labelEllipsis?: EllipsisConfig | null
  mainSpan?: number
  mainEllipsis?: EllipsisConfig | null
  children?: ReactNode
}
