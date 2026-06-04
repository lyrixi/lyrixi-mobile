/**
 * Stamp Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface StampProps {
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 骨架屏内容 */
  children?: ReactNode
}

export interface StampRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}
