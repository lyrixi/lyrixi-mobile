import variables from './variables'

function isColorVariable(color: unknown): boolean {
  return variables.colors.includes(String(color))
}

export default isColorVariable
