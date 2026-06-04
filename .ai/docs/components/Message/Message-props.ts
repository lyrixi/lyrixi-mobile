/**
 * Message Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface MessageModalProps {
  /** 是否显示，默认 `false` */
  open?: boolean
  /** 点击遮罩关闭，默认 `true` */
  maskClosable?: boolean
  /** 是否启用安全区 */
  safeArea?: boolean
  /** 模态框样式 */
  modalStyle?: CSSProperties
  /** 模态框类名 */
  modalClassName?: string
  /** 遮罩样式 */
  maskStyle?: CSSProperties
  /** 遮罩类名 */
  maskClassName?: string
  /** 挂载节点 */
  portal?: HTMLElement | null | false
  /** 自定义内容 */
  children?: ReactNode
  /** 关闭事件 */
  onClose?: () => void
  /** 图标区域渲染 */
  iconRender?: () => ReactNode
  /** 标题 */
  title?: ReactNode
  /** 正文 */
  content?: ReactNode
  /** 底部按钮布局 */
  buttonsLayout?: 'vertical' | 'horizontal'
  /** 底部按钮配置 */
  buttons?: MessageComboButton[]
  /** 标题类名 */
  titleClassName?: string
  /** 标题样式 */
  titleStyle?: CSSProperties
  /** 正文类名 */
  contentClassName?: string
  /** 正文样式 */
  contentStyle?: CSSProperties
  /** 底部类名 */
  footerClassName?: string
  /** 底部样式 */
  footerStyle?: CSSProperties
}

export interface MessageMainProps {
  /** 图标区域渲染 */
  iconRender?: () => ReactNode
  /** 标题 */
  title?: ReactNode
  /** 正文 */
  content?: ReactNode
  /** 底部按钮布局，默认 `'horizontal'` */
  buttonsLayout?: 'vertical' | 'horizontal'
  /** 底部按钮配置 */
  buttons?: MessageComboButton[]
  /** 标题类名 */
  titleClassName?: string
  /** 标题样式 */
  titleStyle?: CSSProperties
  /** 正文类名 */
  contentClassName?: string
  /** 正文样式 */
  contentStyle?: CSSProperties
  /** 底部类名 */
  footerClassName?: string
  /** 底部样式 */
  footerStyle?: CSSProperties
  /** 根节点类名 */
  className?: string
  /** 根节点样式 */
  style?: CSSProperties
  /** 自定义主体内容 */
  children?: ReactNode
  /** 按钮点击 */
  onButtonClick?: (button: MessageComboButton, e: MouseEvent) => boolean | void | Promise<...>
}

export interface MessageHeaderProps {
  /** 类名 */
  className?: string
  /** 样式 */
  style?: CSSProperties
  /** 头部内容 */
  children?: ReactNode
}

export interface MessageFooterProps {
  /** 按钮布局 */
  layout?: string
  /** 类名 */
  className?: string
  /** 样式 */
  style?: CSSProperties
  /** 底部内容 */
  children?: ReactNode
}

export interface MessageIconProps {
  /** 类名 */
  className?: string
  /** 样式 */
  style?: CSSProperties
  /** 图标内容 */
  children?: ReactNode
}

export interface MessageTitleProps {
  /** 类名 */
  className?: string
  /** 样式 */
  style?: CSSProperties
  /** 标题内容 */
  children?: ReactNode
}

export interface MessageButtonProps {
  /** 块级按钮 */
  block?: boolean
  /** 文字颜色 */
  color?: string
  /** 背景颜色 */
  backgroundColor?: string
  /** 类名 */
  className?: string
  /** 样式 */
  style?: CSSProperties
  /** 按钮文案 */
  children?: ReactNode
  /** 点击事件 */
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
}

export interface MessageComboRef {
  /** 触发区域根元素 */
  element?: HTMLDivElement | null
  /** 获取触发区域 */
  getElement?: () => HTMLDivElement | null
  /** 打开对话框 */
  open?: () => void
  /** 关闭对话框 */
  close?: () => void
}

export interface MessageMainRef {
  /** 根元素 */
  element?: HTMLElement | null
  /** 获取根元素 */
  getElement?: () => HTMLElement | null
}

export interface MessageHeaderRef {
  /** 根元素 */
  element?: HTMLElement | null
  /** 获取根元素 */
  getElement?: () => HTMLElement | null
}

export interface MessageIconRef {
  /** 根元素 */
  element?: HTMLDivElement | null
  /** 获取根元素 */
  getElement?: () => HTMLDivElement | null
}
