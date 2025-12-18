import React from 'react'

// 内库使用-start
import Icon from './../../../Icon'
import NavBar from './../../../NavBar'
// 内库使用-end

/* 测试使用-start
import { Icon, NavBar } from 'lyrixi-mobile'
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
    <NavBar.Button onClick={handleClick}>
      <Icon
        className="lyrixi-iconfont-close"
        size={12}
        style={{ padding: 4 }}
        radius="100%"
        backgroundColor="secondary"
      />
    </NavBar.Button>
  )
}

export default Cancel
