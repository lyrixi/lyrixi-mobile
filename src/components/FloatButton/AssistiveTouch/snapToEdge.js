// 贴边逻辑（修复纵向越界）
const snapToEdge = (target, { gap, onChange }) => {
  const rect = target.getBoundingClientRect()
  const screenWidth = window.innerWidth
  const screenHeight = window.innerHeight
  const elementWidth = rect.width
  const elementHeight = rect.height

  // 横向边界处理
  let finalLeft = rect.left
  if (rect.left < 0) {
    finalLeft = 0
  } else if (rect.right > screenWidth) {
    finalLeft = screenWidth - elementWidth
  }

  // 纵向边界处理（新增）
  let finalTop = rect.top
  if (rect.top < 0) {
    finalTop = 0
  } else if (rect.bottom > screenHeight) {
    finalTop = screenHeight - elementHeight
  }

  // 横向自动贴边（仅当未越界时）
  if (finalLeft >= 0 && finalLeft <= screenWidth - elementWidth) {
    finalLeft = finalLeft < screenWidth / 2 ? 0 : screenWidth - elementWidth
  }

  // 应用最终位置
  target.style.transition = 'left 0.3s ease, right 0.3s ease, top 0.3s ease'

  // 横向定位
  if (finalLeft === 0) {
    target.style.left = gap?.left ? `${gap.left}px` : '0'
    target.style.right = 'auto'
  } else {
    target.style.right = gap?.right ? `${gap.right}px` : '0'
    target.style.left = 'auto'
  }

  // 纵向定位（修复点：应用修正后的top）
  let top = 0
  if (finalTop === 0) {
    top = finalTop + (gap?.top || 0)
  } else {
    top = finalTop - (gap?.bottom || 0)
  }
  target.style.top = `${top}px`
  target.style.bottom = 'auto' // 清除底部定位

  onChange &&
    onChange({
      top: target.style.top,
      right: target.style.right,
      bottom: target.style.bottom,
      left: target.style.left
    })
}

export default snapToEdge
