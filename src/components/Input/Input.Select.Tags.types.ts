import type { CSSProperties, MouseEvent, ReactNode } from 'react'

import type { InputNodeProps } from './Input.Node.types'

export interface InputSelectTagItem {
  id?: string | number
  name?: string
  className?: string
  style?: CSSProperties
  readOnly?: boolean
  disabled?: boolean
  allowClear?: boolean
  [key: string]: unknown
}

export interface InputSelectTagsProps {
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
  value?: InputSelectTagItem | InputSelectTagItem[]
  onAdd?: (e: MouseEvent<HTMLDivElement>) => void
  onEdit?: (item: InputSelectTagItem) => void
  onChange?: (value: InputSelectTagItem[], meta?: { action: string }) => void
}

export interface InputSelectTagProps {
  style?: CSSProperties
  className?: string
  name?: string
  readOnly?: boolean
  disabled?: boolean
  allowClear?: boolean
  onEdit?: () => void
  onDelete?: () => void
}
