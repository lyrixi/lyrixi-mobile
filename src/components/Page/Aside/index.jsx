import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import SafeArea from './../../SafeArea'
// 内库使用-end

/* 测试使用-start
import { DOMUtil,SafeArea } from 'lyrixi-mobile'
测试使用-end */

const Aside = forwardRef(
  (
    {
      // Status
      safeArea,

      // Style
      className,
      style,

      // Elements
      children
    },
    ref
  ) => {
    const rootRef = useRef(null)

    // 节点
    useImperativeHandle(ref, () => {
      return {
        element: rootRef.current,
        getElement: () => rootRef.current
      }
    })

    return (
      <aside
        ref={rootRef}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-page-aside', className)}
      >
        {/* Element: Children */}
        {children}

        {/* Element: SafeArea */}
        {safeArea === true && <SafeArea />}
      </aside>
    )
  }
)

export default Aside
