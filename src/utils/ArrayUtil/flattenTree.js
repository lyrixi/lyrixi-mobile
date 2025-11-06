function flattenTree(deepTree) {
  const result = []

  function traverse(node, parentId = null) {
    node.forEach((item) => {
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
