import variables from './variables'

function getFontWeightClass(weight: unknown): string {
  const value = String(weight)
  if (!variables.fontWeights.includes(value)) {
    return ''
  }
  return `lyrixi-font-weight-${value}`
}

export default getFontWeightClass
