import type { LoadResult } from 'lyrixi-mobile'
import mockResult from './mockResult'

// 转换 API 返回数据为页面所需格式
type ApiResult = {
  code?: string
  message?: string
  data?: { list?: unknown[]; totalPage?: number }
}

function formatResult(
  _result: unknown,
  _options: { payload: Record<string, unknown> }
): LoadResult {
  // 测试数据
  // eslint-disable-next-line
  const result: ApiResult = mockResult as ApiResult
  if (result.code === '1') {
    const list = result?.data?.list
    return {
      status: 'success',
      list: list as LoadResult['list'],
      totalPage: result?.data?.totalPage
    }
  }
  return {
    status: 'error',
    message: result.message
  }
}

export default formatResult
