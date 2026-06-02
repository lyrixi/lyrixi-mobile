import type { MessageComboButton, MessageComboProps } from './Message.Combo.types'

export interface MessageOpenButton extends MessageComboButton {}

export interface MessageOpenProps extends Omit<MessageComboProps, 'buttons'> {
  buttons?: MessageOpenButton[]
}
