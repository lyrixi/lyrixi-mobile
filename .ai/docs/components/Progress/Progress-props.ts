/**
 * Progress Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface ProgressBarProps {
  /** 进度百分比，默认 `0` */
  percent?: number
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
}

export interface ProgressCircleProps {
  /** 进度百分比，默认 `0` */
  percent?: number
  /** 尺寸，默认 `50` */
  size?: number
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 中间内容 */
  children?: ReactNode
}

export interface ProgressBarRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}

export interface ProgressCircleRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}
