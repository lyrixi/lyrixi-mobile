import type { CSSProperties, ReactNode } from 'react'

import type { EllipsisConfig } from '../../types/Form.ItemsContext.types'

export interface FormVirtualFormRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface FormVirtualFormProps {
  // Value & Display Value
  layout?: string
  labelSpan?: number
  labelEllipsis?: EllipsisConfig | null
  mainSpan?: number
  mainEllipsis?: EllipsisConfig | null
  // Style
  style?: CSSProperties
  className?: string
  // Elements
  children?: ReactNode
}
