/**
 * Steps Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface StepsProps {
  /** 当前步骤 */
  value?: {index: number, id: string, status: string}
  /** 步骤列表 */
  list?: Array<{id: string, title: string, description: string, [key: string]: any}>
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 图标大小，默认 `8` */
  iconSize?: number
  /** 对齐方式，默认 `'center'` */
  align?: 'center' | 'left'
  /** 方向，默认 `'vertical'` */
  direction?: 'vertical' | 'horizontal'
}

export interface StepsRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}
