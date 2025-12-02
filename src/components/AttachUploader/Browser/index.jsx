import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import _uploadItem from './uploadItem'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import Toast from './../../Toast'
import Attach from './../../Attach'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Toast, Attach } from 'lyrixi-mobile'
测试使用-end */

// 照片上传
function Browser(
  {
    // Value & Display Value
    list = [],
    /*
    [
      {
        fileUrl: "全路径(必传)",
        filePath: "入库路径(必传)",
        fileName: "文件名(必传)",
        fileSize: "文件大小(字节)",
        status: "choose|uploading|error|success",
      },
    ]
    */
    count = 5,
    sourceType = ['album', 'camera'],
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

    // Preview Server
    previewPortal,
    previewServerUrl,
    previewServerSourceType,
    /*
    格式化上传结果
    入参:
    {platform: 'browser', uploadItem: item, result: result}
    返回格式:
    {
      fileUrl: 高清图,
      filePath: 入库路径,
      fileName: 文件名,
      fileSize: 文件大小(字节),
    }
    */
    formatUploadedItem,
    getUploadUrl,
    formatPayload,
    formatResult,

    // Events
    onBeforeChoose,
    // onUpload,
    onChange,
    onPreview
  },
  ref
) {
  const attachRef = useRef(null)

  useImperativeHandle(ref, () => {
    return {
      ...attachRef.current,
      chooseFile: () => {
        Toast.show({
          content: LocaleUtil.locale('浏览器上传模式, 不支持编程式调用拍照')
        })
        return false
      }
    }
  })

  // 上传文件
  async function uploadItem(item) {
    // 开始上传
    let result = await _uploadItem(item, {
      getUploadUrl,
      formatPayload,
      formatResult,
      formatUploadedItem
    })

    // 上传失败
    if (typeof result === 'string') {
      Toast.show({
        content: result
      })
      item.status = 'error'
    }
    // 上传成功
    else {
      // eslint-disable-next-line
      item = result
    }

    // 更新状态
    return item
  }

  // 选择文件
  async function handleChoose(localFile) {
    // eslint-disable-next-line
    return new Promise(async (resolve) => {
      // 前置校验
      if (typeof onBeforeChoose === 'function') {
        let isOk = await onBeforeChoose()
        if (isOk === false) {
          resolve(false)
          return
        }
      }

      resolve({
        status: 'choose',
        localFile: localFile,
        fileSize: localFile.fileSize,
        fileUrl: localFile.fileUrl
      })
    })
  }

  return (
    <Attach
      ref={attachRef}
      // Value & Display Value
      list={list}
      count={count}
      sourceType={sourceType}
      maxSize={maxSize}
      // Status
      async={async}
      reUpload={reUpload}
      allowChoose={allowChoose}
      allowClear={allowClear}
      // Style
      className={className}
      uploadPosition={uploadPosition}
      // Element
      uploadRender={uploadRender}
      uploadingRender={uploadingRender}
      // Preview Server
      previewPortal={previewPortal}
      previewServerUrl={previewServerUrl}
      previewServerSourceType={previewServerSourceType}
      // Events
      onBeforeChoose={onBeforeChoose}
      onFileChange={handleChoose}
      onUpload={uploadItem}
      onChange={onChange}
      onPreview={onPreview}
    />
  )
}

export default forwardRef(Browser)
