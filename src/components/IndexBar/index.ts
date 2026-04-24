import IndexBar from './IndexBar'
import Anchor from './Anchor'

type IndexBarWithAnchor = typeof IndexBar & { Anchor: typeof Anchor }

;(IndexBar as IndexBarWithAnchor).Anchor = Anchor

export type { IndexBarRef, IndexBarProps } from './IndexBar'
export type { AnchorProps } from './Anchor'
export default IndexBar as IndexBarWithAnchor
