import React from 'react'
import { Skeleton, Loading } from 'seedsui-react'

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

