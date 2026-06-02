import variables from './variables'

function getRadiusValue(value: unknown): string {
  return variables.getValue(value, variables.radius)
}

export default getRadiusValue
