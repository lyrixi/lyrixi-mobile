import variables from './variables'

function getBorderColorValue(color: unknown): string {
  return variables.getValue(color, variables.borderColors)
}

export default getBorderColorValue
