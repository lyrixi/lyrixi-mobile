import React, { forwardRef } from 'react'
import Cancel from './Cancel'
import Ok from './Ok'

// 内库使用-start
import NavBar from './../../../NavBar'
// 内库使用-end

/* 测试使用-start
import { NavBar } from 'lyrixi-mobile'
测试使用-start */

const Head = forwardRef(
  (
    {
      title,
      okNode,
      okVisible,
      okPosition = 'right',
      onOk,
      cancelNode,
      cancelVisible = true,
      cancelPosition = 'left',
      onCancel
    },
    ref
  ) => {
    // 只显示标题
    if (!okVisible && !cancelVisible) {
      return (
        <NavBar ref={ref}>
          {/* 标题 */}
          <NavBar.Title>{title}</NavBar.Title>
        </NavBar>
      )
    }

    let CancelNode = cancelVisible ? <Cancel onClick={onCancel}>{cancelNode}</Cancel> : null

    let OkNode = okVisible ? <Ok onClick={onOk}>{okNode}</Ok> : null

    console.log('cancelNode', cancelNode)
    // 带按钮
    return (
      <NavBar ref={ref}>
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

export default Head
