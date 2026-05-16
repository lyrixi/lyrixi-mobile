import type { CSSProperties, ReactNode } from 'react'

export interface InputRateRef {
  element: HTMLDivElement | null
  inputElement: HTMLInputElement | null
  getElement: () => HTMLDivElement | null
  getInputElement: () => HTMLInputElement | null
}

export interface InputRateProps {
  id?: string
  name?: string
  value?: number
  readOnly?: boolean
  disabled?: boolean
  style?: CSSProperties
  className?: string
  iconRender?: (params: { className: string; style?: CSSProperties }) => ReactNode
  min?: number
  max?: number
  step?: number
  onChange?: (value: number) => void
}
