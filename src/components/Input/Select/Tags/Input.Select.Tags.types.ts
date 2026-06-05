import type { CSSProperties, MouseEvent, ReactNode } from 'react'

import type { InputSelectItem, InputSelectProps } from '../../types/Input.Select.types'
import type { InputSize } from '../../types/Input.Size.types'

export interface InputSelectTagsProps {
  // Value & Display Value
  separator?: string
  placeholder?: string
  value?: InputSelectItem | InputSelectItem[]
  // Status
  readOnly?: boolean
  disabled?: boolean
  allowClear?: boolean
  // Style
  className?: string
  style?: CSSProperties
  size?: InputSize
  // Elements
  leftIconNode?: ReactNode
  rightIconNode?: ReactNode
  clearRender?: InputSelectProps['clearRender']
  // Events
  onAdd?: (e: MouseEvent<HTMLDivElement>) => void
  onEdit?: (item: InputSelectItem) => void
  onChange?: (value: InputSelectItem[], meta?: { action: string }) => void
}
