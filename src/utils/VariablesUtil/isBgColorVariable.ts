import variables from './variables'

function isBgColorVariable(color: unknown): boolean {
  return variables.bgColors.includes(String(color))
}

export default isBgColorVariable
