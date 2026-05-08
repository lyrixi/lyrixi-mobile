import type { ReactNode } from 'react'

export type MessageOpenButton = {
  id?: string
  name: string
  className?: string
  style?: Record<string, unknown>
  onClick?: () => boolean | void
}

export type MessageOpenProps = {
  onOpen?: () => void
  onClose?: () => void
  portal?: HTMLElement | string | boolean
  maskClassName?: string
  maskStyle?: Record<string, unknown>
  maskClosable?: boolean
  icon?: string
  title?: ReactNode
  titleClassName?: string
  titleStyle?: Record<string, unknown>
  content?: ReactNode
  contentClassName?: string
  contentStyle?: Record<string, unknown>
  footerClassName?: string
  footerStyle?: Record<string, unknown>
  buttonsLayout?: 'vertical' | 'horizontal'
  buttons?: MessageOpenButton[]
}
