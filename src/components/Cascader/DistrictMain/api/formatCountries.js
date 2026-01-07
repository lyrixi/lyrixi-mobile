function formatCountries(result) {
  if (!Array.isArray(result?.list) || result?.list.length === 0) return result

  result.list = result.list.map((node) => {
    node.type = ['country']
    return node
  })
  return result
}

export default formatCountries
