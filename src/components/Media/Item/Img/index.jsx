import React, { useState, useEffect } from 'react'

// 内库使用-start
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { DOMUtil } from 'lyrixi-mobile'
测试使用-end */

// 图片显示
const Img = ({
  // Value & Display Value
  fileUrl
}) => {
  const [loadStatus, setLoadStatus] = useState('loading') // 'loading' | 'success' | 'error'

  useEffect(() => {
    // 当 fileUrl 改变时，重置加载状态
    setLoadStatus('loading')
  }, [fileUrl])

  const handleLoad = () => {
    setLoadStatus('success')
  }

  const handleError = () => {
    setLoadStatus('error')
  }

  return (
    <img
      src={fileUrl}
      alt=""
      // Style
      className={DOMUtil.classNames(
        'lyrixi-media-item-img',
        loadStatus === 'error' ? 'lyrixi-error' : null
      )}
      // Events
      onLoad={handleLoad}
      onError={handleError}
    />
  )
}

export default Img
