// Loading是否存在
export default function existsLoading({ id }: { id?: string } = {}): boolean {
  const modal = document.getElementById(id || '__lyrixi_loading_mask__')
  if (modal) return true
  return false
}
