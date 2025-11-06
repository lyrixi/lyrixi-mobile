// 第三方库导入
import React, { useEffect } from 'react'

function Content({ data, onClick }) {
  useEffect(() => {
    // 初始化
    // eslint-disable-next-line
  }, [data])

  return <div onClick={onClick}>Content</div>
}

export default Content
