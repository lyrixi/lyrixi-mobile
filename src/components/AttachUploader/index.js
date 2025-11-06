import React, { forwardRef } from 'react'
import Lyrixi from './Lyrixi'
import Browser from './Browser'

// 内库使用-start
import Bridge from './../../utils/Bridge'
// 内库使用-end

/* 测试使用-start
import { Bridge } from 'lyrixi-mobile'
测试使用-end */

// 文件上传
function Main({ timeout, ...props }, ref) {
  // 优先调用客户端能力
  if (Bridge.platform === 'lyrixi') {
    return <Lyrixi timeout={timeout} {...props} ref={ref} />
  }

  return <Browser {...props} ref={ref} />
}

export default forwardRef(Main)
