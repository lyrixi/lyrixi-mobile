// 转换 API 返回数据为页面所需格式
function localData(result) {
  if (result.code === '1') {
    let list = result?.data?.rangeList
    return {
      status: 'success',
      list: list,
      totalPage: result?.data?.total
    }
  } else {
    return {
      status: 'error',
      message: result.message
    }
  }
}

export default localData
