import React, { type ReactNode } from 'react'

// 内库使用-start
import Loading from './../../Loading'
import DOMUtil from './../../../utils/DOMUtil'
// 内库使用-end

import type { MediaListItem } from './../types'

/* 测试使用-start
import { Loading, DOMUtil } from 'lyrixi-mobile'
测试使用-end */

export interface MediaUploadingProps {
  uploadingType: string
  item?: MediaListItem
  className?: string
  uploadingRender?: (ctx: MediaListItem & { uploadingType: string }) => ReactNode
}

// 上传中图标
const Uploading = ({
  uploadingType,
  item = {},
  // Style
  className,
  // Element
  uploadingRender
}: MediaUploadingProps) => {
  // 上传中node
  function renderUploading() {
    if (typeof uploadingRender === 'function') {
      return uploadingRender({ ...item, uploadingType })
    }
    return (
      <div className="lyrixi-media-uploading-icon">
        <Loading.Ouroboros className="lyrixi-media-uploading-icon-loading" />
      </div>
    )
  }

  return (
    <div className={DOMUtil.classNames('lyrixi-media-uploading', className)}>
      {renderUploading()}
    </div>
  )
}

export default Uploading
