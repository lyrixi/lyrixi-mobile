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
      },
      {
        id: '3',
        name: 'Alice Smith',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '4',
        name: 'Bob Johnson',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '5',
        name: 'Carol White',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '6',
        name: 'David Brown',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '7',
        name: 'Emma Davis',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '8',
        name: 'Frank Miller',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '9',
        name: 'Grace Wilson',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '10',
        name: 'Henry Moore',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '11',
        name: 'Isabel Taylor',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '12',
        name: 'Jack Anderson',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '13',
        name: 'Kate Thomas',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '14',
        name: 'Leo Jackson',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '15',
        name: 'Mia Martin',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '16',
        name: 'Noah Lee',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '17',
        name: 'Olivia Harris',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '18',
        name: 'Peter Clark',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '19',
        name: 'Quinn Lewis',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '20',
        name: 'Rachel Walker',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '21',
        name: 'Samuel Hall',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '22',
        name: 'Tina Young',
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
