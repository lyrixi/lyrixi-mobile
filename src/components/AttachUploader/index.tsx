import React, { forwardRef } from 'react'

// 内部组件导出
import uploadList from './utils/uploadList'

// 内部组件
import Browser from './Browser'

import type { AttachRef } from './../Attach/types'
import type { AttachUploaderProps } from './types'

// 照片上传
const AttachUploader = forwardRef<AttachRef, AttachUploaderProps>(function AttachUploader(props, ref) {
  const {
    list = [],
    maxCount,
    maxChooseCount,
    extension,
    sourceType: sourceTypeProp,
    maxSize,
    async = false,
    reUpload = true,
    allowClear = true,
    allowChoose = true,
    className,
    uploadPosition,
    uploadRender,
    uploadingRender,
    itemRender,
    previewPortal,
    previewServerUrl,
    previewServerSourceType,
    getUploadUrl,
    formatHeaders,
    formatPayload,
    formatResponse,
    onBeforeChoose,
    onChange,
    onPreview
  } = props
  const sourceType = sourceTypeProp ?? extension
  return (
    <Browser
      ref={ref}
      list={list}
      maxCount={maxCount}
      maxChooseCount={maxChooseCount}
      sourceType={sourceType}
      maxSize={maxSize}
      async={async}
      reUpload={reUpload}
      allowClear={allowClear}
      allowChoose={allowChoose}
      className={className}
      uploadPosition={uploadPosition}
      uploadRender={uploadRender}
      uploadingRender={uploadingRender}
      itemRender={itemRender}
      previewPortal={previewPortal}
      previewServerUrl={previewServerUrl}
      previewServerSourceType={previewServerSourceType}
      getUploadUrl={getUploadUrl}
      formatHeaders={formatHeaders}
      formatPayload={formatPayload}
      formatResponse={formatResponse}
      onBeforeChoose={onBeforeChoose}
      onChange={onChange}
      onPreview={onPreview}
    />
  )
})

;(AttachUploader as unknown as { uploadList: typeof uploadList }).uploadList = uploadList

export default AttachUploader
