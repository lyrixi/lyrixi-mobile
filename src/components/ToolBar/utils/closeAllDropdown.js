// 关闭所有 Dropdown 实例
function closeAllDropdown({ exceptId } = {}) {
  if (!window.dropdowns) return

  for (let id in window.dropdowns) {
    if (id === exceptId) continue
    window.dropdowns[id].close()
  }
}

export default closeAllDropdown
