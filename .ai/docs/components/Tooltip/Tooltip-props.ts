/**
 * Tooltip Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface TooltipProps {
  /** 点击遮罩关闭，默认 `true` */
  maskClosable?: boolean
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 动画效果，默认 `'slideDownLeft'` */
  animation?: 'none' | 'slideLeft' | 'slideRight' | 'slideUp' | 'slideDown' | 'zoom' | 'fade' | 'slideDownLeft'
  /** 模态框样式 */
  modalStyle?: object
  /** 模态框类名 */
  modalClassName?: string
  /** 遮罩样式 */
  maskStyle?: object
  /** 遮罩类名 */
  maskClassName?: string
  /** 触发元素 */
  children?: ReactNode
  /** 自定义组合渲染 */
  comboRender?: () => ReactNode
  /** 自定义模态框渲染 */
  modalRender?: () => ReactNode
  /** 参考元素 */
  referenceElement?: HTMLElement | (() => HTMLElement)
  /** 挂载节点 */
  portal?: HTMLElement | null | false
  /** 打开前事件 */
  onBeforeOpen?: () => Promise<boolean>
  /** 打开事件 */
  onOpen?: () => void
  /** 关闭事件 */
  onClose?: () => void
}

export interface TooltipRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}
