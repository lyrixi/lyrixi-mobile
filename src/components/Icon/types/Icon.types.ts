import type {
  CSSProperties,
  ComponentType,
  MouseEventHandler,
  SVGProps,
  TouchEventHandler
} from 'react'

export type IconSVGElement = ComponentType<SVGProps<SVGSVGElement>>

export interface IconProps {
  // Value & Display Value
  svg: IconSVGElement
  color?: string
  backgroundColor?: string
  size?: string
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
  size?: string
  radius?: string
  style?: CSSProperties
  className?: string
}
