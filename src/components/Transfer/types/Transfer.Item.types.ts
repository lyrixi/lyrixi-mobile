import type { ReactNode } from 'react'

export interface TransferItemProps {
  // Value & Display Value
  sortable?: boolean
  // Elements
  children?: ReactNode
  // Events
  onAdd?: () => void
  onDelete?: () => void
}
