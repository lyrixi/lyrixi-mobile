/**
 * Keyboard Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface KeyboardNumberProps {
  /** 是否安全区，默认 `true` */
  safeArea?: boolean
  /** 挂载节点 */
  portal?: HTMLElement
  /** 当前值，默认 `''` */
  value?: string
  /** 变化事件 */
  onChange?: (value: string, options: object) => void
  /** 小数点按钮 */
  dot?: ReactNode
  /** 负号按钮 */
  minus?: ReactNode
  /** 确认按钮 */
  okNode?: ReactNode
  /** 确认按钮可见 */
  okVisible?: boolean
  /** 取消按钮 */
  cancelNode?: ReactNode
  /** 取消按钮可见 */
  cancelVisible?: boolean
  /** 模态框样式 */
  modalStyle?: object
  /** 模态框类名 */
  modalClassName?: string
  /** 是否显示 */
  open?: boolean
  /** 打开事件 */
  onOpen?: () => void
  /** 关闭事件 */
  onClose?: () => void
  /** 确认事件 */
  onOk?: (value: string) => void
  /** 取消事件 */
  onCancel?: () => void
}

export interface KeyboardNumberRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
}
