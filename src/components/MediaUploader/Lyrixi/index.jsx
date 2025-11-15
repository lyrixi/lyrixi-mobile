import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import { getRemainCount, getPreviewType } from './../utils'
import _uploadItem from './uploadItem'

// 内库使用-start
import Bridge from './../../../utils/Bridge'
import Toast from './../../Toast'
import Loading from './../../Loading'
import Image from './../../Image'
// 内库使用-end

/* 测试使用-start
import { Bridge,Toast, Loading, Image } from 'lyrixi-mobile'
测试使用-end */

// 照片上传
function MediaUploader(
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
    // 特殊的选择逻辑, 仅对客户端有效
    chooseExtraParams,

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
    upload, // 上传按钮覆盖的dom
    uploading,
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
    // onChoose,
    onFileChange,
    // onUpload,
    onChange,
    onPreview,
    onPreviewOpen,
    onPreviewClose
  },
  ref
) {
  const photosRef = useRef(null)

  useImperativeHandle(ref, () => {
    return {
      ...photosRef.current,
      chooseImage: () => {
        if (!photosRef.current?.choose) return
        return photosRef.current.choose()
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
  async function handleChoose() {
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

      let chooseMediaParams = {
        ...chooseExtraParams,
        count: getRemainCount(count, list?.length || 0),
        sizeType: sizeType, // 可以指定是原图还是压缩图，默认二者都有
        sourceType: sourceType, // 可以指定来源是相册还是相机，默认二者都有
        isSaveToAlbum: isSaveToAlbum || 0, // 不保存到本地
        onSuccess: async (res) => {
          const localFiles = res.localFiles
          if (!Array.isArray(localFiles) || !localFiles.length) {
            resolve(null)
            return
          }

          Loading.show()

          // 当前列表
          let currentList = localFiles.map((localFile, index) => {
            return {
              status: 'choose',
              localFile: localFile,
              watermark: watermark,
              fileThumbnail: localFile.preview,
              fileUrl: localFile.preview,
              uploadDir: uploadDir
            }
          })

          console.log('选择完成:', currentList)
          resolve(currentList)
        },
        onError: function (err) {
          if (err && err.errMsg) Toast.show({ content: err.errMsg })
          resolve(false)
        },
        onCancel: function () {
          resolve(false)
        }
      }
      Bridge.chooseMedia(chooseMediaParams)
    })
  }

  return (
    <Image
      ref={photosRef}
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
      upload={upload}
      uploading={uploading}
      previewPortal={previewPortal}
      // Events
      onBeforeChoose={onBeforeChoose}
      onChoose={handleChoose}
      onFileChange={onFileChange}
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
        // Bridge.previewImage({
        //   urls: list.map((item) => item.fileUrl),
        //   current: list[index].fileUrl,
        //   index: index
        // })
        // return false
      }}
      onPreviewOpen={onPreviewOpen}
      onPreviewClose={onPreviewClose}
    />
  )
}

export default forwardRef(MediaUploader)
