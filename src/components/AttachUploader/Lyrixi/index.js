import React, { forwardRef, useRef, useImperativeHandle } from 'react'

import { getRemainCount } from './../utils'
import uploadAttach from './uploadItem'

// 内库使用-start
import Attach from './../../Attach'
import Toast from './../../Toast'
import Bridge from './../../../utils/Bridge'
// 内库使用-end

/* 测试使用-start
import { Attach, Toast, Bridge } from 'lyrixi-mobile'
测试使用-end */

// 文件上传
function AttachUploader(
  {
    timeout,
    // 是否异步上传(目前只有app支持)
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
      fileThumbnail: 缩略图,
      fileUrl: 文件地址,
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

  const onChangeRef = useRef()
  onChangeRef.current = onChange

  useImperativeHandle(ref, () => {
    return {
      ...attachRef.current,
      chooseAttach: () => {
        if (!attachRef.current?.choose) return
        return attachRef.current.choose()
      }
    }
  })

  // 上传文件
  async function uploadItem(item) {
    // 开始上传
    let result = await uploadAttach(item, {
      timeout,
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

      let chooseAttachParams = {
        ...chooseExtraParams,
        count: getRemainCount(count, list?.length || 0),
        onSuccess: async (res) => {
          const localIds = res.localIds // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
          if (!Array.isArray(localIds) || !localIds.length) {
            resolve(null)
            return
          }
          // 当前列表
          let currentList = localIds.map((localId, index) => {
            let itemExtra = res?.[localId] || {}
            return {
              status: 'choose',
              localId: localId,
              fileLocalUrl: localId,
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
        onCancel: function () {
          resolve(null)
        }
      }

      Bridge.chooseFile(chooseAttachParams)

      setTimeout(() => {
        attachRef.current?.hideLoading?.()
      }, 1000)
    })
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
      // 会影响原数组, 如果要修复此bug, 需要测试超级表单和自定义字段
      list={list}
      onChoose={handleChoose}
      count={count}
      allowClear={allowClear}
      allowChoose={allowChoose}
      onChange={onChange}
      onUpload={uploadItem}
      onPreview={onPreview}
      {...props}
    />
  )
}

export default forwardRef(AttachUploader)
