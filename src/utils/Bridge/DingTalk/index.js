// 官方文档: https://open.dingtalk.com/document/development/jsapi-overview

import _ from 'lodash'
import back from './../utils/back'
import formatOpenLocationParams from './../utils/formatOpenLocationParams'
import compressImage from './compressImage'
import wrapCallback, { wrapDingTalkCallback } from './../utils/wrapCallback'

// 内库使用-start
import LocaleUtil from './../../LocaleUtil'
import GeoUtil from './../../GeoUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil, GeoUtil } from 'lyrixi-mobile'
测试使用-end */

let Bridge = {
  // 特有方法
  setTitle: function (params) {
    if (typeof params?.title === 'string') {
      const wrappedParams = wrapCallback({
        title: params?.title,
        onSuccess: params?.onSuccess,
        onError: params?.onError
      })
      window.top.dd.setNavigationTitle(wrappedParams)
    }
  },
  // 通用方法
  load: function (callback, options) {
    if (window.top.dd) {
      if (callback) {
        callback({
          status: 'success'
        })
      }
      return
    }

    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.defer = 'defer'
    script.src =
      options.dingtalkBridgeSrc || '//g.alicdn.com/dingding/dingtalk-jsapi/3.0.25/dingtalk.open.js'

    script.onload = function () {
      if (window.dd) {
        window.top.dd = window.dd
      }

      if (callback) {
        callback({
          status: 'success'
        })
      }
    }
    script.onerror = function () {
      if (callback) {
        callback({
          status: 'error',
          message: LocaleUtil.locale('钉钉js加载失败')
        })
      }
    }

    document.body.appendChild(script)
  },

  back: function (delta) {
    back(delta, { closeWindow: this.closeWindow, goHome: this.goHome })
  },
  closeWindow: function (params) {
    const wrappedParams = wrapCallback(params)
    if (window.top.dd?.env?.platform === 'pc') {
      window?.top?.dd?.quitPage(wrappedParams)
      return
    }

    window.top.dd.closePage(wrappedParams)
  },
  onHistoryBack: function (params) {
    console.log('钉钉不支持监听物理返回')
  },
  openLocation: function (params) {
    if (_.isEmpty(params)) return
    let newParams = formatOpenLocationParams(params)
    console.log('调用钉钉地图...', newParams)

    const wrappedParams = wrapCallback({
      title: newParams.name || '',
      address: newParams.address || '',
      latitude: newParams.latitude,
      longitude: newParams.longitude,
      onSuccess: newParams.onSuccess,
      onError: newParams.onError
    })

    window.top.dd.openLocation(wrappedParams)
  },
  getLocation: function (params = {}) {
    const { type, onSuccess, onError } = params || {}
    let targetType = type || 'gcj02'
    console.log('调用钉钉定位...', params)

    const handleSuccess = onSuccess
      ? function (res) {
          console.log('钉钉定位完成', res)
          let latitude = res.latitude
          let longitude = res.longitude
          if (!longitude || !latitude) {
            console.error('钉钉定位失败', res)
            if (onError) {
              onError({
                status: 'error',
                message: res.errorMessage || LocaleUtil.locale('定位失败', 'lyrixi.location.failed')
              })
            }
            return
          }
          let currentType = 'gcj02'
          let isInChina = GeoUtil.isInChina([longitude, latitude])
          if (isInChina) {
            currentType = 'gcj02'
          } else {
            currentType = 'wgs84'
          }

          const points = GeoUtil.coordtransform([longitude, latitude], currentType, targetType)
          longitude = points[0]
          latitude = points[1]

          let result = {
            status: 'success',
            type: targetType,
            latitude: latitude,
            longitude: longitude,
            accuracy: res.accuracy
          }
          console.log('转换后坐标', result)
          onSuccess(result)
        }
      : undefined

    const wrappedParams = wrapCallback({
      type: 0,
      useCache: false,
      coordinate: '1',
      cacheTimeout: 20,
      withReGeocode: false,
      targetAccuracy: '200',
      onSuccess: handleSuccess,
      onError: onError
    })

    window.top.dd.getLocation(wrappedParams)
  },
  scanQRCode: function (params = {}) {
    const { scanType, onSuccess, onError } = params || {}

    let type = 'all'
    if (scanType && scanType.length === 1) {
      if (scanType.includes('qrCode')) {
        type = 'qrCode'
      } else if (scanType.includes('barCode')) {
        type = 'barCode'
      }
    }

    const handleSuccess = onSuccess
      ? function (res) {
          onSuccess({
            status: 'success',
            resultStr: res.text
          })
        }
      : undefined

    const wrappedParams = wrapDingTalkCallback({
      type: type,
      onSuccess: handleSuccess,
      onError: onError
    })

    window.top.dd.biz.util.scan(wrappedParams)
  },
  chooseMedia: function ({ count, sourceType, sizeType, onSuccess, onError, onCancel } = {}) {
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
          fileUrl: file.path,
          filePath: file.path,
          fileType: file.fileType
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

    window.top.dd.chooseImage({
      count: count,
      secret: false,
      position: 'back',
      sourceType: sourceType || ['camera', 'album'],
      success: handleSuccess,
      fail: handleError
    })
  },
  uploadFile: function ({
    localFile,
    getUploadUrl,
    formatHeader,
    formatPayload,
    formatResult,
    onSuccess,
    onError
  } = {}) {
    const url = getUploadUrl?.({ platform: 'dingtalk' }) || ''
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
      payload = formatPayload(payload, { platform: 'dingtalk' })
    }
    let header = { 'Content-Type': 'multipart/form-data' }
    if (typeof formatHeader === 'function') {
      header = formatHeader(header, { platform: 'dingtalk' })
    }

    const handleSuccess = function (res) {
      console.log('钉钉uploadImage成功:', res)
      const { data, statusCode } = res
      if (statusCode !== 200) {
        onError &&
          onError({
            status: 'error',
            message: `${LocaleUtil.locale('网络异常，上传失败', 'lyrixi.upload.network.error')}`
          })
        return
      }

      let result = {
        code: 'success',
        result: data
      }
      if (typeof data === 'string') {
        try {
          result.result = JSON.parse(data)
        } catch (e) {}
      }

      if (typeof formatResult === 'function') {
        result = formatResult(result, { platform: 'dingtalk' })
      }

      if (result.code !== 'success') {
        onError &&
          onError({
            status: 'error',
            message: result.message
          })
        return
      }

      onSuccess &&
        onSuccess({
          status: 'success',
          result: result
        })
    }

    const handleError = function (error) {
      console.error('钉钉uploadImage失败:', error)
      onError({
        status: 'error',
        code: error?.errorCode || '',
        message: error?.errorMessage || ''
      })
    }

    console.log('调用钉钉uploadFile:', {
      url: url,
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
      fail: handleError
    })
  },
  previewMedia: function (params) {
    const handleError = function (error) {
      console.log('钉钉previewImage失败:', error)
      params?.onError &&
        params.onError({
          status: 'error',
          message: error?.errorMessage || LocaleUtil.locale('预览失败')
        })
    }

    const wrappedParams = wrapCallback({
      urls: params?.sources.map((item) => item.fileUrl),
      current: params?.index || 0,
      onSuccess: params?.onSuccess,
      onError: handleError
    })

    window.top.dd.previewImage(wrappedParams)
  }
}

export default Bridge
