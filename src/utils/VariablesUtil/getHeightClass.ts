import variables from './variables'

function getHeightClass(height: unknown): string {
  return variables.getClassName(height, variables.heights)
}

export default getHeightClass
