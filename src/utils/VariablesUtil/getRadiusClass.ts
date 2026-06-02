import variables from './variables'

function getRadiusClass(value: unknown): string {
  return variables.getClassName(value, variables.radius)
}

export default getRadiusClass
