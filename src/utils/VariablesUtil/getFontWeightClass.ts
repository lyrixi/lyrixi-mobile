import variables from './variables'

function getFontWeightClass(weight: unknown): string {
  return variables.getClassName(weight, variables.fontWeights)
}

export default getFontWeightClass
