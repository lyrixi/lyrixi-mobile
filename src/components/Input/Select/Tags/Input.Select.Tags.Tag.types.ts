import type { CSSProperties, ReactNode } from 'react'

export interface InputSelectTagProps {
  // Value & Display Value
  name?: ReactNode
  // Status
  readOnly?: boolean
  disabled?: boolean
  allowClear?: boolean
  // Style
  style?: CSSProperties
  className?: string
  // Events
  onEdit?: () => void
  onDelete?: () => void
}
