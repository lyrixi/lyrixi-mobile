import type { CSSProperties, MouseEvent, ReactNode } from 'react'

export interface ActionSheetItemProps {
  checked?: boolean
  disabled?: boolean
  style?: CSSProperties
  className?: string
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  children?: ReactNode
}
