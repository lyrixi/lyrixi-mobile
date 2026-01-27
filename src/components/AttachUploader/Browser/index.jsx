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
    maxCount = 5,
    maxChooseCount = 1,
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
  {
    fileUrl: 高清图,
    filePath: 入库路径,
    fileName: 文件名,
    fileSize: 文件大小(字节),
  }
  */
    getUploadUrl,
    formatHeaders,
    formatPayload,
    formatResponse,

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
          content: LocaleUtil.locale(
            '浏览器上传模式, 不支持编程式调用拍照',
            'noKey_18a8c44715538c3079cf8bf9fd46fe82'
          )
        })
        return false
      }
    }
  })

  // 上传文件
  async function uploadItem(item) {
    // 开始上传, 返回结果 {...item, status: 'success' | 'error'}
    let newItem = await _uploadItem(item, {
      getUploadUrl,
      formatHeaders,
      formatPayload,
      formatResponse
    })

    console.log('浏览器上传后新item:', newItem)
    // 更新状态
    return newItem
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
      maxCount={maxCount}
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
      itemRender={itemRender}
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
