import variables from './variables'

function getFontSizeClass(name: string): string {
  return variables.getClassName(name, variables.fontSizes)
}

export default getFontSizeClass
