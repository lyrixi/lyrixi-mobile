import type { CSSProperties } from 'react'

import type { CheckboxProps } from './../Checkbox/types'

export interface CheckboxListItem {
  id: string | number
  name?: string
  [key: string]: unknown
}

export interface CheckboxGroupRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface CheckboxGroupProps {
  value?: unknown
  list?: CheckboxListItem[]
  /** Demos / Select-style API; group itself does not render a placeholder */
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
  allowClear?: boolean
  multiple?: boolean
  className?: string
  style?: CSSProperties
  iconRender?: CheckboxProps['iconRender']
  iconPosition?: CheckboxProps['iconPosition']
  onChange?: (value: CheckboxListItem | CheckboxListItem[] | null) => void
}
