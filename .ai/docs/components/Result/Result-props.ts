/**
 * Result Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface ResultProps {
  /** 状态 */
  status?: 'empty' | '500' | 'success' | 'waiting' | 'info' | 'warning' | 'error'
  /** 标题 */
  title?: ReactNode
  /** 描述 */
  description?: ReactNode
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 自定义图片渲染 */
  imageRender?: () => ReactNode
  /** 图片地址 */
  imageUrl?: string | null
  /** 结果页内容 */
  children?: ReactNode
}
