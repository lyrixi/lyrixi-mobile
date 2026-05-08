import type { CSSProperties, MouseEvent, ReactNode } from 'react'

import type { InputNodeProps, InputNodeRef } from './Input.Node.types'

export interface InputNumberKeyboardRef extends InputNodeRef {
  focus: () => void
  blur: () => void
}

export interface InputNumberKeyboardProps {
  ok?: ReactNode | null
  id?: string
  value?: string
  placeholder?: string
  formatter?: InputNodeProps['formatter']
  readOnly?: boolean
  disabled?: boolean
  allowClear?: boolean
  style?: CSSProperties
  className?: string
  leftIconNode?: ReactNode
  rightIconNode?: ReactNode
  clearRender?: InputNodeProps['clearRender']
  precision?: number
  trim?: boolean
  min?: number
  max?: number
  maxLength?: number
  onChange?: (value: string) => void
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  onFocus?: InputNodeProps['onFocus']
  onBlur?: InputNodeProps['onBlur']
}
