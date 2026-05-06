import React from 'react'

import type { UploadingProps } from './types'

// 内库使用-start
import Loading from './../../Loading'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

/* 测试使用-start
import { Loading } from 'lyrixi-mobile'
测试使用-end */

export type { UploadingProps } from './types'

// 上传中图标
const Uploading = ({ uploadingType, className, uploadingRender }: UploadingProps) => {
  // 上传中node
  function renderUploading() {
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
      {renderUploading()}
    </div>
  )
}

export default Uploading
