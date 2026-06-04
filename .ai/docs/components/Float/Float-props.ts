/**
 * Float Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface FloatProps {
  /** 是否可拖动 */
  draggable?: boolean
  /** 边距，默认 `{top: 8, right: 8, bottom: 8, left: 8}` */
  gap?: {top: number, right: number, bottom: number, left: number}
  /** 是否安全区，默认 `true` */
  safeArea?: boolean
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 挂载节点 */
  portal?: HTMLElement
  /** 悬浮按钮内容 */
  children?: ReactNode
  /** 拖动结束事件 */
  onDragEnd?: (position: {left: number, top: number}) => void
}

export interface FloatRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}
