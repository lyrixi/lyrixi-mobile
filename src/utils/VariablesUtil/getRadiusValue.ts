import variables from './variables'

function getRadiusValue(name: string): string {
  return variables.getValue(name, variables.radius)
}

export default getRadiusValue
