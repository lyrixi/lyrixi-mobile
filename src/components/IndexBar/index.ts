import _IndexBar from './IndexBar'
import Anchor from './Anchor'

import type { IndexBarComponents } from './types/IndexBar.modules.types'

const IndexBar = _IndexBar as IndexBarComponents

IndexBar.Anchor = Anchor

export default IndexBar
