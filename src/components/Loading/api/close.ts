import { DEFAULT_LOADING_ID } from './constants'
import { deleteLoadingInstance, getLoadingInstance } from './LoadingInstance'

/** 关闭 Loading.open 实例 */
export default function close({ id }: { id?: string } = {}): void {
  const loadingId = id || DEFAULT_LOADING_ID
  const instance = getLoadingInstance(loadingId)

  if (instance) {
    instance.root.unmount()
    instance.rootElement.remove()
    deleteLoadingInstance(loadingId)
    return
  }

  const mask = document.getElementById(loadingId)
  if (mask?.parentNode) {
    mask.parentNode.removeChild(mask)
  }
}
