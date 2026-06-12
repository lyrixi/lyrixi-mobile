// 移除Loading
export default function closeLoading({ id }: { id?: string } = {}): void {
  const loadingId = id || '__lyrixi_loading_mask__'
  const mask = document.getElementById(loadingId)

  if (mask && mask.parentNode) {
    mask.parentNode.removeChild(mask)
  }
}
