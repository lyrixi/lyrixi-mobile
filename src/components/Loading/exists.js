// Loading是否存在
// eslint-disable-next-line
export default function ({ id } = {}) {
  let modal = document.getElementById(id || '__lyrixi_loading_mask__')
  if (modal) return true
  return false
}
