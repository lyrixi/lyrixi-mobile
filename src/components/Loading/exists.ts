import { DEFAULT_LOADING_ID } from './api/constants'

// Loading是否存在
export default function existsLoading({ id }: { id?: string } = {}): boolean {
  const modal = document.getElementById(id || DEFAULT_LOADING_ID)
  if (modal) return true
  return false
}
