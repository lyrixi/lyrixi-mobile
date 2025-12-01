import React from 'react'

// 内库使用-start
import NavBar from './../../../NavBar'
import LocaleUtil from './../../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { NavBar, LocaleUtil } from 'lyrixi-mobile'
测试使用-start */

const Ok = ({ total, children, onClick }) => {
  // 点击确定
  function handleOkClick(e) {
    e.stopPropagation()
    if (onClick) onClick(e)
  }

  return (
    <NavBar.Button className="lyrixi-primary" onClick={handleOkClick}>
      {children || LocaleUtil.locale('确定', 'lyrixi.ok')}
      {typeof total === 'number' && `(${total})`}
    </NavBar.Button>
  )
}

export default Ok
