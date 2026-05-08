import type { CSSProperties, ReactNode } from 'react'

import type { FormItemsProps } from './Form.components.Items.Form.types'
import type { EllipsisConfig } from './Form.ItemsContext.types'

export interface ItemsProps extends FormItemsProps {
  virtual?: boolean
}

export interface VirtualFormRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface VirtualFormProps {
  style?: CSSProperties
  className?: string
  layout?: string
  labelSpan?: number
  labelEllipsis?: EllipsisConfig | null
  mainSpan?: number
  mainEllipsis?: EllipsisConfig | null
  children?: ReactNode
}
