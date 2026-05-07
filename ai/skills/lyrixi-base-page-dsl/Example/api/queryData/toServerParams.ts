import type { ToServerParamsOptions } from './types'

/**
 * queryParams 转换为服务端参数
 */
function toServerParams(queryParams: ToServerParamsOptions): Record<string, unknown> {
  return { keyword: queryParams?.keyword }
}

export default toServerParams
