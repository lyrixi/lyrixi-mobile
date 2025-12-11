/**
 * 获取事件的坐标位置(兼容touch和mouse事件)
 * @param {Event} e - 事件对象
 * @returns {{clientX: number, clientY: number}} 坐标对象
 */
function getEventPosition(e) {
  // touchstart & touchmove & touchend
  if (e?.changedTouches?.[0]) {
    return {
      clientX: e.changedTouches[0].clientX,
      clientY: e.changedTouches[0].clientY
    }
  }

  // 兼容touchmove
  if (e?.touches?.[0]) {
    return {
      clientX: e.touches[0].clientX,
      clientY: e.touches[0].clientY
    }
  }

  return {
    clientX: e.clientX,
    clientY: e.clientY
  }
}

export default getEventPosition
