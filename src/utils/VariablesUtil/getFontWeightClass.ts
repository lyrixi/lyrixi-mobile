import variables from './variables'

function getFontWeightClass(name: string): string {
  return variables.getClassName(name, variables.fontWeights)
}

export default getFontWeightClass
