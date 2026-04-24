import getFlatTreeNode from './getFlatTreeNode'

interface FlatNode extends Record<string, unknown> {
  id: string | number
  parentid?: string | number | null
}

// 根据id, 取出此id的父级节点
function getFlatTreeParentNode(tree: FlatNode[], id: string | number): FlatNode | null {
  const parentId = getFlatTreeNode(tree, id)?.parentid
  if (parentId != null) {
    return getFlatTreeNode(tree, parentId as string | number)
  }
  return null
}

export default getFlatTreeParentNode
