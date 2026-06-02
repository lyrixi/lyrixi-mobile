import type { CSSProperties, MouseEvent, ReactNode } from 'react'

import type { MessageBodyProps, MessageComboButton } from './Message.common.types'

export interface MessageMainRef {
  element: HTMLElement | null
  getElement: () => HTMLElement | null
}

export interface MessageMainProps extends MessageBodyProps {
  children?: ReactNode
  className?: string
  style?: CSSProperties
  onButtonClick?: (
    button: MessageComboButton,
    e: MouseEvent<HTMLDivElement>
  ) => boolean | void | Promise<boolean | void>
}
