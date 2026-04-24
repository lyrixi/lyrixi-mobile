import bmapGetAddress from './bmapGetAddress'
import googleGetAddress from './googleGetAddress'
import osmGetAddress from './osmGetAddress'

// 内库使用-start
import Toast from './../../../Toast'
// 内库使用-end

/* 测试使用-start
import { Toast } from 'lyrixi-mobile'
测试使用-end */

// 地址逆解析
async function getAddress(
  params: {
    address?: string
    longitude?: number | string
    latitude?: number | string
    type?: string
    [key: string]: unknown
  } | null | undefined
): Promise<unknown> {
  if (params?.address) {
    return params
  }

  if (!params?.longitude || !params?.latitude || !params?.type) {
    return {
      status: 'error',
      message: 'getAddress must pass longitude, latitude and type'
    }
  }

  const defaultGetAddress = window?.defaultGetAddress
  if (typeof defaultGetAddress === 'function') {
    return defaultGetAddress(params)
  }

  let result: unknown
  if (window.google) {
    result = await googleGetAddress(params)
  } else if (window.BMap) {
    result = await bmapGetAddress(params)
  } else {
    result = await osmGetAddress(params)
  }

  const r = result as { status?: string; message?: string; [key: string]: unknown }
  if (r?.status === 'error') {
    if (r.message) {
      Toast.show({ content: r.message })
    }
    return result
  }

  return {
    ...(r && typeof r === 'object' ? r : {}),
    ...params
  }
}

export default getAddress
