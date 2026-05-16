import type { ListAsyncLoadResult } from 'lyrixi-mobile'

import type { ListPaginationDemoApiResult } from './../ListPagination.demos.types'

import mockResult from './mockResult'

// 转换 API 返回数据为页面所需格式
function formatResult(
  _result: unknown,
  _options: { payload: Record<string, unknown> }
): ListAsyncLoadResult {
  // 测试数据
  // eslint-disable-next-line
  const result: ListPaginationDemoApiResult = mockResult as ListPaginationDemoApiResult
  if (result.code === '1') {
    const list = result?.data?.list
    return {
      status: 'success',
      list: list as ListAsyncLoadResult['list'],
      totalPage: result?.data?.totalPage
    }
  }
  return {
    status: 'error',
    message: result.message
  }
}

export default formatResult
