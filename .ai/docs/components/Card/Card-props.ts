/**
 * Card Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface CardProps {
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 卡片内容 */
  children?: ReactNode
}

export interface CardHeaderProps {
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 头部内容 */
  children?: ReactNode
}

export interface CardMainProps {
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 主体内容 */
  children?: ReactNode
}

export interface CardRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}

export interface CardHeaderRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}

export interface CardMainRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}
