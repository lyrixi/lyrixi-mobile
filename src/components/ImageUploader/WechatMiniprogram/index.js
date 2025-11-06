import React, { useEffect, useState, forwardRef, useRef, useImperativeHandle } from 'react'

import { getPreviewType } from './../utils'
import getPhotos from './getPhotos'
import clearPhotos from './clearPhotos'
import stopAllPolls from './stopAllPolls'

// 内库使用-start
import LocaleUtil from './../../../utils/LocaleUtil'
import Toast from './../../Toast'
import Image from './../../Image'
import Loading from './../../Loading'
import ActionSheet from './../../ActionSheet'
// 内库使用-end

/* 测试使用-start
import { Toast, LocaleUtil, Image, Loading, ActionSheet } from 'lyrixi-mobile'
测试使用-end */

// 微信小程序拍照上传, 通过前端id，通过接口与小程序通信，轮询接口获取小程序上传的照片
function WechatMiniprogram(
  {
    // 是否异步上传(目前只有app支持)
    async = false,
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
    onNavigateTo,
    ...props
  },
  ref
) {
  // 返回{savePhotoUrl, getPhotoUrl}
  const uploadUrl = getUploadUrl?.({ platform: 'wechatMiniprogram' }) || {}
  const savePhotoUrl = uploadUrl.savePhotoUrl || ''
  const getPhotoUrl = uploadUrl.getPhotoUrl || ''

  // Auto generate id, used to get photos form server
  const idRef = useRef(Object.generateGUID())

  // Photo and Album select actionsheet visible
  const [visible, setVisible] = useState(false)

  const photosRef = useRef(null)

  // Newest List
  const listRef = useRef(Array.isArray(list) ? list : [])

  // Change event
  const onChangeRef = useRef()
  onChangeRef.current = onChange

  // Judge wether to display choose button
  const chooseVisible = onChange && (list || []).length < count ? true : false

  useImperativeHandle(ref, () => {
    return {
      ...photosRef.current,
      chooseImage: async () => {
        if (!chooseVisible) {
          Toast.show({
            content: LocaleUtil.locale('此照片控件无拍照功能, 请勿调用拍照')
          })
          return false
        }
        let uploadDOM = photosRef.current?.rootDOM?.querySelector?.(
          '.lyrixi-image-item.image-choose'
        )
        if (!uploadDOM) {
          Toast.show({
            content: LocaleUtil.locale('未找到拍照按钮, 调用拍照失败')
          })
          return false
        }

        let chooseOk = await handleChoose({
          nativeEvent: {
            target: uploadDOM
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
      url: getPhotoUrl,
      uploadDir: uploadDir,
      formatUploadResult: formatUploadResult
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
      await clearPhotos(idRef.current, { url: savePhotoUrl })
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
    let currentList = (listRef.current || []).filter((item) => !item.children)
    let externalList = (list || []).filter((item) => !item.children)
    if (JSON.stringify(currentList) === JSON.stringify(externalList)) return
    listRef.current = list
    // eslint-disable-next-line
  }, [list])

  // Jump to WeChat mini program to photo
  async function goCamera(sourceType) {
    if (onNavigateTo) {
      let allowNavigateTo = await onNavigateTo()
      if (allowNavigateTo === false) {
        return false
      }
    }
    // eslint-disable-next-line
    return new Promise(async (resolve) => {
      // Stop others polling
      stopAllPolls(idRef.current)

      // 添加水印
      let watermark = null
      if (typeof getWatermark === 'function') {
        watermark = await getWatermark({ platform: 'browser' })
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
        let uploadExtraParams = getUploadParams?.({ platform: 'WechatMiniprogram' }) || {}
        // eslint-disable-next-line
        top.wx.miniProgram.navigateTo({
          url: `/pages/ImageUploader/index?id=${idRef.current}&sourceType=${JSON.stringify(
            sourceType
          )}&uploadDir=${encodeURIComponent(
            encodeURIComponent(uploadDir)
          )}&watermark=${encodeURIComponent(
            encodeURIComponent(JSON.stringify(watermark || ''))
          )}&uploadExtraParams=${encodeURIComponent(
            encodeURIComponent(JSON.stringify(uploadExtraParams || {}))
          )}&maxWidth=${maxWidth}`,
          success: () => {},
          fail: () => {
            Toast.show({ content: '呼起小程序拍照失败,请点击重试' })
          }
        })

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
    console.log('新小程序选择照片')
    // 前置校验
    if (typeof onBeforeChoose === 'function') {
      let isOk = await onBeforeChoose()
      if (isOk === false) return false
    }

    // Camera and Album actionsheet select
    if (sourceType.includes('album') && sourceType.includes('camera')) {
      setVisible(true)
      return true
    }

    // goCamera
    photosRef.current?.showLoading?.()
    let isOk = await goCamera(sourceType)
    photosRef.current?.hideLoading?.()

    return isOk
  }

  return (
    <>
      <Image
        ref={photosRef}
        sourceType={sourceType}
        sizeType={sizeType}
        maxWidth={maxWidth}
        uploadPosition={uploadPosition}
        upload={upload}
        uploading={uploading}
        list={list}
        // 照片数量未超时可以选择
        onChoose={chooseVisible ? handleChoose : null}
        count={count}
        allowClear={allowClear}
        allowChoose={allowChoose}
        onChange={onChange}
        onPreview={async (item, index) => {
          // 自定义预览
          if (typeof onPreview === 'function') {
            let goOn = await onPreview(item, index)
            if (goOn === false || goOn === 'browser') return goOn
          }

          return getPreviewType('image')
        }}
        {...props}
      />

      <ActionSheet.Modal
        visible={visible}
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
          photosRef.current?.showLoading?.()
          await goCamera([item.id])
          photosRef.current?.hideLoading?.()
          setVisible(false)
        }}
        onVisibleChange={(newVisible) => {
          setVisible(newVisible)
        }}
      />
    </>
  )
}

export default forwardRef(WechatMiniprogram)
