import type { CSSProperties, ReactNode } from 'react'
import type { GapOption, SnapPosition } from './AssistiveTouch/types'

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
