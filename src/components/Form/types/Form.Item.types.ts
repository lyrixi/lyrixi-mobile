import type { ReactNode, CSSProperties } from 'react'
import type { Rule, NamePath } from 'rc-field-form/lib/interface'
import type { ShouldUpdate } from 'rc-field-form/lib/Field'

export interface FormItemProps {  /** Field properties */
  name?: NamePath
  valuePropName?: string
  shouldUpdate?: ShouldUpdate
  initialValue?: unknown
  validateTrigger?: string | string[]
  rules?: Rule[]
  // Value & Display Value
  id?: string
  // Status
  labelEllipsis?: { rows?: number; [key: string]: unknown }
  labelSpan?: number | string
  mainSpan?: number | string
  mainEllipsis?: { rows?: number; [key: string]: unknown }
  // Style
  style?: CSSProperties
  className?: string
  layout?: string
  height?: number
  maxLength?: number
  labelStyle?: CSSProperties
  labelClassName?: string
  mainStyle?: CSSProperties
  mainClassName?: string
  // Elements
  label?: ReactNode
  labelHelp?: ReactNode
  inputExtraRender?: (options: { errors: string[] }) => ReactNode
  extraRender?: (options: { errors: string[] }) => ReactNode
  extra?: (options: { value: unknown }) => ReactNode
  children?: ReactNode
}
