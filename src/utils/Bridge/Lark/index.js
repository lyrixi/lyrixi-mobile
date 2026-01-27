// 官方文档: https://open.feishu.cn/document/client-docs/h5/
// 鉴权: https://open.feishu.cn/document/uYjL24iN/uQjMuQjMuQjM/authentication/h5sdkconfig

import back from './../utils/back'
import formatOpenLocationCoord from './../utils/formatOpenLocationCoord'
import getConfigPayload from './../utils/getConfigPayload'
import config from './config'

// 内库使用-start
import GeoUtil from './../../GeoUtil'
import Clipboard from './../../Clipboard'
import LocaleUtil from './../../LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { GeoUtil, Clipboard, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

let Bridge = {
  load: function ({ getScriptSrc, onSuccess, onError } = {}) {
    if (window.top.tt && window.top.h5sdk) {
      onSuccess?.({
        status: 'success'
      })
      return
    }

    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.defer = 'defer'
    script.src =
      getScriptSrc?.({ platform: 'lark' }) ||
      '//lf-scm-cn.feishucdn.com/lark/op/h5-js-sdk-1.5.34.js'

    script.onload = function () {
      if (window.tt && window.h5sdk) {
        window.top.tt = window.tt
        window.top.h5sdk = window.h5sdk
      }

      onSuccess?.({
        status: 'success'
      })
    }
    script.onerror = function () {
      onError?.({
        status: 'error',
        message: LocaleUtil.locale('飞书js加载失败', 'noKey_a0b965a930e517736d3111261714241b')
      })
    }

    if (script.src) document.body.appendChild(script)
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
      url = await getConfigUrl({ platform: 'lark' })
    }
    // 构建payload
    let payload = getConfigPayload()
    if (typeof formatPayload === 'function') {
      payload = await formatPayload(payload, { platform: 'lark' })
    }
    // 构建header
    let headers = { 'Content-Type': 'application/json' }
    if (typeof formatHeaders === 'function') {
      headers = await formatHeaders(headers, { platform: 'lark' })
    }

    config({ url, headers, payload, formatResponse, onSuccess, onError })
  },
  back: function (delta) {
    back(delta, { closeWindow: this.closeWindow, goHome: this.goHome })
  },
  closeWindow: function ({ onSuccess, onError } = {}) {
    window.top.tt.closeWindow({
      success: () => {
        onSuccess?.({ status: 'success' })
      },
      fail: (error) => {
        onError?.({
          status: 'error',
          message:
            error?.errMsg ||
            LocaleUtil.locale('关闭窗口失败', 'noKey_665ecd23e32150fd197a316177a3973f')
        })
      }
    })
  },
  onBack: function () {
    console.log('飞书不支持监听物理返回')
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
    console.log('调用飞书地图...', { latitude, longitude, type, name, address, scale })

    if (!scale) {
      // eslint-disable-next-line
      scale = 12
    } else if (scale < 5) {
      // eslint-disable-next-line
      scale = 5
    } else if (scale > 18) {
      // eslint-disable-next-line
      scale = 18
    }

    window.top.tt.openLocation({
      latitude: coord.latitude,
      longitude: coord.longitude,
      scale: scale,
      name: name,
      address: address,
      success: () => {
        onSuccess?.({ status: 'success' })
      },
      fail: (error) => {
        onError?.({
          status: 'error',
          message:
            error?.errMsg ||
            LocaleUtil.locale('打开地图失败', 'lyrixi.bridge.openLocation.error')
        })
      }
    })
  },
  getLocation: function ({ type, onSuccess, onError } = {}) {
    let targetType = type || 'gcj02'
    console.log('调用飞书定位...', type)

    window.top.tt.getLocation({
      type: targetType,
      success: (res) => {
        console.error('飞书定位成功', res)

        let result = {
          status: 'success',
          longitude: res.longitude,
          latitude: res.latitude,
          type: res.type,
          accuracy: res.accuracy
        }

        if (res.type && res.type !== targetType) {
          const points = GeoUtil.coordtransform([res.longitude, res.latitude], res.type, targetType)

          result = {
            status: 'success',
            longitude: points[0],
            latitude: points[1],
            type: targetType,
            accuracy: res.accuracy
          }
        }

        onSuccess?.(result)
      },
      fail: (error) => {
        console.error('飞书定位失败', error)
        onError?.({
          status: 'error',
          message: error?.errMsg || LocaleUtil.locale('定位失败', 'lyrixi.location.failed')
        })
      }
    })
  },
  scanCode: function ({ scanType, onSuccess, onError, onCancel } = {}) {
    window.top.tt.scanCode({
      scanType: scanType,
      barCodeInput: true,
      success: (res) => {
        onSuccess?.({
          status: 'success',
          resultStr: res.resultStr
        })
      },
      fail: (error) => {
        onError?.({ status: 'error', message: error?.errMsg || '' })
      },
      cancel: onCancel
    })
  },
  chooseMedia: function () {
    console.log('调用飞书选择媒体暂未实现')
  },
  uploadFile: function () {
    console.log('调用飞书上传文件暂未实现')
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
    window.top.tt.previewImage({
      urls: urls,
      current: urls?.[index],
      success: () => {
        onSuccess?.({
          status: 'success'
        })
      },
      fail: (error) => {
        console.log('飞书previewImage失败:', error)
        onError?.({
          status: 'error',
          message:
            error?.errMsg || LocaleUtil.locale('预览失败', 'lyrixi.bridge.previewImage.error')
        })
      },
      onCancel: onCancel
    })
  },
  share({ title, description, url, imageUrl, onSuccess, onError } = {}) {
    window.top.tt.share({
      channelType: ['wx', 'wx_timeline', 'system'],
      contentType: 'url',
      title: title,
      content: description,
      url: url,
      image: imageUrl,
      success() {
        onSuccess && onSuccess()
      },
      fail(err) {
        console.log('Lark Share onError:', err)

        onError &&
          onError({
            message: err?.message || LocaleUtil.locale('分享失败', 'lyrixi.share.failed')
          })
      }
    })
  }
}

export default Bridge
