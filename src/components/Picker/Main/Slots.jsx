import React, { useRef, forwardRef, useEffect } from 'react'
import getTranslateValue from './utils/getTranslateValue'

// 内库使用-start
import MathUtil from './../../../utils/MathUtil'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { MathUtil, DOMUtil } from 'lyrixi-mobile'
测试使用-end */

let Lists = forwardRef(
  (
    {
      // Value & Display Value
      lists,

      // Element
      cellHeight = 44,

      // Events
      onDragEnd // 拖动结束返回项数
    },
    ref
  ) => {
    // 标识是否正在拖动，用于解决鼠标移动时，没有开始拖动，则不处理
    const isDrawingRef = useRef(false)

    let touchesRef = useRef({
      startX: 0,
      startY: 0,
      currentX: 0,
      currentY: 0,
      endX: 0,
      endY: 0,
      startTimeStamp: 0,
      duration: 0,
      diffX: 0,
      diffY: 0,
      posY: 0,
      currentPosY: 0,
      direction: null
    })

    const slotRef = useRef({
      slotElement: null,
      slotIndex: null,
      slotHeight: null
    })

    useEffect(() => {
      isDrawingRef.current = false
      // eslint-disable-next-line
    }, [])

    // 触摸事件
    function handleTouchStart(e) {
      e.stopPropagation()

      // 鼠标开始拖动
      isDrawingRef.current = true

      // 解决拖动时影响document弹性
      if (e.type === 'touchstart') {
        e.currentTarget.addEventListener('touchmove', DOMUtil.preventDefault, false)
      }

      slotRef.current.slotElement = e.target
      slotRef.current.slotIndex = slotRef.current.slotElement.getAttribute('slotindex')
      slotRef.current.slotHeight = (lists[slotRef.current.slotIndex].length - 1) * cellHeight

      const pos = DOMUtil.getEventPosition(e)
      touchesRef.current.startX = pos.clientX
      touchesRef.current.startY = pos.clientY
      touchesRef.current.posY = Number(
        getTranslateValue(slotRef.current.slotElement.style.transform) || 0
      )

      // 清除动画
      slotRef.current.slotElement.style.webkitTransitionDuration = 0

      // 记录点击时间
      touchesRef.current.startTimeStamp = e.timeStamp
    }
    function handleTouchMove(e) {
      e.stopPropagation()

      // 鼠标移动时，如果没有开始拖动，则不处理
      if (!isDrawingRef.current) {
        return
      }

      const pos = DOMUtil.getEventPosition(e)
      touchesRef.current.currentY = pos.clientY
      touchesRef.current.diffY = touchesRef.current.startY - touchesRef.current.currentY
      touchesRef.current.currentPosY = touchesRef.current.posY - touchesRef.current.diffY

      if (slotRef?.current?.slotElement) {
        slotRef.current.slotElement.style.webkitTransform = `translateY(${touchesRef.current.currentPosY}px)`
      }
    }
    function handleTouchEnd(e) {
      e.stopPropagation()

      // 鼠标结束拖动
      isDrawingRef.current = false

      // 解除对move时的弹性对当前div的锁定
      if (e.type === 'touchend') {
        e.currentTarget.removeEventListener('touchmove', DOMUtil.preventDefault, false)
      }

      const pos = DOMUtil.getEventPosition(e)
      touchesRef.current.endX = pos.clientX
      touchesRef.current.endY = pos.clientY
      touchesRef.current.diffX = touchesRef.current.startX - touchesRef.current.endX
      touchesRef.current.diffY = touchesRef.current.startY - touchesRef.current.endY
      // 判断是否是tap
      if (Math.abs(touchesRef.current.diffX) < 6 && Math.abs(touchesRef.current.diffY) < 6) {
        return
      }

      // 计算拖动时间
      touchesRef.current.duration = e.timeStamp - touchesRef.current.startTimeStamp

      // 惯性值计算
      let inertia = MathUtil.inertia({
        cellSize: cellHeight,
        distance: touchesRef.current.diffY,
        duration: touchesRef.current.duration,
        currentPosition: touchesRef.current.currentPosY,
        minPosition: 0,
        maxPosition: slotRef.current.slotHeight
      })

      // 如果touchesRef.current.diffY为负数, 则向上拉动, translateY向上为负数
      let position = -inertia.position

      // 滚动到指定位置
      slotRef.current.slotElement.style.webkitTransitionDuration = inertia.duration + 'ms'
      slotRef.current.slotElement.posY = position
      slotRef.current.slotElement.style.webkitTransform = `translateY(${position}px)`

      // 更新值
      onDragEnd &&
        onDragEnd({
          slotIndex: slotRef.current.slotIndex,
          rowIndex: inertia.index
        })
    }

    return (
      <div
        ref={ref}
        className="lyrixi-picker-slotbox"
        // Events
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
      >
        {(lists || []).map((list, index) => {
          return (
            <ul
              key={index}
              // 槽数
              slotindex={index}
              className="lyrixi-picker-slot lyrixi-text-center"
            >
              {(list || []).map((item, itemIndex) => {
                return <li key={item.id || itemIndex}>{item.name}</li>
              })}
            </ul>
          )
        })}
      </div>
    )
  }
)

export default Lists
