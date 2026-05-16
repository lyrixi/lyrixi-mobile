import Row from './Row'
import Col from './Col'

import type { RowComponents } from './Row.Components.types'

;(Row as RowComponents).Col = Col

export default Row as RowComponents
