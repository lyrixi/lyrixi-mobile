/**
 * IndexBar Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

export interface IndexBarProps {
  /** 锚点数组 */
  anchors?: string[]
  /** 获取滚动容器元素 */
  getScrollerElement: () => Element | null
  /** 自定义滚动到指定位置 */
  scrollToAnchor?: (anchor: string, opts: { scrollerElement: Element | null }) => void
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
}

export interface IndexBarAnchorProps {
  /** 锚点名称 */
  name?: string
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 锚点内容 */
  children?: ReactNode
}

export interface IndexBarRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 提示元素 */
  tooltipElement: HTMLDivElement | null
  /** 获取根元素 */
  getElement: () => HTMLDivElement | null
  /** 获取提示元素 */
  getTooltipElement: () => HTMLDivElement | null
  /** 滚动到锚点 */
  scrollToAnchor: (anchor: string) => void
}