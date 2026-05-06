import type { CSSProperties, ReactNode, UIEvent } from 'react'

export interface PageMainProps {
  threshold?: number
  safeArea?: boolean
  touchStopPropagation?: boolean
  className?: string
  style?: CSSProperties
  children?: ReactNode
  onTopRefresh?: () =>
    | boolean
    | string
    | undefined
    | Promise<boolean | string | undefined>
  onBottomRefresh?: () => void | Promise<void>
  onScroll?: (e: UIEvent<HTMLElement>) => void
  onScrollEnd?: (e: UIEvent<HTMLElement>) => void
}

export interface PageMainRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}
