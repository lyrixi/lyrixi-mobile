import type { ReactNode, CSSProperties } from 'react'
import type { Rule, NamePath } from 'rc-field-form/lib/interface'
import type { ShouldUpdate } from 'rc-field-form/lib/Field'

export interface FormItemProps {
  name?: NamePath
  valuePropName?: string
  shouldUpdate?: ShouldUpdate
  initialValue?: unknown
  validateTrigger?: string | string[]
  rules?: Rule[]

  id?: string

  labelEllipsis?: { rows?: number; [key: string]: unknown }
  labelSpan?: number | string
  mainSpan?: number | string
  mainEllipsis?: { rows?: number; [key: string]: unknown }

  style?: CSSProperties
  className?: string
  layout?: string
  height?: number
  maxLength?: number
  labelStyle?: CSSProperties
  labelClassName?: string
  mainStyle?: CSSProperties
  mainClassName?: string

  label?: ReactNode
  labelHelp?: ReactNode
  inputExtraRender?: (opts: { errors: string[] }) => ReactNode
  extraRender?: (opts: { errors: string[] }) => ReactNode
  extra?: (opts: { value: unknown }) => ReactNode
  children?: ReactNode
}
