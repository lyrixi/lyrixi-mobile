export interface MessageMaskElement extends HTMLElement {
  timeout?: ReturnType<typeof setTimeout>
  maskClosable?: boolean
  onOpen?: () => void
  onClose?: () => void
  buttons?: Array<{
    id?: string
    name: string
    className?: string
    style?: Record<string, unknown>
    onClick?: () => boolean | void
  }>
}

export interface MessageShowMaskParams {
  portal?: HTMLElement | string | boolean
  onMaskClick: (e: MouseEvent) => void
}

export interface MessageUpdateStyleParams {
  style?: Record<string, unknown>
  className?: string
  baseClassName: string
}

export interface MessageUpdateAttributeParams {
  maskClosable?: boolean
  onOpen?: () => void
  onClose?: () => void
  portal?: HTMLElement | string | boolean
  maskClassName?: string
  maskStyle?: Record<string, unknown>
  icon?: string
  title?: unknown
  titleClassName?: string
  titleStyle?: Record<string, unknown>
  content?: unknown
  contentClassName?: string
  contentStyle?: Record<string, unknown>
  footerClassName?: string
  footerStyle?: Record<string, unknown>
  buttonsLayout?: string
  buttons?: Array<{
    id?: string
    name: string
    className?: string
    style?: Record<string, unknown>
    onClick?: () => boolean | void
  }>
}
