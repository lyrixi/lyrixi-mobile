import type { ComponentType, CSSProperties, ReactNode, SVGProps } from 'react'

// 内库使用-start
import type { IconSize } from '../../Icon/types'
// 内库使用-end

/* 测试使用-start
import type { IconSize } from 'lyrixi-mobile'
测试使用-end */

export interface InputRateRef {
  element: HTMLDivElement | null
  inputElement: HTMLInputElement | null
  getElement: () => HTMLDivElement | null
  getInputElement: () => HTMLInputElement | null
}

export interface InputRateProps {
  id?: string
  name?: string
  // Value & Display Value
  value?: number
  // Status
  readOnly?: boolean
  disabled?: boolean
  // Style
  size?: IconSize
  checkedColor?: string
  style?: CSSProperties
  className?: string
  // Elements
  iconSvg?: ComponentType<SVGProps<SVGSVGElement>>
  iconRender?: (options: { checked: boolean }) => ReactNode
  min?: number
  max?: number
  step?: number
  // Events
  onChange?: (value: number) => void
}
