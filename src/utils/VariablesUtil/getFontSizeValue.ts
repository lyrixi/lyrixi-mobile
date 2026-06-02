import variables from './variables'

function getFontSizeValue(size: unknown): string {
  return variables.getValue(size, variables.fontSizes)
}

export default getFontSizeValue
