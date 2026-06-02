import variables from './variables'

function isColorVariable(color: unknown): boolean {
  return variables.fontColors.includes(String(color))
}

export default isColorVariable
