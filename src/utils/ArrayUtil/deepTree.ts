interface FlatNode extends Record<string, unknown> {
  id: string | number
  parentid?: string | number | null
}

interface DeepNode extends Record<string, unknown> {
  id: string | number
  parentid?: string | number | null
  children?: DeepNode[]
}

/* -----------------------------------------------------
  树数据深度化, 将树的parentid深度为children, 必须有id和parentid
  @格式 [{id: '', name: '', parentid: ''}, {id: '', name: '', parentid: ''}]
  @return [{id: '', name: '', children: {}}]
 ----------------------------------------------------- */
function deepTree(flattenTree: FlatNode[]): DeepNode[] {
  if (!Array.isArray(flattenTree) || !flattenTree.length) {
    return []
  }

  const idMap: Record<string | number, DeepNode> = {}
  const result: DeepNode[] = []

  flattenTree.forEach((node) => {
    idMap[node.id] = { ...node }
  })

  flattenTree.forEach((node) => {
    if (node.parentid != null && idMap[node.parentid]) {
      if (!idMap[node.parentid].children) idMap[node.parentid].children = []
      idMap[node.parentid].children!.push(idMap[node.id])
    } else {
      result.push(idMap[node.id])
    }
  })

  return result
}

export default deepTree
