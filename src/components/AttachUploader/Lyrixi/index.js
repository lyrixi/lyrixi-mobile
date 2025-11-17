import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import { getRemainCount, getPreviewType } from './../utils'
import _uploadItem from './uploadItem'

// 内库使用-start
import Bridge from './../../../utils/Bridge'
import Toast from './../../Toast'
import Loading from './../../Loading'
import Attach from './../../Attach'
// 内库使用-end

/* 测试使用-start
import { Bridge,Toast, Loading, Attach } from 'lyrixi-mobile'
测试使用-end */

// 照片上传
function MediaUploader(
  {
    // Value & Display Value
    list = [], // [{fileThumbnail: '全路径', fileUrl: '全路径', filePath: '目录/年月/照片名.jpg', status: 'choose|uploading|fail|success', children: node}]
    count = 5,
    sourceType,
    maxSize,
    uploadDir = 'default',
    // 特殊的选择逻辑, 仅对客户端有效
    chooseExtraParams,

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
      fileUrl: 文件地址,
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
    // onChoose,
    onFileChange,
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
        if (!attachRef.current?.choose) return
        return attachRef.current.choose()
      }
    }
  })

  // 上传文件
  async function uploadItem(item) {
    // 开始上传
    let result = await _uploadItem(item, {
      uploadDir,
      maxSize,
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
        // Bridge.previewMedia({
        //   sources: list,
        //   index: index
        // })
        // return false
      }}
    />
  )
}

export default forwardRef(MediaUploader)
