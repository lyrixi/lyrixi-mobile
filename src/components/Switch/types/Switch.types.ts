import type { CSSProperties, ReactNode } from 'react'

export interface SwitchProps {
  // Value & Display Value
  checked?: boolean
  // Status
  readOnly?: boolean
  disabled?: boolean
  // Style
  size?: string
  style?: CSSProperties
  className?: string
  // Elements
  on?: ReactNode
  off?: ReactNode
  // Events
  onChange?: (checked: boolean) => void
}

export interface SwitchRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
