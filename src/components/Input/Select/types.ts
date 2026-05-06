import type { CSSProperties, MouseEvent, ReactNode } from 'react'

import type { InputTextProps } from './../Text/types'

export interface ComboRef {
  displayValue: string
  getDisplayValue: (newValue?: unknown) => string
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}

export interface ComboProps {
  value?: unknown
  placeholder?: string
  autoSize?: boolean
  mode?: string
  readOnly?: boolean
  disabled?: boolean
  allowClear?: boolean
  style?: CSSProperties
  className?: string
  formatter?: (value: unknown, options?: { separator?: string }) => string
  separator?: string
  leftIconNode?: ReactNode
  rightIconNode?: ReactNode
  clearRender?: InputTextProps['clearRender']
  onChange?: (value: unknown, meta?: { action: string }) => void
  onClick?: (e: MouseEvent) => void
}
