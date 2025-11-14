import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import { getRemainCount } from './../utils'
import uploadImage from './uploadItem'

// 内库使用-start
import Image from './../../Image'
import Loading from './../../Loading'
import Toast from './../../Toast'
import Bridge from './../../../utils/Bridge'
// 内库使用-end

/* 测试使用-start
import { Image, Loading, Toast, Bridge } from 'lyrixi-mobile'
测试使用-end */

// 照片上传
function ImageUploader(
  {
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

      let chooseImageParams = {
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
              fileThumbnail: localFile.thumbnail,
              fileUrl: localFile.thumbnail,
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
      Bridge.chooseImage(chooseImageParams)
    })
  }

  return (
    <Image
      ref={photosRef}
      async={async}
      reUpload={reUpload}
      sourceType={sourceType}
      sizeType={sizeType}
      upload={upload}
      uploading={uploading}
      uploadPosition={uploadPosition}
      list={list}
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

        // dd.previewImage不支持预览chooseImage返回的filePath(https://resource), 仅支持浏览器预览
        // return getPreviewType('image')
        return 'browser'

        // 走默认预览
        // Bridge.previewImage({
        //   urls: list.map((item) => item.fileUrl),
        //   current: list[index].fileUrl,
        //   index: index
        // })
        // return false
      }}
      {...props}
    />
  )
}

export default forwardRef(ImageUploader)
