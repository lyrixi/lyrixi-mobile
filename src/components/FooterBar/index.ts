import FooterBar from './FooterBar'
import Button from './Button'

import type { FooterBarComponents } from './FooterBar.Components.types'

;(FooterBar as FooterBarComponents).Button = Button

export default FooterBar as FooterBarComponents
