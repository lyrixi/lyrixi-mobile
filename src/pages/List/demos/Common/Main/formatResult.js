import mockResult from './mockResult'

// 转换 API 返回数据为页面所需格式
function localData(result) {
  // 测试数据
  // eslint-disable-next-line
  result = mockResult
  if (result.code === '1') {
    let list = result?.data?.list
    return {
      status: 'success',
      list: list,
      totalPage: result?.data?.totalPage
    }
  } else {
    return {
      status: 'error',
      message: result.message
    }
  }
}

export default localData
