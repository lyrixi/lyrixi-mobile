import type { CSSProperties, ReactNode } from 'react'

export interface ChatItemRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface ChatItemProps {
  // Value & Display Value
  id?: string | number
  _raw?: Record<string, unknown>
  // Status
  checked?: boolean
  checkable?: boolean
  // Style
  className?: string
  placement?: string
  style?: CSSProperties
  checkboxVariant?: string
  checkboxPosition?: string
  // Elements
  avatarUrl?: string
  avatarRender?: (ctx: { checked?: boolean; [key: string]: unknown }) => ReactNode
  avatarNode?: ReactNode
  authorRender?: (ctx: { checked?: boolean; [key: string]: unknown }) => ReactNode
  authorNode?: ReactNode
  content?: ReactNode
  onChange?: (checked: boolean) => void
}
