import React, { useImperativeHandle, useRef, forwardRef } from 'react'
import { createPortal } from 'react-dom'
import getPosition from './AssistiveTouch/getPosition'
import snapToEdge from './AssistiveTouch/snapToEdge'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
import SafeArea from './../SafeArea'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, SafeArea } from 'lyrixi-mobile'
测试使用-start */

// 悬浮按钮
function Float(
  {
    // Status
    draggable,

    // Style
    gap = { top: 8, right: 8, bottom: 8, left: 8 },
    safeArea = true,
    style,
    className,

    // Elements
    portal,
    children,

    // Events
    onDragEnd
  },
  ref
) {
  const rootRef = useRef(null)

  // 拖动信息
  let touchesRef = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
    currentLeft: 0,
    currentTop: 0
  })

  // Expose
  useImperativeHandle(ref, () => {
    return {
      element: rootRef.current,
      getElement: () => rootRef.current
    }
  })

  // 触摸开始
  function handleTouchStart(e) {
    e.stopPropagation()

    // 解决拖动时影响document弹性
    e.currentTarget.addEventListener('touchmove', DOMUtil.preventDefault, false)

    touchesRef.current.isDragging = true
    const touch = e.touches[0]
    touchesRef.current.startX = touch.clientX
    touchesRef.current.startY = touch.clientY
    const pos = getPosition(e.currentTarget)
    touchesRef.current.currentLeft = pos.left
    touchesRef.current.currentTop = pos.top
    e.currentTarget.style.transition = 'none'
  }

  // 触摸移动
  function handleTouchMove(e) {
    e.stopPropagation()

    // 拖动前, 清除冲突定位
    if (!e.currentTarget.initialPosition) {
      e.currentTarget.initialPosition = true
      e.currentTarget.style.left = `${touchesRef.current.currentLeft}px`
      e.currentTarget.style.top = `${touchesRef.current.currentTop}px`
      e.currentTarget.style.right = 'auto'
      e.currentTarget.style.bottom = 'auto'
    }

    // e.preventDefault()
    const touch = e.touches[0]
    const deltaX = touch.clientX - touchesRef.current.startX
    const deltaY = touch.clientY - touchesRef.current.startY

    e.currentTarget.style.left = `${touchesRef.current.currentLeft + deltaX}px`
    e.currentTarget.style.top = `${touchesRef.current.currentTop + deltaY}px`
  }

  // 触摸结束
  function handleTouchEnd(e) {
    e.stopPropagation()

    // 拖动前, 清除冲突定位
    e.currentTarget.initialPosition = false

    // 解除对move时的弹性对当前div的锁定
    e.currentTarget.removeEventListener('touchmove', DOMUtil.preventDefault, false)

    // 拖拽结束
    touchesRef.current.isDragging = false

    // 点击时不要修改位置
    let endX = e?.clientX || e?.changedTouches?.[0]?.clientX
    let endY = e?.clientY || e?.changedTouches?.[0]?.clientY
    let diffX = touchesRef.current.startX - endX
    let diffY = touchesRef.current.startY - endY

    // 判断是否是点击
    if (Math.abs(diffX) < 5 && Math.abs(diffY) < 5) {
      return
    }

    // 贴边
    snapToEdge(e.currentTarget, {
      gap,
      onChange:
        typeof onDragEnd === 'function'
          ? (pos) => {
            onDragEnd({ position: pos })
          }
          : undefined
    })
  }

  // Node
  let Node = (
    <div
      ref={rootRef}
      style={style}
      className={DOMUtil.classNames('lyrixi-float-container', className)}
      onTouchStart={draggable ? handleTouchStart : null}
      onTouchMove={draggable ? handleTouchMove : null}
      onTouchEnd={draggable ? handleTouchEnd : null}
    // onTouchMove里已经阻止的点击事件, 所以这里就不需要加了
    // onClickCapture={(e) => {
    //   console.log('click', touchesRef.current.isDragging)
    //   if (touchesRef.current.isDragging) {
    //     console.log('click')
    //     e.stopPropagation()
    //     e.preventDefault()
    //   }
    // }}
    >
      {children}
      {safeArea === true && <SafeArea />}
    </div>
  )

  if (!portal) {
    return Node
  }
  return createPortal(Node, portal || document.getElementById('root'))
}

export default forwardRef(Float)
