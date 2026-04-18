// 选中sidebar的anchor
function activeAnchor(anchor, { sidebarElement, tooltipElement }) {
  let buttonsElement = sidebarElement?.querySelectorAll?.('.lyrixi-indexbar-button')
  if (buttonsElement && buttonsElement.length) {
    for (let i = 0, buttonElement; (buttonElement = buttonsElement[i++]);) {
      buttonElement.classList.remove('lyrixi-active')
    }
  }

  let currentButtonElement = sidebarElement?.querySelector?.(
    `[data-indexbar-anchor-button="${anchor}"]`
  )
  if (currentButtonElement) {
    currentButtonElement.classList.add('lyrixi-active')
    tooltipElement && (tooltipElement.innerHTML = anchor || '')
  }
}

export default activeAnchor
