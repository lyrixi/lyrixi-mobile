import type { CSSProperties, ReactNode } from 'react'

export interface CheckboxRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface CheckboxIconProps {
  checked?: boolean
  variant?: string
}

export interface CheckboxProps {
  checked?: boolean
  readOnly?: boolean
  disabled?: boolean
  variant?: string
  style?: CSSProperties
  className?: string
  children?: ReactNode
  iconRender?: (props: { checked?: boolean }) => ReactNode
  iconPosition?: 'left' | 'right'
  onChange?: (checked: boolean) => void
}
