import React, { useRef, useImperativeHandle, forwardRef } from 'react'

// 内库使用-start
import DOMUtil from './../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const Flex = forwardRef(
  (
    {
      // Style
      style,
      className,

      direction = 'horizontal', // 'horizontal', 'vertical'
      wrap = false, // 是否换行
      align = 'start', // 'start', 'end', 'center', 'between', 'around', 'evenly'
      gap = 's', // Number | 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'

      // Element
      children
    },
    ref
  ) => {
    // Expose
    const rootRef = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => {
          return rootRef.current
        }
      }
    })

    return (
      <div
        ref={rootRef}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-flex', className)}
      >
        {/* Element: Children */}
        {children}
      </div>
    )
  }
)

export default Flex
