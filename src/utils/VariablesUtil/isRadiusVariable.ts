import variables from './variables'

function isRadiusVariable(value: unknown): boolean {
  return variables.radius.includes(String(value))
}

export default isRadiusVariable
