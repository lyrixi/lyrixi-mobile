/**
 * Signature Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface SignatureComboProps {
  /** 签名值 */
  value?: string
  /** 允许清除，默认 `true` */
  allowClear?: boolean
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 模态框类名 */
  modalClassName?: string
  /** 模态框样式 */
  modalStyle?: object
  /** 遮罩样式 */
  maskStyle?: object
  /** 遮罩类名 */
  maskClassName?: string
  /** 挂载节点 */
  portal?: HTMLElement
  /** 画笔颜色，默认 `'#000'` */
  color?: string
  /** 背景颜色，默认 `'#fff'` */
  backgroundColor?: string
  /** 变化事件 */
  onChange?: (base64: string | null) => void
  /** 预览事件 */
  onPreview?: (src: string) => Promise<boolean | string | void>
}

export interface SignatureModalProps {
  /** 签名值 */
  value?: string
  /** 是否显示 */
  open?: boolean
  /** 模态框类名 */
  modalClassName?: string
  /** 模态框样式 */
  modalStyle?: object
  /** 挂载节点 */
  portal?: HTMLElement
  /** 画笔颜色，默认 `'#000'` */
  color?: string
  /** 背景颜色，默认 `'#fff'` */
  backgroundColor?: string
  /** 变化事件 */
  onChange?: (base64: string | null) => void
  /** 打开事件 */
  onOpen?: () => void
  /** 关闭事件 */
  onClose?: () => void
}

export interface SignatureMainProps {
  /** 自定义样式 */
  style?: object
  /** 画笔颜色，默认 `'#000'` */
  color?: string
  /** 背景颜色，默认 `'#fff'` */
  backgroundColor?: string
  /** 变化事件 */
  onChange?: (value: string) => void
  /** 取消事件 */
  onCancel?: () => void
}

export interface SignatureModalRef {
  /** 模态框元素 */
  modalElement?: HTMLDivElement
  /** 获取模态框元素 */
  getModalElement?: () => HTMLDivElement
}

export interface SignatureMainRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  getElement?: () => HTMLDivElement
  /** 获取 Base64 */
  getBase64?: () => Promise<string | null>
  /** 清除签名 */
  clear?: () => void
}
