import variables from './variables'

function getBgColorClass(color: unknown): string {
  const value = String(color)
  if (!variables.bgColors.includes(value)) {
    return ''
  }
  return `lyrixi-bg-${value}`
}

export default getBgColorClass
