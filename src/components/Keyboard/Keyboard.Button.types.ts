import type { MouseEvent, ReactNode } from 'react'

export interface KeyboardButtonActionProps {
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  className?: string
  children?: ReactNode
}

export interface KeyboardButtonNumberProps {
  onClick?: (value: ReactNode) => void
  className?: string
  children?: ReactNode
}

export interface KeyboardButtonQuickProps {
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  className?: string
  children?: ReactNode
}
