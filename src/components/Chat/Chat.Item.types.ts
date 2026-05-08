import type { CSSProperties, ReactNode } from 'react'

export interface ChatItemRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface ChatItemProps {
  id?: string | number
  _raw?: Record<string, unknown>
  checked?: boolean
  checkable?: boolean
  className?: string
  position?: string
  style?: CSSProperties
  checkboxVariant?: string
  checkboxPosition?: string
  avatarUrl?: string
  avatarRender?: (ctx: { checked?: boolean; [key: string]: unknown }) => ReactNode
  avatarNode?: ReactNode
  authorRender?: (ctx: { checked?: boolean; [key: string]: unknown }) => ReactNode
  authorNode?: ReactNode
  content?: ReactNode
  onChange?: (checked: boolean) => void
}
