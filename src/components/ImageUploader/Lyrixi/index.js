import React, { forwardRef, useRef, useImperativeHandle } from 'react'

import { getRemainCount } from './../utils'
import base64LocalIds from './base64LocalIds'
import uploadImage from './uploadItem'

// 内库使用-start
import Image from './../../Image'
import Toast from './../../Toast'
import Bridge from './../../../utils/Bridge'
// 内库使用-end

/* 测试使用-start
import { Image, Toast, Bridge } from 'lyrixi-mobile'
测试使用-end */

// 照片上传
function ImageUploader(
  {
    timeout,
    // 是否异步上传(目前只有app支持)
    async = false,
    // 支持重新上传
    reUpload = true,
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
    formatUploadedItem,
    getWatermark,
    getUploadUrl,
    getUploadPayload,
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

  const onChangeRef = useRef()
  onChangeRef.current = onChange

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
    let result = await uploadImage(item, {
      timeout,
      uploadDir,
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
        watermark = await getWatermark({ platform: 'browser' })
      }

      let chooseImageParams = {
        maxWidth: Number(maxWidth || 0),
        ...chooseExtraParams,
        count: getRemainCount(count, list?.length || 0),
        sizeType: sizeType, // 可以指定是原图还是压缩图，默认二者都有
        sourceType: sourceType, // 可以指定来源是相册还是相机，默认二者都有
        watermark: watermark,
        isSaveToAlbum: isSaveToAlbum || 0, // 不保存到本地
        onSuccess: async (res) => {
          const localIds = res.localIds // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
          if (!Array.isArray(localIds) || !localIds.length) {
            resolve(null)
            return
          }

          // 超时都读localId
          let base64List = await base64LocalIds(localIds)

          // 当前列表
          let currentList = localIds.map((localId, index) => {
            let itemExtra = res?.[localId] || {}
            return {
              status: 'choose',
              localId: localId,
              watermark: watermark,
              // 缩略图：需要转base64方能展现图片
              fileThumbnail: base64List[index],
              fileUrl: base64List[index],
              fileLocalUrl: base64List[index],
              uploadDir: uploadDir,
              ...itemExtra
            }
          })

          resolve(currentList)
        },
        onError: function (err) {
          if (err && err.errMsg) Toast.show({ content: err.errMsg })
          resolve(null)
        },
        cancel: function () {
          resolve(null)
        }
      }

      Bridge.chooseImage(chooseImageParams)

      setTimeout(() => {
        photosRef.current?.hideLoading?.()
      }, 1000)
    })
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
      // 会影响原数组, 如果要修复此bug, 需要测试超级表单和自定义字段
      list={list}
      // list={list}
      onChoose={handleChoose}
      count={count}
      allowClear={allowClear}
      allowChoose={allowChoose}
      onChange={onChange}
      onUpload={uploadItem}
      onPreview={async (item, index) => {
        // 自定义预览
        if (typeof onPreview === 'function') {
          let goOn = await onPreview(item, index)
          if (goOn === false || goOn === 'browser') return goOn
        }

        // 走默认预览
        Bridge.previewImage({
          // 兼容老客户端不支持localresource预览
          // urls: list.map((item) => item.fileUrl.replace(/localresource:\/\//i, '')),
          urls: list.map((item) => item.localId || item.fileUrl),
          current: list[index].localId || list[index].fileUrl,
          item: list[index],
          index: index
        })
        return false
      }}
      {...props}
    />
  )
}

export default forwardRef(ImageUploader)
