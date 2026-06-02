import type { CSSProperties } from 'react'

import type { TransferItem, TransferTitlesInput } from './Transfer.common.types'

export interface TransferMainProps {
  // Value & Display Value
  value: TransferItem[]
  list: TransferItem[]
  titles?: TransferTitlesInput
  // Status
  open?: boolean
  allowClear?: boolean
  // Style
  className?: string
  style?: CSSProperties
  // Events
  onChange?: (value: TransferItem[]) => void
}
