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
      },
      {
        id: '23',
        name: 'Ursula King',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '24',
        name: 'Victor Wright',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '25',
        name: 'Wendy Lopez',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '26',
        name: 'Xavier Hill',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '27',
        name: 'Yolanda Scott',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '28',
        name: 'Zachary Green',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '29',
        name: 'Amy Adams',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '30',
        name: 'Brian Baker',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '31',
        name: 'Catherine Nelson',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '32',
        name: 'Daniel Carter',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '33',
        name: 'Emily Mitchell',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '34',
        name: 'Frederick Perez',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '35',
        name: 'Georgia Roberts',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '36',
        name: 'Harold Turner',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '37',
        name: 'Iris Phillips',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '38',
        name: 'James Campbell',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '39',
        name: 'Kelly Parker',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '40',
        name: 'Louis Evans',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '41',
        name: 'Monica Edwards',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '42',
        name: 'Nathan Collins',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '43',
        name: 'Ophelia Stewart',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '44',
        name: 'Patrick Sanchez',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '45',
        name: 'Queenie Morris',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '46',
        name: 'Raymond Rogers',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '47',
        name: 'Sophia Reed',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '48',
        name: 'Theodore Cook',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '49',
        name: 'Uma Morgan',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      },
      {
        id: '50',
        name: 'Vincent Bell',
        description: 'This is a description',
        avatarUrl: 'https://lyrixi.github.io/lyrixi-mobile/assets/images/list/avatar-default.png'
      }
    ],
    totalPage: 1
  }
}

export default mockResult
