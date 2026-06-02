import variables from './variables'

function getFontSizeClass(size: unknown): string {
  const value = String(size)
  if (!variables.fontSizes.includes(value)) {
    return ''
  }
  return `lyrixi-font-size-${value}`
}

export default getFontSizeClass
