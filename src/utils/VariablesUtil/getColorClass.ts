import variables from './variables'

function getColorClass(color: unknown): string {
  const value = String(color)
  if (!variables.fontColors.includes(value)) {
    return ''
  }
  return `lyrixi-color-${value}`
}

export default getColorClass
