import type { CSSProperties, MouseEvent, ReactNode } from 'react'

export interface ModalNavBarModalNavBarRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface ModalNavBarModalNavBarProps {
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

export interface ModalNavBarModalOkProps {
  total?: number
  children?: ReactNode
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
}

export interface ModalNavBarModalCancelProps {
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  children?: ReactNode
}
