import React, { forwardRef } from 'react'

// 内部组件导出
import uploadList from './utils/uploadList'

// 内部组件
import Browser from './Browser'

// 照片上传
function AttachUploader(
  {
    // Value & Display Value
    list = [], // [{fileUrl: '全路径', filePath: '目录/年月/照片名.jpg', status: 'choose|uploading|error|success'}]
    maxCount,
    maxChooseCount,
    sourceType,
    maxSize,

    // Status
    async = false, // 是否异步上传(目前只有app支持)
    reUpload = true, // 支持重新上传
    allowClear = true,
    allowChoose = true,

    // Style
    className,
    uploadPosition,

    // Element
    uploadRender, // 上传按钮覆盖的dom
    uploadingRender,
    itemRender,

    // Preview Server
    previewPortal,
    previewServerUrl,
    previewServerSourceType,
    /*
    格式化上传结果
    入参:
    {platform: 'browser', uploadItem: item, result: result}
    返回格式:
    /*
      {
        fileUrl: "全路径(必传)",
        filePath: "入库路径(必传)",
        fileName: "文件名(必传)",
        fileSize: "文件大小(字节)",
      },
    */
    getUploadUrl,
    formatHeaders,
    formatPayload,
    formatResponse,

    // Events
    onBeforeChoose,
    // onChoose,
    onFileChange,
    onUpload,
    onChange,
    onPreview
  },
  ref
) {
  // 公共属性对象，所有平台组件共享
  const commonProps = {
    // Value & Display Value
    list,
    maxCount,
    maxChooseCount,
    sourceType,
    maxSize,
    // Status
    async,
    reUpload,
    allowClear,
    allowChoose,
    // Style
    className,
    uploadPosition,
    // Element
    uploadRender,
    uploadingRender,
    itemRender,
    // Preview Server
    previewPortal,
    previewServerUrl,
    previewServerSourceType,
    getUploadUrl,
    formatHeaders,
    formatPayload,
    formatResponse,
    // Events
    onBeforeChoose,
    onFileChange,
    onUpload,
    onChange,
    onPreview
  }

  return <Browser ref={ref} {...commonProps} />
}

AttachUploader.uploadList = uploadList

export default forwardRef(AttachUploader)
