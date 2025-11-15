import React from 'react'

// 内库使用-start
import Loading from './../../Loading'
// 内库使用-end

/* 测试使用-start
import { Loading } from 'lyrixi-mobile'
测试使用-end */

// 上传中图标
const Uploading = ({
  // Value & Display Value
  item,
  // Element
  uploading
}) => {
  // 上传中node
  function getUploadingNode(item) {
    if (typeof uploading === 'function') {
      return uploading(item)
    }
    if (React.isValidElement(uploading)) {
      return uploading
    }
    return (
      <div className="lyrixi-media-uploading-icon">
        <Loading.Ouroboros className="lyrixi-media-uploading-icon-loading" />
      </div>
    )
  }

  return <div className="lyrixi-media-uploading">{getUploadingNode(item)}</div>
}

export default Uploading
