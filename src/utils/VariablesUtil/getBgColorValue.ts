import variables from './variables'

function getBgColorValue(color: unknown): string {
  return variables.getValue(color, variables.bgColors)
}

export default getBgColorValue
