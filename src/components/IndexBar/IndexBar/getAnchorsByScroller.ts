function getAnchors(scrollerElement: Element): (string | null)[] {
  const anchors: (string | null)[] = []
  const anchorsElement = scrollerElement?.querySelectorAll?.('[data-indexbar-anchor]')
  if (!anchorsElement) return anchors
  for (let i = 0, anchorElement: Element | undefined; (anchorElement = anchorsElement[i++] as Element | undefined);) {
    const anchorName = anchorElement.getAttribute('data-indexbar-anchor')
    anchors.push(anchorName)
  }
  return anchors
}

export default getAnchors
