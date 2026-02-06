// 分组列表数据：一级为 group 标题，children 为子级列表项
export default [
  {
    id: 'group-a',
    title: 'A 组',
    description: '分组 A 的说明',
    children: [
      { id: 'a1', name: '阿尔巴尼亚', description: '子项 a1' },
      { id: 'a2', name: '阿尔及利亚', description: '子项 a2' },
      { id: 'a3', name: '阿富汗', description: '子项 a3' }
    ]
  },
  {
    id: 'group-b',
    title: 'B 组',
    description: '分组 B 的说明',
    children: [
      { id: 'b1', name: '巴巴多斯', description: '子项 b1' },
      { id: 'b2', name: '巴哈马', description: '子项 b2' },
      { id: 'b3', name: '白俄罗斯', description: '子项 b3' }
    ]
  },
  {
    id: 'group-c',
    title: 'C 组',
    children: [
      { id: 'c1', name: '朝鲜', description: '子项 c1' },
      { id: 'c2', name: '赤道几内亚', description: '子项 c2' }
    ]
  }
]
