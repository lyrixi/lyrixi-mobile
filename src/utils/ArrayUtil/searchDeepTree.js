/**
 * 在树形结构中搜索包含关键字的节点，并返回匹配节点及其完整路径
 * @param {Array} deepTree - 树形结构数据
 * @param {string} keyword - 搜索关键字
 * @returns {Array} 返回格式：[{id: '', name: '', parentid: '', value: [{id: '', name: '', parentid: ''}...]}]
 * 其中value是从祖级节点到当前节点的完整路径
 */
export function searchTree(
  deepTree,
  keyword,
  {
    // results过滤children, 不然数据体太大了
    noChildren = true,
    // results的value过滤children
    valueFiledNoChildren = true
  } = {}
) {
  if (!Array.isArray(deepTree) || !keyword || typeof keyword !== 'string') {
    return []
  }

  const results = []
  // eslint-disable-next-line
  keyword = keyword.trim()

  if (!keyword) {
    return []
  }

  /**
   * 递归遍历树结构，搜索匹配的节点
   * @param {Array} nodes - 当前层级的节点数组
   * @param {Array} path - 从根节点到当前层级的路径
   */
  function traverse(nodes, path = []) {
    if (!Array.isArray(nodes)) return

    for (const node of nodes) {
      if (!node || typeof node !== 'object') continue

      // 构建当前节点的路径项, 过滤掉children, 不然路径数据太大了
      const { children, ...nodeRest } = node
      const currentNode = valueFiledNoChildren
        ? {
            ...nodeRest
          }
        : { ...node }

      // 更新路径：添加当前节点
      const currentPath = [...path, currentNode]

      // 检查当前节点的name是否包含关键字
      if (node.name && String(node.name).includes(keyword)) {
        // 创建匹配结果项
        const resultItem = noChildren
          ? {
              ...nodeRest,
              value: currentPath
            }
          : {
              ...node,
              value: currentPath
            }
        results.push(resultItem)
      }

      // 递归搜索子节点
      if (Array.isArray(node.children) && node.children.length > 0) {
        traverse(node.children, currentPath)
      }
    }
  }

  // 开始遍历
  traverse(deepTree)

  return results
}

export default searchTree
