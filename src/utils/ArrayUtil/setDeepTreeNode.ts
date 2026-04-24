interface DeepNode extends Record<string, unknown> {
  id: string | number
  children?: DeepNode[]
}

function setDeepTreeNode(tree: DeepNode[], id: string | number, updateNode?: (node: DeepNode) => void): DeepNode[] {
  for (const node of tree) {
    if (node.id === id) {
      updateNode && updateNode(node)
      break
    }
    if (Array.isArray(node.children) && node.children.length) {
      setDeepTreeNode(node.children, id, updateNode)
    }
  }
  return tree
}

export default setDeepTreeNode
