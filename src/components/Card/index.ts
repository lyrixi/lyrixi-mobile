import Card from './Card'
import Header from './Header'
import Main from './Main'

type CardWithParts = typeof Card & { Header: typeof Header; Main: typeof Main }

;(Card as CardWithParts).Header = Header
;(Card as CardWithParts).Main = Main

export type { CardProps, CardRef, CardHeaderProps, CardHeaderRef, CardMainProps, CardMainRef } from './types'
export default Card as CardWithParts
