import type { CSSProperties, MouseEvent, ReactNode } from 'react'

import type { RawItem } from './List.List.types'

export interface ListItemProps {
  _raw?: RawItem
  checked?: boolean
  disabled?: boolean
  checkable?: boolean
  style?: CSSProperties
  className?: string
  layout?: string
  imageUrl?: string
  imageRender?: (item: RawItem & { checked?: boolean }) => ReactNode
  avatarUrl?: string
  avatarRender?: (item: RawItem & { checked?: boolean }) => ReactNode
  title?: ReactNode
  description?: ReactNode
  note?: ReactNode
  content?: ReactNode
  actionRender?: (item: RawItem & { checked?: boolean }) => ReactNode
  checkboxVariant?: string
  checkboxPosition?: string
  onSelect?: (item: RawItem & { checked?: boolean }) => void
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
}
