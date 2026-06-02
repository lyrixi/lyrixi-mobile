import type { CSSProperties, ReactNode } from 'react'

export interface FormItemRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

/** 内层布局项（与 Field 包一层的 `FormItemProps` 区分） */
export interface FormItemLayoutProps {
  // Value & Display Value
  id?: string
  name?: string
  layout?: string
  height?: number
  // Style
  style?: CSSProperties
  className?: string
  // Elements
  children?: ReactNode
}

export interface FormVirtualFormItemRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface FormVirtualFormItemProps extends FormItemLayoutProps {}
