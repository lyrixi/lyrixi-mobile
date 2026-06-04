/**
 * Accordion Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface AccordionProps {
  /** 是否展开，默认 `false` */
  open?: boolean
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 最小高度 */
  minHeight?: number
  /** 标题 */
  title?: ReactNode
  /** 自定义头部渲染 */
  headerRender?: () => ReactNode
  /** 省略配置 */
  ellipsis?: {expandText: string, collapseText: string}
  /** 自定义省略渲染 */
  ellipsisRender?: (props: {open: boolean}) => ReactNode
  /** 箭头容器类名（布局用，不用于选图标） */
  arrowClassName?: string
  /** 箭头位置，默认 `'right'` */
  arrowPosition?: 'left' | 'right'
  /** 自定义箭头渲染 */
  arrowRender?: (props: {open: boolean}) => ReactNode
  /** 内容 */
  children?: ReactNode
  /** 展开事件 */
  onOpen?: () => void
  /** 收起事件 */
  onClose?: () => void
}

export interface AccordionRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
  /** 展开 */
  open?: () => void
  /** 收起 */
  close?: () => void
}
