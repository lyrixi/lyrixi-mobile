interface FlatNode extends Record<string, unknown> {
  id: string | number
  parentid?: string | number | null
}

// 根据id, 取出此id节点的数据, 即[{id: '', name: '', parentid: ''}]
function getFlatTreeNodes(tree: FlatNode[], filter: (node: FlatNode) => boolean): FlatNode[] {
  const result: FlatNode[] = []
  for (const node of tree) {
    if (filter(node)) {
      result.push(node)
    }
  }
  return result
}

export default getFlatTreeNodes
