import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import uploadImage from './uploadItem'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import Toast from './../../Toast'
import Attach from './../../Attach'
// 内库使用-end

/* 测试使用-start
import { Toast, LocaleUtil, Attach } from 'lyrixi-mobile'
测试使用-end */

// 照片上传
function Browser(
  {
    // 是否异步上传
    async = false,
    // 支持重新上传
    reUpload = true,
    // 体积控制, KB
    maxSize,
    // 支持文件扩展名
    extension,
    count = 5,
    uploadDir = 'default',

    // 展示样式
    upload,
    uploading,
    uploadPosition,
    list = [], // [{fileThumbnail: '全路径', fileUrl: '全路径', filePath: '目录/年月/照片名.jpg', status: 'choose|uploading|error|success', children: node}]

    /*
    格式化上传结果
    入参:
    {platform: 'browser', uploadItem: item, result: result}
    返回格式:
    {
      fileUrl: 附件地址,
      filePath: 入库路径
    }
    */
    formatUploadResult,
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
  const attachRef = useRef(null)

  useImperativeHandle(ref, () => {
    return {
      ...attachRef.current,
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
    <Attach
      ref={attachRef}
      async={async}
      reUpload={reUpload}
      maxSize={maxSize}
      extension={extension}
      uploadPosition={uploadPosition}
      upload={upload}
      uploading={uploading}
      list={list}
      count={count}
      allowClear={allowClear}
      allowChoose={allowChoose}
      onChange={onChange}
      onUpload={uploadItem}
      onFileChange={async ({ fileName, fileSize, fileURL, fileData }) => {
        // 前置校验
        if (typeof onBeforeChoose === 'function') {
          let isOk = await onBeforeChoose()
          if (isOk === false) return false
        }

        // 待传文件
        return [
          {
            status: 'choose',
            localId: fileURL,
            name: fileName,
            fileData: fileData,
            fileSize: fileSize,
            localFileUrl: fileURL,
            uploadDir
          }
        ]
      }}
      onPreview={onPreview}
      {...props}
    />
  )
}

export default forwardRef(Browser)
