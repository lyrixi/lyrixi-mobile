import type { CSSProperties, MouseEvent, ReactNode } from 'react'

import type { ListItem } from './List.types'

export interface ListItemProps {
  // Value & Display Value
  _raw?: ListItem
  checked?: boolean
  // Status
  disabled?: boolean
  checkable?: boolean
  // Style
  style?: CSSProperties
  className?: string
  layout?: string
  // Elements
  imageUrl?: string
  imageRender?: (item: ListItem & { checked?: boolean }) => ReactNode
  avatarUrl?: string
  avatarRender?: (item: ListItem & { checked?: boolean }) => ReactNode
  title?: ReactNode
  description?: ReactNode
  note?: ReactNode
  content?: ReactNode
  actionRender?: (item: ListItem & { checked?: boolean }) => ReactNode
  checkboxVariant?: string
  checkboxPosition?: string
  // Events
  onSelect?: (item: ListItem & { checked?: boolean }) => void
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
}
