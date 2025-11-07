import React from 'react'

// 内库使用-start
import Loading from './../../Loading'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { Loading } from 'lyrixi-mobile'
测试使用-end */

// 上传中图标
const Uploading = ({ uploading, item, className }) => {
  // 上传中node
  function getUploadingNode(item) {
    if (typeof uploading === 'function') {
      return uploading(item)
    }
    if (React.isValidElement(uploading)) {
      return uploading
    }
    return (
      <div className="lyrixi-attach-uploading-icon">
        <Loading.Ouroboros className="lyrixi-attach-uploading-icon-loading" />
      </div>
    )
  }

  return (
    <div className={DOMUtil.classNames('lyrixi-attach-uploading', className)}>
      {getUploadingNode(item)}
    </div>
  )
}

export default Uploading
