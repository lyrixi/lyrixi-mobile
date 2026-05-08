import type { CSSProperties } from 'react'

export interface IndexBarRef {
  element: HTMLDivElement | null
  tooltipElement: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  getTooltipElement: () => HTMLDivElement | null
  scrollToAnchor: (anchor: string) => void
}

export interface IndexBarProps {
  anchors?: string[]
  getScrollerElement: () => Element | null
  className?: string
  style?: CSSProperties
  scrollToAnchor?: (anchor: string, opts: { scrollerElement: Element | null }) => void
}
