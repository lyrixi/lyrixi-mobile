import variables from './variables'

function getRadiusClass(name: string): string {
  return variables.getClassName(name, variables.radius)
}

export default getRadiusClass
