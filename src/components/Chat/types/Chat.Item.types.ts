import type { CSSProperties, ReactNode } from 'react'

import type { ChatPlacement } from './Chat.common.types'

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
  placement?: ChatPlacement
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
