interface DeepNode extends Record<string, unknown> {
  id: string | number
  name?: unknown
  children?: DeepNode[]
}

interface FlatNode {
  id: string | number
  name?: unknown
  parentid: string | number | null
}

function flattenTree(deepTree: DeepNode[]): FlatNode[] {
  const result: FlatNode[] = []

  function traverse(nodes: DeepNode[], parentId: string | number | null = null): void {
    nodes.forEach((item) => {
      const { id, name, children = [] } = item
      result.push({ id, name, parentid: parentId })
      if (Array.isArray(children) && children.length > 0) {
        traverse(children, id)
      }
    })
  }

  traverse(deepTree)
  return result
}

export default flattenTree
