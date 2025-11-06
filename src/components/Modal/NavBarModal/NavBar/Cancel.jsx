import React from 'react'

// 内库使用-start
import NavBar from './../../../NavBar'
// 内库使用-end

/* 测试使用-start
import { NavBar } from 'lyrixi-mobile'
测试使用-start */

const Cancel = ({ text, onClick }) => {
  // 点击取消
  function handleClick(e) {
    e.stopPropagation()
    if (onClick) onClick(e)
  }

  if (text) {
    return <NavBar.Button onClick={handleClick}>{text}</NavBar.Button>
  }

  return (
    <NavBar.Button
      icon="lyrixi-icon-close"
      iconSize={20}
      iconPadding={8}
      iconRadius="100%"
      iconBackgroundColor="secondary"
      onClick={handleClick}
    />
  )
}

export default Cancel
