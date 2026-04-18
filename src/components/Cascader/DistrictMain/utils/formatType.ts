function formatType(type) {
  if (['country', 'province', 'city', 'district', 'street'].includes(type)) {
    return type
  }
  console.error(`lyrixi Cascader: ${type} is not a valid type`)
  return 'street'
}

export default formatType
