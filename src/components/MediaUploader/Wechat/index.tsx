import React, { forwardRef, useRef, useImperativeHandle, type ReactNode } from 'react'
import getRemainCount from './../../Media/utils/getRemainCount'
import _uploadItem from './uploadItem'

import { MediaHandle, MediaUploaderCommonProps } from '../types'
import type { FileImageCompressOptions, MediaProps } from './../../Media/types'

// 内库使用-start
import type { FileItem } from './../../../utils/Bridge/types'
import Bridge from './../../../utils/Bridge'
import Toast from './../../Toast'
import Loading from './../../Loading'
import Media from './../../Media'
// 内库使用-end

/* 测试使用-start
import { Bridge,Toast, Loading, Media } from 'lyrixi-mobile'
测试使用-end */

// 照片上传
function MediaUploader(
  {
    // Value & Display Value
    list = [],
    maxUploadCount = 5,
    maxChooseCount = 9,
    mediaType,
    ellipsis,
    sourceType = ['album', 'camera'],
    sizeType = ['compressed'],
    isSaveToAlbum = 0,
    fileImageCompress,

    // Status
    async = false,
    verifyImage,
    reUpload = true,
    allowClear = true,
    allowChoose = true,
    previewAllowChoose,
    previewAllowClear,

    // Style
    style,
    className,
    uploadPosition,
    previewSafeArea,
    previewNavBarStyle,
    previewNavBarClassName,
    previewModalStyle,
    previewModalClassName,
    previewMaskStyle,
    previewMaskClassName,

    // Elements
    uploadRender,
    uploadingRender,
    itemRender,
    previewPortal,
    previewCancelPosition,
    getItemExtra,
    getUploadUrl,
    formatChoose,
    formatHeaders,
    formatPayload,
    formatResponse,

    // Events
    onBeforeChoose,
    onChange,
    onPreview
  }: MediaUploaderCommonProps,
  ref: React.ForwardedRef<MediaHandle>
) {
  const mediaRef = useRef<MediaHandle | null>(null)

  useImperativeHandle(ref, () => {
    return {
      ...(mediaRef.current ?? ({} as MediaHandle)),
      chooseMedia: () => {
        if (!mediaRef.current?.choose) return
        return mediaRef.current.choose()
      }
    }
  })

  // 上传文件
  async function uploadItem(item: FileItem) {
    let newItem = await _uploadItem(item, {
      getUploadUrl,
      formatHeaders,
      formatPayload,
      formatResponse,
      verifyImage
    })

    console.log('微信上传后新item:', newItem)
    return newItem
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

      // 添加额外的item信息, 方便传递, 例如水印等
      let itemExtra: Record<string, unknown> | null = null
      if (typeof getItemExtra === 'function') {
        const extra = await getItemExtra({ platform: 'wechat' })
        if (extra === false) {
          resolve(false)
          return
        }
        itemExtra = extra as Record<string, unknown> | null
      }

      let chooseMediaParams: Record<string, unknown> = {
        count: getRemainCount(maxUploadCount, list?.length || 0, maxChooseCount),
        sizeType: sizeType,
        sourceType: sourceType,
        mediaType: mediaType,
        isSaveToAlbum: isSaveToAlbum || 0,
        onSuccess: async (res: { data?: { localFiles?: FileItem[] } }) => {
          const localFiles = res.data?.localFiles
          if (!Array.isArray(localFiles) || !localFiles.length) {
            resolve(null)
            return
          }

          Loading.show()

          let currentList = localFiles.map((localFile) => {
            return {
              status: 'choose',
              localFile: localFile,
              fileThumbnail: localFile.fileUrl,
              fileUrl: localFile.fileUrl,
              fileType: localFile.fileType,
              ...itemExtra
            }
          })

          console.log('选择完成:', currentList)
          resolve(currentList)
        },
        onError: function (err: { errMsg?: string }) {
          if (err && err.errMsg) Toast.open({ content: err.errMsg })
          resolve(false)
        },
        onCancel: function () {
          resolve(false)
        }
      }

      if (typeof formatChoose === 'function') {
        chooseMediaParams = await formatChoose(
          { ...chooseMediaParams, ...itemExtra },
          { platform: 'wechat' }
        )
      }

      Bridge.chooseMedia(chooseMediaParams)
    })
  }

  const mediaTypeList =
    mediaType === null || mediaType === undefined
      ? undefined
      : Array.isArray(mediaType)
      ? mediaType
      : [mediaType]

  const ellipsisForMedia =
    ellipsis === true
      ? { count: 1 }
      : ellipsis && typeof ellipsis === 'object'
      ? ellipsis
      : undefined

  const fileImageOpts = fileImageCompress as FileImageCompressOptions | undefined

  const uploadPositionNarrow: 'start' | 'end' | undefined =
    uploadPosition === 'start' || uploadPosition === 'end' ? uploadPosition : undefined

  const previewCancelNarrow: 'left' | 'right' | undefined =
    previewCancelPosition === 'left' || previewCancelPosition === 'right'
      ? previewCancelPosition
      : undefined

  const uploadRenderFn =
    uploadRender === null || uploadRender === undefined
      ? undefined
      : typeof uploadRender === 'function'
      ? (uploadRender as (ctx: { uploadType: string }) => ReactNode)
      : () => uploadRender

  const uploadingRenderFn =
    uploadingRender === null || uploadingRender === undefined
      ? undefined
      : typeof uploadingRender === 'function'
      ? (uploadingRender as (ctx: FileItem & { uploadingType: string }) => ReactNode)
      : // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (ctx: FileItem & { uploadingType: string }) => uploadingRender

  const itemRenderFn =
    itemRender === null || itemRender === undefined
      ? undefined
      : typeof itemRender === 'function'
      ? (itemRender as (item: FileItem) => ReactNode)
      : // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (_item: FileItem) => itemRender as ReactNode

  const onBeforeChooseForMedia: MediaProps['onBeforeChoose'] =
    typeof onBeforeChoose === 'function'
      ? (e) => {
          void e
          return onBeforeChoose() as boolean | void | Promise<boolean | void>
        }
      : undefined

  return (
    <Media
      ref={mediaRef}
      // Value & Display Value
      list={list}
      maxCount={maxUploadCount}
      mediaType={mediaTypeList}
      ellipsis={ellipsisForMedia}
      sourceType={sourceType}
      sizeType={sizeType}
      fileImageCompress={fileImageOpts}
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
      uploadPosition={uploadPositionNarrow}
      previewSafeArea={previewSafeArea}
      previewNavBarStyle={previewNavBarStyle}
      previewNavBarClassName={previewNavBarClassName}
      previewModalStyle={previewModalStyle}
      previewModalClassName={previewModalClassName}
      previewMaskStyle={previewMaskStyle}
      previewMaskClassName={previewMaskClassName}
      // Elements
      uploadRender={uploadRenderFn}
      uploadingRender={uploadingRenderFn}
      itemRender={itemRenderFn}
      previewPortal={previewPortal}
      previewCancelPosition={previewCancelNarrow}
      // Events
      onBeforeChoose={onBeforeChooseForMedia}
      onChoose={handleChoose}
      onUpload={uploadItem}
      onChange={onChange}
      onPreview={async (item, index) => {
        if (typeof onPreview === 'function') {
          const goOn = await onPreview(item, index)
          if (goOn !== true) {
            return goOn as boolean | void | 'nativeMedia' | 'nativeFile' | 'browser'
          }
        }
        return 'nativeMedia'
      }}
    />
  )
}

export default forwardRef(MediaUploader)
