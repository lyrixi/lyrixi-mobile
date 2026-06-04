/**
 * IFrame Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface IFrameProps {
  /** 页面地址 */
  src?: string
  /** 数据 */
  data?: object
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
}

export interface IFrameRef {
  /** 根元素 */
  element?: HtmlIFrameElement
  /** 获取根元素 */
  getElement?: () => HtmlIFrameElement
}
