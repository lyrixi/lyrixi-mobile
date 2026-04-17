// Click limit times to callback
function multipleClick(element, count = 10, callback) {
  if (!element || element?.hasEventListener) return
  let clickCount = 0

  element.hasEventListener = true
  element.addEventListener('click', function () {
    clickCount++
    if (clickCount > count) {
      callback && callback()
    }
  })
}

export default multipleClick
