// Click limit times to callback
function multipleClick(element: HTMLElement & { hasEventListener?: boolean }, count = 10, callback?: () => void): void {
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
