import type { CSSProperties, ReactNode } from 'react'

export interface FormItemRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

/** 内层布局项（与 Field 包一层的 `FormItemProps` 区分） */
export interface FormItemLayoutProps {
  id?: string
  name?: string
  style?: CSSProperties
  className?: string
  layout?: string
  height?: number
  children?: ReactNode
}

export interface FormVirtualFormItemRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export type FormVirtualFormItemProps = FormItemLayoutProps
