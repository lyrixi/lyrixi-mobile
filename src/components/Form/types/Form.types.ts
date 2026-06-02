import type { ReactNode } from 'react'
import type { FormInstance, FormProps as RcFormProps } from 'rc-field-form'
import type { Store, ValidateMessages } from 'rc-field-form/lib/interface'

import type { EllipsisConfig } from './Form.ItemsContext.types'

export interface FormProps {
  // Value & Display Value
  layout?: string
  labelSpan?: number
  labelEllipsis?: EllipsisConfig | null
  mainSpan?: number
  mainEllipsis?: EllipsisConfig | null
  virtual?: boolean
  form?: FormInstance
  name?: string
  validateMessages?: ValidateMessages
  initialValues?: Store
  // Style
  style?: React.CSSProperties
  className?: string
  // Elements
  children?: ReactNode
  // Events
  onFieldsChange?: RcFormProps['onFieldsChange']
  onValuesChange?: RcFormProps['onValuesChange']
}
