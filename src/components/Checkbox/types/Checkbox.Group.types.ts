import type { CSSProperties } from 'react'

import type { CheckboxProps } from './Checkbox.types'

export interface CheckboxItem {
  id: string | number
  name?: string
  [key: string]: unknown
}

export interface CheckboxGroupRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface CheckboxGroupProps {
  // Value & Display Value
  value?: unknown
  list?: CheckboxItem[]
  placeholder?: string
  // Status
  disabled?: boolean
  readOnly?: boolean
  allowClear?: boolean
  multiple?: boolean
  // Style
  className?: string
  style?: CSSProperties
  // Elements
  iconRender?: CheckboxProps['iconRender']
  iconPosition?: CheckboxProps['iconPosition']
  // Events
  onChange?: (value: CheckboxItem | CheckboxItem[] | null) => void
}
