import Tooltip from './Tooltip'
import updatePositionByReferenceElement from './api/updatePositionByReferenceElement'

const TooltipWithApi = Tooltip as typeof Tooltip & {
  updatePositionByReferenceElement: typeof updatePositionByReferenceElement
}
TooltipWithApi.updatePositionByReferenceElement = updatePositionByReferenceElement

export default TooltipWithApi
