/**
 * Loading Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface LoadingProps {
  /** 提示内容 */
  content?: ReactNode
  /** 内容区样式 */
  modalStyle?: object
  /** 内容区类名 */
  modalClassName?: string
  /** 遮罩样式 */
  maskStyle?: object
  /** 遮罩类名 */
  maskClassName?: string
  /** 挂载节点 */
  portal?: Element | DocumentFragment
  /** 图标渲染 */
  iconRender?: () => ReactNode
  /** 子元素 */
  children?: ReactNode
}

export interface LoadingBallWaveProps {
  /** 颜色 */
  color?: string
  /** 尺寸 */
  size?: string | number
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
}

export interface LoadingRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}
