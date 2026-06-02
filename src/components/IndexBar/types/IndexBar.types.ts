import type { CSSProperties } from 'react'

export interface IndexBarRef {
  element: HTMLDivElement | null
  tooltipElement: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
  getTooltipElement: () => HTMLDivElement | null
  scrollToAnchor: (anchor: string) => void
}

export interface IndexBarProps {
  // Value & Display Value
  anchors?: string[]
  getScrollerElement: () => Element | null
  scrollToAnchor?: (anchor: string, opts: { scrollerElement: Element | null }) => void
  // Style
  className?: string
  style?: CSSProperties
}
