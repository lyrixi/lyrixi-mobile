import variables from './variables'

function getBorderColorClass(color: unknown): string {
  const value = String(color)
  if (!variables.borderColors.includes(value)) {
    return ''
  }
  return `lyrixi-border-color-${value}`
}

export default getBorderColorClass
