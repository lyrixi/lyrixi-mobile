import type { CSSProperties, ReactNode } from 'react'

export interface GapOption {
  left?: number
  right?: number
  top?: number
  bottom?: number
}

export interface SnapPosition {
  top: string
  right: string
  bottom: string
  left: string
}

export interface SnapToEdgeOptions {
  gap?: GapOption
  onChange?: (pos: SnapPosition) => void
}

export interface AssistiveTouchOptions {
  gap?: GapOption
  onDragEnd?: (data: Record<string, unknown>) => void
}

export interface FloatRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface FloatProps {
  draggable?: boolean
  gap?: GapOption
  safeArea?: boolean
  style?: CSSProperties
  className?: string
  portal?: Element | DocumentFragment
  children?: ReactNode
  onDragEnd?: (data: { position: SnapPosition }) => void
}

/** 悬浮菜单树节点（getItemById） */
export interface FloatTreeListItem {
  id: string
  children?: FloatTreeListItem[]
  [key: string]: unknown
}

export type FloatElement = HTMLDivElement & { initialPosition?: boolean }
