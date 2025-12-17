import React from 'react'

// 内库使用-start
import NavBar from './../../../NavBar'
// 内库使用-end

/* 测试使用-start
import { NavBar } from 'lyrixi-mobile'
测试使用-start */

const Cancel = ({ onClick, children }) => {
  // 点击取消
  function handleClick(e) {
    e.stopPropagation()
    if (onClick) onClick(e)
  }

  if (children) {
    return <NavBar.Button onClick={handleClick}>{children}</NavBar.Button>
  }

  return (
    <NavBar.Button
      iconClassName="lyrixi-iconfont-close"
      iconSize={20}
      sizeEqual
      iconPadding={8}
      iconRadius="100%"
      iconBackgroundColor="secondary"
      onClick={handleClick}
    />
  )
}

export default Cancel
