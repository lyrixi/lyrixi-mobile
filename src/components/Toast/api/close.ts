import { TOAST_ANIMATION_DURATION_CLOSE } from './constants'
import toastInstance from './ToastInstance'

import type { ToastCloseParams } from '../types'

let closeGeneration = 0

function delay(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms)
  })
}

function playCloseAnimation(rootElement: HTMLDivElement) {
  rootElement.querySelector('.lyrixi-mask')?.classList.remove('lyrixi-active')
  rootElement.querySelector('.lyrixi-toast')?.classList.remove('lyrixi-active')
}

function destroy() {
  toastInstance.root?.unmount()
  toastInstance.root = null
  toastInstance.rootElement?.remove()
  toastInstance.rootElement = null
}

/** 关闭当前 Toast.open 实例（全局仅允许一个） */
export default async function close(params?: ToastCloseParams): Promise<void> {
  const { onClose, animated = true } = params ?? {}

  if (!toastInstance.root || !toastInstance.rootElement) {
    return
  }

  const currentGeneration = ++closeGeneration
  const root = toastInstance.root
  const rootElement = toastInstance.rootElement

  if (animated) {
    playCloseAnimation(rootElement)
    await delay(TOAST_ANIMATION_DURATION_CLOSE)
    if (currentGeneration !== closeGeneration) {
      return
    }
  }

  if (toastInstance.root === root && toastInstance.rootElement === rootElement) {
    destroy()
    onClose?.()
  }
}
