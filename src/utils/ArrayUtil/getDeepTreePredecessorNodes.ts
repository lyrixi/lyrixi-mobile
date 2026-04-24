interface DeepNode extends Record<string, unknown> {
  id: string | number
  children?: DeepNode[]
}

// 取出所有先辈节点
function getDeepTreePredecessorNodes(tree: DeepNode[], id: string | number): DeepNode[] {
  const predecessorNodes: DeepNode[] = []

  function traverse(nodes: DeepNode[], targetId: string | number): boolean {
    for (const node of nodes) {
      if (node.id === targetId) {
        return true
      }
      if (Array.isArray(node.children) && node.children.length > 0) {
        if (traverse(node.children, targetId)) {
          predecessorNodes.unshift(node)
          return true
        }
      }
    }
    return false
  }

  traverse(tree, id)
  return predecessorNodes
}

export default getDeepTreePredecessorNodes
