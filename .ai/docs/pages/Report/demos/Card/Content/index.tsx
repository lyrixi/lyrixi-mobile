// 第三方库导入
import React, { useEffect } from 'react'

// 内部组件导入
import type { CardContentProps } from './types'

function Content({ data, onClick }: CardContentProps) {
  useEffect(() => {
    // 初始化
    // eslint-disable-next-line
  }, [data])

  return <div onClick={onClick}>Content</div>
}

export default Content
