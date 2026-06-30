import type { ComponentType, CSSProperties, MouseEvent, ReactNode, SVGProps } from 'react'

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
  leftIconRender?: () => ReactNode
  leftIconSvg?: ComponentType<SVGProps<SVGSVGElement>>
  rightIconRender?: () => ReactNode
  rightIconSvg?: ComponentType<SVGProps<SVGSVGElement>>
  clearRender?: InputSelectProps['clearRender']
  // Events
  onAdd?: (e: MouseEvent<HTMLDivElement>) => void
  onEdit?: (item: InputSelectItem) => void
  onChange?: (value: InputSelectItem[], options?: { action: string }) => void
}
