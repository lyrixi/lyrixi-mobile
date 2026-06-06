import type { CSSProperties, ReactNode } from 'react'

export type SwitchSize = 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'

export interface SwitchProps {
  // Value & Display Value
  checked?: boolean
  // Status
  readOnly?: boolean
  disabled?: boolean
  // Style
  size?: SwitchSize
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
