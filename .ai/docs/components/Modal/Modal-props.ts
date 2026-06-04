/**
 * Modal Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface ModalProps {
  /** 是否显示 */
  open?: boolean
  /** 点击遮罩关闭，默认 `true` */
  maskClosable?: boolean
  /** 是否安全区，默认 `true` */
  safeArea?: boolean
  /** 动画效果，默认 `'zoom'` */
  animation?: 'none' | 'slideLeft' | 'slideRight' | 'slideUp' | 'slideDown' | 'zoom' | 'fade'
  /** 模态框样式 */
  modalStyle?: object
  /** 模态框类名 */
  modalClassName?: string
  /** 遮罩样式 */
  maskStyle?: object
  /** 遮罩类名 */
  maskClassName?: string
  /** 挂载节点 */
  portal?: HTMLElement | null | false
  /** 模态框内容 */
  children?: ReactNode
  /** 关闭事件 */
  onClose?: (e: Event) => void
}

export interface ModalRef {
  /** 遮罩元素 */
  maskElement?: HTMLDivElement
  /** 获取遮罩元素 */
  getMaskElement?: () => HTMLDivElement
  /** 模态框元素 */
  modalElement?: HTMLDivElement
  /** 获取模态框元素 */
  getModalElement?: () => HTMLDivElement
}
