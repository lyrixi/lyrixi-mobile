import Attach from '../Attach'
import validateListStatus from '../../Media/utils/validateListStatus'
import supportTypes from '../utils/supportTypes'
import List from '../List'
import Button from '../Choose/Button'
import Uploading from '../Uploading'

export type AttachComponents = typeof Attach & {
  validateListStatus: typeof validateListStatus
  supportTypes: typeof supportTypes
  List: typeof List
  Button: typeof Button
  Uploading: typeof Uploading
}
