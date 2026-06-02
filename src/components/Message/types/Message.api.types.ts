/** @deprecated Message.open 已改为 React 渲染，不再返回 DOM 元素 */
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
