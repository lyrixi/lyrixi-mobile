import type { CSSProperties, ReactNode } from 'react'

import type { FormItemsProps } from './Form.components.Items.Form.types'
import type { EllipsisConfig } from './Form.ItemsContext.types'

export interface FormItemsLayoutProps extends FormItemsProps {
  virtual?: boolean
}

export interface FormVirtualFormRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface FormVirtualFormProps {
  style?: CSSProperties
  className?: string
  layout?: string
  labelSpan?: number
  labelEllipsis?: EllipsisConfig | null
  mainSpan?: number
  mainEllipsis?: EllipsisConfig | null
  children?: ReactNode
}
