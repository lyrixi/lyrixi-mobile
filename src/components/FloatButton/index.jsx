import React, { useImperativeHandle, useRef, forwardRef } from 'react'
import { createPortal } from 'react-dom'
import getPosition from './AssistiveTouch/getPosition'
import snapToEdge from './AssistiveTouch/snapToEdge'
import getItemById from './getItemById'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
import SafeArea from './../SafeArea'
import ActionSheet from './../ActionSheet'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, SafeArea, ActionSheet } from 'lyrixi-mobile'
测试使用-start */

// 悬浮按钮
function FloatButton(
  {
    safeArea = true,
    portal,
    draggable,
    gap = { top: 8, right: 8, bottom: 8, left: 8 },
    list,
    onChange,
    onDragEnd,
    ...props
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
      rootDOM: rootRef.current,
      getRootDOM: () => rootRef.current
    }
  })

  // 获取图标
  function getIconNode(item) {
    if (typeof item?.iconRender === 'function') {
      return item.iconRender({ item, className: 'float-button-icon' })
    }
    return null
  }

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

    if (!touchesRef.current.isDragging) return
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

    // 解除对move时的弹性对当前div的锁定
    e.currentTarget.removeEventListener('touchmove', DOMUtil.preventDefault, false)

    // 获取点击项的id
    let itemId = e.target.classList.contains('.lyrixi-float-button')
      ? e.target?.id
      : e.target.closest('.lyrixi-float-button')?.id
    let item = getItemById(list, itemId)

    if (!touchesRef.current.isDragging) {
      item && onChange && onChange(item)
      return
    }
    touchesRef.current.isDragging = false

    // 点击时不要修改位置
    let endX = e?.clientX || e?.changedTouches?.[0]?.clientX
    let endY = e?.clientY || e?.changedTouches?.[0]?.clientY
    let diffX = touchesRef.current.startX - endX
    let diffY = touchesRef.current.startY - endY
    if (Math.abs(diffX) < 5 && Math.abs(diffY) < 5) {
      item && onChange && onChange(item)
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

  // 分组和非分组
  let groupList = []
  let unGroupList = []
  if (!Array.isArray(list) || !list.length) return null
  for (let item of list) {
    if (item.group === false) {
      unGroupList.push(item)
    } else {
      groupList.push(item)
    }
  }

  // DOM
  let Node = (
    <div
      ref={rootRef}
      {...props}
      className={DOMUtil.classNames('lyrixi-float-button-container', props?.className)}
      onTouchStart={draggable ? handleTouchStart : null}
      onTouchMove={draggable ? handleTouchMove : null}
      onTouchEnd={draggable ? handleTouchEnd : null}
    >
      {list.map((item, index) => {
        // 不能没有id
        if (!item?.id) {
          item.id = '' + index
        }

        // 分组
        if (Array.isArray(item.children) && item.children.length) {
          return (
            <ActionSheet.Combo
              key={item.id || index}
              id={item.id}
              list={item.children}
              className={DOMUtil.classNames('lyrixi-float-button', item.className)}
              style={item.style}
              onChange={onChange}
              comboRender={({ comboRef, onClick }) => {
                return (
                  <div ref={comboRef} onClick={onClick}>
                    {/* icon更多class：float-button-icon-more */}
                    {getIconNode(item)}
                    {item.name ? (
                      <div className="lyrixi-float-button-label">{item.name}</div>
                    ) : null}
                  </div>
                )
              }}
            />
          )
        }
        // 未分组
        else {
          return (
            <div
              key={item.id || index}
              id={item.id}
              className={DOMUtil.classNames('lyrixi-float-button', item.className)}
              style={item.style}
              onClick={
                draggable
                  ? undefined
                  : (e) => {
                      onChange && onChange(item)
                      e.stopPropagation()
                    }
              }
            >
              {getIconNode(item)}
              {item.name ? <div className="lyrixi-float-button-label">{item.name}</div> : null}
            </div>
          )
        }
      })}
      {safeArea === true && <SafeArea />}
    </div>
  )

  if (!portal) {
    return Node
  }
  return createPortal(Node, portal || document.getElementById('root'))
}

export default forwardRef(FloatButton)
