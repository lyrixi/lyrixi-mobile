import variables from './variables'

function isFontWeightVariable(weight: unknown): boolean {
  return variables.fontWeights.includes(String(weight))
}

export default isFontWeightVariable
