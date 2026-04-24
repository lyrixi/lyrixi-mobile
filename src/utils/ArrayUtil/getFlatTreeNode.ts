interface FlatNode extends Record<string, unknown> {
  id: string | number
  parentid?: string | number | null
}

// 根据id, 取出此id节点的数据, 即{id: '', name: '', parentid: ''}
function getFlatTreeNode(tree: FlatNode[], id: string | number): FlatNode | null {
  for (const node of tree) {
    if (node.id === id) {
      return node
    }
  }
  return null
}

export default getFlatTreeNode
