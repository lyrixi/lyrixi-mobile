import variables from './variables'

function getFontSizeValue(name: string): string {
  return variables.getValue(name, variables.fontSizes)
}

export default getFontSizeValue
