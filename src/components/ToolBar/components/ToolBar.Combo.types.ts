import type { CSSProperties, MouseEventHandler, ReactNode, ComponentType, SVGProps } from 'react'

import type { ButtonProps } from '../../Button/types'

/** 仅 ToolBar.Dropdown 内部 Combo 使用，不在入口对外暴露 */
export interface ToolBarComboRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface ToolBarComboProps {
  // Value & Display Value
  direction?: string
  block?: boolean
  color?: ButtonProps['color']
  variant?: ButtonProps['variant']
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
  arrowSvg?: ComponentType<SVGProps<SVGSVGElement>> | null
  children?: ReactNode
  // Events
  onClick?: MouseEventHandler<HTMLDivElement>
}
