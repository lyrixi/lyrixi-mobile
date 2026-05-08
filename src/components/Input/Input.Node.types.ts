import type { CSSProperties, MouseEvent, ReactNode, TouchEvent } from 'react'

export interface InputNodeRef {
  element: HTMLDivElement | null
  inputElement: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  getInputElement: () => HTMLDivElement | null
  correctValue: (val: string | number) => string | number
  focus: () => void
  blur: () => void
}

export interface InputNodeProps {
  id?: string
  type?: string
  value?: string
  placeholder?: string
  formatter?: (value: string) => ReactNode
  readOnly?: boolean
  disabled?: boolean
  allowClear?: boolean
  cursor?: boolean | null
  style?: CSSProperties
  className?: string
  leftIconNode?: ReactNode
  rightIconNode?: ReactNode
  clearRender?: (params: {
    clearable: boolean
    allowClear?: boolean
    onClear: (e?: MouseEvent | TouchEvent) => void
    onTouchStart?: (e?: TouchEvent) => void
  }) => ReactNode | undefined
  precision?: number
  trim?: boolean
  min?: number
  max?: number
  maxLength?: number
  onChange?: (value: string, meta?: { action: string }) => void
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  onFocus?: (e: { target: HTMLDivElement | null; currentTarget: HTMLDivElement | null }) => void
  onBlur?: (e: { target: HTMLDivElement | null; currentTarget: HTMLDivElement | null }) => void
}
