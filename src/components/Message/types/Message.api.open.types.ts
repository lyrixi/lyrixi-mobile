import type { MessageComboButton, MessageComboProps } from './Message.Combo.types'

export type MessageOpenButton = MessageComboButton

export interface MessageOpenProps extends Omit<MessageComboProps, 'buttons'> {
  buttons?: MessageOpenButton[]
}
