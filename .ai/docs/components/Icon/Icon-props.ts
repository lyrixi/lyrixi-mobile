/**
 * Icon Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ComponentType, MouseEventHandler, SVGProps, TouchEventHandler } from 'react'

export type IconSize =
  | 'xxxxs'
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | 'xxl'
  | 'xxxl'

export interface IconProps {
  /** SVG 组件 */
  svg?: ComponentType<SVGProps<SVGSVGElement>>
  /** 颜色；SVG 需 currentColor */
  color?: string
  /** 背景颜色 */
  backgroundColor?: string
  /** 尺寸；SVG 模式为容器宽高 */
  size?: IconSize | string | number
  /** 圆角 */
  radius?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 点击事件 */
  onClick?: MouseEventHandler<HTMLElement>
  /** 触摸开始事件 */
  onTouchStart?: TouchEventHandler<HTMLElement>
}

export interface IconRef {
  /** 根元素（SVG 模式为 span） */
  element: HTMLElement | null
  /** 获取根元素 */
  getElement: () => HTMLElement | null
}

export interface IconStyleInput {
  /** 颜色 */
  color?: string
  /** 背景颜色 */
  backgroundColor?: string
  /** 尺寸 */
  size?: IconSize | string | number
  /** 圆角 */
  radius?: string
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
}