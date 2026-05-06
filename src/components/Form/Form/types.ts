import type { ReactNode } from 'react'
import type { FormInstance, FormProps as RcFormProps } from 'rc-field-form'
import type { Store, ValidateMessages } from 'rc-field-form/lib/interface'

import type { EllipsisConfig } from '../components/ItemsContext/types'

export interface FormComponentProps {
  layout?: string
  labelSpan?: number
  labelEllipsis?: EllipsisConfig | null
  mainSpan?: number
  mainEllipsis?: EllipsisConfig | null
  virtual?: boolean
  style?: React.CSSProperties
  className?: string
  children?: ReactNode
  form?: FormInstance
  name?: string
  validateMessages?: ValidateMessages
  initialValues?: Store
  onFieldsChange?: RcFormProps['onFieldsChange']
  onValuesChange?: RcFormProps['onValuesChange']
}
