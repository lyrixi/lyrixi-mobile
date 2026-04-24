interface DeepNode extends Record<string, unknown> {
  id: string | number
  parentid?: string | number | null
  children?: DeepNode[]
}

function updateDeepTreeParentId(tree: DeepNode[], parentid: string | number | null = null): DeepNode[] {
  if (!Array.isArray(tree) || !tree.length) return tree

  for (const node of tree) {
    node.parentid = parentid
    if (Array.isArray(node.children) && node.children.length) {
      updateDeepTreeParentId(node.children, node.id)
    }
  }
  return tree
}

export default updateDeepTreeParentId
