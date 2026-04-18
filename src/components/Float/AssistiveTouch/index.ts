import getPosition from './getPosition'
import snapToEdge from './snapToEdge'

let AssistiveTouch = function (target, { gap, onDragEnd } = {}) {
  let s = this

  if (!target) return

  target.style.position = 'fixed'

  // 拖动信息
  let touches = {
    isDragging: false,
    startX: 0,
    startY: 0,
    currentLeft: 0,
    currentTop: 0
  }

  // 触摸开始
  function handleTouchStart(e) {
    // e.preventDefault()
    touches.isDragging = true
    const touch = e.touches[0]
    touches.startX = touch.clientX
    touches.startY = touch.clientY
    const pos = getPosition(target)
    touches.currentLeft = pos.left
    touches.currentTop = pos.top
    target.style.transition = 'none'
  }

  // 触摸移动
  function handleTouchMove(e) {
    if (!touches.isDragging) return
    e.preventDefault()
    const touch = e.touches[0]
    const deltaX = touch.clientX - touches.startX
    const deltaY = touch.clientY - touches.startY

    target.style.left = `${touches.currentLeft + deltaX}px`
    target.style.top = `${touches.currentTop + deltaY}px`
  }

  // 触摸结束
  function handleTouchEnd(e) {
    if (!touches.isDragging) return
    touches.isDragging = false

    // 点击时不要修改位置
    let endX = e?.clientX || e?.changedTouches?.[0]?.clientX
    let endY = e?.clientY || e?.changedTouches?.[0]?.clientY
    let diffX = touches.startX - endX
    let diffY = touches.startY - endY
    if (Math.abs(diffX) < 5 && Math.abs(diffY) < 5) {
      return
    }

    // 贴边
    snapToEdge(target, { gap })

    if (onDragEnd) {
      const pos = getPosition(target)
      onDragEnd && onDragEnd({ ...e, ...pos })
    }
  }

  /* --------------------
  Touch Events
  -------------------- */
  s.events = function (detach) {
    let action = detach ? 'removeEventListener' : 'addEventListener'
    target[action]('touchstart', handleTouchStart, { passive: false })
    target[action]('touchmove', handleTouchMove, { passive: false })
    target[action]('touchend', handleTouchEnd, false)
    target[action]('touchcancel', handleTouchEnd, false)
  }
  // attach、dettach事件
  s.attach = function (event) {
    s.events()
  }
  s.detach = function (event) {
    s.events(true)
  }
  return s
}

export default AssistiveTouch
