import React, { useRef, useEffect, useState } from 'react'
import getAnimationStyle from './getAnimationStyle'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// AccordionTransition组件
const AccordionTransition = ({ open, children, minHeight = 0 }) => {
  const innerRef = useRef(null)
  const [animationStyle, setAnimationStyle] = useState({})

  // 计算并更新动画样式
  useEffect(() => {
    if (innerRef.current) {
      const contentHeight = innerRef.current.scrollHeight
      const style = getAnimationStyle(contentHeight, minHeight, open)
      setAnimationStyle(style)
    }
  }, [open, minHeight, children])

  return (
    <div
      className={DOMUtil.classNames(
        'lyrixi-accordion-transition',
        open ? 'lyrixi-expanded' : 'lyrixi-collapsed'
      )}
      style={animationStyle}
    >
      <div className="lyrixi-accordion-transition-inner" ref={innerRef}>
        {children}
      </div>
    </div>
  )
}

export default AccordionTransition
