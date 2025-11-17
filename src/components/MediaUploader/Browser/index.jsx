import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import { getPreviewType } from './../utils'
import _uploadItem from './uploadItem'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import Toast from './../../Toast'
import Media from './../../Media'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Toast, Media } from 'lyrixi-mobile'
测试使用-end */

// 照片上传
function Browser(
  {
    // Value & Display Value
    list = [], // [{fileThumbnail: '全路径', fileUrl: '全路径', filePath: '目录/年月/照片名.jpg', status: 'choose|uploading|fail|success', children: node}]
    count = 5,
    type, // video.录相 | 其它.为拍照
    ellipsis,
    sourceType = ['album', 'camera'],
    sizeType = ['compressed'], // ['original', 'compressed']
    isSaveToAlbum = 0, // 是否保存到本地
    maxWidth,
    uploadDir = 'default',
    chooseExtraParams, // 仅对客户端有效

    // Status
    async = false, // 是否异步上传(目前只有app支持)
    reUpload = true, // 支持重新上传
    allowClear = true,
    allowChoose = true,
    previewAllowChoose,
    previewAllowClear,

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
      fileThumbnail: 缩略图,
      fileUrl: 高清图,
      filePath: 入库路径
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
  const mediaRef = useRef(null)

  useImperativeHandle(ref, () => {
    return {
      ...mediaRef.current,
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
    <Media
      ref={mediaRef}
      // Value & Display Value
      list={list}
      count={count}
      type={type}
      ellipsis={ellipsis}
      sourceType={sourceType}
      sizeType={sizeType}
      maxWidth={maxWidth}
      // Status
      async={async}
      reUpload={reUpload}
      allowChoose={allowChoose}
      allowClear={allowClear}
      previewAllowChoose={previewAllowChoose}
      previewAllowClear={previewAllowClear}
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
