// 测试数据
const mockResult = {
  code: '1',
  data: {
    list: [
      {
        id: '1',
        name: 'John Doe',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '2',
        name: 'Jane Doe',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      }
    ]
  }
}

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
