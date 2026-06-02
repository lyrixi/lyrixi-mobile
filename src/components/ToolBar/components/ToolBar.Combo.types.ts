import type { CSSProperties, MouseEventHandler, ReactNode } from 'react'

/** 仅 ToolBar.Dropdown 内部 Combo 使用，不在入口对外暴露 */
export interface ToolBarComboRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface ToolBarComboProps {
  // Value & Display Value
  direction?: string
  block?: boolean
  color?: string
  backgroundColor?: string
  borderColor?: string
  border?: string
  size?: string | number | readonly string[]
  sizeEqual?: boolean
  fontSize?: string | number
  radius?: string | number
  // Status
  open?: boolean | null
  // Style
  style?: CSSProperties
  className?: string
  // Elements
  arrowRender?: (props: { open: boolean | null }) => ReactNode
  children?: ReactNode
  // Events
  onClick?: MouseEventHandler<HTMLDivElement>
}
