import type { ListAsyncLoadResult } from 'lyrixi-mobile'

import mockResult from './../../Common/Main/mockResult'

// 转换 API 返回数据为页面所需格式
function localData(result: unknown, _options: { payload: Record<string, unknown> }): ListAsyncLoadResult {
  // 测试数据
  // eslint-disable-next-line
  result = mockResult
  const r = result as { code?: string; message?: string; data?: { list?: unknown; totalPage?: number } }
  if (r.code === '1') {
    const list = r.data?.list
    return {
      status: 'success',
      list: list as ListAsyncLoadResult['list'],
      totalPage: r.data?.totalPage
    }
  } else {
    return {
      status: 'error',
      message: r.message
    }
  }
}

export default localData
