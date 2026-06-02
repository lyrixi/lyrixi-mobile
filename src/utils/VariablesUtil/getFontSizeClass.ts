import variables from './variables'

function getFontSizeClass(size: unknown): string {
  return variables.getClassName(size, variables.fontSizes)
}

export default getFontSizeClass
