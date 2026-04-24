interface DeepNode extends Record<string, unknown> {
  id: string | number
  children?: DeepNode[]
}

// 获取指定节点
function getDeepTreeNodes(tree: DeepNode[], filter: (node: DeepNode) => boolean): DeepNode[] {
  const result: DeepNode[] = []

  function traverse(nodes: DeepNode[]): void {
    for (const node of nodes) {
      if (filter(node)) {
        result.push(node)
      }
      if (Array.isArray(node.children) && node.children.length) {
        traverse(node.children)
      }
    }
  }

  traverse(tree)
  return result
}

export default getDeepTreeNodes
