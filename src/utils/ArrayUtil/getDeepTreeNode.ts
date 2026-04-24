interface DeepNode extends Record<string, unknown> {
  id: string | number
  children?: DeepNode[]
}

// 根据id, 取出此id节点的数据, 即{id: '', name: '', parentid: ''}
function getDeepTreeNode(tree: DeepNode[], id: string | number): DeepNode | null {
  for (const node of tree) {
    if (node.id === id) {
      return node
    }
    if (node.children) {
      const result = getDeepTreeNode(node.children, id)
      if (result) return result
    }
  }
  return null
}

export default getDeepTreeNode
