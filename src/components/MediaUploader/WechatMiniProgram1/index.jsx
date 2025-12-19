import React, { useEffect, useState, forwardRef, useRef, useImperativeHandle } from 'react'

import getPhotos from './getPhotos'
import clearPhotos from './clearPhotos'
import stopAllPolls from './stopAllPolls'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import Toast from './../../Toast'
import Media from './../../Media'
import Loading from './../../Loading'
import ActionSheet from './../../ActionSheet'
// 内库使用-end

/* 测试使用-start
import { Toast, LocaleUtil, Media, Loading, ActionSheet } from 'lyrixi-mobile'
测试使用-end */

// 微信小程序拍照上传, 通过前端id，通过接口与小程序通信，轮询接口获取小程序上传的照片
function WechatMiniProgram(
  {
    // Value & Display Value
    list = [], // [{fileThumbnail: '全路径', fileUrl: '全路径', filePath: '目录/年月/照片名.jpg', status: 'choose|uploading|error|success'}]
    maxUploadCount = 5,
    maxChooseCount = 9,
    mediaType, // video.录相 | 其它.为拍照
    ellipsis,
    sourceType = ['album', 'camera'],
    sizeType = ['compressed'], // ['original', 'compressed']
    isSaveToAlbum = 0, // 是否保存到本地
    fileImageCompress,
    chooseExtraParams, // 仅对客户端有效

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
    previewNavBarStyle,
    previewNavBarClassName,
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
    formatHeader,
    formatPayload,
    formatResponse,

    // Events
    onBeforeChoose,
    // onChoose,
    // onFileChange,
    // onUpload,
    onChange,
    onPreview,
    onNavigateTo
  },
  ref
) {
  // 返回{saveMediaUrl, getMediaUrl}
  const uploadUrl = getUploadUrl?.({ platform: 'wechatMiniProgram' }) || {}
  const saveMediaUrl = uploadUrl.saveMediaUrl || ''
  const getMediaUrl = uploadUrl.getMediaUrl || ''

  // Auto generate id, used to get photos form server
  const idRef = useRef(Object.generateGUID())

  // Photo and Album select actionsheet open
  const [open, setOpen] = useState(false)

  const mediaRef = useRef(null)

  // Newest List
  const listRef = useRef(Array.isArray(list) ? list : [])

  // Change event
  const onChangeRef = useRef()
  onChangeRef.current = onChange

  useImperativeHandle(ref, () => {
    return {
      ...mediaRef.current,
      chooseMedia: async () => {
        let uploadElement = mediaRef.current?.element?.querySelector?.(
          '.lyrixi-media-item.image-choose'
        )
        if (!uploadElement) {
          Toast.show({
            content: LocaleUtil.locale('未找到拍照按钮, 调用拍照失败')
          })
          return false
        }

        let chooseOk = await handleChoose({
          nativeEvent: {
            target: uploadElement
          }
        })
        return chooseOk
      },
      uploadList: () => {
        Toast.show({
          content: LocaleUtil.locale('小程序不支持异步上传')
        })
      }
    }
  })

  // Get photos by polling interval
  async function updatePhotos() {
    let photos = await getPhotos(idRef.current, {
      url: getMediaUrl,
      formatResponse
    })
    console.log('服务器获取照片:', photos)
    // Get photos failed, stop interval
    if (typeof photos === 'string') {
      stopAllPolls()
      Toast.show({ content: photos })
      return
    }
    // Get photos success
    if (Array.isArray(photos) && photos.length > 0) {
      stopAllPolls()
      console.log('当前照片', listRef.current)
      listRef.current = listRef.current.concat(photos)
      console.log('照片拍完, 清空redis', listRef.current)
      onChangeRef.current && onChangeRef.current(listRef.current)
      await clearPhotos(idRef.current, { url: saveMediaUrl })
      return
    }
    // Null Get photos by polling interval 3s
    window[idRef.current] = setTimeout(() => {
      updatePhotos()
    }, 3000)
  }
  // Get photos
  useEffect(() => {
    return () => {
      stopAllPolls()
    }
    // eslint-disable-next-line
  }, [])

  // 外部强行修改list, 需要同步到服务器
  useEffect(() => {
    if (Array.isArray(list) === false) return
    listRef.current = list
    // eslint-disable-next-line
  }, [list])

  // Jump to WeChat mini program to photo
  async function goCamera(sourceType) {
    if (typeof uploadUrl.navigateToMiniProgram !== 'function') {
      Toast.show({ content: 'uploadUrl.navigateToMiniProgram is not a function' })
      return false
    }
    // eslint-disable-next-line
    return new Promise(async (resolve) => {
      // Stop others polling
      stopAllPolls(idRef.current)

      // 添加额外的item信息, 方便传递, 例如水印等
      let itemExtra = null
      if (typeof getItemExtra === 'function') {
        itemExtra = await getItemExtra({ platform: 'browser' })
      }

      // Protect click
      Loading.show({
        content: LocaleUtil.locale('打开小程序拍照')
      })
      setTimeout(() => {
        Loading.hide()
        resolve(true)
      }, 1000)

      console.log('进入小程序拍照')
      try {
        let payload = undefined
        if (typeof formatPayload === 'function') {
          payload = await formatPayload?.({ ...itemExtra }, { platform: 'wechatMiniProgram' })
        }

        let goOn = await onNavigateTo({
          id: idRef.current,
          sourceType: sourceType,
          maxChooseCount: maxChooseCount,
          payload: payload,
          ...itemExtra
        })

        if (goOn === false) {
          return
        }

        goOn = await uploadUrl.navigateToMiniProgram({
          id: idRef.current,
          sourceType: sourceType,
          maxChooseCount: maxChooseCount,
          payload: payload,
          ...itemExtra
        })

        if (goOn === false) {
          return
        }

        // Invoke camera start interval list
        updatePhotos()
      } catch (err) {
        Toast.show({ content: '呼起小程序拍照异常,请点击重试' })
        // If this fails, stop polling
        stopAllPolls()
      }
    })
  }

  // 选择文件
  async function handleChoose() {
    // 前置校验
    if (typeof onBeforeChoose === 'function') {
      let isOk = await onBeforeChoose()
      if (isOk === false) return false
    }

    // Camera and Album actionsheet select
    if (sourceType.includes('album') && sourceType.includes('camera')) {
      setOpen(true)
      return true
    }

    // goCamera
    mediaRef.current?.showLoading?.()
    let isOk = await goCamera(sourceType)
    mediaRef.current?.hideLoading?.()

    return isOk
  }

  return (
    <>
      <Media
        ref={mediaRef}
        // Value & Display Value
        list={list}
        maxUploadCount={maxUploadCount}
        mediaType={mediaType}
        ellipsis={ellipsis}
        sourceType={sourceType}
        sizeType={sizeType}
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
        previewNavBarStyle={previewNavBarStyle}
        previewNavBarClassName={previewNavBarClassName}
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
        onChoose={handleChoose}
        // onFileChange={onFileChange}
        // onUpload={onUpload}
        onChange={onChange}
        onPreview={async (item, index) => {
          // 自定义预览
          if (typeof onPreview === 'function') {
            let goOn = await onPreview(item, index)
            if (goOn !== true) return goOn
          }

          return 'nativeMedia'
        }}
      />

      <ActionSheet.Modal
        open={open}
        list={[
          {
            id: 'camera',
            name: LocaleUtil.locale('拍照')
          },
          {
            id: 'album',
            name: LocaleUtil.locale('从相册选择')
          }
        ]}
        onChange={async (item) => {
          mediaRef.current?.showLoading?.()
          await goCamera([item.id])
          mediaRef.current?.hideLoading?.()
          setOpen(false)
        }}
        onClose={() => {
          setOpen(false)
        }}
      />
    </>
  )
}

export default forwardRef(WechatMiniProgram)
