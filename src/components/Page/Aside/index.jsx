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
      safeArea,
      children,
      // 其它属性
      className,
      ...props
    },
    ref
  ) => {
    const rootRef = useRef(null)

    // 节点
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    return (
      <aside
        {...props}
        className={DOMUtil.classNames('lyrixi-page-aside', className)}
        ref={rootRef}
      >
        {children}
        {safeArea === true && <SafeArea />}
      </aside>
    )
  }
)

export default Aside
