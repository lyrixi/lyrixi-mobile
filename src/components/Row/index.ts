import Row from './Row'
import Col from './Col'

type RowWithCol = typeof Row & { Col: typeof Col }

;(Row as RowWithCol).Col = Col

export type { RowProps, RowRef } from './Row'
export type { ColProps, ColRef } from './Col'
export default Row as RowWithCol
