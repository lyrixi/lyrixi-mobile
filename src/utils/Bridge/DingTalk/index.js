// 官方文档: https://open.dingtalk.com/document/development/jsapi-overview

import back from './../utils/back'
import formatOpenLocationCoord from './../utils/formatOpenLocationCoord'
import getConfigPayload from './../utils/getConfigPayload'
import compressImage from './compressImage'
import config from './config'

// 内库使用-start
import LocaleUtil from './../../LocaleUtil'
import Clipboard from './../../Clipboard'
import GeoUtil from './../../GeoUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, Clipboard, GeoUtil } from 'lyrixi-mobile'
测试使用-end */

let Bridge = {
  // 特有方法
  setTitle: function ({ title, onSuccess, onError } = {}) {
    window.top.dd.setNavigationTitle({
      title: title,
      success: () => {
        onSuccess?.({ status: 'success' })
      },
      fail: (error) => {
        onError?.({
          status: 'error',
          message:
            error?.errorMessage ||
            `DingTalk ${LocaleUtil.locale(
              '设置标题失败',
              'lyrixi_6dd527e00e48b7580176120795b07b46'
            )}`
        })
      }
    })
  },
  // 通用方法
  load: function ({ getScriptSrc, onSuccess, onError } = {}) {
    if (window.top.dd) {
      onSuccess?.({
        status: 'success'
      })
      return
    }

    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.defer = 'defer'
    script.src =
      getScriptSrc?.({ platform: 'dingtalk' }) ||
      '//g.alicdn.com/dingding/dingtalk-jsapi/3.0.25/dingtalk.open.js'

    script.onload = function () {
      if (window.dd) {
        window.top.dd = window.dd
      }

      onSuccess?.({
        status: 'success'
      })
    }
    script.onerror = function () {
      onError?.({
        status: 'error',
        message: `DingTalk js ${LocaleUtil.locale(
          '加载失败',
          'lyrixi_866b795eae73791792b09d33d6595fe5'
        )}`
      })
    }

    document.body.appendChild(script)
  },
  config: async function ({
    getConfigUrl,
    formatHeaders,
    formatPayload,
    formatResponse,
    onSuccess,
    onError
  } = {}) {
    // 获取配置url
    let url = ''
    if (typeof getConfigUrl === 'function') {
      url = await getConfigUrl({ platform: 'dingtalk' })
    }
    // 构建payload
    let payload = getConfigPayload()
    if (typeof formatPayload === 'function') {
      payload = await formatPayload(payload, { platform: 'dingtalk' })
    }
    // 构建header
    let headers = { 'Content-Type': 'application/json' }
    if (typeof formatHeaders === 'function') {
      headers = await formatHeaders(headers, { platform: 'dingtalk' })
    }

    config({ url, headers, payload, formatResponse, onSuccess, onError })
  },
  back: function (delta) {
    back(delta, { closeWindow: this.closeWindow, goHome: this.goHome })
  },
  closeWindow: function ({ onSuccess, onError } = {}) {
    if (window.top.dd?.env?.platform === 'pc') {
      window?.top?.dd?.quitPage({
        success: () => {
          onSuccess?.({ status: 'success' })
        },
        fail: (error) => {
          onError?.({
            status: 'error',
            message:
              error?.errorMessage ||
              `DingTalk ${LocaleUtil.locale(
                '关闭窗口失败',
                'lyrixi_665ecd23e32150fd197a316177a3973f'
              )}`
          })
        }
      })
      return
    }

    window.top.dd.closePage({
      success: () => {
        onSuccess?.({ status: 'success' })
      },
      fail: (error) => {
        onError?.({
          status: 'error',
          message:
            error?.errorMessage ||
            `DingTalk ${LocaleUtil.locale(
              '关闭窗口失败',
              'lyrixi_665ecd23e32150fd197a316177a3973f'
            )}`
        })
      }
    })
  },
  onBack: function () {
    console.log('钉钉不支持监听物理返回')
  },
  openLocation: function ({
    latitude,
    longitude,
    type,
    name,
    address,
    scale,
    onSuccess,
    onError
  } = {}) {
    if (!latitude || !longitude || !type) return
    let coord = formatOpenLocationCoord({ latitude, longitude, type })
    console.log('调用钉钉地图...', { latitude, longitude, type, name, address, scale })

    window.top.dd.openLocation({
      title: name || '',
      address: address || '',
      latitude: coord.latitude,
      longitude: coord.longitude,
      onSuccess: () => {
        onSuccess?.({ status: 'success' })
      },
      onError: (error) => {
        onError?.({
          status: 'error',
          message:
            error?.errorMessage ||
            `DingTalk ${LocaleUtil.locale(
              '打开地图失败',
              'lyrixi_3dd680a6b28a8b59516034e54bc595b7'
            )}`
        })
      }
    })
  },
  getLocation: function ({ type, onSuccess, onError } = {}) {
    console.log('调用钉钉定位...', type)

    window.top.dd.getLocation({
      type: 0,
      useCache: false,
      coordinate: '1',
      cacheTimeout: 20,
      withReGeocode: false,
      targetAccuracy: '200',
      onSuccess: (res) => {
        console.log('钉钉定位完成', res)
        let latitude = res.latitude
        let longitude = res.longitude
        let currentType = 'gcj02'
        let isInChina = GeoUtil.isInChina([longitude, latitude])
        if (isInChina) {
          currentType = 'gcj02'
        } else {
          currentType = 'wgs84'
        }

        const points = GeoUtil.coordtransform([longitude, latitude], currentType, type)
        longitude = points[0]
        latitude = points[1]

        let result = {
          status: 'success',
          type: type,
          latitude: latitude,
          longitude: longitude,
          accuracy: res.accuracy
        }
        console.log('转换后坐标', result)
        onSuccess?.(result)
      },
      onError: (error) => {
        onError?.({ status: 'error', message: error?.errorMessage || '' })
      }
    })
  },
  scanCode: function ({ scanType, onSuccess, onError, onCancel } = {}) {
    let type = 'all'
    if (scanType && scanType.length === 1) {
      if (scanType.includes('qrCode')) {
        type = 'qrCode'
      } else if (scanType.includes('barCode')) {
        type = 'barCode'
      }
    }

    window.top.dd.biz.util.scan({
      type: type,
      onSuccess: (res) => {
        onSuccess?.({
          status: 'success',
          resultStr: res.text
        })
      },
      onError: (error) => {
        onError?.({ status: 'error', message: error?.errorMessage || '' })
      },
      onCancel: onCancel
    })
  },
  chooseMedia: function ({
    count,
    sourceType,
    sizeType,
    mediaType,
    maxDuration,
    onSuccess,
    onError,
    onCancel
  } = {}) {
    // eslint-disable-next-line
    count = count || 9
    if (sourceType?.length === 1 && sourceType.includes('camera') && count > 1) {
      // eslint-disable-next-line
      count = 1
    }

    const handleSuccess = async function (res) {
      let localFiles = []
      for (let file of res?.files) {
        let localFile = {
          fileThumbnail: file.path,
          fileUrl: file.path,
          filePath: file.path,
          fileType: 'image',
          fileExtension: file.fileType
        }

        if (sizeType?.indexOf?.('compressed') >= 0) {
          localFile = await compressImage(localFile)
        }

        localFiles.push(localFile)
      }

      onSuccess &&
        onSuccess({
          status: 'success',
          localFiles: localFiles
        })
    }

    const handleError = function (error) {
      if (
        error?.errorCode === '11' ||
        error?.errorCode === '-1' ||
        error?.errorCode === 11 ||
        error?.errorCode === -1
      ) {
        onCancel && onCancel()
      } else {
        console.error('钉钉uploadImage失败:', error)
        onError &&
          onError({
            status: 'error',
            code: error?.errorCode || '',
            message: error?.errorMessage || ''
          })
      }
    }

    console.log('调用钉钉chooseImage:', {
      count: count,
      secret: false,
      position: 'back',
      sourceType: sourceType || ['camera', 'album']
    })
    window.top.dd.chooseImage({
      count: count,
      secret: false,
      position: 'back',
      sourceType: sourceType || ['camera', 'album'],
      success: handleSuccess,
      fail: handleError
    })
  },
  uploadFile: async function ({
    localFile,
    getUploadUrl,
    formatHeaders,
    formatPayload,
    formatResponse,
    onSuccess,
    onError,
    onCancel
  } = {}) {
    const url = (await getUploadUrl?.({ platform: 'dingtalk' })) || ''
    if (!localFile?.fileType || !localFile?.filePath) {
      onError &&
        onError({
          status: 'error',
          message: `localFile error`
        })
      return
    }
    if (!url || typeof url !== 'string') {
      onError &&
        onError({
          status: 'error',
          message: `url error`
        })
      return
    }

    let payload = { filePath: localFile.filePath, fileType: localFile.fileType }
    if (typeof formatPayload === 'function') {
      payload = await formatPayload(payload, { platform: 'dingtalk' })
    }
    let header = { 'Content-Type': 'multipart/form-data' }
    if (typeof formatHeaders === 'function') {
      header = await formatHeaders(header, { platform: 'dingtalk' })
    }

    const handleSuccess = async function (res) {
      console.log('钉钉uploadImage成功:', res)
      const { data, statusCode } = res
      if (statusCode !== 200) {
        onError &&
          onError({
            status: 'error',
            message: `DingTalk ${LocaleUtil.locale(
              '网络异常，上传失败',
              'lyrixi_18904cde640c2efd37bc6ed3e9dedc77'
            )}`
          })
        return
      }

      let response = {
        code: 'success',
        result: data
      }
      if (typeof data === 'string') {
        try {
          response.result = JSON.parse(data)
        } catch (e) {}
      }

      if (typeof formatResponse === 'function') {
        response = await formatResponse(response, { platform: 'dingtalk' })
      }

      if (response.status === 'success') {
        onSuccess?.(response)
      } else {
        onError?.(response)
      }
    }

    console.log('调用钉钉uploadFile:', {
      url: url.startsWith('http') ? url : window.origin + url,
      header: header,
      formData: payload,
      fileName: 'file', // 文件名必传，但其实没什么用, 因为在formData也可以传
      filePath: localFile.filePath,
      fileType: localFile.fileType
    })

    window.top.dd.uploadFile({
      url: url.startsWith('http') ? url : window.origin + url,
      header: header,
      formData: payload,
      fileName: 'file', // 文件名必传，但其实没什么用, 因为在formData也可以传
      filePath: localFile.filePath,
      fileType: localFile.fileType,
      success: handleSuccess,
      fail: (error) => {
        onError?.({
          status: 'error',
          code: error?.errorCode || '',
          message: error?.errorMessage || ''
        })
      },
      cancel: onCancel
    })
  },
  previewMedia: function ({ index, sources, onSuccess, onError, onCancel } = {}) {
    let urls = sources.map((item) => item?.localFile?.tempFileUrl || item?.fileUrl)
    let current = sources?.[index]

    // 预览视频
    if (current?.fileType === 'video') {
      Clipboard.copyText(current.fileUrl)
      return
    }

    // 预览图片
    window.top.dd.previewImage({
      urls: urls,
      current: index || 0,
      success: () => {
        onSuccess?.({
          status: 'success'
        })
      },
      fail: (error) => {
        console.log('钉钉previewImage失败:', error)
        onError?.({
          status: 'error',
          message:
            error?.errorMessage ||
            `DingTalk ${LocaleUtil.locale('预览失败', 'lyrixi_6a3a5ef00db03994963efebe08432ce1')}`
        })
      },
      cancel: onCancel
    })
  },
  share({ title, description, url, imageUrl, onSuccess, onError } = {}) {
    window.top.dd.biz.util.share({
      type: 0, // 分享类型，0:全部组件 默认；1:只能分享到钉钉；2:不能分享，只有刷新按钮
      url: url,
      title: title,
      content: description,
      image: imageUrl,
      onSuccess: function () {
        onSuccess && onSuccess()
      },
      onFail: function (err) {
        console.log('DingTalk Share onError:', err)
        onError &&
          onError({
            message:
              err?.errMsg ||
              `DingTalk ${LocaleUtil.locale('分享失败', 'lyrixi_e8e25af006ef2ebbdb317e1d7c035a0f')}`
          })
      }
    })
  }
}

export default Bridge
