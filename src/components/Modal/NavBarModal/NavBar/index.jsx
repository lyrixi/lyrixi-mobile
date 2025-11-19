import React, { forwardRef } from 'react'
import Cancel from './Cancel'
import Ok from './Ok'

// 内库使用-start
import NavBar from './../../../NavBar'
// 内库使用-end

/* 测试使用-start
import { NavBar } from 'lyrixi-mobile'
测试使用-start */

const Head = forwardRef(({ title, ok, okVisible, onOk, cancel, cancelVisible, onCancel }, ref) => {
  // 只显示标题
  if (!okVisible && !cancelVisible) {
    return (
      <NavBar ref={ref}>
        {/* 标题 */}
        <NavBar.Title>{title}</NavBar.Title>
      </NavBar>
    )
  }

  // 带按钮
  return (
    <NavBar ref={ref}>
      {/* 取消按钮 */}
      <Cancel visible={cancelVisible} onClick={onCancel}>
        {cancel}
      </Cancel>

      {/* 标题 */}
      <NavBar.Title>{title}</NavBar.Title>

      {/* 确认 */}
      <Ok visible={okVisible} onClick={onOk}>
        {ok}
      </Ok>
    </NavBar>
  )
})

export default Head
