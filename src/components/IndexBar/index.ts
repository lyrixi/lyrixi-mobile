import IndexBar from './IndexBar'
import Anchor from './Anchor'

type IndexBarWithAnchor = typeof IndexBar & { Anchor: typeof Anchor }

;(IndexBar as IndexBarWithAnchor).Anchor = Anchor

export type { IndexBarAnchorProps, IndexBarProps, IndexBarRef } from './types'
export default IndexBar as IndexBarWithAnchor
