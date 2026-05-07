import type { QueryParamsState, ServerParams } from '../../types'

/**
 * queryParams 转换为服务端参数
 */
function toServerParams(queryParams: QueryParamsState): ServerParams {
  return { keyword: queryParams?.keyword }
}

export default toServerParams
