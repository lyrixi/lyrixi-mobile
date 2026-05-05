import type { CSSProperties, ReactNode } from 'react'

export interface SwitchProps {
  checked?: boolean
  readOnly?: boolean
  disabled?: boolean
  size?: string
  style?: CSSProperties
  className?: string
  on?: ReactNode
  off?: ReactNode
  onChange?: (checked: boolean) => void
}

export interface SwitchRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
