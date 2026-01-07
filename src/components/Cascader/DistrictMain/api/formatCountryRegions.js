/**
 * 根据节点的 nature 字段为行政区划树设置类型标记
 * 规则：
 * - 省：type = ['province'] → nature ∈ {11,12,14}
 * - 市：type = ['city'] → nature ∈ {21,22,23,24}
 * - 区/县：type = ['district'] → nature ∈ {31,32,33,34,35,36,37,38,39}
 * - 直筒子市：type = ['city', 'prefecture'] → nature = 25
 * - 直辖市：type = ['province', 'city', 'municipality'] → nature = 13
 * -（可选）街道/乡镇：type = ['street'] → nature ∈ {41,42,43,44,45,46,47}
 * @param {Array} tree
 * @returns {Array|null|String}
 */
function formatCountryRegions(tree, countryId) {
  // 补充parentId
  for (let item of tree) {
    item.parentid = countryId
  }

  const provinceNatures = new Set([11, 12, 14])
  const municipalityNature = 13
  const cityNatures = new Set([21, 22, 23, 24])
  const prefectureNature = 25
  const districtNatures = new Set([31, 32, 33, 34, 35, 36, 37, 38, 39])
  const streetNatures = new Set([41, 42, 43, 44, 45, 46, 47])

  function getTypesByNature(nature) {
    const code = Number(nature)
    if (!Number.isFinite(code)) return undefined

    if (code === municipalityNature) return ['province', 'city', 'municipality']
    if (code === prefectureNature) return ['city', 'prefecture']
    if (provinceNatures.has(code)) return ['province']
    if (cityNatures.has(code)) return ['city']
    if (districtNatures.has(code)) return ['district']
    if (streetNatures.has(code)) return ['street']
    return undefined
  }

  // 递归为node增加type
  function addNodeType(nodes) {
    if (!Array.isArray(nodes)) return nodes
    return nodes.map((node) => {
      // 删除anchor字段, 不删除会出现divider
      if ('anchor' in node) {
        delete node.anchor
      }
      const types = getTypesByNature(node?.nature)
      if (types && Array.isArray(types)) {
        node.type = types
      }

      node.children = addNodeType(node.children)
      return node
    })
  }

  return addNodeType(tree)
}

export default formatCountryRegions
