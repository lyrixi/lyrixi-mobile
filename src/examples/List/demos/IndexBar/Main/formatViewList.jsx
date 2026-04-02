// 将列表数据按照 anchor 字段分组
function formatViewList(list) {
  if (!Array.isArray(list) || list.length === 0) {
    return []
  }

  // 使用 Map 来按 anchor 分组
  const groupMap = new Map()

  list.forEach((item) => {
    const anchor = item.anchor
    if (anchor) {
      if (!groupMap.has(anchor)) {
        groupMap.set(anchor, {
          title: anchor,
          anchor: anchor,
          children: []
        })
      }
      groupMap.get(anchor).children.push({
        // 原始数据(必传, ListAsync会自动增加_raw字段存储list入参的item的原始数据)
        _raw: item._raw,
        // 唯一标识(必传)
        id: item.id,
        // 左侧图片
        imageUrl: item.imageUrl || '',
        // 头像
        avatarUrl: item.avatarUrl || '',
        // 第一行文字
        title: item.name,
        // 第二行文字
        description: item.introduce,
        // 第一行右上角文字
        note: item.note,
        // 第三行文字
        content: item.content,
        // 右侧操作按钮
        actionRender: (item) => {
          return <div>Click {item.name}</div>
        }
      })
    }
  })

  console.log(groupMap)
  // 将 Map 转换为数组，并按 anchor 字母顺序排序
  return Array.from(groupMap.values()).sort((a, b) => {
    return a.anchor.localeCompare(b.anchor)
  })
}

export default formatViewList
