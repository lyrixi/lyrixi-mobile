import Button from './Button'
import Text from './ButtonText'
import Icon from './ButtonIcon'

import type { ButtonComponents } from './Button.Components.types'

const Btn = Button as ButtonComponents
Btn.Icon = Icon
Btn.Text = Text
Btn.componentName = 'Button'

export default Btn
