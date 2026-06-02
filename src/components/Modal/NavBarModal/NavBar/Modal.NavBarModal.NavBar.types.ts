import type { CSSProperties, MouseEvent, ReactNode } from 'react'

export interface ModalNavBarModalNavBarRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface ModalNavBarModalNavBarProps {
  // Value & Display Value
  okPosition?: 'left' | 'right'
  cancelPosition?: 'left' | 'right'
  // Status
  okVisible?: boolean
  cancelVisible?: boolean
  // Style
  style?: CSSProperties
  className?: string
  // Elements
  title?: ReactNode
  okNode?: ReactNode
  cancelNode?: ReactNode
  // Events
  onOk?: (e: MouseEvent<HTMLDivElement>) => void
  onCancel?: (e: MouseEvent<HTMLDivElement>) => void
}
