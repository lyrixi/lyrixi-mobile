// 滚动到指定位置
function scrollToAnchor(anchor: string, { scrollerElement }: { scrollerElement: Element }): void {
  const currentAnchorElement = scrollerElement.querySelector(`[data-indexbar-anchor="${anchor}"]`)
  if (currentAnchorElement) {
    (scrollerElement as HTMLElement).scrollTop = (currentAnchorElement as HTMLElement).offsetTop
  }
}

export default scrollToAnchor
