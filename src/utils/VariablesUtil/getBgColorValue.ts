import variables from './variables'

function getBgColorValue(name: string): string {
  return variables.getValue(name, variables.bgColors)
}

export default getBgColorValue
