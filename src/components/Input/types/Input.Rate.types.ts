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
  // Value & Display Value
  value?: number
  // Status
  readOnly?: boolean
  disabled?: boolean
  // Style
  size?: 's' | 'm' | 'l'
  style?: CSSProperties
  className?: string
  // Elements
  iconRender?: (params: { className: string; style?: CSSProperties }) => ReactNode
    min?: number
  max?: number
  step?: number
  // Events
  onChange?: (value: number) => void
}
