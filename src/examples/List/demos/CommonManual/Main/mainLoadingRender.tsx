import React from 'react'
import { Skeleton, Loading } from 'lyrixi-mobile'

const LoadingView = Loading as unknown as React.FC<Record<string, unknown>>

// Loading样式
const mainLoadingRender = ({ action }: { action?: string }) => {
  // 初始化和重试显示骨架
  if (action === 'load' || action === 'retry') {
    return <Skeleton.List paragraphLength={1} divider="line" animated={false} />
  }
  // 重新加载显示转圈
  if (action === 'reload') {
    return <LoadingView portal={document.getElementById('root') || document.body} />
  }
  return null
}

export default mainLoadingRender
