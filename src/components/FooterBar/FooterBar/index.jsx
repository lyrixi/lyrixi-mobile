import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// 内库使用-start
import DOMUtil from './../../../utils/DOMUtil'
import List from './List'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

const Footer = forwardRef(
  (
    {
      // Style
      className,
      style,

      // Value & Display Value
      list, // 列表数据

      // Element
      children
    },
    ref
  ) => {
    const rootRef = useRef(null)

    // Expose tools
    useImperativeHandle(ref, () => {
      return {
        rootDOM: rootRef.current,
        getRootDOM: () => rootRef.current
      }
    })

    return (
      <footer
        ref={rootRef}
        // Style
        style={style}
        className={DOMUtil.classNames('lyrixi-footerbar', className)}
      >
        {/* Element: List */}
        {list?.length ? <List list={list} /> : null}
        {/* Element: Children */}
        {children}
      </footer>
    )
  }
)

export default Footer
