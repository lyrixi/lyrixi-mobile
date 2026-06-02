import variables from './variables'

function getHeightClass(name: string): string {
  return variables.getClassName(name, variables.heights)
}

export default getHeightClass
