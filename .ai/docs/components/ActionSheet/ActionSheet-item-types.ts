/**
 * ActionSheet 共享类型（AI 文档）
 */

import type { MouseEvent } from 'react'

/** Modal / Combo 共用的列表项数据 */
export interface ActionSheetItem {
  id: string | number
  name: string
  disabled?: boolean
  checked?: boolean
  className?: string
  style?: React.CSSProperties
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  [key: string]: unknown
}
