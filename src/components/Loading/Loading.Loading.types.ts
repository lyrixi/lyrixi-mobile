import type { CSSProperties, ReactNode } from 'react'

export interface LoadingProps {
  content?: ReactNode
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  portal?: Element | DocumentFragment
  iconRender?: () => ReactNode
  children?: ReactNode
}

export interface LoadingRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}
