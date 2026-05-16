import type { CSSProperties, ReactNode } from 'react'

export interface NoticeBarRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  close: () => void
  open: () => void
}

export interface NoticeBarProps {
  title?: ReactNode
  description?: ReactNode
  type?: 'success' | 'info' | 'warning' | 'error'
  closable?: boolean
  style?: CSSProperties
  className?: string
  iconStyle?: CSSProperties
  titleStyle?: CSSProperties
  descriptionStyle?: CSSProperties
  iconRender?: () => ReactNode
  iconClassName?: string
  iconColor?: string
  iconBackgroundColor?: string
  iconSize?: string | number
}
