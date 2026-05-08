import type { CSSProperties, ReactNode } from 'react'

export interface RateRef {
  element: HTMLDivElement | null
  inputElement: HTMLInputElement | null
  getElement: () => HTMLDivElement | null
  getInputElement: () => HTMLInputElement | null
}

export interface RateIconParams {
  className: string
  style?: CSSProperties
}

export interface RateProps {
  id?: string
  name?: string
  value?: number
  readOnly?: boolean
  disabled?: boolean
  style?: CSSProperties
  className?: string
  iconRender?: (params: RateIconParams) => ReactNode
  min?: number
  max?: number
  step?: number
  onChange?: (value: number) => void
}
