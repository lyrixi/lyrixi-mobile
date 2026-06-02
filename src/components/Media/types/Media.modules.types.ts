import validateListStatus from '../utils/validateListStatus'
import isAllowClear from '../utils/isAllowClear'
import Media from '../Media'
import Mark from '../Mark'
import PreviewModal from '../PreviewModal'
import PreviewMain from '../PreviewMain'
import List from '../List'

export type MediaComponents = typeof Media & {
  validateListStatus: typeof validateListStatus
  isAllowClear: typeof isAllowClear
  Mark: typeof Mark
  PreviewModal: typeof PreviewModal
  PreviewMain: typeof PreviewMain
  List: typeof List
}
