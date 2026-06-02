import type { CSSProperties } from 'react'

import type { CascaderMainResultState } from '../types/Cascader.Main.types'
import type { CascaderItem } from '../types/Cascader.common.types'

export interface CascaderMainViewProps {
  // Value & Display Value
  result?: CascaderMainResultState
  value?: CascaderItem[]
  // Style
  style?: CSSProperties
  className?: string
  itemStyle?: CSSProperties
  itemClassName?: string
  // Events
  onReLoad?: () => void
  onSelect: (item: CascaderItem) => void
}
