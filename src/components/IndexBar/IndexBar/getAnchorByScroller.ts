// @ts-nocheck
function getAnchorByScroller(scrollerElement) {
  let anchorsElement = scrollerElement?.querySelectorAll?.('[data-indexbar-anchor]')
  if (!anchorsElement?.length) {
    console.log('There is no Anchor in scrollerElement:', scrollerElement, anchorsElement)
    return ''
  }
  for (let i = 0, anchorElement; (anchorElement = anchorsElement[i++]);) {
    const rect = anchorElement.getBoundingClientRect()
    if (rect.top >= 0) {
      return anchorElement.getAttribute('data-indexbar-anchor')
    }
  }
  return ''
}

export default getAnchorByScroller
