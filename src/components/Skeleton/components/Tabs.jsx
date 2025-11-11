import React, { forwardRef } from 'react'
import Block from './Block'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const Tabs = (
  {
    // Value & Display Value
    length,

    // Status
    animated = true,

    // Style
    className,
    style,
    tabClassName,
    tabStyle
  },
  ref
) => {
  return (
    <div
      ref={ref}
      // Style
      style={style}
      className={DOMUtil.classNames('lyrixi-skeleton-tabs', className)}
    >
      {Array.from({ length: length || 4 }).map((_, index) => (
        <Block
          key={index}
          // Status
          animated={animated}
          // Style
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
