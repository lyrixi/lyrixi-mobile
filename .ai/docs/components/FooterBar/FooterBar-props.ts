/**
 * FooterBar Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface FooterBarProps {
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 底部栏内容 */
  children?: ReactNode
}

export interface FooterBarRef {
  /** 根元素 */
  element?: HtmlFooterElement
  /** 获取根元素 */
  getElement?: () => HtmlFooterElement
}
