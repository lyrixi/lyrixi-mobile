interface DeepNode extends Record<string, unknown> {
  id: string | number
  children?: DeepNode[]
}

// 更新末级节点
function setDeepTreeLeafNode(
  tree: DeepNode[],
  updateNode?: (node: DeepNode) => void
): DeepNode[] {
  for (const node of tree) {
    if (Array.isArray(node.children) && node.children.length) {
      setDeepTreeLeafNode(node.children, updateNode)
    } else {
      updateNode && updateNode(node)
    }
  }
  return tree
}

export default setDeepTreeLeafNode
