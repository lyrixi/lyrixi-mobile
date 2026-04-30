import type { CSSProperties, ReactNode } from 'react'

export interface VideoPlayerProps {
  src?: string
  autoPlay?: boolean
  style?: CSSProperties
  className?: string
  portal?: Element
  poster?: string
  children?: ReactNode
  /** 顶部区域（如关闭按钮），在内容区上方渲染 */
  headerRender?: () => ReactNode
  onError?: (err: { status: string; message: string; error: unknown }) => void
}

export interface VideoPlayerRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  pause: () => void
  play: () => void
}
