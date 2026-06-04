/**
 * SafeArea Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface SafeAreaProps {
  /** 类型，默认 `'height'` */
  type?: 'height' | 'padding' | 'margin' | 'border' | 'before' | 'after'
  /** 位置，默认 `'bottom'` */
  position?: 'top' | 'bottom'
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
}

export interface SafeAreaRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}
