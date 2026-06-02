import variables from './variables'

function getBorderColorValue(name: string): string {
  return variables.getValue(name, variables.borderColors)
}

export default getBorderColorValue
