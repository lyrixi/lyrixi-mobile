import IndexBar from './IndexBar'
import Anchor from './Anchor'

import type { IndexBarComponents } from './IndexBar.Components.types'

;(IndexBar as IndexBarComponents).Anchor = Anchor

export default IndexBar as IndexBarComponents
