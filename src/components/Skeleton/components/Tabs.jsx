import React, { forwardRef } from 'react'
import Block from './Block'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const Tabs = ({ length, animated = true, tabClassName, tabStyle, ...props }, ref) => {
  return (
    <div className="lyrixi-skeleton-tabs" ref={ref} {...props}>
      {Array.from({ length: length || 4 }).map((_, index) => (
        <Block
          key={index}
          animated={animated}
          style={tabStyle}
          className={DOMUtil.classNames(
            'lyrixi-skeleton-tab',
            'lyrixi-skeleton-block-darken',
            tabClassName
          )}
        />
      ))}
    </div>
  )
}

export default forwardRef(Tabs)
