import Button from './Button'
import Text from './ButtonText'
import Icon from './ButtonIcon'

type ButtonWithParts = typeof Button & {
  Icon: typeof Icon
  Text: typeof Text
}

;(Button as ButtonWithParts).Icon = Icon
;(Button as ButtonWithParts).Text = Text

export type { ButtonProps, ButtonRef } from './Button'
export type { ButtonTextProps, ButtonTextRef } from './ButtonText'
export type { ButtonIconProps } from './ButtonIcon'
export default Button as ButtonWithParts
