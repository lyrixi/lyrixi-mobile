import React, { forwardRef, useImperativeHandle, useRef } from 'react'

import Cancel from './Cancel'
import Ok from './Ok'

import type { NavBarModalNavBarProps, NavBarModalNavBarRef } from './types'

// 内库使用-start
import NavBar from './../../../NavBar'
// 内库使用-end

/* 测试使用-start
import { NavBar } from 'lyrixi-mobile'
测试使用-end */

const Head = forwardRef<NavBarModalNavBarRef, NavBarModalNavBarProps>(
  (
    {
      // Style
      style,
      className,

      // Elements
      title,
      okNode,
      okVisible,
      okPosition = 'right',
      cancelNode,
      cancelVisible = true,
      cancelPosition = 'left',

      // Events
      onOk,
      onCancel
    },
    ref
  ) => {
    const barRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => ({
      element: barRef.current,
      getElement: () => barRef.current
    }))

    let CancelNode = cancelVisible ? <Cancel onClick={onCancel}>{cancelNode}</Cancel> : null

    let OkNode = okVisible ? <Ok onClick={onOk}>{okNode}</Ok> : null

    // 带按钮
    return (
      <NavBar ref={barRef} style={style} className={className}>
        {/* 取消按钮 */}
        {cancelPosition === 'left' && CancelNode}
        {okPosition === 'left' && OkNode}

        {/* 标题 */}
        <NavBar.Title>{title}</NavBar.Title>

        {/* 确认 */}
        {cancelPosition === 'right' && CancelNode}
        {okPosition === 'right' && OkNode}
      </NavBar>
    )
  }
)
export type { NavBarModalNavBarProps, NavBarModalNavBarRef } from './types'

export default Head
