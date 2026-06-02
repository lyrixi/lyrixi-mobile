import variables from './variables'

function getColorValue(color: unknown): string {
  return variables.getValue(color, variables.fontColors)
}

export default getColorValue
