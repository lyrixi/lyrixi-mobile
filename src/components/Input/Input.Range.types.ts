import type { CSSProperties } from 'react'

export interface InputRangeRef {
  element: HTMLDivElement | null
  inputElement: HTMLInputElement | null
  getElement: () => HTMLDivElement | null
  getInputElement: () => HTMLInputElement | null
}

export interface InputRangeProps {
  id?: string
  name?: string
  value?: number
  readOnly?: boolean
  disabled?: boolean
  className?: string
  style?: CSSProperties
  min?: number
  max?: number
  step?: number
  onChange?: (value: number) => void
}
