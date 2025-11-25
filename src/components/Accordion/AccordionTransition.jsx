import React, { useEffect, useRef } from 'react'

// AccordionTransition组件
const AccordionTransition = ({ open, children }) => {
  const rootRef = useRef(null)
  // 显示动画计时器
  const enterTimerRef = useRef(null)
  // 隐藏动画计时器
  const leaveTimerRef = useRef(null)
  // 动画持续时间
  const ANIMATION_DURATION = 300

  useEffect(() => {
    beforeEnter()
    if (open) enter()
    return () => {
      clearTimeout(enterTimerRef.current)
      clearTimeout(leaveTimerRef.current)
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    setOpen(open)
    // eslint-disable-next-line
  }, [open])

  // 触发显示或隐藏
  const setOpen = (show) => {
    clearTimeout(enterTimerRef.current)
    clearTimeout(leaveTimerRef.current)
    if (show) {
      beforeEnter()
      enter()
    } else {
      beforeLeave()
      leave()
    }
  }

  // 显示前
  const beforeEnter = () => {
    const el = rootRef.current
    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom
    el.dataset.oldOverflow = el.style.overflow
    el.style.height = '0'
    el.style.paddingTop = 0
    el.style.paddingBottom = 0
  }

  // 显示: 显示并设置高度
  const enter = () => {
    const el = rootRef.current
    el.style.display = 'block'
    if (el.scrollHeight !== 0) {
      el.style.height = `${el.scrollHeight}px`
      el.style.paddingTop = el.dataset.oldPaddingTop
      el.style.paddingBottom = el.dataset.oldPaddingBottom
    } else {
      el.style.height = ''
      el.style.paddingTop = el.dataset.oldPaddingTop
      el.style.paddingBottom = el.dataset.oldPaddingBottom
    }
    el.style.overflow = 'hidden'
    enterTimerRef.current = setTimeout(afterEnter, ANIMATION_DURATION)
  }

  // 显示后: 重置样式
  const afterEnter = () => {
    const el = rootRef.current
    el.style.display = 'block'
    el.style.height = ''
    el.style.overflow = el.dataset.oldOverflow
  }

  // 隐藏前
  const beforeLeave = () => {
    const el = rootRef.current
    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom
    el.dataset.oldOverflow = el.style.overflow
    el.style.display = 'block'
    if (el.scrollHeight !== 0) {
      el.style.height = `${el.scrollHeight}px`
    }
    el.style.overflow = 'hidden'
  }

  // 隐藏: 设置高度为0
  const leave = () => {
    const el = rootRef.current
    if (el.scrollHeight !== 0) {
      el.style.height = 0
      el.style.paddingTop = 0
      el.style.paddingBottom = 0
    }
    leaveTimerRef.current = setTimeout(afterLeave, ANIMATION_DURATION)
  }

  // 隐藏后: 重置样式
  const afterLeave = () => {
    const el = rootRef.current
    if (!el) return
    el.style.display = 'none'
    el.style.height = ''
    el.style.overflow = el.dataset.oldOverflow
    el.style.paddingTop = el.dataset.oldPaddingTop
    el.style.paddingBottom = el.dataset.oldPaddingBottom
  }

  return (
    <div className="lyrixi-accordion-transition" style={{ overflow: 'hidden' }} ref={rootRef}>
      {children}
    </div>
  )
}

export default AccordionTransition
