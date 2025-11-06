import React, { useState, useEffect } from 'react'

// 内库使用-start
import AssetUtil from './../../../../utils/AssetUtil'
import DOMUtil from './../../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { AssetUtil } from 'lyrixi-mobile'
测试使用-end */

// 图片显示
const Img = ({ fileUrl }) => {
  const [backgroundImage, setBackGroundImage] = useState('')

  useEffect(() => {
    setBackGroundImage('')
    AssetUtil.loadImage(fileUrl, {
      onSuccess: () => {
        setBackGroundImage(fileUrl)
      },
      onError: () => {
        setBackGroundImage('error')
      }
    })
  }, [fileUrl])

  return (
    <div
      className={DOMUtil.classNames(
        'lyrixi-image-item-img',
        backgroundImage === 'lyrixi-error' ? 'lyrixi-error' : null
      )}
      style={{ backgroundImage: backgroundImage === 'error' ? '' : `url(${backgroundImage})` }}
    ></div>
  )
}

export default Img
