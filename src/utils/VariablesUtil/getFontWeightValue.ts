import variables from './variables'

function getFontWeightValue(name: string): string {
  return variables.getValue(name, variables.fontWeights)
}

export default getFontWeightValue
