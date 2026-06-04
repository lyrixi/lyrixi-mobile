/**
 * QRCode Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface QRCodeProps {
  /** 二维码内容 */
  text?: string
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 子元素 */
  children?: ReactNode
}

export interface QRCodeRef {
  /** 根元素 */
  element?: HtmlSpanElement
  /** 二维码实例 */
  instance?: QRCodeInstance
  /** 获取根元素 */
  getElement?: () => HtmlSpanElement
  /** 获取二维码实例 */
  getInstance?: () => QRCodeInstance
}
