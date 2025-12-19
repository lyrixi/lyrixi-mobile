function getAnchorByViewport(scrollerElement) {
  let anchorsElement = scrollerElement?.querySelectorAll?.('[data-indexbar-anchor]')
  for (let i = 0, anchorElement; (anchorElement = anchorsElement[i++]); ) {
    const rect = anchorElement.getBoundingClientRect()
    if (rect.top >= 0) {
      return anchorElement.getAttribute('data-indexbar-anchor')
    }
  }
  return ''
}

export default getAnchorByViewport
