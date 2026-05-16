import type { ForwardRefExoticComponent, RefAttributes } from 'react'

import type { MessageButtonProps, MessageButtonRef } from './Message.Button.types'

export type MessageButtonComponents = ForwardRefExoticComponent<
  MessageButtonProps & RefAttributes<MessageButtonRef>
> & { componentName: string }
