import type { CSSProperties } from 'react'

import type { TransferItem, TransferTitlesInput } from './Transfer.core.types'

export interface TransferMainProps {
  value: TransferItem[]
  list: TransferItem[]
  titles?: TransferTitlesInput
  open?: boolean
  allowClear?: boolean
  className?: string
  style?: CSSProperties
  onChange?: (value: TransferItem[]) => void
}
