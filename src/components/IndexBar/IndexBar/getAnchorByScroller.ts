function getAnchorByScroller(scrollerElement: Element): string {
  const anchorsElement = scrollerElement?.querySelectorAll?.('[data-indexbar-anchor]')
  if (!anchorsElement?.length) {
    console.log('There is no Anchor in scrollerElement:', scrollerElement, anchorsElement)
    return ''
  }
  for (let i = 0, anchorElement: Element | undefined; (anchorElement = anchorsElement[i++] as Element | undefined);) {
    const rect = anchorElement.getBoundingClientRect()
    if (rect.top >= 0) {
      return anchorElement.getAttribute('data-indexbar-anchor') ?? ''
    }
  }
  return ''
}

export default getAnchorByScroller
