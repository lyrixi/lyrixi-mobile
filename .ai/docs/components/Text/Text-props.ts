/**
 * Text Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface TextProps {
  /** 高亮文本 */
  highlight?: string | Array<string>
  /** 省略配置 */
  ellipsis?: {rows: number, expandable: boolean, defaultExpanded: boolean}
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 文本内容 */
  children?: ReactNode
}

export interface TextRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
  /** 切换省略 */
  toggleEllipsis?: () => boolean
  /** 是否有省略 */
  hasEllipsis?: () => boolean
}
