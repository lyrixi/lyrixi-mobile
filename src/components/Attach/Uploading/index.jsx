import React from 'react'

// 内库使用-start
import Loading from './../../Loading'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { Loading } from 'lyrixi-mobile'
测试使用-end */

// 上传中图标
const Uploading = ({ uploadingRender, uploadingType, className }) => {
  // 上传中node
  function getUploadingNode() {
    if (typeof uploadingRender === 'function') {
      return uploadingRender({ uploadingType })
    }
    return (
      <div className="lyrixi-attach-uploading-icon">
        <Loading.Ouroboros className="lyrixi-attach-uploading-icon-loading" />
      </div>
    )
  }

  return (
    <div className={DOMUtil.classNames('lyrixi-attach-uploading', className)}>
      {getUploadingNode()}
    </div>
  )
}

export default Uploading
