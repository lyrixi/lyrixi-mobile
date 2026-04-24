interface FlatNode extends Record<string, unknown> {
  id: string | number
  parentid?: string | number | null
}

function getFlatTreePredecessorNodes(tree: FlatNode[], id: string | number): FlatNode[] {
  const result: FlatNode[] = []

  const nodeMap: Record<string | number, FlatNode> = {}
  tree.forEach((node) => {
    nodeMap[node.id] = node
  })

  let currentNode: FlatNode | undefined = nodeMap[id]
  while (currentNode && currentNode['parentid'] != null) {
    const parentNode: FlatNode | undefined = nodeMap[currentNode['parentid'] as string | number]
    if (parentNode) {
      result.unshift(parentNode)
      currentNode = parentNode
    } else {
      break
    }
  }

  return result
}

export default getFlatTreePredecessorNodes
