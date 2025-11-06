// 内库使用-start
import LocaleUtil from './../../LocaleUtil'
// 内库使用-end

/* 测试使用-start
import { LocaleUtil } from 'lyrixi-mobile'
测试使用-end */

/**
 * 包装第三方API的onSuccess、onError和onCancel回调，统一返回格式
 * @param {Object} params - 包含onSuccess、onError和onCancel回调的参数对象
 * @param {Function} params.onSuccess - 成功回调
 * @param {Function} params.onError - 失败回调
 * @param {Function} params.onCancel - 取消回调
 * @returns {Object} 包含标准格式回调的对象
 */
export function wrapCallback(params = {}) {
  const { onSuccess, onError, onCancel, ...otherParams } = params

  return {
    ...otherParams,
    success: function (res) {
      if (onSuccess) {
        onSuccess({
          status: 'success',
          ...res
        })
      }
    },
    fail: function (err) {
      if (onError) {
        // 提取错误信息
        let message = err?.errMsg || err?.errorMessage || err?.message || ''

        // 如果没有错误信息，使用默认文案
        if (!message) {
          message = LocaleUtil.locale('调用失败', 'lyrixi_call_failed')
        }

        onError({
          status: 'error',
          message: message,
          originalError: err
        })
      }
    },
    cancel: function () {
      if (onCancel) {
        onCancel()
      }
    }
  }
}

/**
 * 包装钉钉特殊格式的回调 (onSuccess/onError)
 * @param {Object} params - 包含onSuccess、onError和onCancel回调的参数对象
 * @param {Function} params.onSuccess - 成功回调（会被映射到onSuccess）
 * @param {Function} params.onError - 失败回调（会被映射到onFail）
 * @param {Function} params.onCancel - 取消回调
 * @returns {Object} 包含onSuccess、onFail和cancel的对象
 */
export function wrapDingTalkCallback(params = {}) {
  const { onSuccess, onError, onCancel, ...otherParams } = params

  return {
    ...otherParams,
    onSuccess: function (res) {
      if (onSuccess) {
        onSuccess({
          status: 'success',
          ...res
        })
      }
    },
    onError: function (err) {
      if (onError) {
        // 提取错误信息
        let message = err?.errMsg || err?.errorMessage || err?.message || ''

        // 如果没有错误信息，使用默认文案
        if (!message) {
          message = LocaleUtil.locale('调用失败', 'lyrixi_call_failed')
        }

        onError({
          status: 'error',
          message: message,
          originalError: err
        })
      }
    },
    cancel: function () {
      if (onCancel) {
        onCancel()
      }
    }
  }
}

export default wrapCallback
