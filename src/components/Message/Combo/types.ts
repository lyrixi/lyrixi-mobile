import type { CSSProperties, MouseEvent, ReactNode } from 'react'

export interface MessageComboButton {
  id?: string
  name?: ReactNode
  style?: CSSProperties
  className?: string
  onClick?: (e: MouseEvent<HTMLDivElement>) => boolean | void | Promise<boolean | void>
}

export interface MessageComboRef {
  element: HTMLDivElement | null
  getElement: () => HTMLDivElement | null
}

export interface MessageComboProps {
  children?: ReactNode
  iconRender?: () => ReactNode
  title?: ReactNode
  content?: ReactNode
  buttons?: MessageComboButton[]
  buttonsLayout?: string
  className?: string
  style?: CSSProperties
}
