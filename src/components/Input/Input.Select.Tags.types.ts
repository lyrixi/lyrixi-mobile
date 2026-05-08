import type { CSSProperties, MouseEvent, ReactNode } from 'react'

import type { InputNodeProps } from './Input.Node.types'

export interface TagItem {
  id?: string | number
  name?: string
  className?: string
  style?: CSSProperties
  readOnly?: boolean
  disabled?: boolean
  allowClear?: boolean
  [key: string]: unknown
}

export interface TagsProps {
  separator?: string
  leftIconNode?: ReactNode
  rightIconNode?: ReactNode
  clearRender?: InputNodeProps['clearRender']
  className?: string
  style?: CSSProperties
  placeholder?: string
  readOnly?: boolean
  disabled?: boolean
  allowClear?: boolean
  value?: TagItem | TagItem[]
  onAdd?: (e: MouseEvent<HTMLDivElement>) => void
  onEdit?: (item: TagItem) => void
  onChange?: (value: TagItem[], meta?: { action: string }) => void
}

export interface TagProps {
  style?: CSSProperties
  className?: string
  name?: string
  readOnly?: boolean
  disabled?: boolean
  allowClear?: boolean
  onEdit?: () => void
  onDelete?: () => void
}
