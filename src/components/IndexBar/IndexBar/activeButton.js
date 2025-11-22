// 选中button
function activeAnchor({ anchor, sidebarDOM, tooltipDOM }) {
  let buttonsDOM = sidebarDOM?.querySelectorAll?.('.lyrixi-indexbar-button')
  if (buttonsDOM && buttonsDOM.length) {
    for (let i = 0, buttonDOM; (buttonDOM = buttonsDOM[i++]); ) {
      buttonDOM.classList.remove('lyrixi-active')
    }
  }

  let currentButtonDOM = sidebarDOM?.querySelector?.(`[data-indexbar-anchor-button="${anchor}"]`)
  if (currentButtonDOM) {
    currentButtonDOM.classList.add('lyrixi-active')
    tooltipDOM.innerHTML = anchor || ''
  }
}

export default activeAnchor
