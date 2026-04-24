import type { MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react'

/** 兼容原生事件与 React 合成事件 */
function getEventPosition(
  e: MouseEvent | TouchEvent | ReactMouseEvent<unknown> | ReactTouchEvent<unknown>
): { clientX: number; clientY: number } {
  if (typeof TouchEvent !== 'undefined' && e instanceof TouchEvent) {
    const touch = e.changedTouches?.[0] ?? e.touches?.[0]
    if (touch) {
      return { clientX: touch.clientX, clientY: touch.clientY }
    }
  }
  if ('touches' in e && e.touches && e.touches.length > 0) {
    const touch = e.changedTouches?.[0] ?? e.touches[0]
    if (touch) {
      return { clientX: touch.clientX, clientY: touch.clientY }
    }
  }
  const me = e as Pick<MouseEvent, 'clientX' | 'clientY'>
  return { clientX: me.clientX, clientY: me.clientY }
}

export default getEventPosition
