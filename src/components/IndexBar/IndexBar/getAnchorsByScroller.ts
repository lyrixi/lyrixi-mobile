function getAnchors(scrollerElement) {
  let anchors = []
  let anchorsElement = scrollerElement?.querySelectorAll?.('[data-indexbar-anchor]')
  for (let i = 0, anchorElement; (anchorElement = anchorsElement[i++]); ) {
    let anchorName = anchorElement.getAttribute('data-indexbar-anchor')
    anchors.push(anchorName)
  }
  return anchors
}

export default getAnchors
