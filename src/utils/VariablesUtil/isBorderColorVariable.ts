import variables from './variables'

function isBorderColorVariable(color: unknown): boolean {
  return variables.borderColors.includes(String(color))
}

export default isBorderColorVariable
