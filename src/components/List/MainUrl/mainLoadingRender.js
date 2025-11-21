import React from 'react'

// 内库使用-start
import Skeleton from './../../Skeleton'
import Loading from './../../Loading'
// 内库使用-end

/* 测试使用-start
import { Skeleton, Loading } from 'lyrixi-mobile'
测试使用-end */

// Loading样式
const mainLoadingRender = ({ action }) => {
  // 初始化和重试显示骨架
  if (action === 'load' || action === 'retry') {
    return <Skeleton.List paragraphLength={1} divider="line" animated={false} />
  }
  // 重新加载显示转圈
  if (action === 'reload') {
    return <Loading portal={document.getElementById('root') || document.body} />
  }
  return null
}

export default mainLoadingRender
