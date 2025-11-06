import React, { forwardRef } from 'react'
import Cancel from './Cancel'
import Ok from './Ok'

// 内库使用-start
import NavBar from './../../../NavBar'
// 内库使用-end

/* 测试使用-start
import { NavBar } from 'lyrixi-mobile'
测试使用-start */

const Head = forwardRef(({ title, ok, onOk, cancel, onCancel }, ref) => {
  // 只显示标题
  if (cancel === null && ok === null) {
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
      <Cancel text={cancel} onClick={onCancel} />

      {/* 标题 */}
      <NavBar.Title>{title}</NavBar.Title>

      {/* 确认 */}
      <Ok text={ok} onClick={onOk} />
    </NavBar>
  )
})

export default Head
