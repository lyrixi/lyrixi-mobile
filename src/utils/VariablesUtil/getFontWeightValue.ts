import variables from './variables'

function getFontWeightValue(weight: unknown): string {
  return variables.getValue(weight, variables.fontWeights)
}

export default getFontWeightValue
