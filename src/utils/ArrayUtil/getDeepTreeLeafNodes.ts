interface DeepNode extends Record<string, unknown> {
  id: string | number
  children?: DeepNode[]
}

// 获取末级节点
function getDeepTreeLeafNodes(tree: DeepNode[]): DeepNode[] {
  const leafNodes: DeepNode[] = []

  function traverse(nodes: DeepNode[]): void {
    for (const node of nodes) {
      if (Array.isArray(node.children) && node.children.length > 0) {
        traverse(node.children)
      } else {
        leafNodes.push(node)
      }
    }
  }

  traverse(tree)
  return leafNodes
}

export default getDeepTreeLeafNodes
