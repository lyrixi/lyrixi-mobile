interface DeepNode extends Record<string, unknown> {
  id: string | number
  children?: DeepNode[]
}

// Recurse tree, set node
function setDeepTreeNodes(
  tree: DeepNode[],
  updateNode?: (node: DeepNode) => void
): DeepNode[] {
  for (const node of tree) {
    updateNode && updateNode(node)
    if (Array.isArray(node.children) && node.children.length) {
      setDeepTreeNodes(node.children, updateNode)
    }
  }
  return tree
}

export default setDeepTreeNodes
