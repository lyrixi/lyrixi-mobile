import type { CSSProperties, ReactNode } from 'react'

export interface ListAsyncMainLoadingProps {
  type?: string
  loadingRender?: (options: { action?: string }) => ReactNode
  loadingModalStyle?: CSSProperties
  loadingModalClassName?: string
  loadingMaskStyle?: CSSProperties
  loadingMaskClassName?: string
  loadingPortal?: HTMLElement
}

export interface ListAsyncRetryButtonProps {
  status?: string
  errorRetry?: boolean
  emptyRetry?: boolean
  onClick?: () => void
}
