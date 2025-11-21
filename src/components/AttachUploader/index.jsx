import React, { forwardRef } from 'react'

// 内部组件导出
import uploadList from './utils/uploadList'

// 内部组件
import Browser from './Browser'
import Lyrixi from './Lyrixi'

// 内库使用-start
import Bridge from './../../utils/Bridge'
// 内库使用-end

/* 测试使用-start
import { Bridge } from 'lyrixi-mobile'
测试使用-end */

// 照片上传
function AttachUploader(
  {
    // Value & Display Value
    list = [], // [{fileThumbnail: '全路径', fileUrl: '全路径', filePath: '目录/年月/照片名.jpg', status: 'choose|uploading|fail|success', children: node}]
    count = 5,
    sourceType,
    maxSize,
    uploadDir = 'default',
    chooseExtraParams, // 仅对客户端有效

    // Status
    async = false, // 是否异步上传(目前只有app支持)
    reUpload = true, // 支持重新上传
    allowClear = true,
    allowChoose = true,
    timeout,

    // Style
    className,
    uploadPosition,

    // Element
    uploadRender, // 上传按钮覆盖的dom
    uploadingRender,

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
    formatUploadedItem,
    getUploadUrl,
    getUploadPayload,

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
    count,
    sourceType,
    maxSize,
    uploadDir,
    chooseExtraParams,
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
    // Preview Server
    previewPortal,
    previewServerUrl,
    previewServerSourceType,
    formatUploadedItem,
    getUploadUrl,
    getUploadPayload,
    // Events
    onBeforeChoose,
    onFileChange,
    onUpload,
    onChange,
    onPreview
  }

  // 优先调用客户端能力
  if (Bridge.platform === 'lyrixi') {
    return <Lyrixi ref={ref} {...commonProps} timeout={timeout} />
  }

  return <Browser ref={ref} {...commonProps} />
}

AttachUploader.uploadList = uploadList

export default forwardRef(AttachUploader)
