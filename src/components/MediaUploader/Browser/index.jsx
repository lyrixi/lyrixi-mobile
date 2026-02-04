import React, { forwardRef, useRef, useImperativeHandle } from 'react'
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
    list = [], // [{fileThumbnail: '全路径', fileUrl: '全路径', filePath: '目录/年月/照片名.jpg', status: 'choose|uploading|error|success'}]
    maxUploadCount = 5,
    maxChooseCount = 1,
    mediaType,
    ellipsis,
    sourceType = ['album', 'camera'],
    sizeType = ['compressed'], // ['original', 'compressed']
    isSaveToAlbum = 0, // 是否保存到本地
    fileImageCompress,

    // Status
    async = false, // 是否异步上传(目前只有app支持)
    verifyImage,
    reUpload = true, // 支持重新上传
    allowClear = true,
    allowChoose = true,
    previewAllowChoose,
    previewAllowClear,

    // Style
    style,
    className,
    uploadPosition,
    previewSafeArea,
    navBarStyle,
    navBarClassName,
    previewModalStyle,
    previewModalClassName,
    previewMaskStyle,
    previewMaskClassName,

    // Element
    uploadRender, // 上传按钮覆盖的dom
    uploadingRender,
    itemRender,
    previewPortal,
    previewCancelPosition,
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
    getItemExtra,
    getUploadUrl,
    formatChoose,
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
  const mediaRef = useRef(null)

  useImperativeHandle(ref, () => {
    return {
      ...mediaRef.current,
      chooseMedia: () => {
        Toast.show({
          content: LocaleUtil.locale(
            '浏览器上传模式, 不支持编程式调用拍照',
            'lyrixi_18a8c44715538c3079cf8bf9fd46fe82'
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
      formatResponse,
      verifyImage
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

      // 添加额外的item信息, 方便传递, 例如水印等
      let itemExtra = null
      if (typeof getItemExtra === 'function') {
        itemExtra = await getItemExtra({ platform: 'browser' })
        if (itemExtra === false) {
          resolve(false)
          return
        }
      }

      resolve([
        {
          status: 'choose',
          localFile: localFile,
          fileThumbnail: localFile.fileUrl,
          fileUrl: localFile.fileUrl,
          fileType: localFile.fileType,
          ...itemExtra
        }
      ])
    })
  }

  return (
    <Media
      ref={mediaRef}
      // Value & Display Value
      list={list}
      maxUploadCount={maxUploadCount}
      mediaType={mediaType}
      ellipsis={ellipsis}
      sourceType={sourceType}
      sizeType={sizeType}
      fileImageCompress={fileImageCompress}
      // Status
      async={async}
      reUpload={reUpload}
      allowChoose={allowChoose}
      allowClear={allowClear}
      previewAllowChoose={previewAllowChoose}
      previewAllowClear={previewAllowClear}
      // Style
      style={style}
      className={className}
      uploadPosition={uploadPosition}
      previewSafeArea={previewSafeArea}
      navBarStyle={navBarStyle}
      navBarClassName={navBarClassName}
      previewModalStyle={previewModalStyle}
      previewModalClassName={previewModalClassName}
      previewMaskStyle={previewMaskStyle}
      previewMaskClassName={previewMaskClassName}
      // Element
      uploadRender={uploadRender}
      uploadingRender={uploadingRender}
      itemRender={itemRender}
      previewPortal={previewPortal}
      previewCancelPosition={previewCancelPosition}
      // Events
      onBeforeChoose={onBeforeChoose}
      onFileChange={handleChoose}
      onUpload={uploadItem}
      onChange={onChange}
      onPreview={async (item, index) => {
        // 自定义预览
        if (typeof onPreview === 'function') {
          let goOn = await onPreview(item, index)
          if (goOn !== true) return goOn
        }

        return 'browser'
      }}
    />
  )
}

export default forwardRef(Browser)
