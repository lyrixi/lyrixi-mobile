import type { BridgeSuccessCallback, BridgeErrorCallback } from '../types'

// 内库使用-start
import Request from './../../../utils/Request'
import LocaleUtil from './../../../utils/LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { Request, LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

function config(params?: {
  url?: string
  headers?: Record<string, string>
  payload?: Record<string, unknown>
  formatResponse?: (response: unknown, ctx: { platform: string }) => Promise<unknown> | unknown
  onSuccess?: BridgeSuccessCallback
  onError?: BridgeErrorCallback
}) {
  const { url, headers, payload, formatResponse, onSuccess, onError } = params || {}
  if (!url || !payload?.appId) {
    onError?.({
      status: 'error',
      message: `Lyrixi ${LocaleUtil.locale(
        '缺少参数',
        'lyrixi_f06ec979541f5f1283216579ac421380',
        undefined
      )}: url or appId`
    })
    return
  }

  Request.post(url, payload, {
    headers: headers
  })
    .then(async (response: unknown) => {
      const res = response as { code?: string; message?: string } & Record<string, unknown>
      if (res.code === '1') {
        if (!formatResponse) return
        const result = (await formatResponse(res, { platform: 'lyrixi' })) as {
          status: string
          message?: string
          data?: Record<string, unknown>
        }
        if (result.status === 'error') {
          onError?.({
            status: 'error',
            message: result.message
          })
          return
        }
        const top = window.top ?? window
        const lyrixi = top.lyrixi
        if (!lyrixi) {
          onError?.({ status: 'error', message: 'lyrixi JSSDK not loaded' })
          return
        }

        let isReady = false
        setTimeout(() => {
          if (isReady) return
          isReady = true
          onError?.({
            status: 'error',
            message: `Lyrixi ${LocaleUtil.locale(
              '超时',
              'lyrixi_e944c7c9017a815650ce6b78f81685e7'
            )}`
          })
        }, 10000)

        lyrixi.config?.(
          Object.assign({ debug: !!top._debug_ }, result.data, {
            jsApiList: [
              'closeWindow',
              'onHistoryBack',
              'setTitle',
              'tel',
              'openLocation',
              'getLocation',
              'scanCode',
              'chooseMedia',
              'uploadFile',
              'previewMedia',
              'previewFile',
              'share',
              'detectFace',
              'getPhoneNumber',
              'openWindow'
            ]
          })
        )

        lyrixi.ready?.(() => {
          if (isReady) return
          isReady = true
          onSuccess?.({ status: 'success', data: undefined })
        })

        lyrixi.error?.((err: unknown) => {
          if (isReady) return
          isReady = true
          const error = err as { errMsg?: string; err_msg?: string }
          onError?.({
            status: 'error',
            message:
              error?.errMsg ||
              error?.err_msg ||
              `Lyrixi ${LocaleUtil.locale(
                '鉴权失败，请稍后重试！',
                'lyrixi_2a3ba5ab52970d065f994590dcb73c9b'
              )}`
          })
        })
      } else {
        onError?.({
          status: 'error',
          message:
            res.message ||
            `Lyrixi ${LocaleUtil.locale(
              '鉴权接口失败，请稍后重试！',
              'lyrixi_7334cbbe6fd40b00e470b91c73f16d2f'
            )}`
        })
      }
    })
    .catch(() => {
      onError?.({
        status: 'error',
        message: `Lyrixi ${LocaleUtil.locale(
          '鉴权接口异常，请稍后重试！',
          'lyrixi_d015103b9b8864df89ed3c7edb96eca0'
        )}`
      })
    })
}

export default config
