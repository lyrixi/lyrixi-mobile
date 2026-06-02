import _Button from './Button'
import Text from './ButtonText'
import Icon from './ButtonIcon'

import type { ButtonComponents } from './types/Button.modules.types'

const Button = _Button as ButtonComponents
Button.Icon = Icon
Button.Text = Text
Button.componentName = 'Button'

export default Button
