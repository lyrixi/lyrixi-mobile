import type { CSSProperties, ReactNode, UIEvent } from 'react'

export interface PageMainProps {
  threshold?: number
  safeArea?: boolean
  touchStopPropagation?: boolean
  className?: string
  style?: CSSProperties
  children?: ReactNode
  onTopRefresh?: () => undefined | Promise<boolean | string | undefined>
  onBottomRefresh?: () => void | Promise<boolean | string | undefined | void>
  onScroll?: (e: UIEvent<HTMLElement>) => void
  onScrollEnd?: (e: UIEvent<HTMLElement>) => void
}

export interface PageMainRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}

export interface PageMainTouchesState {
  isTop: boolean
  startY: number
  currentY: number
  diffY: number
}
