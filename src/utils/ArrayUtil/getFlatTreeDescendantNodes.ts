interface FlatNode extends Record<string, unknown> {
  id: string | number
  parentid?: string | number | null
}

// 根据id, 取出此id的后代节点数据, 即[{id: '', name: '', parentid: ''}]
function getFlatTreeDescendantNodes(tree: FlatNode[], id: string | number): FlatNode[] {
  const strId = String(id)
  const descendants: FlatNode[] = []

  function buildDescendants(nodes: FlatNode[], parentId: string): void {
    for (const item of nodes) {
      if (parentId && String(item['parentid']) === parentId) {
        descendants.push(item)
        buildDescendants(nodes, String(item['id']))
      }
    }
  }

  buildDescendants(tree, strId)
  return descendants
}

export default getFlatTreeDescendantNodes
