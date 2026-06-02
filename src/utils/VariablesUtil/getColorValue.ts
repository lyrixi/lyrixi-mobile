import variables from './variables'

function getColorValue(name: string): string {
  return variables.getValue(name, variables.fontColors)
}

export default getColorValue
