import variables from './variables'

function getHeightValue(name: string): string {
  return variables.getValue(name, variables.heights)
}

export default getHeightValue
