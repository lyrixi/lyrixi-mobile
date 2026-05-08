import type { CSSProperties, ReactNode } from 'react'

export interface SelectorItemProps {
  children?: ReactNode
  disabled?: boolean
  checked?: boolean
  className?: string
  style?: CSSProperties
  onChange?: (checked: boolean) => void
}

export type SelectorItemRef = {
  element: HTMLDivElement | null
  inputElement: HTMLInputElement | null
  getElement: () => HTMLDivElement | null
  getInputElement: () => HTMLInputElement | null
}
