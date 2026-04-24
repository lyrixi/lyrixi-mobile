// 选中sidebar的anchor
function activeAnchor(
  anchor: string,
  {
    sidebarElement,
    tooltipElement
  }: { sidebarElement?: HTMLElement | null; tooltipElement?: HTMLElement | null }
): void {
  const buttonsElement = sidebarElement?.querySelectorAll?.('.lyrixi-indexbar-button')
  if (buttonsElement && buttonsElement.length) {
    for (let i = 0, buttonElement; (buttonElement = buttonsElement[i++] as Element | undefined);) {
      buttonElement.classList.remove('lyrixi-active')
    }
  }

  const currentButtonElement = sidebarElement?.querySelector?.(
    `[data-indexbar-anchor-button="${anchor}"]`
  )
  if (currentButtonElement) {
    currentButtonElement.classList.add('lyrixi-active')
    if (tooltipElement) {
      tooltipElement.innerHTML = anchor || ''
    }
  }
}

export default activeAnchor
