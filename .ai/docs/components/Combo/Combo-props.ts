/**
 * Combo Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface ComboProps {
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 组合内容 */
  children?: ReactNode
  /** 点击事件 */
  onClick?: (e: Event) => void
}

export interface ComboRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}
