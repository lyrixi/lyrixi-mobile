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

export interface SnapToEdgeParams {
  gap?: GapOption
  onChange?: (pos: SnapPosition) => void
}

export interface AssistiveTouchParams {
  gap?: GapOption
  onDragEnd?: (data: Record<string, unknown>) => void
}

export interface FloatRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface FloatProps {
  // Value & Display Value
  draggable?: boolean
  gap?: GapOption
  // Status
  safeArea?: boolean
  // Style
  style?: CSSProperties
  className?: string
  // Elements
  portal?: Element | DocumentFragment
  children?: ReactNode
  // Events
  onDragEnd?: (data: { position: SnapPosition }) => void
}

/** 悬浮菜单树节点（getItemById） */
export interface FloatTreeListItem {
  id: string
  children?: FloatTreeListItem[]
  [key: string]: unknown
}

export type FloatElement = HTMLDivElement & { initialPosition?: boolean }
