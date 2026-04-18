// 滚动到指定位置
function scrollToAnchor(anchor, { scrollerElement }) {
  let currentAnchorElement = scrollerElement.querySelector(`[data-indexbar-anchor="${anchor}"]`)
  if (currentAnchorElement) scrollerElement.scrollTop = currentAnchorElement.offsetTop
}

export default scrollToAnchor
