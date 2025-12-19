import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
// 内库使用-end

/* 测试使用-start
import { DOMUtil, SafeArea } from 'lyrixi-mobile'
测试使用-end */

// [safeArea] true: 自动安全区; false: 强制取消安全区
const Page = forwardRef(
  (
    {
      // Status
      safeArea,

      // Style
      full = true,
      layout,
      animation,
      style,
      className,

      // Element
      children
    },
    ref
  ) => {
    const rootRef = useRef(null)

    // Expose
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => rootRef.current
      }
    })

    return (
      <section
        ref={rootRef}
        // Style
        style={style}
        className={DOMUtil.classNames(
          'lyrixi-page',
          full ? 'lyrixi-full' : '',
          layout ? `lyrixi-flex-${layout}` : '',
          className
        )}
        data-animation={animation}
      >
        {/* Element: Children */}
        {children}

        {/* Element: SafeArea */}
        {safeArea === true && <SafeArea />}
      </section>
    )
  }
)

export default Page
