import type { CSSProperties, MouseEvent, ReactNode } from 'react'

export interface NavBarModalNavBarRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface NavBarModalNavBarProps {
  style?: CSSProperties
  className?: string
  title?: ReactNode
  okNode?: ReactNode
  okVisible?: boolean
  okPosition?: 'left' | 'right'
  cancelNode?: ReactNode
  cancelVisible?: boolean
  cancelPosition?: 'left' | 'right'
  onOk?: (e: MouseEvent<HTMLDivElement>) => void
  onCancel?: (e: MouseEvent<HTMLDivElement>) => void
}

export interface NavBarModalOkProps {
  total?: number
  children?: ReactNode
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
}

export interface NavBarModalCancelProps {
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  children?: ReactNode
}
