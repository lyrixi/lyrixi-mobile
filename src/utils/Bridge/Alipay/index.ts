// 官方文档: https://opendocs.alipay.com/open/020oit?scene=SC00001851?pathHash=0f29c54b

import back from './../utils/back'
import formatOpenLocationCoord from './../utils/formatOpenLocationCoord'

import type {
  BridgeLoadParams,
  BridgeCloseWindowParams,
  BridgeOpenLocationParams,
  BridgeGetLocationParams,
  BridgeScanCodeParams
} from '../types'

// 内库使用-start
import GeoUtil from './../../GeoUtil'
import LocaleUtil from './../../LocaleUtil'
import AssetUtil from './../../AssetUtil'
import Device from './../../Device'
// 内库使用-end

/* 测试使用-start
import { GeoUtil, LocaleUtil, AssetUtil, Device } from 'lyrixi-mobile'
测试使用-end */

let Bridge = {
  load: function (params?: BridgeLoadParams) {
    const { getScriptSrc, onSuccess, onError } = params || {}
    const topWin = window.top ?? window
    if (topWin.ap) {
      onSuccess?.({
        status: 'success',
        data: undefined
      })
      return
    }

    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.defer = true
    script.src =
      getScriptSrc?.({ platform: 'alipay' }) ||
      '//gw.alipayobjects.com/as/g/h5-lib/alipayjsapi/3.1.1/alipayjsapi.min.js'

    script.onload = async function () {
      if (Device.platform === 'alipayMiniProgram') {
        await AssetUtil.loadRemoteJs(
          getScriptSrc?.({ platform: 'alipayMiniProgram' }) || 'https://appx/web-view.min.js'
        )
        if (!window.my) {
          console.error('支付小程序js加载失败')
          onError?.({
            status: 'error',
            message: `AlipayMiniProgram js ${LocaleUtil.locale(
              '加载失败',
              'lyrixi_866b795eae73791792b09d33d6595fe5'
            )}`
          })
          return
        }
        ;(window.top ?? window).my = window.my
      }

      if (window.ap) {
        ;(window.top ?? window).ap = window.ap
      }

      onSuccess?.({
        status: 'success',
        data: undefined
      })
    }
    script.onerror = function () {
      onError?.({
        status: 'error',
        message: `Alipay js ${LocaleUtil.locale(
          '加载失败',
          'lyrixi_866b795eae73791792b09d33d6595fe5'
        )}`
      })
    }

    if (script.src) document.body.appendChild(script)
  },
  goHome: function () {
    window.history.go(-1)
  },
  back: function (delta?: number) {
    back(delta, { closeWindow: this.closeWindow, goHome: this.goHome })
  },
  closeWindow: function (params?: BridgeCloseWindowParams) {
    const { onSuccess } = params || {}
    ;(window.top ?? window).ap?.popWindow?.()
    onSuccess?.({ status: 'success', data: undefined })
  },
  onBack: function () {
    console.log('支付宝不支持监听物理返回')
  },
  openLocation: function (params?: BridgeOpenLocationParams) {
    const { latitude, longitude, type, name, address, scale, onSuccess, onError } = params || {}
    if (!latitude || !longitude || !type) return
    let coord = formatOpenLocationCoord({ latitude, longitude, type })
    console.log('调用支付宝地图...', { latitude, longitude, type, name, address, scale })
    ;(window.top ?? window).ap?.openLocation?.({
      title: name || '',
      address: address || '',
      latitude: coord?.latitude ?? 0,
      longitude: coord?.longitude ?? 0,
      onSuccess: () => {
        onSuccess?.({ status: 'success', data: undefined })
      },
      onError: (error: { errorMessage?: string }) => {
        onError?.({
          status: 'error',
          message:
            error?.errorMessage ||
            `Alipay ${LocaleUtil.locale(
              '此平台不支持',
              'lyrixi_60a7978c99ee3bd2f538096ee46727ca'
            )} openLocation`
        })
      }
    })
  },
  getLocation: function (params?: BridgeGetLocationParams) {
    const { type, onSuccess, onError } = params || {}
    console.log('调用支付宝定位...', type)
    ;(window.top ?? window).ap?.getLocation?.({
      type: '2',
      onSuccess: (res: { latitude?: number; longitude?: number; accuracy?: number }) => {
        console.error('支付宝定位成功', res)
        let latitude = res.latitude
        let longitude = res.longitude
        if (latitude === null || latitude === undefined || longitude === null || longitude === undefined) {
          onError?.({
            status: 'error',
            message: `Alipay ${LocaleUtil.locale('定位失败', 'lyrixi_9831baf6b76c1da7b69b463033b924cc')}`
          })
          return
        }

        if (type === 'wgs84') {
          const points = GeoUtil.coordtransform([longitude, latitude], 'gcj02', 'wgs84')
          if (points) {
            longitude = points[0]
            latitude = points[1]
          }
        }

        onSuccess?.({
          status: 'success',
          code: '',
          message: '',
          data: {
            longitude: longitude,
            latitude: latitude,
            type: type || 'gcj02',
            accuracy: res.accuracy
          }
        })
      },
      onError: (error: { errorMessage?: string }) => {
        console.error('支付宝定位失败', error)
        onError?.({ status: 'error', message: error?.errorMessage || '' })
      }
    })
  },
  scanCode: function (params?: BridgeScanCodeParams) {
    const { scanType, onSuccess, onError, onCancel } = params || {}
    let type = ''
    if (scanType && scanType.length === 1) {
      if (scanType.includes('qrCode')) {
        type = 'qr'
      } else if (scanType.includes('barCode')) {
        type = 'bar'
      }
    }

    ;(window.top ?? window).ap?.scan?.({
      type: type,
      success: (res: { code?: string }) => {
        onSuccess?.({
          status: 'success',
          code: '',
          message: '',
          data: { content: res.code ?? '' }
        })
      },
      fail: (error: { errorMessage?: string }) => {
        onError?.({ status: 'error', message: error?.errorMessage || '' })
      },
      cancel: (error: { errorMessage?: string }) => {
        onCancel?.({ status: 'cancel', message: error?.errorMessage || '' })
      }
    })
  },
  chooseMedia: function () {
    console.log('调用支付宝选择媒体暂未实现')
  },
  uploadFile: function () {
    console.log('调用支付宝上传文件暂未实现')
  },
  previewMedia: function () {
    console.log('调用支付宝预览文件暂未实现')
  },
  share: function () {
    console.log('调用支付宝分享暂未实现')
  }
}

export default Bridge
