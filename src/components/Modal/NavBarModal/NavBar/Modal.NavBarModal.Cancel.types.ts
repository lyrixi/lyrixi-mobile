import type { MouseEvent, ReactNode } from 'react'

export interface ModalNavBarModalCancelProps {
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  children?: ReactNode
}
