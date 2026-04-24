export type DistrictType = 'country' | 'province' | 'city' | 'district' | 'street'

function formatType(type: string): DistrictType {
  if (['country', 'province', 'city', 'district', 'street'].includes(type)) {
    return type as DistrictType
  }
  console.error(`lyrixi Cascader: ${type} is not a valid type`)
  return 'street'
}

export default formatType
