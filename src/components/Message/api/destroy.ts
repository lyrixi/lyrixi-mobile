import { messageRuntime } from './messageRuntime'

type DestroyOptions = {
  /** 是否播放关闭动画，默认 true */
  animated?: boolean
}

function finishDestroy() {
  messageRuntime.root?.unmount()
  messageRuntime.root = null
  messageRuntime.container?.remove()
  messageRuntime.container = null
  messageRuntime.animateClose = null

  if (messageRuntime.exitTimer) {
    window.clearTimeout(messageRuntime.exitTimer)
    messageRuntime.exitTimer = null
  }

  const onClose = messageRuntime.onClose
  messageRuntime.onClose = undefined
  onClose?.()
}

/** 关闭当前 Message.open 实例（全局仅允许一个） */
export default function destroy(options?: DestroyOptions) {
  const { animated = true } = options ?? {}

  if (!messageRuntime.root || !messageRuntime.container) {
    return
  }

  if (messageRuntime.exitTimer) {
    window.clearTimeout(messageRuntime.exitTimer)
    messageRuntime.exitTimer = null
  }

  if (animated && messageRuntime.animateClose) {
    messageRuntime.animateClose()
    messageRuntime.exitTimer = window.setTimeout(finishDestroy, 300)
    return
  }

  finishDestroy()
}
