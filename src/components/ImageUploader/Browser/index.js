import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import { getPreviewType } from './../utils'
import uploadImage from './uploadItem'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import Toast from './../../Toast'
import Image from './../../Image'
// 内库使用-end

/* 测试使用-start
import { Toast, LocaleUtil, Image } from 'lyrixi-mobile'
测试使用-end */

// 照片上传
function Browser(
  {
    // 是否异步上传
    async = false,
    // 支持重新上传
    reUpload = true,
    // 全屏遮罩
    isShowProgressTips = 1,
    count = 5,
    sourceType = ['album', 'camera'],
    sizeType = ['compressed'], // ['original', 'compressed']
    isSaveToAlbum = 0, // 是否保存到本地
    maxWidth,
    uploadDir = 'default',

    // 展示样式
    upload,
    uploading,
    uploadPosition,
    list = [], // [{fileThumbnail: '全路径', fileUrl: '全路径', filePath: '目录/年月/照片名.jpg', status: 'choose|uploading|fail|success', children: node}]

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
    formatUploadResult,
    getWatermark,
    getUploadUrl,
    getUploadParams,
    // 仅对客户端有效
    chooseExtraParams,

    // 回调
    allowClear = true,
    allowChoose = true,
    onBeforeChoose,
    onChange,
    onPreview,

    ...props
  },
  ref
) {
  const photosRef = useRef(null)

  useImperativeHandle(ref, () => {
    return {
      ...photosRef.current,
      chooseImage: () => {
        Toast.show({
          content: LocaleUtil.locale('极速上传模式, 不支持编程式调用拍照')
        })
        return false
      }
    }
  })

  // 上传文件
  async function uploadItem(item) {
    // 开始上传
    let result = await uploadImage(item, {
      uploadDir,
      maxWidth,
      getUploadUrl,
      getUploadParams,
      formatUploadResult
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

  return (
    <Image
      ref={photosRef}
      async={async}
      reUpload={reUpload}
      sourceType={sourceType}
      sizeType={sizeType}
      maxWidth={maxWidth}
      uploadPosition={uploadPosition}
      upload={upload}
      uploading={uploading}
      list={list}
      count={count}
      allowClear={allowClear}
      allowChoose={allowChoose}
      onChange={onChange}
      onUpload={uploadItem}
      onFileChange={async ({ fileURL, fileData }) => {
        // 前置校验
        if (typeof onBeforeChoose === 'function') {
          let isOk = await onBeforeChoose()
          if (isOk === false) return false
        }

        // 添加水印
        let watermark = null
        if (typeof getWatermark === 'function') {
          watermark = await getWatermark({ platform: 'browser' })
        }

        // 待传文件
        return [
          {
            status: 'choose',
            localId: fileURL,
            fileData: fileData,
            fileThumbnail: fileURL,
            fileUrl: fileURL,
            watermark,
            uploadDir
          }
        ]
      }}
      onPreview={async (item, index) => {
        // 自定义预览
        if (typeof onPreview === 'function') {
          let goOn = await onPreview(item, index)
          if (goOn === false || goOn === 'browser') return goOn
        }

        // 异步上传使用h5预览
        if (!item?.fileUrl?.startsWith?.('http')) {
          return 'browser'
        }

        return getPreviewType('image')
      }}
      {...props}
    />
  )
}

export default forwardRef(Browser)
