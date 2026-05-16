import type { CSSProperties, MouseEvent, ReactNode } from 'react'

import type { InputSelectItem, InputSelectProps } from '../../Input.Select.types'

export interface InputSelectTagsProps {
  separator?: string
  leftIconNode?: ReactNode
  rightIconNode?: ReactNode
  clearRender?: InputSelectProps['clearRender']
  className?: string
  style?: CSSProperties
  placeholder?: string
  readOnly?: boolean
  disabled?: boolean
  allowClear?: boolean
  value?: InputSelectItem | InputSelectItem[]
  onAdd?: (e: MouseEvent<HTMLDivElement>) => void
  onEdit?: (item: InputSelectItem) => void
  onChange?: (value: InputSelectItem[], meta?: { action: string }) => void
}

export interface InputSelectTagProps {
  style?: CSSProperties
  className?: string
  name?: ReactNode
  readOnly?: boolean
  disabled?: boolean
  allowClear?: boolean
  onEdit?: () => void
  onDelete?: () => void
}
