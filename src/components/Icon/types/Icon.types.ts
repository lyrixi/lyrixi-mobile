import type {
  CSSProperties,
  ComponentType,
  MouseEventHandler,
  SVGProps,
  TouchEventHandler
} from 'react'

import type { IconSize } from './Icon.Size.types'

export interface IconProps {
  // Value & Display Value
  svg: ComponentType<SVGProps<SVGSVGElement>>
  color?: string
  backgroundColor?: string
  size?: IconSize | string | number
  radius?: string
  // Status
  disabled?: boolean
  // Style
  style?: CSSProperties
  className?: string
  // Events
  onClick?: MouseEventHandler<HTMLElement>
  onTouchStart?: TouchEventHandler<HTMLElement>
}

export interface IconRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}

export interface IconStyleInput {
  color?: string
  backgroundColor?: string
  size?: IconSize | string | number
  radius?: string
  style?: CSSProperties
  className?: string
}
