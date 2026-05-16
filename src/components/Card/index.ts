import Card from './Card'
import Header from './Header'
import Main from './Main'

import type { CardComponents } from './Card.Components.types'

;(Card as CardComponents).Header = Header
;(Card as CardComponents).Main = Main

export default Card as CardComponents
