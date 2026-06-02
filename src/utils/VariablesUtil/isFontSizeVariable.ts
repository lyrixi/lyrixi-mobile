import variables from './variables'

function isFontSizeVariable(size: unknown): boolean {
  return variables.fontSizes.includes(String(size))
}

export default isFontSizeVariable
