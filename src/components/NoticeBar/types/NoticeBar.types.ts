import type { CSSProperties, ReactNode } from 'react'

export interface NoticeBarRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  close: () => void
  open: () => void
}

export interface NoticeBarProps {
  // Value & Display Value
  title?: ReactNode
  description?: ReactNode
  // Status
  type?: 'success' | 'info' | 'warning' | 'error'
  closable?: boolean
  // Style
  style?: CSSProperties
  className?: string
  iconStyle?: CSSProperties
  titleStyle?: CSSProperties
  descriptionStyle?: CSSProperties
  // Elements
  iconRender?: () => ReactNode
  iconClassName?: string
  iconColor?: string
  iconBackgroundColor?: string
  iconSize?: string | number
}
