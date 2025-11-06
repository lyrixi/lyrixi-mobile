import validateImageSrc from './utils/validateImageSrc'
import validateListStatus from './utils/validateListStatus'
import Image from './Image'
import Mark from './Mark'
import PreviewModal from './PreviewModal'
import PreviewMain from './PreviewMain'
import List from './List'

Image.validateImageSrc = validateImageSrc
Image.validateListStatus = validateListStatus
Image.Mark = Mark
Image.PreviewModal = PreviewModal
Image.PreviewMain = PreviewMain
Image.List = List

export default Image
