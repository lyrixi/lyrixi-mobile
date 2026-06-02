import variables from './variables'

function getHeightValue(height: unknown): string {
  return variables.getValue(height, variables.heights)
}

export default getHeightValue
