import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import { getPreviewType } from './../utils'
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
    list = [], // [{fileThumbnail: '全路径', fileUrl: '全路径', filePath: '目录/年月/照片名.jpg', status: 'choose|uploading|fail|success', children: node}]
    count = 5,
    sourceType = ['album', 'camera'],
    maxSize,
    uploadDir = 'default',
    chooseExtraParams, // 仅对客户端有效

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
    previewPortal,
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
    getWatermark,
    getUploadUrl,
    getUploadPayload,

    // Events
    onBeforeChoose,
    // onUpload,
    onChange,
    onPreview
  },
  ref
) {
  const photosRef = useRef(null)

  useImperativeHandle(ref, () => {
    return {
      ...photosRef.current,
      chooseMedia: () => {
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
      uploadDir,
      maxWidth,
      getUploadUrl,
      getUploadPayload,
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

      // 添加水印
      let watermark = null
      if (typeof getWatermark === 'function') {
        watermark = await getWatermark({ platform: 'dingtalk' })
      }

      resolve({
        status: 'choose',
        localFile: localFile,
        fileThumbnail: localFile.preview,
        fileUrl: localFile.preview,
        watermark: watermark,
        uploadDir: uploadDir
      })
    })
  }

  return (
    <Attach
      ref={photosRef}
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
      previewPortal={previewPortal}
      // Events
      onBeforeChoose={onBeforeChoose}
      onFileChange={handleChoose}
      onUpload={uploadItem}
      onChange={onChange}
      onPreview={async (item, index) => {
        // 自定义预览
        if (typeof onPreview === 'function') {
          let goOn = await onPreview(item, index)
          if (goOn === false || goOn === 'browser') return goOn
        }

        return getPreviewType('image')

        // 走默认预览
        // Bridge.previewMedia({
        //   sources: list,
        //   index: index
        // })
        // return false
      }}
    />
  )
}

export default forwardRef(Browser)
