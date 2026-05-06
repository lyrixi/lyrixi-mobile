import type { ReactNode } from 'react'

export interface TransferItemProps {
  children?: ReactNode
  sortable?: boolean
  onAdd?: () => void
  onDelete?: () => void
}
