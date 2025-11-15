// 官方文档: https://open.feishu.cn/document/client-docs/h5/
// 鉴权: https://open.feishu.cn/document/uYjL24iN/uQjMuQjMuQjM/authentication/h5sdkconfig

import _ from 'lodash'
import back from './utils/back'
import formatOpenLocationParams from './../utils/formatOpenLocationParams'
import wrapCallback from './../utils/wrapCallback'

// 内库使用-start
import GeoUtil from './../GeoUtil'
import LocaleUtil from './../LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { GeoUtil, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

let Bridge = {
  load: function (callback, options) {
    if (window.top.tt && window.top.h5sdk) {
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
    script.src = options.larkBridgeSrc || '//lf-scm-cn.feishucdn.com/lark/op/h5-js-sdk-1.5.34.js'

    script.onload = function () {
      if (window.tt && window.h5sdk) {
        window.top.tt = window.tt
        window.top.h5sdk = window.h5sdk
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
          message: LocaleUtil.locale('飞书js加载失败', 'lyrixi_lark_js_load_failed')
        })
      }
    }

    if (script.src) document.body.appendChild(script)
  },
  back: function (delta) {
    back(delta, { closeWindow: this.closeWindow, goHome: this.goHome })
  },
  closeWindow: function (params) {
    const wrappedParams = wrapCallback(params)
    window.top.tt.closeWindow(wrappedParams)
  },
  onHistoryBack: function (params) {
    console.log('飞书不支持监听物理返回')
  },
  openLocation: function (params) {
    if (_.isEmpty(params)) return
    let newParams = formatOpenLocationParams(params)
    console.log('调用飞书地图...', newParams)

    let scale = params?.scale
    if (!scale) {
      scale = 12
    } else if (scale < 5) {
      scale = 5
    } else if (scale > 18) {
      scale = 18
    }

    const wrappedParams = wrapCallback({
      latitude: newParams.latitude,
      longitude: newParams.longitude,
      scale: scale,
      name: newParams.name,
      address: newParams.address,
      onSuccess: newParams.onSuccess,
      onError: newParams.onError
    })

    window.top.tt.openLocation(wrappedParams)
  },
  getLocation: function (params = {}) {
    const { type, onSuccess, onError } = params || {}
    let targetType = type || 'gcj02'
    console.log('调用飞书定位...', params)

    const handleSuccess = onSuccess
      ? function (res) {
          if (!res.longitude || !res.latitude) {
            console.error('飞书定位失败', res)
            if (onError) {
              onError({
                status: 'error',
                message: LocaleUtil.locale('定位成功, 但没有经纬度')
              })
            }
            return
          }

          let result = {
            status: 'success',
            longitude: res.longitude,
            latitude: res.latitude,
            type: res.type,
            accuracy: res.accuracy
          }

          if (res.type && res.type !== targetType) {
            const points = GeoUtil.coordtransform(
              [res.longitude, res.latitude],
              res.type,
              targetType
            )

            result = {
              status: 'success',
              longitude: points[0],
              latitude: points[1],
              type: targetType,
              accuracy: res.accuracy
            }
          }

          onSuccess(result)
        }
      : undefined

    const wrappedParams = wrapCallback({
      type: targetType,
      onSuccess: handleSuccess,
      onError: onError
    })

    window.top.tt.getLocation(wrappedParams)
  },
  scanQRCode: function (params = {}) {
    const { scanType, onSuccess, onError } = params || {}

    const wrappedParams = wrapCallback({
      scanType: scanType,
      barCodeInput: true,
      onSuccess: onSuccess,
      onError: onError
    })

    window.top.tt.scanCode(wrappedParams)
  },
  chooseMedia: function (params) {
    console.log('调用飞书选择媒体暂未实现', params)
  },
  uploadFile: function (params) {
    console.log('调用飞书上传文件暂未实现', params)
  },
  previewMedia: function (params) {
    let index = params?.index || 0
    let current = params?.urls?.[index]

    const wrappedParams = wrapCallback({
      urls: params?.sources.map((item) => item.fileUrl),
      current: current.fileUrl,
      onSuccess: params?.onSuccess,
      onError: params?.onError
    })

    window.top.tt.previewImage(wrappedParams)
  }
}

export default Bridge
